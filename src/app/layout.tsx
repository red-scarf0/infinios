import type { Metadata, Viewport } from "next";
import { Oxanium } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efefef" },
    { media: "(prefers-color-scheme: dark)", color: "#15214e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* The font variable must live on <html>: `--font-sans` is declared on
       :root, and a var() inside a custom property is substituted on the
       element that declares it — so a variable set on <body> is invisible. */
    <html lang="en" className={oxanium.variable}>
      <body className="min-h-dvh overflow-x-hidden">{children}</body>
    </html>
  );
}
