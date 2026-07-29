import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { DetailHero } from "@/components/shared/detail-hero";
import { FeatureRows } from "@/components/shared/feature-rows";
import { JourneyFlow } from "@/components/shared/journey-flow";
import { NotchedGrid } from "@/components/shared/notched-grid";
import { SectionNote } from "@/components/shared/section-note";
import { SectionStatement } from "@/components/shared/section-statement";
import type { DetailPage } from "@/data/detail-sections";

/**
 * The shared detail-page layout, behind every solution and industry route.
 *
 * The frames agree on the hero and the closing banner but not on the middle,
 * so the sections between them are rendered from the page's own ordered list.
 * `related` is the capability card row for the page's family — solutions or
 * industries — which every detail page carries before the banner with its own
 * card already open.
 */
export function DetailPageLayout({
  page,
  related,
}: {
  page: DetailPage;
  related: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <DetailHero hero={page.hero} metrics={page.hero.metrics} />

        {page.sections.map((section, index) => {
          switch (section.kind) {
            case "features":
              return (
                <FeatureRows
                  key={index}
                  overview={section.overview}
                  features={section.items}
                  metrics={section.metrics}
                  id={index === 0 ? "capabilities" : `section-${index}`}
                />
              );

            case "journey":
              return (
                <JourneyFlow
                  key={index}
                  journey={section.journey}
                  metrics={section.metrics}
                />
              );

            case "cards":
              return (
                <NotchedGrid
                  key={index}
                  label={section.label}
                  items={section.items}
                  ruled={section.ruled}
                  metrics={section.metrics}
                />
              );

            case "rule":
              return (
                <div
                  key={index}
                  className="bg-white pt-[var(--pt)] pb-[var(--pb)]"
                  style={
                    {
                      "--pt": `${section.paddingTop ?? 0}px`,
                      "--pb": `${section.paddingBottom ?? 0}px`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    aria-hidden
                    className="block h-[3px] w-full bg-[#d9d9d9]"
                  />
                </div>
              );

            case "note":
              return (
                <SectionNote
                  key={index}
                  body={section.body}
                  paddingTop={section.paddingTop}
                  paddingBottom={section.paddingBottom}
                />
              );

            case "statement":
              return (
                <SectionStatement
                  key={index}
                  heading={section.heading}
                  lead={section.lead}
                  trail={section.trail}
                  metrics={section.metrics}
                />
              );
          }
        })}

        {related}

        <CtaBanner
          heading={page.cta.heading}
          body={page.cta.body}
          ctaLabel={page.cta.ctaLabel}
          ctaHref={page.cta.ctaHref}
          secondaryCtaLabel={page.cta.secondaryCtaLabel}
          secondaryCtaHref={page.cta.secondaryCtaHref}
          image={page.cta.image}
          headingClassName="lg:text-[36px]"
          headingMeasure={page.cta.headingMeasure}
          bodyMeasure={page.cta.bodyMeasure}
          paddingTop={page.cta.paddingTop}
          paddingBottom={page.cta.paddingBottom}
          bodyGap={page.cta.bodyGap}
          spacingBottom={page.cta.spacingBottom}
        />
      </main>
      <SiteFooter />
    </>
  );
}
