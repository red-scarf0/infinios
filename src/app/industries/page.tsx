import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JourneyFlow } from "@/components/shared/journey-flow";
import { IndustriesHero } from "@/components/industries/hero";
import { IndustriesSection } from "@/components/industries/industries-section";
import { industryApproach } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Different businesses move money differently. INFINIOS connects the capabilities each industry needs without forcing every programme into the same model.",
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <IndustriesHero />
        <IndustriesSection overlap />

        {/* The frame rules off the card plate before the approach flow —
            a 1px #848484 hairline, not the 3px rules the detail frames use. */}
        <span aria-hidden className="block h-px w-full bg-[#848484]" />

        <JourneyFlow
          journey={industryApproach}
          metrics={{ paddingTop: 36, paddingBottom: 140 }}
        />

        <CtaBanner
          heading="Discuss the payment flow specific to your industry."
          body="Our team will help identify the infrastructure, controls and operating model required around it."
          ctaLabel="Speak to Our Team"
          ctaHref="/contact"
          headingMeasure="529px"
          bodyMeasure="420px"
          paddingTop="165px"
          paddingBottom="59px"
          bodyGap="9px"
          spacingBottom="79px"
        />
      </main>
      <SiteFooter />
    </>
  );
}
