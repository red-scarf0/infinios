import type { JourneyFlowData } from "../journey";

export type {
  JourneyConnector,
  JourneyStep,
  /** The product frames label this flow "PROGRAMME JOURNEY". */
  JourneyFlowData as ProgrammeJourneyData,
} from "../journey";

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
    /** 64px #B2CDFF page name that sits above the statement. */
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

  journey: JourneyFlowData;

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
