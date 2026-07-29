import { ColorFlowText } from "@/components/ui/color-flow-text";
import { CapabilityPlateSection } from "@/components/shared/capability-plate-section";
import { solutionCards } from "@/data/solutions";

/**
 * "INFINIOS SOLUTIONS" — the five solution cards on the shared capability
 * plate. Content and the frame's own measures; the plate itself lives in
 * `CapabilityPlateSection`, which the industries frame draws identically.
 */
export function SolutionsSection({
  activeHref,
  overlap = false,
  className,
}: {
  /** Card to hold open — the detail page you are already on. */
  activeHref?: string;
  /** Pull the plate up over the hero, as on the solutions frame. */
  overlap?: boolean;
  className?: string;
}) {
  return (
    <CapabilityPlateSection
      id="solutions"
      label="INFINIOS SOLUTIONS"
      heading="Different business needs, one connected foundation."
      body={
        <>
          <span className="text-brand">
            INFINIOS solutions combine products, integrations and operational
          </span>
          <ColorFlowText from="#d1d1d1">
            {" "}
            support around a defined use case. Instead of assembling separate
            providers, clients can work through one structured model from
            programme design to live operations.
          </ColorFlowText>
        </>
      }
      cards={solutionCards}
      activeHref={activeHref}
      overlap={overlap}
      className={className}
      metrics={{
        headingGap: 96,
        headingMeasure: 737,
        bodyGap: 95,
        cardsGap: 68,
      }}
      /*
        Frame measures for this row: the resting card packs its glyph and title
        into 132px (4px of headroom, 16px under the title), and the expanded
        card opens to 22px with the body always starting at the same height
        whether the title runs to one line or two.
      */
      cardMetrics={{
        iconBoxHeight: 56,
        iconMaxWidth: 69,
        paddingTop: 4,
        paddingTopOpen: 22,
        paddingBottom: 16,
        titleSlot: 56,
        titleGap: 0,
        bodyGap: 2,
        reserve: 300,
      }}
    />
  );
}
