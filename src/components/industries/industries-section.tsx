import { ColorFlowText } from "@/components/ui/color-flow-text";
import { CapabilityPlateSection } from "@/components/shared/capability-plate-section";
import { industryCards } from "@/data/industries";

/**
 * "INDUSTRIES" — the five industry cards on the shared capability plate. Same
 * plate the products and solutions frames draw; what differs is the copy and
 * the card, which the industries frame sets 160px tall rather than 132px, with
 * every title starting at the same height whether it runs to one line or two.
 */
export function IndustriesSection({
  activeHref,
  overlap = false,
  className,
}: {
  /** Card to hold open — the detail page you are already on. */
  activeHref?: string;
  /** Pull the plate up over the hero, as on the industries frame. */
  overlap?: boolean;
  className?: string;
}) {
  return (
    <CapabilityPlateSection
      id="industries"
      label="INDUSTRIES"
      heading="The same connected infrastructure, applied to different business outcomes."
      body={
        <>
          <span className="text-brand">
            Industry requirements determine how issuing, processing, wallets,
          </span>
          <ColorFlowText from="#d9d9d9">
            {" "}
            controls and operations should work together. INFINIOS starts with
            the payment flow and builds the infrastructure around it.
          </ColorFlowText>
        </>
      }
      cards={industryCards}
      activeHref={activeHref}
      overlap={overlap}
      className={className}
      metrics={{
        headingGap: 68,
        headingMeasure: 778,
        bodyGap: 36,
        cardsGap: 143,
        paddingBottom: 99,
      }}
      /*
        Frame measures for this row: the resting card is 160px with its glyph
        10px in and the title at 88px; opening it lifts the title to 75px and
        the body always starts at 136px.
      */
      cardMetrics={{
        iconBoxHeight: 58,
        iconMaxWidth: 67,
        paddingTop: 10,
        paddingTopOpen: 10,
        paddingBottom: 16,
        titleSlot: 56,
        titleAlign: "start",
        titleGap: 20,
        titleGapOpen: 7,
        bodyGap: 5,
        /* Travel's copy runs to five lines, so the row reserves its height. */
        reserve: 323,
      }}
    />
  );
}
