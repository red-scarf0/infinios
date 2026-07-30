import type { SolutionDetail } from "./types";

const ICONS = "/icons/solutions/b2b-payments";
const IMAGES = "/images/solutions";

export const b2bPayments: SolutionDetail = {
  slug: "b2b-payments",

  metadata: {
    title: "B2B Payments",
    description:
      "Connect payment requests, virtual cards, supplier settlement, disbursements and reconciliation in one operational flow.",
  },

  hero: {
    eyebrow: "B2B Payments",
    heading: "Move business payments with less manual work and more control.",
    body: "Connect payment requests, virtual cards, supplier settlement, disbursements and reconciliation in one operational flow.",
    image: `${IMAGES}/b2b-payments-hero.jpg`,
    primaryCta: { label: "Explore B2B Payments", href: "#capabilities" },
    secondaryCta: { label: "Speak to an Expert", href: "/contact" },
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
        label: "B2B PAYMENTS",
        heading:
          "From payment request to reconciliation, every stage stays connected.",
        body: "INFINIOS helps businesses manage complex payment flows across suppliers, operations and commercial partners. Payment controls, processing, settlement and reporting work together to reduce manual handling and improve visibility into where money moves.",
      },
      items: [
        {
          title: "Supplier Payments",
          body: "Support secure, scalable payment flows across supplier networks.",
          image: `${IMAGES}/b2b-payments-01.jpg`,
        },
        {
          title: "Virtual Card Payments",
          body: "Generate cards for procurement, travel, supplier settlement and controlled spend.",
          image: `${IMAGES}/b2b-payments-02.jpg`,
        },
        {
          title: "Operational Disbursements",
          body: "Manage payouts, funding and business payment distribution.",
          image: `${IMAGES}/b2b-payments-03.jpg`,
        },
        {
          title: "Payment Controls",
          body: "Apply validation, approval and transaction rules before funds move.",
          image: `${IMAGES}/b2b-payments-04.jpg`,
        },
        {
          title: "Reconciliation",
          body: "Match payment activity with settlement and operational records.",
          image: `${IMAGES}/b2b-payments-05.jpg`,
        },
        {
          title: "Reporting",
          body: "Give finance and operations teams a clearer view of payment status and performance.",
          image: `${IMAGES}/b2b-payments-06.jpg`,
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 169 },
      journey: {
        label: "PAYMENT FLOW",
        origin: { x: 171, y: 3016 },
        steps: [
          {
            label: "Payment Request",
            x: 148,
            y: 3162,
            width: 348,
            icon: `${ICONS}/payment-request.svg`,
            iconX: 283.52,
            iconY: 3059,
            iconWidth: 66.32,
            iconHeight: 78.04,
          },
          {
            label: "Validation & Controls",
            x: 599,
            y: 3162,
            width: 345,
            icon: `${ICONS}/validation-controls.svg`,
            iconX: 740,
            iconY: 3075,
            iconWidth: 62.34,
            iconHeight: 64.63,
          },
          {
            label: "Authorisation & Processing",
            x: 1037,
            y: 3162,
            width: 473,
            icon: `${ICONS}/authorisation-processing.svg`,
            iconX: 1245,
            iconY: 3075,
            iconWidth: 57.97,
            iconHeight: 63,
          },
          {
            label: "Supplier Settlement",
            x: 148,
            y: 3352,
            width: 348,
            icon: `${ICONS}/supplier-settlement.svg`,
            iconX: 289,
            iconY: 3289.96,
            iconWidth: 66.55,
            iconHeight: 45.82,
          },
          {
            label: "Monitoring",
            x: 598,
            y: 3352,
            width: 223,
            icon: `${ICONS}/monitoring.svg`,
            iconX: 674,
            iconY: 3266.99,
            iconWidth: 70,
            iconHeight: 70,
          },
          {
            label: "Reconciliation & Reporting",
            x: 943,
            y: 3352,
            width: 448,
            icon: `${ICONS}/reconciliation-reporting.svg`,
            iconX: 1146,
            iconY: 3283,
            iconWidth: 42.74,
            iconHeight: 57,
          },
        ],
        connectors: [
          { x: 513, y: 3187 },
          { x: 951.42, y: 3187 },
          { x: 505.28, y: 3378.36 },
          { x: 844.42, y: 3377 },
        ],
      },
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      ruled: true,
      metrics: { paddingTop: 240, ruleGap: 116, labelGap: 155 },
      items: [
        {
          title: "Less Manual\nHandling",
          body: "Automate repeatable steps across payment initiation, controls and reporting.",
        },
        {
          title: "More Payment\nControl",
          body: "Define how payments are approved, processed and monitored.",
        },
        {
          title: "Better Visibility",
          body: "Track payment status from request through final reconciliation.",
        },
      ],
    },
  ],

  cta: {
    heading: "Build a clearer operating model for business payments.",
    body: "Discuss your supplier, expense, settlement or disbursement flows with the INFINIOS team.",
    ctaLabel: "Speak to an Expert",
    ctaHref: "/contact",
    image: `${IMAGES}/cta-slats.jpg`,
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "81px",
  },
};
