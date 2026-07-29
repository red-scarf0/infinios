import type { ProductDetail } from "./types";

export const platformOperations: ProductDetail = {
  slug: "platform-operations",

  metadata: {
    title: "Platform & Operations",
    description:
      "Manage programmes, users, transactions, controls, reporting and operational workflows through a centralised environment.",
  },

  hero: {
    eyebrow: "Platform & Operations",
    heading: "One place to run your payment programme.",
    body: "Manage programmes, users, transactions, controls, reporting and operational workflows through a centralised environment.",
    image: "/images/products/platform-operations-hero.jpg",
    primaryCta: { label: "Request a Platform Demo", href: "/demo" },
    secondaryCta: { label: "Speak to Our Team", href: "/contact" },
  },

  overview: {
    label: "PLATFORM & OPERATIONS",
    heading: "The operational view behind every product and transaction.",
    body: "The INFINIOS platform gives product, operations, support and control teams a shared view of programme activity. Configure access, monitor transactions, manage exceptions and act on operational information without switching between disconnected tools.",
  },

  features: [
    {
      title: "Programme Management",
      body: "Manage products, configurations, limits and programme settings.",
      image: "/images/products/feature-24.jpg",
    },
    {
      title: "Transaction Monitoring",
      body: "View approvals, declines, balances and operational activity.",
      image: "/images/products/feature-25.jpg",
    },
    {
      title: "User & Access Controls",
      body: "Assign permissions and roles around team responsibilities.",
      image: "/images/products/feature-26.jpg",
    },
    {
      title: "Exception Handling",
      body: "Identify and manage alerts, servicing needs and operational escalations.",
      image: "/images/products/feature-27.jpg",
    },
    {
      title: "Reporting & Analytics",
      body: "Access financial, transaction and programme-level reporting.",
      image: "/images/products/feature-28.jpg",
    },
    {
      title: "Operational Workflows",
      body: "Support onboarding, servicing, lifecycle and administrative processes.",
      image: "/images/products/feature-12.jpg",
    },
  ],

  journey: {
    label: "TRANSACTION FLOW",
    steps: [
      {
        label: "Set Up Programme",
        icon: "/icons/journey/set-up-programme.png",
        x: 184,
        y: 3162,
        width: 332,
        iconX: 307.31,
        iconY: 3079.11,
        iconWidth: 60.5,
        iconHeight: 60,
      },
      {
        label: "Assign Roles",
        icon: "/icons/journey/assign-roles.png",
        x: 607,
        y: 3162,
        width: 246,
        iconX: 693.16,
        iconY: 3061.52,
        iconWidth: 65.91,
        iconHeight: 81.59,
      },
      {
        label: "Monitor Activity",
        icon: "/icons/journey/monitor-platform.png",
        x: 963,
        y: 3162,
        width: 301,
        iconX: 1062.85,
        iconY: 3078.42,
        iconWidth: 73,
        iconHeight: 65,
      },
      {
        label: "Manage Exceptions",
        icon: "/icons/journey/manage-exceptions.png",
        x: 194,
        y: 3359,
        width: 367,
        iconX: 323,
        iconY: 3298.64,
        iconWidth: 71,
        iconHeight: 47,
      },
      {
        label: "Report",
        icon: "/icons/journey/report.png",
        x: 648,
        y: 3359,
        width: 138,
        iconX: 689.44,
        iconY: 3285.36,
        iconWidth: 55.01,
        iconHeight: 62.99,
      },
      {
        label: "Take Action",
        icon: "/icons/journey/take-action.png",
        x: 871,
        y: 3359,
        width: 220,
        iconX: 945.52,
        iconY: 3293.64,
        iconWidth: 68,
        iconHeight: 58,
      },
    ],
    connectors: [
      { x: 527, y: 3187 },
      { x: 865, y: 3187 },
      { x: 570, y: 3385 },
      { x: 792, y: 3384 },
    ],
  },

  outcomes: {
    label: "BUSINESS OUTCOMES",
    items: [
      {
        title: "One Operating View",
        body: "Bring programme, user and transaction information into one environment.",
      },
      {
        title: "Clearer Accountability",
        body: "Give each team the permissions and visibility required for its role.",
      },
      {
        title: "Faster Response",
        body: "Move from exception to action with the relevant information already connected.",
      },
    ],
  },

  cta: {
    heading: "See how your programme would operate day to day.",
    body: "Request a focused platform discussion based on your teams, workflows and reporting requirements.",
    ctaLabel: "Request a Platform Demo",
    ctaHref: "/demo",
  },
};
