import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * About hero — full-bleed still (unlike the homepage, the frame uses an image
 * here, not a video). Heading sits left at x=212, copy and CTA right at
 * x=1268, both anchored to the bottom. The band runs to 1270 so the white
 * section below can overlap it by 52px and reveal blue through its corners.
 */
export function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-ink pb-14 sm:min-h-[760px] lg:min-h-[1270px] lg:pb-[158px]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/images/about-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          // The frame crops 215 of the 348px horizontal overflow from the
          // left, so the artwork sits right of centre.
          style={{ objectPosition: "62% center" }}
          className="object-cover"
        />
      </div>

      <Container>
        <Reveal
          trigger="mount"
          delay={0.15}
          stagger={0.12}
          className="grid gap-8 lg:grid-cols-[minmax(0,711px)_minmax(0,466px)] lg:justify-between lg:gap-[133px]"
        >
          <RevealItem>
            <h1 className="max-w-[711px] text-[30px] leading-[1.1488] font-semibold text-white sm:text-[38px] lg:text-[48px]">
              Trusted infrastructure for businesses that move money.
            </h1>
          </RevealItem>

          <RevealItem className="lg:pt-[24px]">
            <p className="max-w-[466px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:text-[20px]">
              INFINIOS builds and operates regulated payment infrastructure that
              helps institutions and platforms launch, manage and scale
              financial products with control, clarity and confidence.
            </p>
            <Button
              href="/contact"
              variant="light"
              className="mt-8 h-12 w-full px-7 text-[16px] sm:w-[259px] lg:mt-[35px] lg:text-[18px]"
            >
              Contact Us
            </Button>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
