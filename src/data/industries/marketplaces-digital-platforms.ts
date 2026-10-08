import type { IndustryDetail } from "./types";

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
    image: `${IMAGES}/hero-Marketplaces & Digital Platforms.jpg`,
    primaryCta: { label: "Explore Embedded Payments", href: "#capabilities" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
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
        label: "FOR MARKETPLACES & DIGITAL PLATFORMS",
        heading:
          "Keep the customer journey in your platform while INFINIOS powers the payment layer.",
        body: "INFINIOS enables platforms to connect payments, wallets, cards and settlement directly into the journeys users and merchants already know. The infrastructure stays behind the experience while the platform retains control over the customer journey.",
      },
      items: [
        {
          title: "Embedded Cards",
          body: "Issue virtual or physical cards directly within the platform experience.",
          image: `${IMAGES}/Embedded Cards.png`,
        },
        {
          title: "Wallet Functionality",
          body: "Enable balances, funding and transfers for users, merchants or partners.",
          image: `${IMAGES}/Wallet Functionality.png`,
        },
        {
          title: "Platform Payments",
          body: "Support payment initiation, processing and operational controls.",
          image: `${IMAGES}/Platform Payments.png`,
        },
        {
          title: "Merchant & Partner Settlement",
          body: "Manage payer and settlement flows across the ecosystem.",
          image: `${IMAGES}/Merchant & Partner Settlement.png`,
        },
        {
          title: "API Connectivity",
          body: "Connect payment functionality directly to platform workflows.",
          image: `${IMAGES}/API Connectivity.png`,
        },
        {
          title: "Reporting",
          body: "Track transactions, balances, settlement and operational activity.",
          image: `${IMAGES}/reporting.png`,
        },
      ],
    },
    {
      kind: "journey",
      metrics: { paddingTop: 63 },
      journey: {
        label: "PLATFORM PAYMENT FLOW",
        origin: { x: 171, y: 2702 },
        steps: [
          {
            label: "User Action",
            x: 148,
            y: 2848,
            width: 348,
            icon: `${IMAGES}/_123.svg`,
            iconX: 282,
            iconY: 2745,
            iconWidth: 64,
            iconHeight: 59,
          },
          {
            label: "Wallet or Card Experience",
            x: 599,
            y: 2848,
            width: 345,
            icon: `${IMAGES}/Group (1).svg`,
            iconX: 727,
            iconY: 2778,
            iconWidth: 66,
            iconHeight: 58,
          },
          {
            label: "Payment Initiated",
            x: 1037,
            y: 2848,
            width: 276,
            icon: `${IMAGES}/Group 124.svg`,
            iconX: 1142,
            iconY: 2774,
            iconWidth: 55,
            iconHeight: 66,
          },
          {
            label: "Processing",
            x: 148,
            y: 3038,
            width: 348,
            icon: `${IMAGES}/Group 127.svg`,
            iconX: 315,
            iconY: 2976,
            iconWidth: 56,
            iconHeight: 69,
          },
          {
            label: "Merchant or Partner Settlement",
            x: 680,
            y: 3038,
            width: 300,
            icon: `${IMAGES}/Group.svg`,
            iconX: 747,
            iconY: 2959,
            iconWidth: 59,
            iconHeight: 66,
          },
          {
            label: "Reporting",
            x: 1026,
            y: 3038,
            width: 261,
            icon: `${IMAGES}/_123 (1).svg`,
            iconX: 1124,
            iconY: 2979,
            iconWidth: 51,
            iconHeight: 60,
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
          title: "More Ecosystem\nControl",
          body: "Bring users, merchants and financial actions together without fragmenting the platform experience.",
        },
        {
          title: "A Scalable\nFoundation",
          body: "Add capabilities as the platform grows without rebuilding its core payment flows.",
        },
      ],
    },
    { kind: "rule", paddingTop: 172 },
  ],
  cta: {
    heading: "Embed the payment experience your platform needs.",
    body: "Share the user, merchant and settlement journeys you want to support.",
    ctaLabel: "Request a Demo",
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
