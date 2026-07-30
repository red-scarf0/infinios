import type { SolutionDetail } from "./types";

const ICONS = "/icons/solutions/wallet-payment-solutions";
const IMAGES = "/images/solutions";

export const walletPaymentSolutions: SolutionDetail = {
  slug: "wallet-payment-solutions",

  metadata: {
    title: "Wallet & Payment Solutions",
    description:
      "Build customer and business payment experiences around balances, funding flows, transfers, payouts and embedded payment functionality.",
  },

  hero: {
    eyebrow: "Wallet & Payment Solutions",
    heading:
      "Create wallet-led journeys that connect funding, transfers and payments.",
    body: "Build customer and business payment experiences around balances, funding flows, transfers, payouts and embedded payment functionality.",
    image: `${IMAGES}/wallet-payment-solutions-hero.jpg`,
    primaryCta: { label: "Explore Wallet Solutions", href: "#capabilities" },
    secondaryCta: { label: "Speak to Our Team", href: "/contact" },
    metrics: {
      minHeight: 1012,
      paddingTop: 175,
      paddingTopDesktop: 255,
      // This frame indents the page name to x=188; its siblings sit flush.
      eyebrowIndent: 17,
      paddingBottom: 92,
      bodyGap: 41,
      ctaGap: 21,
      primaryWidth: 343,
      secondaryWidth: 290,
    },
  },

  sections: [
    /* The wallet frame is the one that opens its journey above the rows. */
    {
      kind: "features",
      metrics: { paddingTop: 114 },
      overview: {
        label: "WALLET & PAYMENT SOLUTIONS",
        heading:
          "Turn separate payment actions into one connected customer journey.",
        body: "INFINIOS combines wallet infrastructure with payment processing and operational controls, helping businesses create experiences where users can fund, hold, move and spend value without leaving the product environment.",
      },
    },

    {
      kind: "journey",
      metrics: { paddingTop: 53 },
      journey: {
        label: "CUSTOMER JOURNEY",
        origin: { x: 171, y: 1526 },
        steps: [
          {
            label: "Onboard User",
            x: 313.73,
            y: 1672,
            width: 297.38,
            icon: `${ICONS}/onboard-user.svg`,
            iconX: 416,
            iconY: 1566,
            iconWidth: 93.19,
            iconHeight: 90.12,
          },
          {
            label: "Create Wallet",
            x: 707.22,
            y: 1672,
            width: 255.02,
            icon: `${ICONS}/create-wallet.svg`,
            iconX: 799.32,
            iconY: 1584.22,
            iconWidth: 58.37,
            iconHeight: 65,
          },
          {
            label: "Fund Account",
            x: 1067.49,
            y: 1672,
            width: 259.47,
            icon: `${ICONS}/fund-account.svg`,
            iconX: 1156,
            iconY: 1580,
            iconWidth: 81.93,
            iconHeight: 73,
          },
          {
            label: "Hold Balance",
            x: 320,
            y: 1862,
            width: 252,
            icon: `${ICONS}/hold-balance.svg`,
            iconX: 398.4,
            iconY: 1771.89,
            iconWidth: 93,
            iconHeight: 77.98,
          },
          {
            label: "Pay or Transfer",
            x: 679,
            y: 1862,
            width: 261,
            icon: `${ICONS}/pay-or-transfer.svg`,
            iconX: 774,
            iconY: 1787.4,
            iconWidth: 70.08,
            iconHeight: 56.18,
          },
          {
            label: "Monitor & Reconcile",
            x: 1049,
            y: 1862,
            width: 341,
            icon: `${ICONS}/monitor-reconcile.svg`,
            iconX: 1188,
            iconY: 1785.04,
            iconWidth: 63.34,
            iconHeight: 64.83,
          },
        ],
        connectors: [
          { x: 629, y: 1697 },
          { x: 980, y: 1697 },
          { x: 594, y: 1888.36 },
          { x: 954, y: 1887 },
        ],
      },
    },

    {
      kind: "features",
      metrics: { paddingTop: 146 },
      items: [
        {
          title: "Fintech Applications",
          body: "Add balances, funding and payment journeys to digital financial products.",
          image: `${IMAGES}/wallet-payment-solutions-01.jpg`,
        },
        {
          title: "Marketplaces & Platforms",
          body: "Create wallets for users, merchants or partners within a shared ecosystem.",
          image: `${IMAGES}/wallet-payment-solutions-02.jpg`,
        },
        {
          title: "Remittance",
          body: "Connect wallet funding, transfers, payouts and card-linked experiences.",
          image: `${IMAGES}/wallet-payment-solutions-03.jpg`,
        },
        {
          title: "Travel",
          body: "Support traveller or operational wallets, disbursements and settlement workflows.",
          image: `${IMAGES}/wallet-payment-solutions-04.jpg`,
        },
        {
          title: "Enterprise Payments",
          body: "Use wallets for internal funding, distribution and controlled operational payments.",
          image: `${IMAGES}/wallet-payment-solutions-05.jpg`,
        },
      ],
    },

    {
      kind: "cards",
      label: "BUSINESS OUTCOMES",
      metrics: {
        paddingTop: 59,
        labelGap: 130,
        cardMinHeight: 276,
        paddingBottom: 161,
      },
      items: [
        {
          title: "A Connected\nExperience",
          body: "Keep funding, balances and payments within one product journey.",
        },
        {
          title: "Flexible\nUse Cases",
          body: "Configure wallet flows for customers, businesses, users or partners.",
        },
        {
          title: "Operational\nOversight",
          body: "Monitor value movement, exceptions and reconciliation from a central view.",
        },
      ],
    },
  ],

  cta: {
    heading: "Map the wallet journey before choosing the infrastructure.",
    body: "Share how value should enter, move through and leave your ecosystem. We will help structure the solution behind it.",
    ctaLabel: "Speak to Our Team",
    ctaHref: "/contact",
    image: `${IMAGES}/cta-slats.jpg`,
    headingMeasure: "553px",
    bodyMeasure: "474px",
    paddingTop: "124px",
    paddingBottom: "40px",
    bodyGap: "52px",
    spacingBottom: "105px",
  },
};
