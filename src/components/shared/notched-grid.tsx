import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { NotchedCard } from "@/components/ui/notched-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export type NotchedGridItem = {
  title: string;
  body: string;
};

/**
 * Frame measures. Every frame lays these cards out on the same 362px column
 * with a 101px gutter; what changes is the run-in above the label, the drop to
 * the first row and how tall the cards are.
 */
export type NotchedGridMetrics = {
  paddingTop?: number;
  /** Gap under the full-bleed rule, when one is drawn. */
  ruleGap?: number;
  /** Label to the first card row. */
  labelGap?: number;
  rowGap?: number;
  cardMinHeight?: number;
  paddingBottom?: number;
};

/**
 * A labelled grid of notched cards — "BUSINESS OUTCOMES" on the product,
 * b2b and wallet frames, "BUILT FOR" on card-as-a-service and "CONTROL
 * HIGHLIGHTS" on enterprise card programmes.
 *
 * The frames decorate only the first card with the accent bar; the About
 * grid — the established use of this card — carries it on all of them, so the
 * bar stays the design-system default rather than a per-card variant.
 */
export function NotchedGrid({
  label,
  items,
  ruled = false,
  metrics = {},
}: {
  label: string;
  items: NotchedGridItem[];
  /** The 3px full-bleed rule some frames run above the block. */
  ruled?: boolean;
  metrics?: NotchedGridMetrics;
}) {
  const {
    paddingTop = 249,
    ruleGap = 116,
    labelGap = 185,
    rowGap = 80,
    cardMinHeight = 213,
    paddingBottom = 296,
  } = metrics;

  return (
    <section
      className="bg-white pt-14 pb-16 lg:pt-[var(--pt)] lg:pb-[var(--pb)]"
      style={
        {
          "--pt": `${paddingTop}px`,
          "--pb": `${paddingBottom}px`,
        } as React.CSSProperties
      }
    >
      {ruled ? (
        <span aria-hidden className="block h-[3px] w-full bg-[#d9d9d9]" />
      ) : null}

      <Container>
        <Reveal
          className="pt-12 lg:pt-[var(--rule-gap)]"
          style={
            {
              "--rule-gap": `${ruled ? ruleGap : 0}px`,
            } as React.CSSProperties
          }
        >
          <SectionLabel>{label}</SectionLabel>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.15}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-[var(--label-gap)] lg:grid-cols-3 lg:gap-x-[101px] lg:gap-y-[var(--row-gap)]"
          style={
            {
              "--label-gap": `${labelGap}px`,
              "--row-gap": `${rowGap}px`,
            } as React.CSSProperties
          }
        >
          {items.map((item) => (
            <RevealItem as="li" key={item.title}>
              <NotchedCard
                title={item.title}
                body={item.body}
                tone="brand"
                className="h-full"
                contentClassName="lg:min-h-[var(--card-h)] lg:p-[29px_28px_24px_31px]"
                contentStyle={
                  { "--card-h": `${cardMinHeight}px` } as React.CSSProperties
                }
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
