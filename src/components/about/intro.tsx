import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * "About INFINIOS" — the white band that follows the hero. Carries one of the
 * two two-tone paragraphs on this page, so it reuses `ColorFlowText`.
 */
export function AboutIntro() {
  return (
    <section className="relative -mt-[28px] rounded-t-[40px] bg-white pt-14 pb-16 lg:-mt-[52px] lg:rounded-t-[89px] lg:pt-[130px] lg:pb-[205px]">
      <Container>
        <Reveal>
          <SectionLabel>ABOUT INFINIOS</SectionLabel>
        </Reveal>

        <Reveal stagger={0.14}>
          <RevealItem>
            <h2 className="mt-8 max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:mt-[105px] lg:text-[50px]">
              The operating layer behind modern payment programmes
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="group/flow mt-6 max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[13px] lg:text-[40px]">
              <span className="text-brand">
                We connect issuing, processing, wallets, APIs and programme
                operations
              </span>
              <ColorFlowText from="#d1d1d1">
                {" "}
                so clients can focus on their product, customers and growth
                rather than managing fragmented infrastructure.
              </ColorFlowText>
            </p>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
