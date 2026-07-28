import { Container } from "@/components/ui/container";
import { NotchedCard } from "@/components/ui/notched-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const PILLARS = [
  {
    title: "Experienced\nLeadership",
    body: "Our leadership brings experience across payments, fintech, technology, operations and financial services.",
  },
  {
    title: "Connected\nEcosystem",
    body: "We work with payment networks, technology providers and strategic partners to support the capabilities our clients rely on.",
  },
  {
    title: "Governance\nBuilt In",
    body: "Security, compliance and operational discipline shape how INFINIOS builds, runs and supports payment infrastructure.",
  },
];

/** "Built on experience, partnerships and governance." — 3 notched cards. */
export function AboutFoundations() {
  return (
    <section className="bg-white pb-16 lg:pb-[142px]">
      <Container>
        <Reveal>
          <h2 className="max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
            Built on experience, partnerships and governance.
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.14}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-[216px] lg:grid-cols-3 lg:gap-[101px]"
        >
          {PILLARS.map((pillar) => (
            <RevealItem as="li" key={pillar.title}>
              <NotchedCard
                title={pillar.title}
                body={pillar.body}
                tone="brand"
                className="h-full"
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
