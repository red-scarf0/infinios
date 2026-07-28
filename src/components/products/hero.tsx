import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * Products hero — same two-column composition as the About hero: heading left
 * at x=220, copy and the two CTAs right at x=1269.
 */
export function ProductsHero() {
  return (
    <section className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-ink pb-14 sm:min-h-[760px] lg:min-h-[1241px] lg:pb-[129px]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/images/products-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <Reveal
          trigger="mount"
          delay={0.15}
          stagger={0.12}
          className="grid gap-8 lg:grid-cols-[minmax(0,487px)_minmax(0,466px)] lg:justify-between lg:gap-[100px]"
        >
          <RevealItem>
            <h1 className="max-w-[487px] text-[30px] leading-[1.1488] font-semibold text-white sm:text-[38px] lg:text-[48px]">
              Build the payment capabilities your programme needs.
            </h1>
          </RevealItem>

          <RevealItem className="lg:pt-[9px]">
            <p className="max-w-[466px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:text-[20px]">
              Deploy issuing, processing, wallet and operational capabilities
              individually or as one connected stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-[52px] lg:gap-[20px]">
              <Button
                href="#products"
                variant="light"
                className="h-12 w-full px-7 text-[16px] sm:w-[259px] lg:text-[18px]"
              >
                Explore Products
              </Button>
              <Button
                href="/network"
                variant="outline"
                className="h-12 w-full px-7 text-[16px] sm:w-[259px] lg:text-[18px]"
              >
                Explore Our Network
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
