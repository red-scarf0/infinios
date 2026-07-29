import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { DetailHero } from "@/components/shared/detail-hero";
import { FeatureRows } from "@/components/shared/feature-rows";
import { JourneyFlow } from "@/components/shared/journey-flow";
import { NotchedGrid } from "@/components/shared/notched-grid";
import type { ProductDetail } from "@/data/products";

/**
 * The shared product detail layout.
 *
 * All five product frames run the same sections in the same order, so each
 * route supplies a `ProductDetail` and nothing else. The sections are the same
 * components the solution detail pages use; the measures passed here are the
 * product frames' own.
 */
export function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <>
      <SiteHeader />
      <main>
        <DetailHero hero={product.hero} />
        <FeatureRows overview={product.overview} features={product.features} />
        <JourneyFlow journey={product.journey} />
        <NotchedGrid
          label={product.outcomes.label}
          items={product.outcomes.items}
          ruled
        />
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
