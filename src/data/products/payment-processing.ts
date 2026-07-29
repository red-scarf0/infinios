import type { ProductDetail } from "./types";

export const paymentProcessing: ProductDetail = {
  slug: "payment-processing",

  metadata: {
    title: "Payment Processing",
    description:
      "Authorise, route, settle and reconcile transactions through infrastructure designed for reliable, high-volume payment operations.",
  },

  hero: {
    eyebrow: "Payment Processing",
    heading: "Process every transaction with speed, control and visibility.",
    body: "Authorise, route, settle and reconcile transactions through infrastructure designed for reliable, high-volume payment operations.",
    image: "/images/products/payment-processing-hero.jpg",
    primaryCta: { label: "Explore Processing", href: "#capabilities" },
    secondaryCta: { label: "Request a Demo", href: "/demo" },
  },

  overview: {
    label: "PAYMENT PROCESSING",
    heading: "One connected flow from transaction request to reconciliation.",
    body: "INFINIOS supports the complete transaction lifecycle, helping payment businesses manage real-time decisions, routing, risk controls, settlement and reporting without separating each stage across disconnected systems.",
  },

  features: [
    {
      title: "Real-Time Authorisation",
      body: "Validate and respond to transactions through configurable decision logic.",
      image: "/images/products/feature-13.jpg",
    },
    {
      title: "Transaction Routing",
      body: "Direct transaction flows through the appropriate processing path.",
      image: "/images/products/feature-14.jpg",
    },
    {
      title: "Risk Controls",
      body: "Apply monitoring rules and configurable transaction parameters.",
      image: "/images/products/feature-15.jpg",
    },
    {
      title: "Settlement & Reconciliation",
      body: "Match transaction activity, settlement records and operational balances.",
      image: "/images/products/feature-16.jpg",
    },
    {
      title: "Multi-Channel Processing",
      body: "Support e-commerce, POS, wallet, virtual card and platform payment environments.",
      image: "/images/products/feature-17.jpg",
    },
    {
      title: "Operational Reporting",
      body: "Track approvals, declines, exceptions, performance and settlement activity.",
      image: "/images/products/feature-29.jpg",
    },
  ],

  journey: {
    label: "TRANSACTION FLOW",
    steps: [
      {
        label: "Transaction Initiated",
        icon: "/icons/journey/transaction-initiated.png",
        x: 144,
        y: 3162,
        width: 376,
        iconX: 283,
        iconY: 3059,
        iconWidth: 79.17,
        iconHeight: 73.79,
      },
      {
        label: "Authorisation",
        icon: "/icons/journey/authorisation.png",
        x: 619,
        y: 3162,
        width: 255,
        iconX: 710.57,
        iconY: 3059,
        iconWidth: 64.72,
        iconHeight: 80.11,
      },
      {
        label: "Processing & Controls",
        icon: "/icons/journey/processing-controls.png",
        x: 976,
        y: 3162,
        width: 391,
        iconX: 1133,
        iconY: 3061.15,
        iconWidth: 71.51,
        iconHeight: 77.96,
      },
      {
        label: "Approval or Decline",
        icon: "/icons/journey/approval-decline.png",
        x: 133,
        y: 3352,
        width: 350,
        iconX: 258.26,
        iconY: 3295.09,
        iconWidth: 94.9,
        iconHeight: 46.9,
      },
      {
        label: "Settlement",
        icon: "/icons/journey/settlement.png",
        x: 590,
        y: 3352,
        width: 229,
        iconX: 677.5,
        iconY: 3276.99,
        iconWidth: 51,
        iconHeight: 60,
      },
      {
        label: "Reconciliation & Reporting",
        icon: "/icons/journey/reconciliation-reporting.png",
        x: 932,
        y: 3352,
        width: 452,
        iconX: 1119,
        iconY: 3251.92,
        iconWidth: 75.18,
        iconHeight: 79.17,
      },
    ],
    connectors: [
      { x: 535, y: 3187 },
      { x: 888, y: 3187 },
      { x: 500, y: 3378 },
      { x: 836, y: 3377 },
    ],
  },

  outcomes: {
    label: "BUSINESS OUTCOMES",
    items: [
      {
        title: "Reliable Decisions",
        body: "Process transactions through consistent authorisation and control logic.",
      },
      {
        title: "End-to-End Visibility",
        body: "Follow activity from request through settlement and reporting.",
      },
      {
        title: "Operational Efficiency",
        body: "Reduce fragmented monitoring and reconciliation workflows.",
      },
    ],
  },

  cta: {
    heading: "Strengthen the infrastructure behind every transaction.",
    body: "Discuss your channels, transaction flows and operational requirements with the INFINIOS team.",
    ctaLabel: "Request a Demo",
    ctaHref: "/demo",
  },
};
