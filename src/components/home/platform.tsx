import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { PlatformCardData } from "@/components/ui/platform-card";

import { PlatformCarousel } from "./platform-carousel";

const CARDS: PlatformCardData[] = [
  {
    title: "Card Issuing",
    body: "Launch and manage virtual and physical card programmes with configurable controls.",
    icon: "/icons/card-issuing.svg",
    width: 55,
    height: 38,
  },
  {
    title: "Payment Processing",
    body: "Authorise, route, settle and reconcile transactions through reliable, high-volume infrastructure.",
    icon: "/icons/payment-processing.svg",
    width: 51,
    height: 35,
  },
  {
    title: "Digital Wallets",
    body: "Enable balances, funding flows, transfers and embedded payment experiences.",
    icon: "/icons/digital-wallets.svg",
    width: 54,
    height: 45,
  },
  {
    title: "APIs and Operations",
    body: "Connect systems quickly and manage programmes, users, reporting and controls from one place.",
    icon: "/icons/apis-operations.svg",
    width: 61,
    height: 32,
  },
];

export function Platform() {
  return (
    <section className="relative -mt-px rounded-t-[40px] bg-white pt-14 pb-16 lg:rounded-t-[89px] lg:pt-[114px] lg:pb-[94px]">
      <Container>
        <Reveal>
          <SectionLabel>THE INFINIOS PLATFORM</SectionLabel>
        </Reveal>

        <Reveal
          className="mt-8 grid gap-8 lg:mt-[71px] lg:grid-cols-[minmax(0,737px)_minmax(0,590px)] lg:justify-between lg:gap-[165px]"
          stagger={0.12}
        >
          <RevealItem>
            <h2 className="max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
              One connected platform
              <br className="hidden sm:block" /> for modern financial
              <br className="hidden lg:block" /> operations.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="max-w-[590px] text-[16px] leading-[1.1488] text-body sm:text-[20px] lg:pt-[9px] lg:text-[24px]">
              INFINIOS brings card issuing, payment processing, digital wallets,
              APIs and operational controls into one connected infrastructure
              layer, helping businesses launch faster, reduce fragmentation and
              operate with greater visibility.
            </p>
          </RevealItem>
        </Reveal>
      </Container>

      {/*
        The rail spans x=75..1848 in the frame — inset ~75px from each page
        edge, wider than the text column. It scrolls as a seamless marquee.
      */}
      <div className="mx-[clamp(20px,3.906vw,75px)] mt-10 lg:mt-[72px]">
        <PlatformCarousel cards={CARDS} />
      </div>

      {/* The CTA is centred on the card rail, not the page: x=1032 at 1920. */}
      <Container className="mt-10 flex justify-center lg:mt-[33px] 2xl:justify-start">
        <Button
          href="/platform"
          className="h-[46px] w-full px-6 text-[16px] sm:w-[250px] lg:text-[18px] 2xl:ml-[824px]"
        >
          Explore the Platform
        </Button>
      </Container>
    </section>
  );
}
