import type { SolutionDetail } from "./types";

const ICONS = "/icons/solutions/enterprise-card-programmes";
const IMAGES = "/images/solutions";

export const enterpriseCardProgrammes: SolutionDetail = {
  slug: "enterprise-card-programmes",

  metadata: {
    title: "Enterprise Card Programmes",
    description:
      "Use configurable physical and virtual cards for employee expenses, procurement, travel and supplier payments.",
  },

  hero: {
    eyebrow: "Enterprise Card Programmes",
    heading: "Turn business spend into a controlled, visible workflow.",
    body: "Use configurable physical and virtual cards for employee expenses, procurement, travel and supplier payments.",
    image: `${IMAGES}/enterprise-card-programmes-hero.jpg`,
    primaryCta: { label: "Discuss Enterprise Cards", href: "/contact" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
    metrics: {
      minHeight: 1034,
      paddingTop: 183,
      paddingBottom: 114,
      bodyGap: 1,
      ctaGap: 61,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 92, rowsGap: 129 },
      overview: {
        label: "ENTERPRISE CARD PROGRAMMES",
        heading: "Give every payment a purpose, a rule and a clear record.",
        body: "INFINIOS helps organisations issue cards around specific business needs, apply controls before spend occurs and track activity as it happens. Finance and operations teams gain a clearer view across users, departments, suppliers and payment categories.",
      },
      items: [
        {
          title: "Employee Expense",
          body: "Issue cards with defined limits and visibility for employee spending.",
          image: `${IMAGES}/enterprise-card-programmes-01.jpg`,
        },
        {
          title: "Procurement",
          body: "Support purchasing and supplier payment workflows through controlled cards.",
          image: `${IMAGES}/enterprise-card-programmes-02.jpg`,
        },
        {
          title: "Business Travel",
          body: "Use physical or virtual cards for travel spend and booking-related payments.",
          image: `${IMAGES}/enterprise-card-programmes-03.jpg`,
        },
        {
          title: "Supplier Payments",
          body: "Create card-based payment flows for repeat or one-time supplier settlement.",
          image: `${IMAGES}/enterprise-card-programmes-04.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "CONTROL HIGHLIGHTS",
      metrics: {
        paddingTop: 74,
        labelGap: 155,
        rowGap: 64,
        cardMinHeight: 276,
        paddingBottom: 110,
      },
      items: [
        {
          title: "Spend Rules",
          body: "Set limits, merchant categories, locations and usage conditions.",
        },
        {
          title: "User Management",
          body: "Assign cards and permissions around roles and responsibilities.",
        },
        {
          title: "Transaction\nMonitoring",
          body: "View approvals, declines and spend activity in real time.",
        },
        {
          title: "Reporting",
          body: "Bring card activity into a clearer financial and operational record.",
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 0, paddingBottom: 63 },
      journey: {
        label: "PROGRAMME FLOW",
        origin: { x: 171, y: 3424 },
        steps: [
          {
            label: "Set Up Programme",
            x: 183.83,
            y: 3570,
            width: 331.91,
            icon: `${ICONS}/set-up-programme.svg`,
            iconX: 307.31,
            iconY: 3488,
            iconWidth: 60.5,
            iconHeight: 54.87,
          },
          {
            label: "Enrol Users",
            x: 607.26,
            y: 3570,
            width: 245.86,
            icon: `${ICONS}/enrol-users.svg`,
            iconX: 693.16,
            iconY: 3469.52,
            iconWidth: 65.91,
            iconHeight: 81.59,
          },
          {
            label: "Issue Cards",
            x: 963,
            y: 3570,
            width: 244,
            icon: `${ICONS}/issue-cards.svg`,
            iconX: 1054,
            iconY: 3514,
            iconWidth: 54.8,
            iconHeight: 37.06,
          },
          {
            label: "Apply Controls",
            x: 194,
            y: 3767,
            width: 289,
            icon: `${ICONS}/apply-controls.svg`,
            iconX: 306.44,
            iconY: 3686,
            iconWidth: 64.45,
            iconHeight: 65.07,
          },
          {
            label: "Monitor Spend",
            x: 586,
            y: 3767,
            width: 261,
            icon: `${ICONS}/monitor-spend.svg`,
            iconX: 689.44,
            iconY: 3689,
            iconWidth: 55.21,
            iconHeight: 57.81,
          },
          {
            label: "Report & Manage",
            x: 940,
            y: 3767,
            width: 307,
            icon: `${ICONS}/report-manage.svg`,
            iconX: 1060,
            iconY: 3701.64,
            iconWidth: 68,
            iconHeight: 58,
          },
        ],
        connectors: [
          { x: 527, y: 3595 },
          { x: 864.7, y: 3595 },
          { x: 501, y: 3793 },
          { x: 862, y: 3791.64 },
        ],
      },
    },

    { kind: "rule" },
  ],

  cta: {
    heading: "Build a card programme around the way your organisation spends.",
    body: "Discuss your users, payment categories, approval model and reporting needs with INFINIOS.",
    ctaLabel: "Discuss Enterprise Cards",
    ctaHref: "/contact",
    image: `${IMAGES}/cta-arcs.jpg`,
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "96px",
  },
};
