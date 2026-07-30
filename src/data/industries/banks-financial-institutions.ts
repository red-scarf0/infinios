import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/banks";
const IMAGES = "/images/industries";

export const banksFinancialInstitutions: IndustryDetail = {
  slug: "banks-financial-institutions",

  metadata: {
    title: "Banks & Financial Institutions",
    description:
      "Add or extend issuing, processing and wallet services through infrastructure designed for regulated financial institutions.",
  },

  hero: {
    eyebrow: "Banks & Financial Institutions",
    heading: "Modernise payment capabilities without compromising control.",
    body: "Add or extend issuing, processing and wallet services through infrastructure designed for regulated financial institutions.",
    image: `${IMAGES}/banks-hero.jpg`,
    primaryCta: { label: "Discuss Modernisation", href: "/contact" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
    metrics: {
      minHeight: 1011,
      paddingTop: 205,
      paddingTopDesktop: 285,
      paddingBottom: 91,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 115, rowsGap: 129, headingMeasure: 694 },
      overview: {
        label: "FOR BANKS & FINANCIAL INSTITUTIONS",
        heading:
          "Introduce new capabilities around the systems and governance already in place.",
        body: "INFINIOS supports institutions modernising card, wallet and payment operations. Modular infrastructure can be integrated around established environments, helping teams introduce new products while maintaining operational oversight and regulated discipline.",
      },
      items: [
        {
          title: "Digital Issuing",
          body: "Extend card products and customer payment experiences",
          image: `${IMAGES}/banks-01.jpg`,
        },
        {
          title: "Processing Modernisation",
          body: "Strengthen transaction processing, monitoring and reporting.",
          image: `${IMAGES}/banks-02.jpg`,
        },
        {
          title: "Wallet Infrastructure",
          body: "Build account-based and wallet-led digital journeys.",
          image: `${IMAGES}/banks-03.jpg`,
        },
        {
          title: "Enterprise Controls",
          body: "Support permissions, reporting and compliance-aware operational workflows.",
          image: `${IMAGES}/banks-04.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: { paddingTop: 95, labelGap: 155, paddingBottom: 160 },
      items: [
        {
          title: "Modernise\nSelectively",
          body: "Introduce the capabilities required without replacing every existing system",
        },
        {
          title: "Maintain\nOversight",
          body: "Keep access, controls and reporting connected to the operating model.",
        },
        {
          title: "Launch New\nExperiences",
          body: "Bring modern payment products to market through structured integration.",
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 0 },
      journey: {
        label: "MODERNISATION JOURNEY",
        origin: { x: 171, y: 3093 },
        steps: [
          {
            label: "Define Strategy",
            x: 176,
            y: 3239,
            width: 301,
            icon: `${ICONS}/define-strategy.svg`,
            iconX: 282.27,
            iconY: 3136,
            iconWidth: 87.78,
            iconHeight: 77.88,
          },
          {
            label: "Select Infrastructure",
            x: 578,
            y: 3239,
            width: 353,
            icon: `${ICONS}/select-infrastructure.svg`,
            iconX: 707.47,
            iconY: 3136,
            iconWidth: 94.96,
            iconHeight: 78.73,
          },
          {
            label: "Configure Product",
            x: 1036,
            y: 3239,
            width: 336,
            icon: `${ICONS}/configure-product.svg`,
            iconX: 1157.04,
            iconY: 3136,
            iconWidth: 94.21,
            iconHeight: 79.73,
          },
          {
            label: "Integrate",
            x: 165,
            y: 3429,
            width: 184,
            icon: `${ICONS}/integrate.svg`,
            iconX: 206,
            iconY: 3333,
            iconWidth: 102.28,
            iconHeight: 93.12,
          },
          {
            label: "Prepare Operations",
            x: 458,
            y: 3429,
            width: 330,
            icon: `${ICONS}/prepare-operations.svg`,
            iconX: 590.91,
            iconY: 3340,
            iconWidth: 72.18,
            iconHeight: 74,
          },
          {
            label: "Launch",
            x: 896,
            y: 3429,
            width: 172,
            icon: `${ICONS}/launch.svg`,
            iconX: 957,
            iconY: 3360,
            iconWidth: 50,
            iconHeight: 53.75,
          },
        ],
        connectors: [
          { x: 494, y: 3264 },
          { x: 947.56, y: 3264 },
          { x: 368, y: 3455.36 },
          { x: 806, y: 3455.36 },
        ],
      },
    },

    { kind: "rule", paddingTop: 172 },
  ],

  cta: {
    heading: "Discuss the capability you need to modernise next.",
    body: "INFINIOS will help define how it can connect to the institution, operating model and customer experience.",
    ctaLabel: "Discuss Modernisation",
    ctaHref: "/contact",
    image: "/images/solutions/cta-slats.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "114px",
  },
};
