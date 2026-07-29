import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { DetailCtaLink } from "@/data/detail-sections";

/**
 * The solutions and industries page heroes.
 *
 * Both frames draw the same composition over a 1367px artwork plate:
 * statement left at x=220, supporting copy and the two CTAs right at x=1269,
 * with a brand-blue wash across the lower half. The solutions card plate then
 * overlaps the bottom of it.
 */
export function SplitHero({
  heading,
  body,
  image,
  primaryCta,
  secondaryCta,
}: {
  heading: string;
  body: string;
  image: string;
  primaryCta: DetailCtaLink;
  secondaryCta: DetailCtaLink;
}) {
  return (
    // The plate is 1367 tall at the frame's 1920, held to that ratio rather
    // than to the pixel: the artwork is a 2:1 landscape, so a fixed 1367px on
    // a narrower screen crops it to an unreadable dark sliver.
    <section className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-ink pb-14 sm:min-h-[760px] lg:min-h-[clamp(760px,71.2vw,1367px)] lg:pb-[255px]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Blue wash across the lower plate: #0854A5 at the foot, out by the top. */}
        <span className="absolute inset-x-0 top-[41.8%] h-[68.8%] bg-gradient-to-t from-[#0854a5] from-[7.2%] to-[rgba(51,70,174,0)] to-[94.2%]" />

        {/*
          Below the frame's width the artwork is scaled up and its subject
          slides under the right-hand copy, so that side carries a scrim until
          the design width, where the frame's own composition takes over.
        */}
        <span className="absolute inset-0 bg-gradient-to-l from-[#01040d]/80 via-[#01040d]/30 to-transparent 2xl:hidden" />
      </div>

      <Container>
        <Reveal
          trigger="mount"
          delay={0.15}
          stagger={0.12}
          className="grid gap-8 lg:grid-cols-[minmax(0,642px)_minmax(0,543px)] lg:items-end lg:justify-between lg:gap-[84px]"
        >
          <RevealItem>
            <h1 className="max-w-[642px] text-[30px] leading-[1.097] font-semibold text-white sm:text-[38px] lg:text-[48px]">
              {heading}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-[543px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:text-[20px]">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:gap-[9px] lg:pt-[9px]">
              <Button
                href={primaryCta.href}
                variant="light"
                className="h-12 w-full px-7 text-[16px] sm:w-[259px] lg:text-[18px]"
              >
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                variant="outline"
                className="h-12 w-full px-7 text-[16px] sm:w-[269px] lg:text-[18px]"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
