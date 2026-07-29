import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Full-bleed closing banner — 1778x488, r=64, shared by the homepage and the
 * About page. Same artwork and composition in both frames; only the copy, the
 * CTA and the text measures differ, so those are props.
 */
export function CtaBanner({
  heading,
  body,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  headingMeasure = "678px",
  bodyMeasure = "348px",
  paddingTop = "166px",
  paddingBottom = "60px",
  bodyGap = "6px",
  spacingBottom = "122px",
  headingClassName,
  image = "/images/cta-banner.png",
}: {
  heading: React.ReactNode;
  body: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  /** The travel frame closes on two buttons rather than one. */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Heading column width at desktop, straight from the frame. */
  headingMeasure?: string;
  bodyMeasure?: string;
  /** Plate insets — both frames fix the banner at 488px tall. */
  paddingTop?: string;
  paddingBottom?: string;
  bodyGap?: string;
  /** Gap between the plate and the footer. */
  spacingBottom?: string;
  /** Heading scale. The product detail frames drop it from 50px to 36px. */
  headingClassName?: string;
  /**
   * Plate artwork. The homepage, About and solutions frames share the waves;
   * the solution detail frames use arcs, and b2b and wallet use the slats.
   */
  image?: string;
}) {
  return (
    <section
      className="bg-white pb-14"
      style={{ paddingBottom: spacingBottom }}
    >
      {/* The banner sits closer to the edge than the text column: x=62 at 1920. */}
      <div className="w-full px-5 min-[1920px]:px-[62px] sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-[28px] lg:rounded-[64px]">
          <Image
            src={image}
            alt=""
            fill
            aria-hidden
            sizes="(min-width: 1024px) 1778px, 100vw"
            className="-z-10 object-cover"
          />

          <Reveal
            stagger={0.12}
            className="grid gap-8 px-7 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-[89px]"
            style={{ paddingTop, paddingBottom }}
          >
            <RevealItem>
              <h2
                className={cn(
                  "text-[26px] leading-[1.1488] font-semibold text-white sm:text-[34px] lg:text-[50px]",
                  headingClassName,
                )}
                style={{ maxWidth: headingMeasure }}
              >
                {heading}
              </h2>
              <p
                className="mt-4 text-[16px] leading-[1.1488] text-white lg:text-[24px]"
                style={{ maxWidth: bodyMeasure, marginTop: bodyGap }}
              >
                {body}
              </p>
            </RevealItem>

            <RevealItem className="flex flex-wrap gap-3 lg:justify-self-end lg:pb-[7px]">
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Button
                  href={secondaryCtaHref}
                  className="h-[43px] w-full px-6 text-[16px] sm:w-[230px]"
                >
                  {secondaryCtaLabel}
                </Button>
              ) : null}
              <Button
                href={ctaHref}
                className="h-[43px] w-full px-6 text-[16px] sm:w-[230px]"
              >
                {ctaLabel}
              </Button>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
