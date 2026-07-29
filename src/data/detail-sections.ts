import type { JourneyFlowData } from "./journey";

/**
 * The shape every solution and industry detail page shares.
 *
 * The frames agree on a hero and a closing banner but not on the middle: some
 * close with business outcomes, some run an audience grid before their flow,
 * the wallet frame puts its journey *above* the rows and the travel frame ends
 * on a two-tone statement. So the middle of a page is an ordered list of
 * sections rather than a fixed template.
 */
export type DetailPage = {
  slug: string;

  metadata: {
    title: string;
    description: string;
  };

  hero: DetailHero;

  /** Frame order, top to bottom. */
  sections: DetailSection[];

  cta: DetailCta;
};

export type DetailHero = {
  /** 64px brand-blue page name that sits above the statement. */
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  primaryCta: DetailCtaLink;
  secondaryCta: DetailCtaLink;
  /** Frame measures — every hero plate is a slightly different height. */
  metrics: {
    minHeight: number;
    paddingTop: number;
    paddingBottom: number;
    bodyGap: number;
    ctaGap: number;
    primaryWidth: number;
    secondaryWidth: number;
    buttonGap?: number;
  };
};

export type DetailCtaLink = {
  label: string;
  href: string;
};

export type DetailCta = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  /** The travel frame closes on two buttons rather than one. */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Plate artwork: the frames use either the arcs or the slats. */
  image: string;
  headingMeasure: string;
  bodyMeasure: string;
  paddingTop: string;
  paddingBottom: string;
  bodyGap: string;
  spacingBottom: string;
};

export type DetailSection =
  | {
      kind: "features";
      /** Omitted on the second half of a split rows block. */
      overview?: {
        label: string;
        heading: string;
        body?: string;
      };
      items?: { title: string; body: string; image?: string }[];
      metrics?: {
        paddingTop?: number;
        rowsGap?: number;
        /** Heading column width — 649 on most frames, 694 on the industry ones. */
        headingMeasure?: number;
      };
    }
  | {
      kind: "journey";
      journey: JourneyFlowData;
      metrics?: { paddingTop?: number; paddingBottom?: number };
    }
  | {
      kind: "cards";
      label: string;
      items: { title: string; body: string }[];
      ruled?: boolean;
      metrics?: {
        paddingTop?: number;
        ruleGap?: number;
        labelGap?: number;
        rowGap?: number;
        cardMinHeight?: number;
        paddingBottom?: number;
      };
    }
  /** The 3px full-bleed divider some frames set between two blocks. */
  | { kind: "rule"; paddingTop?: number; paddingBottom?: number }
  /** A standalone paragraph — the programme-launch frame's closing caveat. */
  | { kind: "note"; body: string; paddingTop?: number; paddingBottom?: number }
  /**
   * Heading over a two-tone paragraph, as the travel frame closes: brand blue
   * up to the break, then the frame's grey.
   */
  | {
      kind: "statement";
      heading: string;
      lead: string;
      trail: string;
      metrics?: {
        paddingTop?: number;
        paddingBottom?: number;
        headingMeasure?: number;
        bodyGap?: number;
        bodyMeasure?: number;
      };
    };
