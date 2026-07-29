import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { ProductDetail } from "@/data/products";

/**
 * Overview block plus the six capability rows.
 *
 * The rows are separated by 3px #d9d9d9 rules that bleed to both viewport
 * edges, so they are painted on the list rather than inside `Container`:
 * thumbnail, title and copy sit on the content column, the rules do not.
 */
export function ProductCapabilities({
  overview,
  features,
}: {
  overview: ProductDetail["overview"];
  features: ProductDetail["features"];
}) {
  return (
    <section id="capabilities" className="bg-white pt-14 lg:pt-[100px]">
      <Container>
        <Reveal>
          <SectionLabel>{overview.label}</SectionLabel>
        </Reveal>

        <Reveal
          stagger={0.14}
          className="mt-8 grid gap-6 lg:mt-[50px] lg:grid-cols-[minmax(0,649px)_minmax(0,588px)] lg:justify-between lg:gap-[100px]"
        >
          <RevealItem>
            <h2 className="text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
              {overview.heading}
            </h2>
          </RevealItem>

          <RevealItem className="lg:pt-[17px]">
            <p className="text-[16px] leading-[1.1488] font-light text-body lg:text-[20px]">
              {overview.body}
            </p>
          </RevealItem>
        </Reveal>
      </Container>

      <ul className="mt-14 border-b-[3px] border-[#d9d9d9] lg:mt-[189px]">
        {features.map((feature) => (
          <li key={feature.title} className="border-t-[3px] border-[#d9d9d9]">
            <Container>
              {/*
                The first column carries the frame's 63px gutter between the
                thumbnail and the title, so the title lands on its x=474
                without a second gap track.
              */}
              <Reveal
                amount={0.35}
                className="grid items-start gap-4 py-8 lg:h-[204px] lg:grid-cols-[358px_minmax(0,1fr)_480px] lg:gap-x-[23px] lg:py-0"
              >
                <div className="relative aspect-[295/193] w-full max-w-[295px] overflow-hidden rounded-[32px] lg:self-center lg:rounded-[47px]">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 295px, 90vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="text-[24px] leading-[1.1488] font-semibold text-brand-soft lg:pt-[36px] lg:text-[32px]">
                  {feature.title}
                </h3>

                <p className="text-[16px] leading-[1.1488] font-light text-body lg:pt-[51px] lg:text-[20px]">
                  {feature.body}
                </p>
              </Reveal>
            </Container>
          </li>
        ))}
      </ul>
    </section>
  );
}
