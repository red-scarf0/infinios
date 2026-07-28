import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * Vision sits on a dark full-bleed plate (1926x903, r=95); Mission follows on
 * white. Both are centred, so they share one layout with different tones.
 */
export function AboutVisionMission() {
  return (
    <>
      <section className="bg-white">
        {/*
          The backdrop is a CSS background rather than `next/image` with
          `fill`: as an absolutely positioned layer it kept losing the
          compositing race against the plate's own background and rendered
          blank. A background-image has no stacking ambiguity and no optimizer
          round-trip, so it behaves identically in dev and prod. The asset is
          a 33KB WebP of the node exactly as Figma renders it.

          The frame does not centre the copy: "OUR VISION" starts 452px down a
          903px plate, so that offset is set explicitly rather than centred.
        */}
        <div
          className="relative isolate overflow-hidden rounded-[36px] bg-ink bg-cover bg-center bg-no-repeat lg:h-[903px] lg:rounded-[95px]"
          style={{ backgroundImage: "url('/images/about-vision.webp')" }}
        >
          <Reveal
            stagger={0.14}
            className="relative z-10 px-5 py-20 text-center sm:px-8 lg:px-0 lg:pt-[451px] lg:pb-0"
          >
            <RevealItem>
              <SectionLabel tone="white">OUR VISION</SectionLabel>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-[836px] text-[24px] leading-[1.1488] font-bold text-page sm:text-[32px] lg:mt-[60px] lg:text-[40px]">
                A world where money moves with trust and responsibility,
                creating opportunity, stability and long-term value.
              </p>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-16 pb-14 lg:pt-[233px] lg:pb-[130px]">
        <Container>
          <Reveal stagger={0.14} className="text-center">
            <RevealItem>
              <SectionLabel>OUR MISSION</SectionLabel>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-[836px] text-[22px] leading-[1.1488] font-bold text-brand sm:text-[28px] lg:mt-[58px] lg:text-[36px]">
                Enable enterprises and platforms to scale through compliant
                payments and card issuing infrastructure built for long-term
                reliability.
              </p>
            </RevealItem>
          </Reveal>
        </Container>

        <span
          aria-hidden
          className="mt-14 block h-px w-full bg-[#848484] lg:mt-[267px]"
        />
      </section>
    </>
  );
}
