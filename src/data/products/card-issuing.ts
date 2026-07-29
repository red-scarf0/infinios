import type { ProductDetail } from "./types";

export const cardIssuing: ProductDetail = {
  slug: "card-issuing",

  metadata: {
    title: "Card Issuing",
    description:
      "Issue virtual and physical cards, configure how they can be used and manage every stage of the card lifecycle through connected infrastructure.",
  },

  hero: {
    eyebrow: "Card Issuing",
    heading: "Launch card programmes with control built in.",
    body: "Issue virtual and physical cards, configure how they can be used and manage every stage of the card lifecycle through connected infrastructure.",
    image: "/images/products/card-issuing-hero.jpg",
    primaryCta: { label: "Discuss a Card Programme", href: "/contact" },
    /* TODO: /network has no page yet — no frame for it exists in the Final
       Figma page. Left pointing at the intended route. */
    secondaryCta: { label: "Explore our Network", href: "/network" },
  },

  overview: {
    label: "CARD ISSUING",
    heading: "From product configuration to everyday control.",
    body: "INFINIOS supports card programmes across consumer, corporate, travel and specialised payment use cases. Configure card types, spending rules and user journeys, then manage issuance, authorisation and servicing from one environment.",
  },

  features: [
    {
      title: "Virtual Cards",
      body: "Create cards for immediate use across travel, supplier payments, expenses and digital commerce.",
      image: "/images/products/feature-01.jpg",
    },
    {
      title: "Physical Cards",
      body: "Support branded card programmes with activation, PIN, replacement and renewal workflows.",
      image: "/images/products/feature-02.jpg",
    },
    {
      title: "Lifecycle Management",
      body: "Manage activation, suspension, renewal, replacement and card status centrally.",
      image: "/images/products/feature-03.jpg",
    },
    {
      title: "Spending Controls",
      body: "Apply limits, merchant rules, geographic parameters and transaction logic.",
      image: "/images/products/feature-04.jpg",
    },
    {
      title: "Real-Time Visibility",
      body: "Monitor approvals, declines, balances and card activity as transactions occur.",
      image: "/images/products/feature-05.jpg",
    },
    {
      title: "Programme Configuration",
      body: "Define products, card types, operating rules and customer journeys around the programme model.",
      image: "/images/products/feature-06.jpg",
    },
  ],

  journey: {
    label: "PROGRAMME JOURNEY",
    steps: [
      {
        label: "Programme Design",
        icon: "/icons/journey/programme-design.png",
        x: 139,
        y: 3162,
        width: 348,
        iconX: 266,
        iconY: 3075,
        iconWidth: 80,
        iconHeight: 72,
      },
      {
        label: "Infrastructure & Scheme Setup",
        icon: "/icons/journey/infrastructure-setup.png",
        x: 583,
        y: 3162,
        width: 546,
        iconX: 790,
        iconY: 3080,
        iconWidth: 78,
        iconHeight: 73,
      },
      {
        label: "Card Configuration",
        icon: "/icons/journey/card-configuration.png",
        x: 1232,
        y: 3162,
        width: 352,
        iconX: 1357.8,
        iconY: 3094.78,
        iconWidth: 73.2,
        iconHeight: 49.49,
      },
      {
        label: "API Integration",
        icon: "/icons/journey/api-integration.png",
        x: 142,
        y: 3352,
        width: 298,
        iconX: 247,
        iconY: 3284.83,
        iconWidth: 84.36,
        iconHeight: 43.77,
      },
      {
        label: "Testing",
        icon: "/icons/journey/testing.png",
        x: 561,
        y: 3352,
        width: 179,
        iconX: 624,
        iconY: 3277,
        iconWidth: 59,
        iconHeight: 59,
      },
      {
        label: "Go Live",
        icon: "/icons/journey/go-live.png",
        x: 845,
        y: 3352,
        width: 179,
        iconX: 909,
        iconY: 3271,
        iconWidth: 47,
        iconHeight: 65,
      },
    ],
    connectors: [
      { x: 504, y: 3187 },
      { x: 1146, y: 3187 },
      { x: 462, y: 3377 },
      { x: 754, y: 3377 },
    ],
  },

  outcomes: {
    label: "BUSINESS OUTCOMES",
    items: [
      {
        title: "Launch Faster",
        body: "Move from programme design to live cards through a structured implementation path.",
      },
      {
        title: "Control Every Use",
        body: "Set how, where and when cards can be used.",
      },
      {
        title: "Operate with Clarity",
        body: "Give product and operations teams one view of card activity and controls.",
      },
    ],
  },

  cta: {
    heading: "Turn your card concept into an operating programme.",
    body: "Share your use case, target market and programme requirements with the INFINIOS team.",
    ctaLabel: "Discuss a Card Programme",
    ctaHref: "/contact",
  },
};
