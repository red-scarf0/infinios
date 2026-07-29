import nodemailer, { type Transporter } from "nodemailer";

import type { ContactEnquiry } from "./contact";

/**
 * Outbound mail for the contact form.
 *
 * Deliberately provider-neutral: this speaks SMTP, so the credentials decide
 * who actually delivers the message (Microsoft 365, Google Workspace, SES,
 * Postmark, anything). Nothing here is specific to one vendor. It is imported
 * only by the route handler, so the credentials never reach a client bundle.
 *
 * Required environment (see .env.example):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
 * Optional:
 *   SMTP_SECURE       "true" to force TLS on connect; defaults to port === 465
 *   CONTACT_TO_EMAIL  defaults to sales@infinios.com
 *   CONTACT_FROM_EMAIL defaults to SMTP_USER
 */

export const CONTACT_RECIPIENT =
  process.env.CONTACT_TO_EMAIL ?? "sales@infinios.com";

/** Thrown when the mail transport has not been configured for this deploy. */
export class MailNotConfiguredError extends Error {
  constructor(missing: string[]) {
    super(`Mail transport is not configured. Missing: ${missing.join(", ")}`);
    this.name = "MailNotConfiguredError";
  }
}

let cached: Transporter | null = null;

function transport(): Transporter {
  if (cached) return cached;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } =
    process.env;

  const missing = Object.entries({
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) throw new MailNotConfiguredError(missing);

  const port = Number(SMTP_PORT);
  cached = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER as string, pass: SMTP_PASSWORD as string },
  });
  return cached;
}

const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

/** Sends one enquiry to the sales inbox. Throws if delivery fails. */
export async function sendEnquiry(enquiry: ContactEnquiry): Promise<void> {
  const rows: [string, string][] = [
    ["Name", `${enquiry.firstName} ${enquiry.lastName}`],
    ["Work email", enquiry.email],
    ["Company", enquiry.company],
    ["Interested in", enquiry.interest],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  const html = [
    `<h2 style="font:600 18px system-ui,sans-serif;color:#10284d">New enquiry from the INFINIOS website</h2>`,
    `<table style="font:14px system-ui,sans-serif;color:#10284d;border-collapse:collapse">`,
    ...rows.map(
      ([k, v]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#63728a">${k}</td><td style="padding:4px 0"><strong>${escape(v)}</strong></td></tr>`,
    ),
    `</table>`,
    `<p style="font:14px system-ui,sans-serif;color:#63728a;margin:16px 0 4px">Message</p>`,
    `<p style="font:14px/1.6 system-ui,sans-serif;color:#10284d;white-space:pre-wrap;margin:0">${escape(enquiry.message)}</p>`,
  ].join("");

  await transport().sendMail({
    to: CONTACT_RECIPIENT,
    from: process.env.CONTACT_FROM_EMAIL ?? (process.env.SMTP_USER as string),
    replyTo: `${enquiry.firstName} ${enquiry.lastName} <${enquiry.email}>`,
    subject: `Website enquiry — ${enquiry.company} (${enquiry.interest})`,
    text,
    html,
  });
}
