import { SplitHero } from "@/components/shared/split-hero";

/** Contact hero — the shared split composition with this frame's content. */
export function ContactHero() {
  return (
    <SplitHero
      heading="Speak with the INFINIOS team."
      body="Tell us about the payment product, programme or infrastructure challenge you are working on. We will connect you with the right team to discuss the next step."
      image="/images/contact-hero.jpg"
      primaryCta={{ label: "Send an Enquiry", href: "#enquiry" }}
      secondaryCta={{ label: "Request a Demo", href: "/contact" }}
    />
  );
}
