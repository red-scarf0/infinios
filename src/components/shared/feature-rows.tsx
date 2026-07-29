import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type FeatureRow = {
  title: string;
  body: string;
  /**
   * Thumbnail. The programme-launch and card-as-a-service frames leave a few
   * rows without one, so the column is reserved either way and the row keeps
   * its rhythm.
   */
  image?: string;
};

export type FeatureOverview = {
  /** Uppercase eyebrow — "B2B PAYMENTS", "CARD ISSUING", ... */
  label: string;
  heading: string;
  /** The programme-launch frame runs the heading on its own. */
  body?: string;
};

export type FeatureRowsMetrics = {
  paddingTop?: number;
  /** Overview block to the first rule. */
  rowsGap?: number;
  /**
   * Heading column width. Most frames set 649; the industry frames widen it
   * to 694, which is what keeps their headings on the drawn number of lines.
   */
  headingMeasure?: number;
};

/**
 * Overview block plus the ruled capability rows.
 *
 * The rows are separated by 3px #d9d9d9 rules that bleed to both viewport
 * edges, so they are painted on the list rather than inside `Container`:
 * thumbnail, title and copy sit on the content column, the rules do not.
 *
 * The wallet frame splits the two halves around its customer journey, so
 * either half can be rendered on its own.
 */
export function FeatureRows({
  overview,
  features = [],
  metrics = {},
  id = "capabilities",
}: {
  overview?: FeatureOverview;
  features?: FeatureRow[];
  metrics?: FeatureRowsMetrics;
  id?: string;
}) {
  const { paddingTop = 100, rowsGap = 189, headingMeasure = 649 } = metrics;

  return (
    <section
      id={id}
      className="bg-white pt-14 lg:pt-[var(--pt)]"
      style={{ "--pt": `${paddingTop}px` } as React.CSSProperties}
    >
      {overview ? (
        <Container>
          <Reveal>
            <SectionLabel>{overview.label}</SectionLabel>
          </Reveal>

          <Reveal
            stagger={0.14}
            className="mt-8 grid gap-6 lg:mt-[50px] lg:grid-cols-[minmax(0,var(--heading-measure))_minmax(0,588px)] lg:justify-between lg:gap-[100px]"
            style={
              {
                "--heading-measure": `${headingMeasure}px`,
              } as React.CSSProperties
            }
          >
            <RevealItem>
              <h2 className="text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
                {overview.heading}
              </h2>
            </RevealItem>

            {overview.body ? (
              <RevealItem className="lg:pt-[17px]">
                <p className="text-[16px] leading-[1.1488] font-light text-body lg:text-[20px]">
                  {overview.body}
                </p>
              </RevealItem>
            ) : null}
          </Reveal>
        </Container>
      ) : null}

      {features.length === 0 ? null : (
        <ul
          className={cn(
            "border-b-[3px] border-[#d9d9d9]",
            overview && "mt-14 lg:mt-[var(--rows-gap)]",
          )}
          style={{ "--rows-gap": `${rowsGap}px` } as React.CSSProperties}
        >
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
                  {feature.image ? (
                    <div className="relative aspect-[295/193] w-full max-w-[295px] overflow-hidden rounded-[32px] lg:self-center lg:rounded-[47px]">
                      <Image
                        src={feature.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 295px, 90vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span aria-hidden />
                  )}

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
      )}
    </section>
  );
}
