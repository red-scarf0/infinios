import { Container } from "@/components/ui/container";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { ValueCard } from "@/components/ui/value-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const CAPABILITIES = [
  {
    title: "Programme Controls",
    body: "Configure products, permissions, limits and operating rules.",
    image: "/images/product-value-1.jpg",
  },
  {
    title: "Operational Visibility",
    body: "See transactions, balances, exceptions and programme activity as they happen.",
    image: "/images/product-value-2.jpg",
  },
  {
    title: "Reporting & Reconciliation",
    body: "Bring financial and operational information into a clearer, more manageable view.",
    image: "/images/product-value-3.jpg",
  },
];

/** "Built beyond the transaction." — heading, two-tone copy, three artwork cards. */
export function BeyondTransaction() {
  return (
    <section className="bg-white pb-16 lg:pb-[224px]">
      {/* Full-bleed rule at y=2410 in the frame. */}
      <span aria-hidden className="block h-px w-full bg-[#848484]" />

      <Container>
        <Reveal stagger={0.14}>
          <RevealItem>
            <h2 className="mt-12 max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:mt-[165px] lg:text-[50px]">
              Built beyond
              <br />
              the transaction.
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[84px] lg:text-[40px]">
              <span className="text-brand">
                Modern payment products require more than moving money.
              </span>
              <ColorFlowText from="#b1b1b1">
                {" "}
                INFINIOS connects the transaction layer with the controls,
                reporting and operational tools required to run a programme day
                after day.
              </ColorFlowText>
            </p>
          </RevealItem>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.15}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[92px] lg:grid-cols-3 lg:gap-[68px]"
        >
          {CAPABILITIES.map((item) => (
            <RevealItem as="li" key={item.title}>
              <ValueCard {...item} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
