import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AudienceTimeline } from "@/components/home/audience-timeline";
import { BusinessModel } from "@/components/home/business-model";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Hero } from "@/components/home/hero";
import { Platform } from "@/components/home/platform";
import { StablecoinCards } from "@/components/home/stablecoin-cards";
import { StablecoinFlow } from "@/components/home/stablecoin-flow";
import { StablecoinIntro } from "@/components/home/stablecoin-intro";
import { TrustCards } from "@/components/home/trust-cards";
import { WhyInfinios } from "@/components/home/why-infinios";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Platform />
        <WhyInfinios />
        <TrustCards />
        <BusinessModel />
        <AudienceTimeline />
        <StablecoinIntro />
        <StablecoinFlow />
        <StablecoinCards />
        <CtaBanner
          heading={
            <>
              One connected platform
              <br className="hidden sm:block" /> for modern financial
              <br className="hidden lg:block" /> operations.
            </>
          }
          body="Connect stablecoin-enabled flows with cards, wallets and payment operations."
          ctaLabel="Explore Solutions"
          ctaHref="/solutions"
        />
      </main>
      <SiteFooter />
    </>
  );
}
