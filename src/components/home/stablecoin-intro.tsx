import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function StablecoinIntro() {
  return (
    <section className="bg-white pt-6 pb-14 lg:pb-[328px]">
      <Reveal>
        <SectionLabel ruled>STABLECOIN INFRASTRUCTURE</SectionLabel>
      </Reveal>

      <Container>
        <Reveal
          className="mt-10 grid items-start gap-10 lg:mt-[164px] 2xl:grid-cols-[773px_auto] 2xl:gap-[142px]"
          stagger={0.14}
        >
          <RevealItem>
            <h2 className="max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
              One connected platform
              <br className="hidden sm:block" /> for modern financial
              <br className="hidden lg:block" /> operations.
            </h2>

            <div>
              <p className="mt-6 text-[18px] leading-[1.1488] sm:text-[26px] lg:mt-[48px] lg:text-[40px]">
                <span className="text-brand">
                  Financial institutions, fintechs and payment providers are
                  increasingly exploring stablecoins to improve settlement
                  efficiency,
                </span>
                <ColorFlowText from="#b1b1b1">
                  {" "}
                  reduce friction and enable new payment experiences.
                </ColorFlowText>
              </p>

              <p className="mt-6 text-[18px] leading-[1.1488] sm:text-[26px] lg:mt-[55px] lg:text-[40px]">
                <ColorFlowText from="#b1b1b1">
                  INFINIOS provides the infrastructure, operational expertise
                  and integration capabilities required to support
                  stablecoin-enabled payment ecosystems with enterprise-grade
                  controls, reporting and governance.
                </ColorFlowText>
              </p>
            </div>
          </RevealItem>

          <RevealItem className="order-first 2xl:order-none 2xl:-mt-[113px]">
            <Parallax distance={26}>
              <video
                src="/new-images/homepage-globe-sq.mp4"
                aria-label="A stylised globe with orbital data rings, representing global stablecoin settlement"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="mx-auto h-auto w-full max-w-[520px] rounded-[40px] lg:max-w-[640px] lg:rounded-[98px] 2xl:mx-0 2xl:w-[46.15vw] 2xl:max-w-none"
              />
            </Parallax>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
