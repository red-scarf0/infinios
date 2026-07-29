/**
 * Shape of a product detail page.
 *
 * The five product frames are the same composition end to end — hero, overview,
 * six feature rows, a six-step journey, three outcome cards and the closing
 * banner — so every page supplies one of these and shares the template in
 * `@/components/products/detail`.
 */
export type ProductDetail = {
  slug: string;

  metadata: {
    title: string;
    description: string;
  };

  hero: {
    /** 64px brand-blue page name that sits above the statement. */
    eyebrow: string;
    heading: string;
    body: string;
    /** Artwork only — the frame's text and CTAs are rendered live over it. */
    image: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };

  overview: {
    /** Uppercase eyebrow — "CARD ISSUING", "DIGITAL WALLETS", ... */
    label: string;
    heading: string;
    body: string;
  };

  /** Six ruled rows: thumbnail, title, supporting copy. */
  features: ProductFeature[];

  journey: ProgrammeJourneyData;

  outcomes: {
    label: string;
    items: { title: string; body: string }[];
  };

  cta: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export type Cta = {
  label: string;
  href: string;
};

export type ProductFeature = {
  title: string;
  body: string;
  image: string;
};

/**
 * The journey is laid out from the frame's own coordinates rather than from a
 * flex or grid rhythm — the six pills are hand-placed in Figma and no uniform
 * spacing reproduces them. Every `x`/`y` below is a frame coordinate, read
 * straight off the design; the component translates them against the frame's
 * content gutter so each step lands exactly where it was drawn.
 */
export type ProgrammeJourneyData = {
  /** "PROGRAMME JOURNEY" on the issuing/wallet frames, "TRANSACTION FLOW" elsewhere. */
  label: string;
  /** Six steps — the frame arranges them as two rows of three. */
  steps: JourneyStep[];
  /** The four dashed arrows, in frame order: 1→2, 2→3, 4→5, 5→6. */
  connectors: JourneyConnector[];
};

export type JourneyStep = {
  label: string;
  /** Line icon, painted through a CSS mask so it can carry the hover colour. */
  icon: string;
  /** Pill rectangle. Height is a constant 69 across every frame. */
  x: number;
  y: number;
  width: number;
  /** Icon box. The glyphs sit on no common grid, so each keeps its own size. */
  iconX: number;
  iconY: number;
  iconWidth: number;
  iconHeight: number;
};

export type JourneyConnector = {
  x: number;
  y: number;
};
