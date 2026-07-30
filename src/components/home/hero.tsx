import Image from "next/image";

import { HeroMedia } from "./hero-media";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const TRUST_LOGOS = [
  {
    src: "/icons/cbb.svg",
    alt: "Central Bank of Bahrain",
    width: 282,
    height: 47,
    className: "h-[22px] w-auto sm:h-[30px] lg:h-[40px]",
  },
  {
    src: "/images/pci.png",
    alt: "PCI Security Standards Council",
    width: 208,
    height: 63,
    className: "h-[28px] w-auto sm:h-[38px] lg:h-[52px]",
  },
  {
    src: "/icons/mastercard.svg",
    alt: "Mastercard",
    width: 67,
    height: 54,
    className: "h-[26px] w-auto sm:h-[34px] lg:h-[46px]",
  },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-ink sm:min-h-[780px] lg:min-h-[1202px]">
      {/*
        The backdrop is placed exactly as in the frame: the media rect starts
        at y=86 and is 1116px tall, with the near-black page colour showing
        above and below it. Below lg it simply fills the section.
      */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-full lg:top-[86px] lg:h-[1116px]"
        aria-hidden
      >
        <HeroMedia />
      </div>

      <Container className="pt-[130px] lg:pt-[240px]">
        <Reveal trigger="mount" delay={0.15}>
          <h1 className="max-w-[487px] text-[32px] leading-[1.0968] font-semibold text-white sm:text-[40px] lg:text-[48px]">
            One Platform.
            <br />
            Every Rail.
            <br />
            Infinite Possibility.
          </h1>
        </Reveal>
      </Container>

      {/* Full-bleed glass band — Rectangle 42 in the frame: #0854A5 at 30%, r=89. */}
      <div className="mt-auto w-full rounded-t-[40px] bg-brand/30 pt-10 pb-8 backdrop-blur-[2px] lg:rounded-t-[89px] lg:pt-[30px] lg:pb-[31px]">
        <Container>
          <Reveal
            trigger="mount"
            delay={0.35}
            stagger={0.12}
            className="grid gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)] lg:gap-10"
          >
            <RevealItem className="min-w-0">
              <h2 className="text-[24px] leading-[1.0968] font-semibold text-white sm:text-[28px] lg:text-[32px]">
                The Future of Money Movement Starts Here.
              </h2>
              <p className="mt-5 max-w-[688px] text-[16px] leading-[1.1488] font-light text-white sm:text-[18px] lg:mt-[24px] lg:text-[20px]">
                AI-powered. Central Bank licensed and regulated. Built to
                connect payment schemes, stablecoin blockchain networks, and
                fiat rails without borders. Partnering with the world&apos;s
                leading financial institutions to enable secure, intelligent,
                and frictionless value exchange at a global scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 lg:mt-[38px] lg:gap-[20px]">
                <Button
                  href="/contact"
                  variant="light"
                  className="h-12 w-full px-7 text-[16px] sm:w-[259px] lg:text-[18px]"
                >
                  Request a Demo
                </Button>
                {/* Points at the About page, which is where the network story
                    lives; `/about` is the route the header and footer use. */}
                <Button
                  href="/about"
                  variant="outline"
                  className="h-12 w-full px-7 text-[16px] sm:w-[259px] lg:text-[18px]"
                >
                  Explore Our Network
                </Button>
              </div>
            </RevealItem>

            <RevealItem className="min-w-0 lg:pt-[73px]">
              <p className="text-center text-[14px] font-bold text-page sm:text-[16px]">
                A Trusted Framework You Can Rely Upon
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:flex-nowrap sm:gap-4 lg:mt-[51px] lg:gap-[28px]">
                {TRUST_LOGOS.map((logo, index) => (
                  <li
                    key={logo.alt}
                    className="flex min-w-0 items-center gap-3 sm:shrink-0 sm:gap-4 lg:gap-[28px]"
                  >
                    {index > 0 ? (
                      <span
                        className="hidden h-[36px] w-[3px] shrink-0 bg-white/40 sm:block lg:h-[50px]"
                        aria-hidden
                      />
                    ) : null}
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </li>
                ))}
              </ul>
            </RevealItem>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
