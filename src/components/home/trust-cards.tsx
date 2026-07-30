import Image from "next/image";

import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const CARDS = [
  {
    number: "1",
    title: "Trust by Design",
    body: "Security, governance and compliance are built into the way the platform operates.",
    icon: "/icons/trust-by-design.svg",
    width: 64,
    height: 72,
    // Offsets are the Figma coordinates expressed against the 1920px frame.
    position: "2xl:left-[7.19vw] 2xl:top-[4.48vw]",
    // Each card drifts on its own phase so the group never moves in lockstep.
    floatDelay: "0s",
  },
  {
    number: "2",
    title: "Clarity in Complexity",
    body: "Connected controls and reporting give teams a clearer view of every programme.",
    icon: "/icons/clarity.svg",
    width: 70,
    height: 70,
    position: "2xl:left-[35.21vw] 2xl:top-[17.29vw]",
    floatDelay: "-2.3s",
  },
  {
    number: "3",
    title: "Scale with Discipline",
    body: "Modular infrastructure supports growth without multiplying providers, systems or operational burden.",
    icon: "/icons/scale.svg",
    width: 45,
    height: 55,
    position: "2xl:left-[57.24vw] 2xl:top-[26.93vw]",
    floatDelay: "-4.6s",
  },
];

const COINS = [
  {
    src: "/images/coin-md.png",
    w: 209,
    h: 208,
    pos: "left-[30.05vw] top-[9.01vw] w-[10.89vw]",
    delay: "-1.2s",
  },
  {
    src: "/images/coin-lg.png",
    w: 220,
    h: 294,
    pos: "left-[61.67vw] top-[15.52vw] w-[11.46vw]",
    delay: "-3.4s",
  },
  {
    src: "/images/coin-sm.png",
    w: 185,
    h: 140,
    pos: "left-[32.55vw] top-[38.91vw] w-[9.64vw]",
    delay: "-5.1s",
  },
];

export function TrustCards() {
  return (
    <section className="bg-white">
      <div className="relative isolate overflow-hidden rounded-[32px] lg:rounded-[67px] 2xl:h-[55.94vw]">
        <Image
          src="/images/why-bg.png"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="-z-10 object-cover"
        />

        {/* Floating coin renders — decorative, desktop composition only. */}
        {COINS.map((coin) => (
          <div
            key={coin.src}
            aria-hidden
            className={cn(
              "float-card absolute -z-10 hidden 2xl:block",
              coin.pos,
            )}
            style={{ animationDelay: coin.delay }}
          >
            <Image
              src={coin.src}
              alt=""
              width={coin.w}
              height={coin.h}
              className="h-auto w-full"
            />
          </div>
        ))}

        <Reveal
          as="ul"
          className="flex flex-col gap-6 px-5 py-14 sm:px-8 lg:gap-8 lg:px-12 lg:py-20 2xl:block 2xl:p-0"
          stagger={0.16}
          amount={0.15}
        >
          {CARDS.map((card, index) => (
            <RevealItem
              key={card.title}
              as="li"
              className={cn(
                "2xl:absolute",
                card.position,
                // The three cards are staggered diagonally and overlap by
                // design, so a lifted card has to come to the front or its
                // raised edge slides under its neighbour.
                "2xl:hover:z-10",
                index === 1 && "lg:ml-auto lg:max-w-[80%] 2xl:max-w-none",
                index === 2 && "lg:ml-[10%] 2xl:ml-0",
              )}
            >
              <div
                className="float-card"
                style={{ animationDelay: card.floatDelay }}
              >
                <article
                  className={cn(
                    "relative overflow-hidden rounded-[24px] border border-white/20 bg-white/18 p-7 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-md",
                    // Transition `translate` and `scale`, not `transform`:
                    // Tailwind v4 writes those as the independent CSS
                    // properties, so a `transform` transition never matched
                    // them and the old scale snapped in with no interpolation
                    // at all — the "pop". Expo-out settles hard then coasts,
                    // which reads as weight without overshooting into a bounce.
                    "transition-[translate,scale,box-shadow] duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    // Lift carries the movement; the 1.03 is just enough
                    // parallax to sell depth. Neither is a layout property, so
                    // the cards stay aligned and nothing reflows.
                    "hover:-translate-y-[14px] hover:scale-[1.03]",
                    "hover:shadow-[0_34px_70px_-18px_rgba(0,0,0,0.55),0_12px_24px_-14px_rgba(0,0,0,0.4)]",
                    "motion-reduce:transition-none motion-reduce:hover:translate-none motion-reduce:hover:scale-100",
                    "lg:rounded-[31px] lg:p-10 2xl:h-[22.45vw] 2xl:w-[31.41vw] 2xl:p-0",
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute top-4 right-6 text-[40px] leading-none font-bold text-white/25 lg:text-[56px] 2xl:top-[1.3vw] 2xl:right-[3.28vw] 2xl:text-[3.33vw]"
                  >
                    {card.number}
                  </span>

                  <div className="2xl:pt-[4.64vw] 2xl:pl-[4.06vw]">
                    <Image
                      src={card.icon}
                      alt=""
                      width={card.width}
                      height={card.height}
                      aria-hidden
                      className="h-[52px] w-auto lg:h-[72px] 2xl:h-[3.75vw]"
                    />
                    <h3 className="mt-4 text-[22px] leading-[1.1488] font-semibold text-white lg:text-[28px] 2xl:mt-[1.09vw] 2xl:text-[1.67vw]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[447px] text-[15px] leading-[1.1488] text-white lg:text-[18px] 2xl:mt-[1.88vw] 2xl:max-w-[23.28vw] 2xl:text-[1.25vw]">
                      {card.body}
                    </p>
                  </div>
                </article>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
