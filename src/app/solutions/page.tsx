import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JourneyFlow } from "@/components/shared/journey-flow";
import { SolutionsHero } from "@/components/solutions/hero";
import { SolutionsSection } from "@/components/solutions/solutions-section";
import { deliveryModel } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Launch card programmes, automate business payments, embed wallet experiences and enter new markets through connected payment infrastructure and operational support.",
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SolutionsHero />
        <SolutionsSection overlap />

        {/* The frame rules off the card plate before the delivery model —
            a 1px #848484 hairline, not the 3px rules the detail frames use. */}
        <span aria-hidden className="block h-px w-full bg-[#848484]" />

        <JourneyFlow journey={deliveryModel} metrics={{ paddingTop: 45 }} />

        <section className="bg-white pt-14 pb-14 lg:pt-[192px] lg:pb-[144px]">
          <Container>
            <Reveal>
              <p className="group/flow max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:ml-[9px] lg:text-[40px]">
                <span className="text-brand">
                  The process begins with the business model and desired
                  outcome,{" "}
                </span>
                <ColorFlowText from="#b1b1b1">
                  then defines the infrastructure, controls, integrations and
                  operating model required to support it.
                </ColorFlowText>
              </p>
            </Reveal>
          </Container>
        </section>

        <CtaBanner
          heading="Bring us the use case, not a completed infrastructure plan."
          body="Our team will help translate the business requirement into a practical payment programme."
          ctaLabel="Discuss Your Use Case"
          ctaHref="/contact"
          headingMeasure="529px"
          bodyMeasure="420px"
          paddingTop="165px"
          paddingBottom="59px"
          bodyGap="9px"
          spacingBottom="128px"
        />
      </main>
      <SiteFooter />
    </>
  );
}
