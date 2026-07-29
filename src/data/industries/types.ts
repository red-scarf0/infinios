import type { DetailPage, DetailSection } from "../detail-sections";

/**
 * An industry detail page. Same shape as the solution pages — see
 * `@/data/detail-sections` for why the middle of the page is an ordered list
 * of sections rather than a fixed template.
 */
export type IndustryDetail = DetailPage;

export type IndustrySection = DetailSection;
