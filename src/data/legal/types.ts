/**
 * Legal and information pages (privacy policy, terms of use, security).
 *
 * These pages are transcriptions of approved documents, so the content is
 * held as data rather than as JSX: the wording is the deliverable and must
 * stay legible and diffable against the source document. The renderer in
 * `@/components/legal/legal-page` decides how each block is drawn.
 */

/** A bullet whose lead-in term is emphasised — the security principles. */
export type LegalTerm = { term: string; text: string };

export type LegalBlock =
  /** Section heading — an `<h2>` within the page. */
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  /** Unordered list, for the source document's bulleted lists. */
  | { type: "bullets"; items: string[] }
  /** Decimal-numbered clauses; the source numbering is preserved. */
  | { type: "clauses"; items: string[] }
  | { type: "terms"; items: LegalTerm[] }
  /** Closing contact block — entity, email and registered address. */
  | { type: "contact"; name: string; email: string; address: string };

export type LegalDocument = {
  /** The `<h1>`, drawn in the page's title band. */
  title: string;
  blocks: LegalBlock[];
};
