import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { AboutHero } from "@/components/about/hero";
import { AboutIntro } from "@/components/about/intro";
import { AboutVisionMission } from "@/components/about/vision-mission";
import { AboutValues } from "@/components/about/values";
import { AboutFoundations } from "@/components/about/foundations";
import { AboutCareers } from "@/components/about/careers";

export const metadata: Metadata = {
  title: "About us",
  description:
    "INFINIOS builds and operates regulated payment infrastructure that helps institutions and platforms launch, manage and scale financial products with control, clarity and confidence.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutVisionMission />
        <AboutValues />
        <AboutFoundations />
        <AboutCareers />
        <CtaBanner
          heading="Build with an infrastructure partner designed for long-term operations."
          body="Speak with INFINIOS about the product, market or payment programme you are planning."
          ctaLabel="Contact US"
          ctaHref="/contact"
          headingMeasure="579px"
          bodyMeasure="420px"
          paddingTop="73px"
          paddingBottom="72px"
          bodyGap="32px"
          spacingBottom="60px"
        />
      </main>
      <SiteFooter />
    </>
  );
}
