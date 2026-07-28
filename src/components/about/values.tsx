import { Container } from "@/components/ui/container";
import { ValueCard } from "@/components/ui/value-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const VALUES = [
  {
    title: "Trust by Design",
    body: "Build regulation, security and transparency into the way the infrastructure operates.",
    image: "/images/value-1.jpg",
  },
  {
    title: "Discipline over Scale",
    body: "Prioritise sustainable growth, reliable operations and long-term value.",
    image: "/images/value-2.png",
  },
  {
    title: "Clarity in Complexity",
    body: "Turn complex payment environments into structured systems, controls and decisions.",
    image: "/images/value-3.jpg",
  },
];

/**
 * Three tall artwork cards — 454x740 at x=225/747/1269 in the frame, so a
 * 1498px row inset from the 1504px content column.
 */
export function AboutValues() {
  return (
    <section className="bg-white pt-14 pb-16 lg:pt-[129px] lg:pb-[177px]">
      <Container>
        <Reveal
          as="ul"
          stagger={0.15}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[68px]"
        >
          {VALUES.map((value) => (
            <RevealItem as="li" key={value.title}>
              <ValueCard {...value} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
