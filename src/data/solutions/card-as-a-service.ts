import type { SolutionDetail } from "./types";

const ICONS = "/icons/solutions/card-as-a-service";
const IMAGES = "/images/solutions";

export const cardAsAService: SolutionDetail = {
  slug: "card-as-a-service",

  metadata: {
    title: "Card-as-a-Service",
    description:
      "Bring issuing, processing, APIs, controls and programme operations together through one connected infrastructure partner.",
  },

  hero: {
    eyebrow: "Card-as-a-Service",
    heading: "Launch a card programme without assembling the stack yourself.",
    body: "Bring issuing, processing, APIs, controls and programme operations together through one connected infrastructure partner.",
    image: `${IMAGES}/card-as-a-service-hero.jpg`,
    primaryCta: { label: "Launch Your Programme", href: "/contact" },
    secondaryCta: { label: "Speak to a Specialist", href: "/contact" },
    metrics: {
      minHeight: 1060,
      paddingTop: 210,
      paddingBottom: 140,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 66, rowsGap: 129 },
      overview: {
        label: "CARD-AS-A-SERVICE",
        heading:
          "The infrastructure behind the card experience, already connected.",
        body: "INFINIOS helps businesses move from a card proposition to a live programme without coordinating every infrastructure component separately. The issuing, transaction and operational layers are structured around the programme from the start.",
      },
      items: [
        {
          title: "Product Configuration",
          body: "Define card types, customer journeys, programme rules and controls.",
          image: `${IMAGES}/card-as-a-service-01.jpg`,
        },
        {
          title: "Card Issuing",
          body: "Create and manage virtual and physical cards through the full lifecycle.",
          image: `${IMAGES}/card-as-a-service-02.jpg`,
        },
        {
          title: "Payment Processing",
          body: "Authorise, route, settle and reconcile card transactions",
          image: `${IMAGES}/card-as-a-service-03.jpg`,
        },
        {
          title: "APIs & Integrations",
          body: "Connect card capabilities to customer and operational systems.",
          image: `${IMAGES}/card-as-a-service-04.jpg`,
        },
        {
          title: "Operational Controls",
          body: "Monitor users, transactions, limits, exceptions and reporting.",
          image: `${IMAGES}/card-as-a-service-05.jpg`,
        },
        {
          title: "Programme Support",
          body: "Coordinate readiness, testing, launch and ongoing operations.",
          image: `${IMAGES}/card-as-a-service-06.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "BUILT FOR",
      metrics: {
        paddingTop: 82,
        labelGap: 155,
        rowGap: 80,
        paddingBottom: 132,
      },
      items: [
        {
          title: "Fintechs",
          body: "Launch consumer or business cards without managing a fragmented provider stack.",
        },
        {
          title: "Banks",
          body: "Extend card capabilities through modern infrastructure and integration models.",
        },
        {
          title: "PSPs",
          body: "Add issuing to an existing payment services proposition.",
        },
        {
          title: "Platforms",
          body: "Embed card functionality inside digital products and workflows.",
        },
        {
          title: "Remittance & MTOs",
          body: "Connect card experiences to transfer, wallet and payout journeys.",
        },
      ],
    },

    { kind: "rule" },

    {
      kind: "journey",
      metrics: { paddingTop: 62 },
      journey: {
        label: "BUILT FOR",
        origin: { x: 171, y: 3823 },
        steps: [
          {
            label: "Programme Design",
            x: 176,
            y: 3969,
            width: 376.28,
            icon: `${ICONS}/programme-design.svg`,
            iconX: 327,
            iconY: 3866,
            iconWidth: 74.13,
            iconHeight: 74,
          },
          {
            label: "Infrastructure Setup",
            x: 651,
            y: 3969,
            width: 338,
            icon: `${ICONS}/infrastructure-setup.svg`,
            iconX: 776,
            iconY: 3866,
            iconWidth: 88.7,
            iconHeight: 80,
          },
          {
            label: "Scheme & BIN Coordination",
            x: 1089,
            y: 3969,
            width: 476,
            icon: `${ICONS}/scheme-bin-coordination.svg`,
            iconX: 1291,
            iconY: 3866,
            iconWidth: 72.21,
            iconHeight: 75,
          },
          {
            label: "Integration",
            x: 176,
            y: 4159,
            width: 229,
            icon: `${ICONS}/integration.svg`,
            iconX: 241,
            iconY: 4102.09,
            iconWidth: 94.9,
            iconHeight: 46.9,
          },
          {
            label: "Testing",
            x: 516,
            y: 4159,
            width: 167,
            icon: `${ICONS}/testing.svg`,
            iconX: 562,
            iconY: 4065,
            iconWidth: 73.65,
            iconHeight: 70.81,
          },
          {
            label: "Launch",
            x: 793.72,
            y: 4159,
            width: 167,
            icon: `${ICONS}/launch.svg`,
            iconX: 854,
            iconY: 4065,
            iconWidth: 46.7,
            iconHeight: 74.76,
          },
          {
            label: "Operations",
            x: 1077,
            y: 4159,
            width: 225,
            icon: `${ICONS}/operations.svg`,
            iconX: 1154.03,
            iconY: 4065,
            iconWidth: 71.89,
            iconHeight: 71.2,
          },
        ],
        connectors: [
          { x: 566.78, y: 3994 },
          { x: 1000.35, y: 3994 },
          { x: 426, y: 4185.36 },
          { x: 704, y: 4185.36 },
          { x: 981, y: 4184 },
        ],
      },
    },
  ],

  cta: {
    heading:
      "Focus on the card proposition. INFINIOS powers the operating layer.",
    body: "Tell us who the programme is for, how the cards will be used and where you plan to launch",
    ctaLabel: "Launch Your Programme",
    ctaHref: "/contact",
    image: `${IMAGES}/cta-arcs.jpg`,
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "81px",
  },
};
