import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function WhyInfinios() {
  return (
    <section className="bg-white pt-10 pb-14 lg:pt-[38px] lg:pb-[154px]">
      <Reveal>
        <SectionLabel ruled>WHY INFINIOS</SectionLabel>
      </Reveal>

      <Container>
        <Reveal stagger={0.14}>
          <RevealItem>
            <h2 className="mt-10 max-w-[587px] text-[28px] leading-[0.9606] font-semibold text-brand sm:text-[36px] lg:mt-[89px] lg:text-[50px]">
              Institutional trust.
              <br />
              Operational agility.
            </h2>
          </RevealItem>

          {/*
            Two-tone paragraph: the frame paints the opening clause brand blue
            and drops the remainder to #d3d3d3. The brand colour then sweeps
            left-to-right across the grey as the paragraph scrolls up the
            viewport, and back out again on the way down.
          */}
          <RevealItem>
            <p className="mt-8 max-w-[1066px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[52px] lg:text-[40px]">
              <span className="text-brand">
                Payment programmes require more than software. INFINIOS combines
                regulated
              </span>
              <ColorFlowText from="#d3d3d3">
                {" "}
                infrastructure, in-house technology and operational expertise to
                help clients move from concept to launch, and from launch to
                controlled scale.
              </ColorFlowText>
            </p>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
