import type { IndustryDetail } from "./types";

const ICONS = "/icons/industries/remittance";
const IMAGES = "/images/industries";

export const remittanceMoneyTransferOperators: IndustryDetail = {
  slug: "remittance-money-transfer-operators",

  metadata: {
    title: "Remittance & Money Transfer Operators",
    description:
      "Support customer funding, card-linked value, payout flows and operational visibility across cross-border payment journeys.",
  },

  hero: {
    eyebrow: "Remittance & Money Transfer Operators",
    heading: "Connect transfers to wallets, cards and payout experiences.",
    body: "Support customer funding, card-linked value, payout flows and operational visibility across cross-border payment journeys.",
    image: `${IMAGES}/remittance-hero.jpg`,
    primaryCta: {
      label: "Explore Remittance Solutions",
      href: "#capabilities",
    },
    secondaryCta: { label: "Speak to INFINIOS", href: "/contact" },
    metrics: {
      minHeight: 1013,
      paddingTop: 190,
      paddingTopDesktop: 305,
      paddingBottom: 93,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    {
      kind: "features",
      /* The only industry frame whose overview heading runs to two lines. */
      metrics: { paddingTop: 113, rowsGap: 186, headingMeasure: 694 },
      overview: {
        label: "FOR REMITTANCE & MTOS",
        heading: "Extend the transfer journey beyond the transaction itself.",
        body: "INFINIOS helps remittance providers connect transfer activity with wallet funding, card access, payout experiences and operational reporting. Each stage can be integrated into a clearer customer and settlement flow.",
      },
      items: [
        {
          title: "Wallet & Account Funding",
          body: "Support stored value and funding flows connected to transfer journeys.",
          image: `${IMAGES}/remittance-01.jpg`,
        },
        {
          title: "Card-Linked Experiences",
          body: "Give customers access to value through virtual or physical cards.",
          image: `${IMAGES}/remittance-02.jpg`,
        },
        {
          title: "Payout Flows",
          body: "Support payment distribution and operational payout models",
          image: `${IMAGES}/remittance-03.jpg`,
        },
        {
          title: "Processing & Settlement",
          body: "Process transactions and connect activity to settlement operations.",
          image: `${IMAGES}/remittance-04.jpg`,
        },
        {
          title: "Reporting & Reconciliation",
          body: "Improve visibility into transfers, payouts, card activity and settlement",
          image: `${IMAGES}/remittance-05.jpg`,
        },
      ],
    },

    {
      kind: "journey",
      metrics: { paddingTop: 102 },
      journey: {
        label: "REMITTANCE JOURNEY",
        origin: { x: 171, y: 2742 },
        steps: [
          {
            label: "Customer Initiates Transfer",
            x: 176,
            y: 2888,
            width: 463,
            icon: `${ICONS}/customer-initiates-transfer.svg`,
            iconX: 361,
            iconY: 2796,
            iconWidth: 92.63,
            iconHeight: 64,
          },
          {
            label: "Fund Wallet or Account",
            x: 738,
            y: 2888,
            width: 397,
            icon: `${ICONS}/fund-wallet-or-account.svg`,
            iconX: 892.08,
            iconY: 2784,
            iconWidth: 73.68,
            iconHeight: 82.05,
          },
          {
            label: "Process Transfer",
            x: 1236,
            y: 2888,
            width: 306,
            icon: `${ICONS}/process-transfer.svg`,
            iconX: 1347.3,
            iconY: 2784,
            iconWidth: 87.14,
            iconHeight: 81.93,
          },
          {
            label: "Card or Payout Experience",
            x: 165,
            y: 3078,
            width: 435,
            icon: `${ICONS}/card-or-payout-experience.svg`,
            iconX: 344,
            iconY: 3001.65,
            iconWidth: 78,
            iconHeight: 63.2,
          },
          {
            label: "Settlement",
            x: 708,
            y: 3078,
            width: 219,
            icon: `${ICONS}/settlement.svg`,
            iconX: 792,
            iconY: 3002.99,
            iconWidth: 51,
            iconHeight: 60,
          },
          {
            label: "Reporting",
            x: 1035,
            y: 3078,
            width: 207,
            icon: `${ICONS}/reporting.svg`,
            iconX: 1106,
            iconY: 2990,
            iconWidth: 64.72,
            iconHeight: 80.11,
          },
        ],
        connectors: [
          { x: 654, y: 2913 },
          { x: 1148, y: 2913 },
          { x: 618, y: 3104.36 },
          { x: 945, y: 3104.36 },
        ],
      },
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: { paddingTop: 156, labelGap: 155, paddingBottom: 89 },
      items: [
        {
          title: "More Customer\nUtility",
          body: "Connect transfer value to additional ways to hold, access or spend funds.",
        },
        {
          title: "Clearer\nOperations",
          body: "Bring funding, payout and card activity into a more connected view.",
        },
        {
          title: "Flexible\nJourneys",
          body: "Build different experiences around markets, customer needs and payment models.",
        },
      ],
    },

    { kind: "rule", paddingTop: 0 },
  ],

  cta: {
    heading: "Build a broader payment journey around your transfer service.",
    body: "Discuss the funding, wallet, card and payout capabilities relevant to your model.",
    ctaLabel: "Speak to INFINIOS",
    ctaHref: "/contact",
    image: "/images/solutions/cta-slats.jpg",
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "86px",
  },
};
