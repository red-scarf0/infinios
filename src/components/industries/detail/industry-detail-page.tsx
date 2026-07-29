import { DetailPageLayout } from "@/components/shared/detail-page";
import { IndustriesSection } from "@/components/industries/industries-section";
import type { IndustryDetail } from "@/data/industries";

/**
 * An industry detail route: the shared detail layout, with the industries card
 * row carrying this page's own card open.
 */
export function IndustryDetailPage({ industry }: { industry: IndustryDetail }) {
  return (
    <DetailPageLayout
      page={industry}
      related={
        /* Margin, not padding: the plate is pinned to the section box, so
           padding would slide the content off it. */
        <IndustriesSection
          activeHref={`/industries/${industry.slug}`}
          className="lg:mt-[120px] lg:pb-[180px]"
        />
      }
    />
  );
}
