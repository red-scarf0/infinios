import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import type { ProductDetail } from "@/data/products";

import { BusinessOutcomes } from "./business-outcomes";
import { ProductCapabilities } from "./capabilities";
import { ProductDetailHero } from "./hero";
import { ProgrammeJourney } from "./programme-journey";

/**
 * The shared product detail layout.
 *
 * All five product frames run the same sections in the same order, so each
 * route supplies a `ProductDetail` and nothing else. Section-specific spacing
 * lives with the sections; only the closing banner's measures are passed here,
 * because the frame uses a smaller plate than the homepage and About banners.
 */
export function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <>
      <SiteHeader />
      <main>
        <ProductDetailHero hero={product.hero} />
        <ProductCapabilities
          overview={product.overview}
          features={product.features}
        />
        <ProgrammeJourney journey={product.journey} />
        <BusinessOutcomes outcomes={product.outcomes} />
        <CtaBanner
          heading={product.cta.heading}
          body={product.cta.body}
          ctaLabel={product.cta.ctaLabel}
          ctaHref={product.cta.ctaHref}
          headingClassName="lg:text-[36px]"
          headingMeasure="467px"
          bodyMeasure="474px"
          paddingTop="150px"
          paddingBottom="52px"
          bodyGap="14px"
          spacingBottom="81px"
        />
      </main>
      <SiteFooter />
    </>
  );
}
