export const siteConfig = {
  name: "INFINIOS",
  description:
    "One platform. Every rail. Infinite possibility. AI-powered, Central Bank licensed and regulated payment infrastructure connecting card issuing, processing, wallets and stablecoin rails.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;
