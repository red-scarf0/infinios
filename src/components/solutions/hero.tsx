import { SplitHero } from "@/components/shared/split-hero";

/** Solutions hero — the shared split composition with this frame's content. */
export function SolutionsHero() {
  return (
    <SplitHero
      heading="Start with the business outcome. INFINIOS provides the infrastructure behind it."
      body="Launch card programmes, automate business payments, embed wallet experiences and enter new markets through connected payment infrastructure and operational support."
      image="/images/solutions/hero.jpg"
      primaryCta={{ label: "Explore Solutions", href: "#solutions" }}
      secondaryCta={{ label: "Discuss Your Use Case", href: "/contact" }}
    />
  );
}
