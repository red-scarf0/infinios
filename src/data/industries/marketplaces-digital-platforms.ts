import type { IndustryDetail } from "./types";

const IMAGES = "/new-images/Marketplaces & Digital Platforms images";

/*
 * In production, Next 15's image optimizer looks public files up by their
 * percent-encoded path, so a raw "&" never matches and the request 400s.
 * Hand next/image the encoded path instead. Each segment is decoded first so
 * an already-encoded segment is not encoded twice.
 */
function image(file: string) {
  return `${IMAGES}/${file}`
    .split("/")
    .map((segment) => {
      try {
        return encodeURIComponent(decodeURIComponent(segment));
      } catch {
        return encodeURIComponent(segment);
      }
    })
    .join("/");
}

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
    image: "/images/industries/marketplaces-digital-platforms-hero-plate.jpg",
    imagePosition: "56% 50%",
    primaryCta: { label: "Explore Embedded Payments", href: "#capabilities" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
    metrics: {
      minHeight: 1174,
      paddingTop: 205,
      paddingTopDesktop: 250,
      paddingBottom: 93,
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
          image: image("Embedded Cards.png"),
        },
        {
          title: "Wallet Functionality",
          body: "Enable balances, funding and transfers for users, merchants or partners.",
          image: image("Wallet Functionality.png"),
        },
        {
          title: "Platform Payments",
          body: "Support payment initiation, processing and operational controls.",
          image: image("Platform Payments.png"),
        },
        {
          title: "Merchant & Partner Settlement",
          body: "Manage payer and settlement flows across the ecosystem.",
          image: image("Merchant & Partner Settlement.png"),
        },
        {
          title: "API Connectivity",
          body: "Connect payment functionality directly to platform workflows.",
          image: image("API Connectivity.png"),
        },
        {
          title: "Reporting",
          body: "Track transactions, balances, settlement and operational activity.",
          image: image("reporting.png"),
        },
      ],
    },
    {
      kind: "journey",
      metrics: { paddingTop: 63, pillFontSize: 22, connectorWidth: 42 },
      journey: {
        label: "PLATFORM PAYMENT FLOW",
        origin: { x: 171, y: 2702 },
        steps: [
          {
            label: "User Action",
            x: 148,
            y: 2848,
            width: 310,
            icon: image("icons (3).png"),
            iconX: 290,
            iconY: 2758,
            iconWidth: 60,
            iconHeight: 55,
          },
          {
            label: "Wallet or Card Experience",
            x: 500,
            y: 2848,
            width: 400,
            icon: image("icons (1).png"),
            iconX: 728,
            iconY: 2768,
            iconWidth: 62,
            iconHeight: 55,
          },
          {
            label: "Payment Initiated",
            x: 950,
            y: 2848,
            width: 320,
            icon: image("icons (6).png"),
            iconX: 1144,
            iconY: 2758,
            iconWidth: 48,
            iconHeight: 58,
          },
          {
            label: "Processing",
            x: 148,
            y: 3038,
            width: 310,
            icon: image("icons (2).png"),
            iconX: 310,
            iconY: 2955,
            iconWidth: 48,
            iconHeight: 59,
          },
          {
            label: "Merchant or Partner Settlement",
            x: 520,
            y: 3038,
            width: 430,
            icon: image("icons (5).png"),
            iconX: 750,
            iconY: 2955,
            iconWidth: 52,
            iconHeight: 58,
          },
          {
            label: "Reporting",
            x: 1020,
            y: 3038,
            width: 300,
            icon: image("icons (4).png"),
            iconX: 1130,
            iconY: 2958,
            iconWidth: 44,
            iconHeight: 52,
          },
        ],
        connectors: [
          { x: 458, y: 2873 },
          { x: 900, y: 2873 },
          { x: 458, y: 3063 },
          { x: 950, y: 3063 },
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
    image: "/new-images/cta-banner-industries.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "114px",
  },
};
