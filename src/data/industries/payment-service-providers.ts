import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/psps";
const IMAGES = "/images/industries";

export const paymentServiceProviders: IndustryDetail = {
  slug: "payment-service-providers",

  metadata: {
    title: "Payment Service Providers",
    description:
      "Extend your platform with issuing, wallet services, transaction processing and centralised operational visibility.",
  },

  hero: {
    eyebrow: "Payment Service Providers",
    heading: "Add more capability to the payment services you already provide.",
    body: "Extend your platform with issuing, wallet services, transaction processing and centralised operational visibility.",
    image: `${IMAGES}/psps-hero.jpg`,
    primaryCta: { label: "Explore PSP Solutions", href: "#capabilities" },
    secondaryCta: { label: "Speak to Our Team", href: "/contact" },
    metrics: {
      minHeight: 1044,
      paddingTop: 205,
      paddingBottom: 124,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 82, rowsGap: 129, headingMeasure: 694 },
      overview: {
        label: "FOR PAYMENT SERVICE PROVIDERS",
        heading:
          "Expand the proposition without expanding infrastructure complexity.",
        body: "INFINIOS helps payment service providers add connected capabilities around their existing platform. Introduce issuing, wallet or processing services while maintaining a clearer view of transactions, settlement and programme operations.",
      },
      items: [
        {
          title: "Processing",
          body: "Support authorisation, routing, settlement and transaction reporting.",
          image: `${IMAGES}/psps-01.jpg`,
        },
        {
          title: "Issuing",
          body: "Add virtual and physical card programmes to the service portfolio.",
          image: `${IMAGES}/psps-02.jpg`,
        },
        {
          title: "Wallet Services",
          body: "Enable balances, funding, transfers and account-based payment journeys.",
          image: `${IMAGES}/psps-03.jpg`,
        },
        {
          title: "Operational Management",
          body: "Centralise monitoring, reconciliation, controls and reporting.",
          image: `${IMAGES}/psps-04.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: { paddingTop: 95, labelGap: 155, paddingBottom: 131 },
      items: [
        {
          title: "Broader\nOffering",
          body: "Add capabilities that create new value for merchants, clients and platforms.",
        },
        {
          title: "Connected\nOperations",
          body: "Keep transaction and programme information visible across the expanded service.",
        },
        {
          title: "Flexible\nGrowth",
          body: "Introduce individual modules or a broader connected infrastructure stack.",
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 0 },
      journey: {
        label: "PSP JOURNEY",
        origin: { x: 171, y: 3093 },
        steps: [
          {
            label: "Identify Client Need",
            x: 176,
            y: 3239,
            width: 353,
            icon: `${ICONS}/identify-client-need.svg`,
            iconX: 290,
            iconY: 3136,
            iconWidth: 79.17,
            iconHeight: 73.79,
          },
          {
            label: "Select Capability",
            x: 628,
            y: 3239,
            width: 296,
            icon: `${ICONS}/select-capability.svg`,
            iconX: 738,
            iconY: 3136,
            iconWidth: 64.72,
            iconHeight: 80.11,
          },
          {
            label: "Connect Infrastructure",
            x: 1034,
            y: 3239,
            width: 403,
            icon: `${ICONS}/connect-infrastructure.svg`,
            iconX: 1188,
            iconY: 3133,
            iconWidth: 94.96,
            iconHeight: 78.73,
          },
          {
            label: "Configure Service",
            x: 165,
            y: 3429,
            width: 306,
            icon: `${ICONS}/configure-service.svg`,
            iconX: 284,
            iconY: 3359,
            iconWidth: 68,
            iconHeight: 58,
          },
          {
            label: "Launch",
            x: 578,
            y: 3429,
            width: 166,
            icon: `${ICONS}/launch.svg`,
            iconX: 636,
            iconY: 3353.99,
            iconWidth: 51,
            iconHeight: 60,
          },
          {
            label: "Expand Offering",
            x: 857,
            y: 3429,
            width: 299,
            icon: `${ICONS}/expand-offering.svg`,
            iconX: 968,
            iconY: 3353.99,
            iconWidth: 51,
            iconHeight: 60,
          },
        ],
        connectors: [
          { x: 544, y: 3264 },
          { x: 946, y: 3264 },
          { x: 488, y: 3455.36 },
          { x: 767, y: 3455.36 },
        ],
      },
    },

    { kind: "rule", paddingTop: 172 },
  ],

  cta: {
    heading:
      "Extend your payment proposition through connected infrastructure.",
    body: "Discuss the capability, client segment and operating model you plan to add.",
    ctaLabel: "Speak to Our Team",
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
