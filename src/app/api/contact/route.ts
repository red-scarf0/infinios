import { NextResponse } from "next/server";

import {
  normaliseEnquiry,
  validateEnquiry,
  type ContactEnquiry,
} from "@/lib/contact";
import {
  contactRecipient,
  MailNotConfiguredError,
  sendEnquiry,
} from "@/lib/mailer";

/** The Resend call is server-only; the API key must never reach the edge cache. */
export const runtime = "nodejs";
/** Never prerendered or cached: every POST must reach Resend. */
export const dynamic = "force-dynamic";
/** Room for a slow Resend API call rather than a platform timeout with no body. */
export const maxDuration = 15;

/**
 * A small in-process throttle. Enough to stop a stuck client or a casual
 * script from hammering the inbox; real abuse protection belongs at the edge.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function throttled(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 500) {
    for (const [k, v] of recent)
      if (!v.some((t) => now - t < WINDOW_MS)) recent.delete(k);
  }
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let payload: Partial<ContactEnquiry>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Send a JSON body." },
      { status: 400 },
    );
  }

  const errors = validateEnquiry(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const key =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (throttled(key)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many enquiries just now. Please try again shortly.",
      },
      { status: 429 },
    );
  }

  // Only reached once Resend has accepted the message and returned an id;
  // sendEnquiry throws on every other outcome, so success is never a guess.
  try {
    await sendEnquiry(normaliseEnquiry(payload as ContactEnquiry));
  } catch (error) {
    // The reason stays in the server log; the client gets a plain message with
    // no API key, provider name, or internal detail in it.
    console.error("[contact] enquiry delivery failed", error);
    const status = error instanceof MailNotConfiguredError ? 503 : 502;
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your enquiry just now. Please try again, or email ${contactRecipient()} directly.`,
      },
      { status },
    );
  }

  return NextResponse.json({ ok: true });
}
