import { DetailPageLayout } from "@/components/shared/detail-page";
import { SolutionsSection } from "@/components/solutions/solutions-section";
import type { SolutionDetail } from "@/data/solutions";

/**
 * A solution detail route: the shared detail layout, with the solutions card
 * row carrying this page's own card open.
 */
export function SolutionDetailPage({ solution }: { solution: SolutionDetail }) {
  return (
    <DetailPageLayout
      page={solution}
      related={
        /* Margin, not padding: the plate is pinned to the section box, so
           padding would slide the content off it. */
        <SolutionsSection
          activeHref={`/solutions/${solution.slug}`}
          className="lg:mt-[120px] lg:pb-[180px]"
        />
      }
    />
  );
}
