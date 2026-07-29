import type { DetailPage, DetailSection } from "../detail-sections";

/**
 * A solution detail page. The shape is shared with the industry pages — see
 * `@/data/detail-sections` for why the middle of the page is an ordered list
 * of sections rather than a fixed template.
 */
export type SolutionDetail = DetailPage;

export type SolutionSection = DetailSection;

export type { DetailCtaLink as SolutionCta } from "../detail-sections";
