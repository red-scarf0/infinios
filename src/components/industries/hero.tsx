import { SplitHero } from "@/components/shared/split-hero";

/** Industries hero — the shared split composition with this frame's content. */
export function IndustriesHero() {
  return (
    <SplitHero
      heading="Payment infrastructure shaped around your operating model."
      body="Different businesses move money differently. INFINIOS connects the capabilities each industry needs without forcing every programme into the same model."
      image="/new-images/industries-hero-section.mp4"
      primaryCta={{ label: "Explore Industries", href: "#industries" }}
      secondaryCta={{ label: "Speak to Our Team", href: "/contact" }}
    />
  );
}
