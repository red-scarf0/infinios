import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { NotchedCard } from "@/components/ui/notched-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { ProductDetail } from "@/data/products";

/**
 * "BUSINESS OUTCOMES" — three notched cards under a full-bleed rule. Same
 * card as the About page's foundations grid, on the frame's shorter 213px
 * plate.
 *
 * The frames decorate only the first card with the accent bar; the About
 * grid — the established use of this card — carries it on all three, so the
 * bar is the design-system default rather than a per-card variant.
 */
export function BusinessOutcomes({
  outcomes,
}: {
  outcomes: ProductDetail["outcomes"];
}) {
  return (
    <section className="bg-white pt-14 pb-16 lg:pt-[249px] lg:pb-[296px]">
      <span aria-hidden className="block h-[3px] w-full bg-[#d9d9d9]" />

      <Container>
        <Reveal className="pt-12 lg:pt-[116px]">
          <SectionLabel>{outcomes.label}</SectionLabel>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.15}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-[185px] lg:grid-cols-3 lg:gap-[101px]"
        >
          {outcomes.items.map((item) => (
            <RevealItem as="li" key={item.title}>
              <NotchedCard
                title={item.title}
                body={item.body}
                tone="brand"
                className="h-full"
                contentClassName="lg:min-h-[213px] lg:p-[29px_28px_24px_31px]"
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
