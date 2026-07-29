import type { ProductDetail } from "./types";

export const apisIntegrations: ProductDetail = {
  slug: "apis-integrations",

  metadata: {
    title: "APIs & Integrations",
    description:
      "Integrate issuing, processing, wallet and operational capabilities through secure APIs, webhooks and enterprise integration frameworks.",
  },

  hero: {
    eyebrow: "APIs & Integrations",
    heading: "Connect payment infrastructure without rebuilding your product.",
    body: "Integrate issuing, processing, wallet and operational capabilities through secure APIs, webhooks and enterprise integration frameworks.",
    image: "/images/products/apis-integrations-hero.jpg",
    primaryCta: { label: "Discuss an Integration", href: "/contact" },
    secondaryCta: { label: "Request a Demo", href: "/contact" },
  },

  overview: {
    label: "APIS & INTEGRATIONS",
    heading: "Connect the services you need to the systems you already use.",
    body: "INFINIOS provides an API-first integration layer for client applications, operational platforms and enterprise systems. Teams can connect payment capabilities, receive real-time events and move from testing to production through a structured implementation process.",
  },

  features: [
    {
      title: "REST APIs",
      body: "Connect issuing, processing, wallet, transaction and operational services.",
      image: "/images/products/feature-18.jpg",
    },
    {
      title: "Real-Time Webhooks",
      body: "Receive transaction, wallet and lifecycle events as they occur.",
      image: "/images/products/feature-19.jpg",
    },
    {
      title: "Sandbox & Testing",
      body: "Validate integrations and transaction scenarios before production launch.",
      image: "/images/products/feature-20.jpg",
    },
    {
      title: "Secure Access",
      body: "Use controlled authentication, encrypted communication and access management.",
      image: "/images/products/feature-21.jpg",
    },
    {
      title: "Enterprise Integrations",
      body: "Connect with internal platforms, CRMs, ERPs and external service providers.",
      image: "/images/products/feature-22.jpg",
    },
    {
      title: "Implementation Support",
      body: "Work through integration planning, testing, readiness and production launch.",
      image: "/images/products/feature-23.jpg",
    },
  ],

  journey: {
    label: "TRANSACTION FLOW",
    steps: [
      {
        label: "Define Services",
        icon: "/icons/journey/define-services.png",
        x: 314,
        y: 3162,
        width: 297,
        iconX: 429.71,
        iconY: 3079.11,
        iconWidth: 60.5,
        iconHeight: 60,
      },
      {
        label: "Authenticate",
        icon: "/icons/journey/authenticate.png",
        x: 707,
        y: 3162,
        width: 255,
        iconX: 809.58,
        iconY: 3057.52,
        iconWidth: 65.91,
        iconHeight: 81.59,
      },
      {
        label: "Connect APIs",
        icon: "/icons/journey/connect-apis.png",
        x: 1067,
        y: 3162,
        width: 259,
        iconX: 1155,
        iconY: 3061.15,
        iconWidth: 71.51,
        iconHeight: 77.96,
      },
      {
        label: "Configure Webhooks",
        icon: "/icons/journey/configure-webhooks.png",
        x: 303,
        y: 3352,
        width: 367,
        iconX: 453.28,
        iconY: 3279.74,
        iconWidth: 55.84,
        iconHeight: 65.87,
      },
      {
        label: "Test",
        icon: "/icons/journey/test.png",
        x: 770,
        y: 3352,
        width: 127,
        iconX: 810,
        iconY: 3288,
        iconWidth: 49,
        iconHeight: 50,
      },
      {
        label: "Launch",
        icon: "/icons/journey/launch.png",
        x: 994,
        y: 3352,
        width: 149,
        iconX: 1045,
        iconY: 3291,
        iconWidth: 45,
        iconHeight: 45,
      },
    ],
    connectors: [
      { x: 629, y: 3187 },
      { x: 980, y: 3187 },
      { x: 684, y: 3378 },
      { x: 911, y: 3377 },
    ],
  },

  outcomes: {
    label: "BUSINESS OUTCOMES",
    items: [
      {
        title: "Faster Implementation",
        body: "Connect proven payment services instead of building each capability internally.",
      },
      {
        title: "Flexible Architecture",
        body: "Deploy individual modules or connect a broader payment stack.",
      },
      {
        title: "Real-Time Connectivity",
        body: "Keep customer experiences and operational systems updated as events occur.",
      },
    ],
  },

  cta: {
    heading: "Plan an integration around your existing architecture.",
    body: "Share your systems, required services and launch objectives. Our team will help define the integration path.",
    ctaLabel: "Discuss an Integration",
    ctaHref: "/contact",
  },
};
