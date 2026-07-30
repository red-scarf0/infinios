import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/travel";
const IMAGES = "/images/industries";

export const travel: IndustryDetail = {
  slug: "travel",

  metadata: {
    title: "Travel",
    description:
      "Issue virtual cards, settle suppliers and reconcile high-volume travel payments with booking-level control and visibility.",
  },

  hero: {
    eyebrow: "Travel",
    heading: "Make supplier payments move as fast as travel bookings.",
    body: "Issue virtual cards, settle suppliers and reconcile high-volume travel payments with booking-level control and visibility.",
    image: `${IMAGES}/travel-hero.jpg`,
    primaryCta: { label: "Explore APISO", href: "#capabilities" },
    secondaryCta: { label: "Speak to Our Team", href: "/contact" },
    metrics: {
      minHeight: 1034,
      paddingTop: 205,
      paddingTopDesktop: 250,
      paddingBottom: 114,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 308,
      secondaryWidth: 259,
      buttonGap: 13,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 92, rowsGap: 129 },
      overview: {
        label: "TRAVEL PAYMENTS",
        heading:
          "Connect booking activity to payment, settlement and reconciliation.",
        body: "Travel businesses manage large volumes of time-sensitive supplier payments across airlines, hotels and service partners. INFINIOS provides the issuing and processing infrastructure behind virtual card and settlement flows, helping teams control spend and follow each payment through to reconciliation.",
      },
      items: [
        {
          title: "Virtual Card Issuing",
          body: "Create cards around bookings, suppliers, payment amounts and usage conditions.",
          image: `${IMAGES}/travel-01.jpg`,
        },
        {
          title: "Supplier Settlement",
          body: "Move payments to travel suppliers through structured payment flows.",
          image: `${IMAGES}/travel-02.jpg`,
        },
        {
          title: "Transaction Processing",
          body: "Authorise and process high-volume travel transactions.",
          image: `${IMAGES}/travel-03.jpg`,
        },
        {
          title: "Booking-Level Reconciliation",
          body: "Connect payment records to the relevant booking and supplier activity.",
          image: `${IMAGES}/travel-04.jpg`,
        },
        {
          title: "Operational Reporting",
          body: "Give finance and operations teams visibility into status, exceptions and settlement.",
          image: `${IMAGES}/travel-05.jpg`,
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 63 },
      journey: {
        label: "TRAVEL PAYMENT FLOW",
        origin: { x: 171, y: 2702 },
        steps: [
          {
            label: "Booking Confirmed",
            x: 148,
            y: 2848,
            width: 348,
            icon: `${ICONS}/booking-confirmed.svg`,
            iconX: 282.42,
            iconY: 2745,
            iconWidth: 64.72,
            iconHeight: 80.11,
          },
          {
            label: "Virtual Card Issued",
            x: 599.42,
            y: 2848,
            width: 345,
            icon: `${ICONS}/virtual-card-issued.svg`,
            iconX: 726.9,
            iconY: 2788,
            iconWidth: 55,
            iconHeight: 37,
          },
          {
            label: "Supplier Paid",
            x: 1037,
            y: 2848,
            width: 276,
            icon: `${ICONS}/supplier-paid.svg`,
            iconX: 1142,
            iconY: 2774,
            iconWidth: 60.69,
            iconHeight: 51.7,
          },
          {
            label: "Transaction Processed",
            x: 148,
            y: 3038,
            width: 401,
            icon: `${ICONS}/transaction-processed.svg`,
            iconX: 315,
            iconY: 2975.96,
            iconWidth: 66.55,
            iconHeight: 45.82,
          },
          {
            label: "Settlement",
            x: 680.72,
            y: 3038,
            width: 223,
            icon: `${ICONS}/settlement.svg`,
            iconX: 747,
            iconY: 2959,
            iconWidth: 70,
            iconHeight: 70,
          },
          {
            label: "Reconciliation",
            x: 1026,
            y: 3038,
            width: 261,
            icon: `${ICONS}/reconciliation.svg`,
            iconX: 1124,
            iconY: 2979,
            iconWidth: 50,
            iconHeight: 50,
          },
        ],
        connectors: [
          { x: 513, y: 2873 },
          { x: 951.42, y: 2873 },
          { x: 588, y: 3064.36 },
          { x: 927.13, y: 3063 },
        ],
      },
    },

    {
      kind: "statement",
      heading: "Powered by INFINIOS. Extended through APISO.",
      lead: "INFINIOS provides the underlying issuing and processing infrastructure.",
      trail:
        "APISO brings specialised travel payment workflows and use cases designed around the needs of the travel industry.",
      metrics: { paddingTop: 166, bodyGap: 59, headingMeasure: 778 },
    },

    { kind: "rule", paddingTop: 37 },
  ],

  cta: {
    heading: "Explore a travel payment model built around real booking flows.",
    body: "Visit APISO for specialised travel use cases or speak with INFINIOS about the infrastructure behind them.",
    ctaLabel: "Speak to Our Team",
    ctaHref: "/contact",
    secondaryCtaLabel: "Explore APISO",
    secondaryCtaHref: "#capabilities",
    image: "/images/solutions/cta-slats.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "85px",
  },
};
