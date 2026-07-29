import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { ProductDetail } from "@/data/products";

/**
 * Product detail hero.
 *
 * The frame is a single full-bleed plate: the product name sits high at 64px
 * in brand blue, and the statement, copy and two CTAs are anchored to the
 * bottom of the artwork. Everything between the two blocks is deliberate
 * empty space, so the middle stretches rather than the type scaling.
 */
export function ProductDetailHero({ hero }: { hero: ProductDetail["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex min-h-[640px] flex-col pt-[132px] pb-14 sm:min-h-[760px] lg:min-h-[1198px] lg:pt-[204px] lg:pb-[132px]">
        <Container>
          <Reveal trigger="mount" delay={0.1}>
            <p className="text-[34px] leading-[1.097] font-semibold text-brand-button sm:text-[46px] lg:text-[64px]">
              {hero.eyebrow}
            </p>
          </Reveal>
        </Container>

        <Container className="mt-auto pt-16">
          <Reveal trigger="mount" delay={0.2} stagger={0.12}>
            <RevealItem>
              <h1 className="max-w-[560px] text-[30px] leading-[1.097] font-semibold text-white sm:text-[38px] lg:text-[48px]">
                {hero.heading}
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-4 max-w-[466px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:mt-[16px] lg:text-[20px]">
                {hero.body}
              </p>
            </RevealItem>

            <RevealItem className="mt-8 flex flex-wrap gap-4 lg:mt-[46px] lg:gap-[10px]">
              <Button
                href={hero.primaryCta.href}
                variant="light"
                className="h-12 w-full px-7 text-[16px] font-bold sm:w-auto sm:min-w-[343px] lg:text-[18px]"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                className="h-12 w-full px-7 text-[16px] sm:w-auto sm:min-w-[259px] lg:text-[18px]"
              >
                {hero.secondaryCta.label}
              </Button>
            </RevealItem>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
