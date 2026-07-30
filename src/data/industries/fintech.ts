import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/fintechs";
const IMAGES = "/images/industries";

export const fintech: IndustryDetail = {
  slug: "fintech",

  metadata: {
    title: "Fintechs",
    description:
      "Connect issuing, wallets, processing and operations through APIs designed for fast-moving financial products.",
  },

  hero: {
    eyebrow: "Fintechs",
    heading: "Launch payment products without building every layer yourself.",
    body: "Connect issuing, wallets, processing and operations through APIs designed for fast-moving financial products.",
    image: `${IMAGES}/fintechs-hero.jpg`,
    primaryCta: { label: "Build with INFINIOS", href: "/contact" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
    metrics: {
      minHeight: 1034,
      paddingTop: 210,
      paddingTopDesktop: 255,
      paddingBottom: 114,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      /* The only industry frame whose overview heading runs to four lines. */
      metrics: { paddingTop: 92, rowsGap: 71, headingMeasure: 694 },
      overview: {
        label: "FOR FINTECHS",
        heading:
          "Move from product concept to live payment experience with fewer infrastructure dependencies.",
        body: "INFINIOS gives fintech teams access to connected payment capabilities without requiring them to build and operate the full infrastructure stack internally. Product teams can focus on the customer experience while maintaining visibility and control behind it.",
      },
      items: [
        {
          title: "Card Products",
          body: "Launch consumer, business, virtual or specialised card programmes.",
          image: `${IMAGES}/fintechs-01.jpg`,
        },
        {
          title: "Wallet Experiences",
          body: "Add balances, funding, payments and transfers to a digital product.",
          image: `${IMAGES}/fintechs-02.jpg`,
        },
        {
          title: "Embedded Payments",
          body: "Place payment capabilities directly inside customer and platform journeys.",
          image: `${IMAGES}/fintechs-03.jpg`,
        },
        {
          title: "Transaction Processing",
          body: "Connect authorisation, settlement, reconciliation and reporting",
          image: `${IMAGES}/fintechs-04.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: { paddingTop: 95, labelGap: 155, paddingBottom: 160 },
      items: [
        {
          title: "Launch Faster",
          body: "Use connected infrastructure instead of building each payment layer internally.",
        },
        {
          title: "Reduce\nDependencies",
          body: "Replace a fragmented provider stack with a more unified operating mode",
        },
        {
          title: "Scale with Visibility",
          body: "Keep controls, transactions and programme operations visible as the product grows.",
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 0 },
      journey: {
        label: "FINTECH JOURNEY",
        origin: { x: 171, y: 3093 },
        steps: [
          {
            label: "Define Product",
            x: 176,
            y: 3239,
            width: 301,
            icon: `${ICONS}/define-product.svg`,
            iconX: 290,
            iconY: 3136,
            iconWidth: 79.17,
            iconHeight: 73.79,
          },
          {
            label: "Select Capabilities",
            x: 578.22,
            y: 3239,
            width: 338,
            icon: `${ICONS}/select-capabilities.svg`,
            iconX: 706,
            iconY: 3140,
            iconWidth: 82.8,
            iconHeight: 75.49,
          },
          {
            label: "Integrate APIs",
            x: 1016.22,
            y: 3239,
            width: 285,
            icon: `${ICONS}/integrate-apis.svg`,
            iconX: 1120,
            iconY: 3139,
            iconWidth: 77.33,
            iconHeight: 78.07,
          },
          {
            label: "Test",
            x: 181,
            y: 3429,
            width: 135,
            icon: `${ICONS}/test.svg`,
            iconX: 217,
            iconY: 3350,
            iconWidth: 63.54,
            iconHeight: 66,
          },
          {
            label: "Launch",
            x: 424.72,
            y: 3429,
            width: 167,
            icon: `${ICONS}/launch.svg`,
            iconX: 482,
            iconY: 3359.37,
            iconWidth: 50,
            iconHeight: 53.75,
          },
          {
            label: "Scale",
            x: 703,
            y: 3429,
            width: 133,
            icon: `${ICONS}/scale.svg`,
            iconX: 742,
            iconY: 3359.91,
            iconWidth: 56,
            iconHeight: 54.87,
          },
        ],
        connectors: [
          { x: 494, y: 3264 },
          { x: 927.56, y: 3264 },
          { x: 335, y: 3455.36 },
          { x: 613, y: 3455.36 },
        ],
      },
    },

    { kind: "rule", paddingTop: 172 },
  ],

  cta: {
    heading:
      "Build the customer proposition on top of infrastructure designed to operate.",
    body: "Share your product concept, required capabilities and target launch market with INFINIOS.",
    ctaLabel: "Build with INFINIOS",
    ctaHref: "/contact",
    image: "/images/solutions/cta-arcs.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "114px",
  },
};
