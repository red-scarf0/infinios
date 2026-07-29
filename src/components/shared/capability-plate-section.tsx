import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { PlateBackdrop } from "@/components/shared/plate-backdrop";
import {
  CapabilityCardRow,
  type CapabilityCard,
  type CapabilityCardMetrics,
} from "@/components/shared/capability-cards";
import { cn } from "@/lib/utils";

/**
 * The capability plate — "INFINIOS PRODUCTS", "INFINIOS SOLUTIONS" and
 * "INDUSTRIES" are the same section in three frames: a 1894x856 plate (r=89,
 * radial wash from #6B93DE to white), an eyebrow, a heading, a two-tone
 * paragraph and the card row overhanging the plate's bottom edge.
 *
 * The solutions and industries pages overlap the plate onto the hero exactly
 * as drawn; their detail pages reuse the whole section further down the page,
 * with the current card already open, so the overlap is opt-in.
 */
export function CapabilityPlateSection({
  id,
  label,
  heading,
  body,
  cards,
  cardMetrics,
  activeHref,
  overlap = false,
  metrics = {},
  className,
}: {
  id: string;
  label: string;
  heading: string;
  /** Two-tone paragraph — the caller supplies the split. */
  body: React.ReactNode;
  cards: CapabilityCard[];
  cardMetrics?: CapabilityCardMetrics;
  /** Card to hold open — the detail page you are already on. */
  activeHref?: string;
  /** Pull the plate up over the hero, as on both frames. */
  overlap?: boolean;
  metrics?: {
    headingGap?: number;
    headingMeasure?: number;
    bodyGap?: number;
    cardsGap?: number;
    paddingBottom?: number;
  };
  className?: string;
}) {
  const {
    headingGap = 96,
    headingMeasure = 737,
    bodyGap = 95,
    cardsGap = 68,
    paddingBottom = 122,
  } = metrics;

  return (
    <section
      id={id}
      className={cn(
        "relative pt-0 pb-16 lg:pb-[var(--section-pb)]",
        overlap && "lg:-mt-[190px]",
        className,
      )}
      style={{ "--section-pb": `${paddingBottom}px` } as React.CSSProperties}
    >
      <PlateBackdrop />

      {/*
        The frames inset this block 203px from the left at 1920. Expressed as a
        fluid gutter so it resolves to the frame's inset at the design width
        and falls back to the page gutter on smaller screens, where a fixed
        203px would leave the card row barely 600px wide.
      */}
      <div className="relative px-5 pt-14 sm:px-8 lg:px-[max(3rem,calc((100vw-1514px)/2))] lg:pt-[171px]">
        <Reveal className="lg:ml-[8px]">
          <SectionLabel>{label}</SectionLabel>
        </Reveal>

        <Reveal stagger={0.14}>
          <RevealItem>
            <h2
              className="mt-8 text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:mt-[var(--heading-gap)] lg:ml-[3px] lg:text-[50px]"
              style={
                {
                  maxWidth: headingMeasure,
                  "--heading-gap": `${headingGap}px`,
                } as React.CSSProperties
              }
            >
              {heading}
            </h2>
          </RevealItem>

          <RevealItem>
            <p
              className="group/flow mt-6 max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[var(--body-gap)] lg:ml-[9px] lg:text-[40px]"
              style={{ "--body-gap": `${bodyGap}px` } as React.CSSProperties}
            >
              {body}
            </p>
          </RevealItem>
        </Reveal>

        <Reveal
          className="mt-12 lg:mt-[var(--cards-gap)]"
          style={{ "--cards-gap": `${cardsGap}px` } as React.CSSProperties}
        >
          <CapabilityCardRow
            items={cards}
            activeHref={activeHref}
            metrics={cardMetrics}
          />
        </Reveal>
      </div>
    </section>
  );
}
