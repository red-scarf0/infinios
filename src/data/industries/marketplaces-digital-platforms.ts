import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/marketplaces-digital-platforms";
const IMAGES = "/new-images/Marketplaces & Digital Platforms images";

export const marketplacesDigitalPlatforms: IndustryDetail = {
  slug: "marketplaces-digital-platforms",

  metadata: {
    title: "Marketplaces & Digital Platforms",
    description:
      "Embed payments, wallets, cards and settlement into user and merchant journeys.",
  },

  hero: {
    eyebrow: "Marketplaces & Digital Platforms",
    heading:
      "Embed financial experiences directly into the journeys your platform already owns.",
    body: "Embed payments, wallets, cards and settlement into user and merchant journeys.",
    image: `${IMAGES}/hero.jpg`,
    primaryCta: { label: "Build with INFINIOS", href: "/contact" },
    secondaryCta: { label: "Speak to Our Team", href: "/contact" },
    metrics: {
      minHeight: 1034,
      paddingTop: 205,
      paddingTopDesktop: 250,
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
      metrics: { paddingTop: 92, rowsGap: 71 },
      overview: {
        label: "MARKETPLACES & DIGITAL PLATFORMS",
        heading:
          "Turn platform activity into connected payment and financial experiences.",
        body: "Marketplaces and digital platforms need financial capabilities to feel native to the journeys they already own. INFINIOS connects payments, wallets, cards, settlement and operational controls so platforms can support users and merchants without forcing them through disconnected financial experiences.",
      },
      items: [
        {
          title: "Embedded Payments",
          body: "Accept and move payments directly inside user and merchant journeys.",
          image: `${IMAGES}/01.jpg`,
        },
        {
          title: "Wallets & Balances",
          body: "Give users and merchants a place to hold, fund and move value within the platform.",
          image: `${IMAGES}/02.jpg`,
        },
        {
          title: "Card Programmes",
          body: "Extend the platform experience with physical or virtual cards for controlled spend.",
          image: `${IMAGES}/03.jpg`,
        },
        {
          title: "Merchant Settlement",
          body: "Connect transaction activity to structured merchant payouts and settlement.",
          image: `${IMAGES}/04.jpg`,
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 63 },
      journey: {
        label: "PLATFORM PAYMENT JOURNEY",
        origin: { x: 171, y: 2702 },
        steps: [
          {
            label: "User or Merchant Onboarded",
            x: 148,
            y: 2848,
            width: 348,
            icon: `${ICONS}/onboard.svg`,
            iconX: 282,
            iconY: 2745,
            iconWidth: 65,
            iconHeight: 80,
          },
          {
            label: "Payment Experience",
            x: 599,
            y: 2848,
            width: 345,
            icon: `${ICONS}/payment.svg`,
            iconX: 727,
            iconY: 2778,
            iconWidth: 60,
            iconHeight: 55,
          },
          {
            label: "Value Moved",
            x: 1037,
            y: 2848,
            width: 276,
            icon: `${ICONS}/value-moved.svg`,
            iconX: 1142,
            iconY: 2774,
            iconWidth: 61,
            iconHeight: 52,
          },
          {
            label: "Settlement",
            x: 148,
            y: 3038,
            width: 348,
            icon: `${ICONS}/settlement.svg`,
            iconX: 282,
            iconY: 2976,
            iconWidth: 67,
            iconHeight: 46,
          },
          {
            label: "Reconciliation",
            x: 680,
            y: 3038,
            width: 223,
            icon: `${ICONS}/reconciliation.svg`,
            iconX: 747,
            iconY: 2959,
            iconWidth: 70,
            iconHeight: 70,
          },
          {
            label: "Reporting & Controls",
            x: 1026,
            y: 3038,
            width: 300,
            icon: `${ICONS}/reporting.svg`,
            iconX: 1124,
            iconY: 2979,
            iconWidth: 50,
            iconHeight: 50,
          },
        ],
        connectors: [
          { x: 513, y: 2873 },
          { x: 951, y: 2873 },
          { x: 588, y: 3064 },
          { x: 927, y: 3063 },
        ],
      },
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: { paddingTop: 95, labelGap: 155, paddingBottom: 160 },
      items: [
        {
          title: "A Native\nExperience",
          body: "Keep financial actions inside the journeys users and merchants already understand.",
        },
        {
          title: "More Platform\nValue",
          body: "Add payments, wallets and cards without rebuilding the surrounding platform experience.",
        },
        {
          title: "Connected\nOperations",
          body: "Bring transaction visibility, settlement and controls into one operating model.",
        },
      ],
    },

    { kind: "rule", paddingTop: 172 },
  ],

  cta: {
    heading:
      "Build financial capabilities around the journeys your platform already owns.",
    body: "Share your user, merchant and payment flows with INFINIOS and explore the infrastructure behind them.",
    ctaLabel: "Build with INFINIOS",
    ctaHref: "/contact",
    image: "/new-images/cta-banner-card.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "114px",
  },
};
