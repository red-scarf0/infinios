import Image from "next/image";

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
        {/*
          In the frame the text column is 773px at x=211 and the globe is
          886px at x=1126 — it runs 92px past the 1920 canvas and is clipped
          by the page edge. From 2xl the globe is sized in vw so it keeps that
          same proportional overhang; below that it sits above the copy.
        */}
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

            {/*
              Unlike every other two-tone paragraph on the site this block has
              two of them. Each scrubs off its own position, so the second
              paragraph fills a beat after the first as the pair scrolls up.
              The wrapper is unstyled, so the paragraph margins collapse
              through it exactly as before.
            */}
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

              {/* `--color-muted` is #b1b1b1 — the same grey the clause above
                  rests at, so this reads identically at rest. */}
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
              <Image
                src="/images/globe.png"
                alt="A stylised globe with orbital data rings, representing global stablecoin settlement"
                width={886}
                height={886}
                sizes="(min-width: 1536px) 46vw, (min-width: 640px) 640px, 100vw"
                className="mx-auto h-auto w-full max-w-[520px] rounded-[40px] lg:max-w-[640px] lg:rounded-[98px] 2xl:mx-0 2xl:w-[46.15vw] 2xl:max-w-none"
              />
            </Parallax>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
