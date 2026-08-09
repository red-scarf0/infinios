import { Resend } from "resend";

import type { ContactEnquiry } from "./contact";

/**
 * Outbound mail for the contact form, delivered through Resend.
 *
 * Imported only by the route handler, so the API key never reaches a client
 * bundle. The key is read at call time rather than at module load, so a build
 * without the variable still succeeds and a serverless instance never caches a
 * half-configured client.
 *
 * Required environment (see .env.example):
 *   RESEND_API_KEY
 * Optional:
 *   CONTACT_FROM_EMAIL a sender on the verified website.infinios.com domain;
 *                      defaults to noreply@website.infinios.com
 *   CONTACT_TO_EMAIL   defaults to sales@infinios.com
 */

const DEFAULT_RECIPIENT = "sales@infinios.com";
const DEFAULT_SENDER = "noreply@website.infinios.com";

/** Where enquiries land. */
export function contactRecipient(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_RECIPIENT;
}

/**
 * The sender. Must be an address on website.infinios.com, the domain verified
 * in Resend — the shared onboarding@resend.dev sender only delivers to the
 * account owner and is not usable in production.
 */
function sender(): string {
  const address = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_SENDER;
  return `INFINIOS Website <${address}>`;
}

/** Thrown when Resend has not been configured for this deploy. */
export class MailNotConfiguredError extends Error {
  constructor(missing: string) {
    super(`Resend is not configured. Missing: ${missing}`);
    this.name = "MailNotConfiguredError";
  }
}

/**
 * Thrown when Resend answered but did not accept the message.
 *
 * The SDK does not throw on an API error — it resolves with `{ data: null,
 * error }`. Turning that into an exception is what stops a rejected enquiry
 * from being reported to the visitor as sent.
 */
export class MailRejectedError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(`Resend rejected the message (${code}): ${message}`);
    this.name = "MailRejectedError";
    this.code = code;
  }
}

let cached: { key: string; client: Resend } | null = null;

function client(): Resend {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) throw new MailNotConfiguredError("RESEND_API_KEY");

  // Rebuild if the key changed under us; otherwise reuse for this instance.
  if (cached?.key === key) return cached.client;
  const created = new Resend(key);
  cached = { key, client: created };
  return created;
}

const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

/*
 * Site palette, inlined. Mail clients strip <style> blocks and know nothing of
 * Tailwind, so the brand has to travel on each element.
 */
const NAVY = "#061b3a";
const INK = "#10284d";
const MUTED = "#63728a";
const BRAND = "#2563ff";
const HAIRLINE = "#e4e9f2";

/** Builds the branded HTML body. */
function renderHtml(enquiry: ContactEnquiry, rows: [string, string][]): string {
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 20px 10px 0;font:600 13px/1.4 Arial,Helvetica,sans-serif;color:${MUTED};white-space:nowrap;vertical-align:top;border-bottom:1px solid ${HAIRLINE}">${escape(label)}</td>
          <td style="padding:10px 0;font:14px/1.5 Arial,Helvetica,sans-serif;color:${INK};vertical-align:top;border-bottom:1px solid ${HAIRLINE}"><strong>${escape(value)}</strong></td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f6fb">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;margin:0 auto;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid ${HAIRLINE};border-radius:14px;overflow:hidden">
      <tr>
        <td style="padding:24px 32px;background:${NAVY}">
          <div style="font:700 18px/1.2 Arial,Helvetica,sans-serif;color:#ffffff;letter-spacing:1.5px">INFINIOS</div>
          <div style="margin-top:6px;font:13px/1.4 Arial,Helvetica,sans-serif;color:rgba(255,255,255,0.72)">New website enquiry</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px 8px">
          <h1 style="margin:0 0 4px;font:700 20px/1.3 Arial,Helvetica,sans-serif;color:${NAVY}">${escape(enquiry.interest)}</h1>
          <p style="margin:0 0 18px;font:14px/1.5 Arial,Helvetica,sans-serif;color:${MUTED}">Submitted through the Contact Us form on the INFINIOS website.</p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">${cells}</table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px 28px">
          <p style="margin:0 0 8px;font:600 13px/1.4 Arial,Helvetica,sans-serif;color:${MUTED}">Message</p>
          <div style="padding:16px 18px;background:#f7f9fd;border-left:3px solid ${BRAND};border-radius:8px;font:14px/1.65 Arial,Helvetica,sans-serif;color:${INK};white-space:pre-wrap">${escape(enquiry.message)}</div>
          <p style="margin:20px 0 0;font:13px/1.5 Arial,Helvetica,sans-serif;color:${MUTED}">Reply directly to this email to reach ${escape(enquiry.firstName)} at <a href="mailto:${escape(enquiry.email)}" style="color:${BRAND};text-decoration:none">${escape(enquiry.email)}</a>.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 32px;background:#f7f9fd;border-top:1px solid ${HAIRLINE};font:12px/1.5 Arial,Helvetica,sans-serif;color:${MUTED}">
          Automated message from the INFINIOS website. Please do not reply to the sender address.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/**
 * Sends one enquiry to the sales inbox.
 *
 * Resolves only once Resend has accepted the message and returned an id. Any
 * other outcome — no API key, an API error, a missing id, a network failure —
 * throws, so the route can never report a delivery that did not happen.
 */
export async function sendEnquiry(enquiry: ContactEnquiry): Promise<string> {
  const to = contactRecipient();

  const rows: [string, string][] = [
    ["First Name", enquiry.firstName],
    ["Last Name", enquiry.lastName],
    ["Work Email", enquiry.email],
    ["Company", enquiry.company],
    ["Interested in", enquiry.interest],
  ];

  const text = [
    "New INFINIOS website enquiry",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    enquiry.message,
    "",
    "—",
    "Submitted through the Contact Us form on the INFINIOS website.",
  ].join("\n");

  const { data, error } = await client().emails.send({
    from: sender(),
    to: [to],
    replyTo: `${enquiry.firstName} ${enquiry.lastName} <${enquiry.email}>`,
    subject: `New INFINIOS Website Enquiry — ${enquiry.interest}`,
    text,
    html: renderHtml(enquiry, rows),
  });

  // The SDK reports API failures in `error` rather than by throwing, so an
  // un-inspected result would look identical to a success.
  if (error) throw new MailRejectedError(error.name, error.message);
  if (!data?.id) throw new MailRejectedError("no_id", "Resend returned no id.");

  return data.id;
}
