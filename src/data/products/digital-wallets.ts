import type { ProductDetail } from "./types";

export const digitalWallets: ProductDetail = {
  slug: "digital-wallets",

  metadata: {
    title: "Digital Wallets",
    description:
      "Build customer, business or platform wallets that connect funding, payments, transfers and real-time transaction visibility.",
  },

  hero: {
    eyebrow: "Digital Wallets",
    heading:
      "Put balances, funding and transfers inside your customer experience.",
    body: "Build customer, business or platform wallets that connect funding, payments, transfers and real-time transaction visibility.",
    image: "/images/products/digital-wallets-hero.jpg",
    primaryCta: { label: "Explore Wallet Capabilities", href: "#capabilities" },
    secondaryCta: { label: "Speak to an Expert", href: "/contact" },
  },

  overview: {
    label: "DIGITAL WALLETS",
    heading: "Wallet infrastructure shaped around the way users move money.",
    body: "INFINIOS supports wallet-led experiences across customer applications, business platforms and closed-loop ecosystems. Connect account creation, funding, payments and transfers while maintaining operational visibility behind the experience.",
  },

  features: [
    {
      title: "Flexible Wallet Models",
      body: "Support customer, business, platform and closed-loop wallet structures.",
      image: "/images/products/feature-07.jpg",
    },
    {
      title: "Funding & Withdrawals",
      body: "Enable top-ups, bank funding, card funding, transfers and payout flows.",
      image: "/images/products/feature-08.jpg",
    },
    {
      title: "Payments & Transfers",
      body: "Move value between users, accounts, merchants and connected services.",
      image: "/images/products/feature-09.jpg",
    },
    {
      title: "Embedded Experiences",
      body: "Place wallet functionality directly inside applications and platform journeys.",
      image: "/images/products/feature-10.jpg",
    },
    {
      title: "Real-Time Events",
      body: "Receive transaction, balance and lifecycle updates through connected services.",
      image: "/images/products/feature-11.jpg",
    },
    {
      title: "Operational Control",
      body: "Monitor balances, activity, exceptions and reconciliation requirements centrally.",
      image: "/images/products/feature-12.jpg",
    },
  ],

  journey: {
    label: "PROGRAMME JOURNEY",
    steps: [
      {
        label: "Create Account",
        icon: "/icons/journey/create-account.png",
        x: 291,
        y: 3162,
        width: 348,
        iconX: 425,
        iconY: 3059,
        iconWidth: 64.72,
        iconHeight: 80.11,
      },
      {
        label: "Fund Wallet",
        icon: "/icons/journey/fund-wallet.png",
        x: 742,
        y: 3162,
        width: 255,
        iconX: 830.68,
        iconY: 3081.52,
        iconWidth: 68.82,
        iconHeight: 57.59,
      },
      {
        label: "Hold Balance",
        icon: "/icons/journey/hold-balance.png",
        x: 1100,
        y: 3162,
        width: 267,
        iconX: 1197,
        iconY: 3081.52,
        iconWidth: 60.7,
        iconHeight: 60.1,
      },
      {
        label: "Pay or Transfer",
        icon: "/icons/journey/pay-or-transfer.png",
        x: 291,
        y: 3352,
        width: 298,
        iconX: 398.92,
        iconY: 3289.96,
        iconWidth: 66.53,
        iconHeight: 45.82,
      },
      {
        label: "Monitor Activity",
        icon: "/icons/journey/monitor-activity.png",
        x: 690,
        y: 3352,
        width: 298,
        iconX: 811,
        iconY: 3271.99,
        iconWidth: 70,
        iconHeight: 70,
      },
      {
        label: "Reconcile",
        icon: "/icons/journey/reconcile.png",
        x: 1106,
        y: 3352,
        width: 193,
        iconX: 1177.35,
        iconY: 3281.99,
        iconWidth: 50,
        iconHeight: 50,
      },
    ],
    connectors: [
      { x: 656, y: 3187 },
      { x: 1014, y: 3187 },
      { x: 598, y: 3378 },
      { x: 1007, y: 3377 },
    ],
  },

  outcomes: {
    label: "BUSINESS OUTCOMES",
    items: [
      {
        title: "Launch Faster",
        body: "Keep funding, balances and payments inside one connected experience.",
      },
      {
        title: "Control Every Use",
        body: "Build wallet models around different customer and business needs.",
      },
      {
        title: "Operate with Clarity",
        body: "Give teams visibility into how value enters, moves through and leaves the ecosystem.",
      },
    ],
  },

  cta: {
    heading: "Build a wallet experience around your business model.",
    body: "Tell us how users need to fund, hold, spend or transfer value. We will map the infrastructure behind the journey.",
    ctaLabel: "Speak to an Expert",
    ctaHref: "/contact",
  },
};
