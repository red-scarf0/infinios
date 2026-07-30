import type { SolutionDetail } from "./types";

const ICONS = "/icons/solutions/programme-launch";
const IMAGES = "/images/solutions";

export const programmeLaunchBinSponsorship: SolutionDetail = {
  slug: "programme-launch-bin-sponsorship",

  metadata: {
    title: "Programme Launch & BIN Sponsorship",
    description:
      "Coordinate infrastructure, BIN and scheme requirements, integration, operational readiness and launch through one structured process.",
  },

  hero: {
    eyebrow: "Programme Launch & BIN Sponsorship",
    heading: "A clear path from payment concept to live programme.",
    body: "Coordinate infrastructure, BIN and scheme requirements, integration, operational readiness and launch through one structured process.",
    image: `${IMAGES}/programme-launch-hero.jpg`,
    primaryCta: { label: "Launch Your Programme", href: "/contact" },
    secondaryCta: { label: "Speak to INFINIOS", href: "/contact" },
    metrics: {
      minHeight: 1039,
      paddingTop: 183,
      paddingTopDesktop: 263,
      paddingBottom: 119,
      bodyGap: 1,
      ctaGap: 61,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      metrics: { paddingTop: 87, rowsGap: 129 },
      /* The only frame that runs its overview heading without supporting copy. */
      overview: {
        label: "PROGRAMME LAUNCH",
        heading:
          "Bring the technical, operational and ecosystem workstreams together.",
      },
      items: [
        {
          title: "Programme Assessment",
          body: "Define the business model, user segment, market and launch priorities.",
          image: `${IMAGES}/programme-launch-01.jpg`,
        },
        {
          title: "Infrastructure Planning",
          body: "Map the issuing, processing, wallet, API and operational requirements.",
          image: `${IMAGES}/programme-launch-02.jpg`,
        },
        {
          title: "BIN & Scheme Coordination",
          body: "Support the programme structure and relevant ecosystem requirements.",
          image: `${IMAGES}/programme-launch-03.jpg`,
        },
        {
          title: "Integration & Configuration",
          body: "Connect systems, configure products and establish operational rules.",
          image: `${IMAGES}/programme-launch-04.jpg`,
        },
        {
          title: "Testing & Readiness",
          body: "Validate journeys, controls, reporting and support processes before launch.",
          image: `${IMAGES}/programme-launch-05.jpg`,
        },
        {
          title: "Go Live & Stabilisation",
          body: "Support launch monitoring and early-stage operational performance.",
          image: `${IMAGES}/programme-launch-06.jpg`,
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 62 },
      journey: {
        label: "LAUNCH JOURNEY",
        origin: { x: 171, y: 2909 },
        steps: [
          {
            label: "Assess",
            x: 144,
            y: 3055,
            width: 168,
            icon: `${ICONS}/assess.svg`,
            iconX: 200,
            iconY: 2955,
            iconWidth: 55.71,
            iconHeight: 75.36,
          },
          {
            label: "Plan",
            x: 402,
            y: 3055,
            width: 128,
            icon: `${ICONS}/plan.svg`,
            iconX: 428,
            iconY: 2954.52,
            iconWidth: 65.91,
            iconHeight: 81.59,
          },
          {
            label: "Coordinate",
            x: 639,
            y: 3055,
            width: 244,
            icon: `${ICONS}/coordinate.svg`,
            iconX: 729,
            iconY: 2960,
            iconWidth: 65,
            iconHeight: 76,
          },
          {
            label: "Integrate",
            x: 974,
            y: 3055,
            width: 179,
            icon: `${ICONS}/integrate.svg`,
            iconX: 1030,
            iconY: 2972,
            iconWidth: 66.61,
            iconHeight: 63.13,
          },
          {
            label: "Test",
            x: 1243,
            y: 3055,
            width: 131,
            icon: `${ICONS}/test.svg`,
            iconX: 1272,
            iconY: 2971.42,
            iconWidth: 73,
            iconHeight: 65,
          },
          {
            label: "Prepare Operations",
            x: 154,
            y: 3252,
            width: 356,
            icon: `${ICONS}/prepare-operations.svg`,
            iconX: 306,
            iconY: 3186,
            iconWidth: 52.89,
            iconHeight: 53.29,
          },
          {
            label: "Go Live",
            x: 603,
            y: 3252,
            width: 151,
            icon: `${ICONS}/go-live.svg`,
            iconX: 653,
            iconY: 3174,
            iconWidth: 51.04,
            iconHeight: 64.22,
          },
        ],
        connectors: [
          { x: 322, y: 3080 },
          { x: 540.7, y: 3080 },
          { x: 894, y: 3080 },
          { x: 1164, y: 3080 },
          { x: 525, y: 3276.64 },
        ],
      },
    },

    {
      kind: "note",
      body: "Programme structure and availability depend on the relevant market, scheme and regulatory requirements.",
      paddingTop: 116,
      paddingBottom: 144,
    },
  ],

  cta: {
    heading:
      "Move forward with a programme plan that connects every workstream.",
    body: "Share the market, product and operating model you are considering. INFINIOS will help define the path to launch.",
    ctaLabel: "Launch Your Programme",
    ctaHref: "/contact",
    image: `${IMAGES}/cta-arcs.jpg`,
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "86px",
  },
};
