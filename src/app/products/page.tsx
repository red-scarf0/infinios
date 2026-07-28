import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProductsHero } from "@/components/products/hero";
import { ProductsSection } from "@/components/products/products-section";
import { BeyondTransaction } from "@/components/products/beyond-transaction";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Deploy issuing, processing, wallet and operational capabilities individually or as one connected stack.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProductsHero />
        <ProductsSection />
        <BeyondTransaction />
        <CtaBanner
          heading="Choose the capabilities that fit your programme."
          body="Explore each product or speak with our team about a connected infrastructure model."
          ctaLabel="Speak to an Expert"
          ctaHref="/contact"
          headingMeasure="599px"
          bodyMeasure="420px"
          paddingTop="210px"
          paddingBottom="51px"
          bodyGap="30px"
          spacingBottom="128px"
        />
      </main>
      <SiteFooter />
    </>
  );
}
