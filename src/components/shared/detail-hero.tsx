import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export type DetailHeroContent = {
  /** 64px brand-blue page name that sits above the statement. */
  eyebrow: string;
  heading: string;
  body: string;
  /** Artwork only — the frame's text and CTAs are rendered live over it. */
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

/**
 * Every product and solution frame measures this block slightly differently:
 * the plate is between 1012 and 1198 tall, a two-line page name starts higher
 * than a one-line one, and the gaps under the statement vary by frame. They
 * are the same composition throughout, so the differences are passed in rather
 * than forked into a second component. Defaults are the product frames'.
 */
export type DetailHeroMetrics = {
  minHeight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  /** Statement to supporting copy. */
  bodyGap?: number;
  /** Supporting copy to the CTA row. */
  ctaGap?: number;
  primaryWidth?: number;
  secondaryWidth?: number;
  buttonGap?: number;
};

/**
 * Detail-page hero.
 *
 * The frame is a single full-bleed plate: the page name sits high at 64px in
 * brand blue, and the statement, copy and two CTAs are anchored to the bottom
 * of the artwork. Everything between the two blocks is deliberate empty space,
 * so the middle stretches rather than the type scaling.
 */
export function DetailHero({
  hero,
  metrics = {},
  priority = true,
}: {
  hero: DetailHeroContent;
  metrics?: DetailHeroMetrics;
  priority?: boolean;
}) {
  const {
    minHeight = 1198,
    paddingTop = 204,
    paddingBottom = 132,
    bodyGap = 16,
    ctaGap = 46,
    primaryWidth = 343,
    secondaryWidth = 259,
    buttonGap = 10,
  } = metrics;

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={hero.image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className="flex min-h-[640px] flex-col pt-[132px] pb-14 sm:min-h-[760px] lg:min-h-[var(--hero-min-h)] lg:pt-[var(--hero-pt)] lg:pb-[var(--hero-pb)]"
        style={
          {
            /* The frame's height at 1920, held as a ratio below it: these
               plates are 2:1 landscapes, so pinning the pixel height on a
               narrower screen crops the artwork to a dark sliver. */
            "--hero-min-h": `clamp(700px, ${((minHeight / 1920) * 100).toFixed(2)}vw, ${minHeight}px)`,
            "--hero-pt": `${paddingTop}px`,
            "--hero-pb": `${paddingBottom}px`,
          } as React.CSSProperties
        }
      >
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
              <p
                className="mt-4 max-w-[466px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:mt-[var(--body-gap)] lg:text-[20px]"
                style={{ "--body-gap": `${bodyGap}px` } as React.CSSProperties}
              >
                {hero.body}
              </p>
            </RevealItem>

            <RevealItem
              className="mt-8 flex flex-wrap gap-4 lg:mt-[var(--cta-gap)] lg:gap-[var(--btn-gap)]"
              style={
                {
                  "--cta-gap": `${ctaGap}px`,
                  "--btn-gap": `${buttonGap}px`,
                } as React.CSSProperties
              }
            >
              <Button
                href={hero.primaryCta.href}
                variant="light"
                className="h-12 w-full px-7 text-[16px] font-bold sm:w-auto sm:min-w-[var(--primary-w)] lg:text-[18px]"
                style={
                  { "--primary-w": `${primaryWidth}px` } as React.CSSProperties
                }
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                className="h-12 w-full px-7 text-[16px] sm:w-auto sm:min-w-[var(--secondary-w)] lg:text-[18px]"
                style={
                  {
                    "--secondary-w": `${secondaryWidth}px`,
                  } as React.CSSProperties
                }
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
