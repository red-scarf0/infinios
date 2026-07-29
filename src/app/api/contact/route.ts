import { NextResponse } from "next/server";

import {
  normaliseEnquiry,
  validateEnquiry,
  type ContactEnquiry,
} from "@/lib/contact";
import { MailNotConfiguredError, sendEnquiry } from "@/lib/mailer";

/** nodemailer needs the Node runtime, not the edge one. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

  try {
    await sendEnquiry(normaliseEnquiry(payload as ContactEnquiry));
  } catch (error) {
    // The reason stays in the server log; the client gets a plain message.
    console.error("[contact] enquiry delivery failed", error);
    const status = error instanceof MailNotConfiguredError ? 503 : 502;
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your enquiry just now. Please try again, or email sales@infinios.com directly.",
      },
      { status },
    );
  }

  return NextResponse.json({ ok: true });
}
