"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EASE } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Audience = {
  title: string;
  body: string;
  icon: string;
  width: number;
  height: number;
  /** Body measure, taken from the frame — it drives where each line wraps. */
  measure: string;
};

const AUDIENCES: Audience[] = [
  {
    title: "Banks and Financial Institutions",
    body: "Modernise issuing, processing and wallet capabilities through trusted infrastructure.",
    icon: "/icons/banks.svg",
    width: 53,
    height: 51,
    measure: "max-w-[379px]",
  },
  {
    title: "Fintechs and PSPs",
    body: "Launch payment products with fewer infrastructure dependencies.",
    icon: "/icons/fintechs.svg",
    width: 72,
    height: 47,
    measure: "max-w-[309px]",
  },
  {
    title: "Enterprises and Platforms",
    body: "Embed payments and manage complex transaction flows with greater control.",
    icon: "/icons/enterprises.svg",
    width: 58,
    height: 43,
    measure: "max-w-[379px]",
  },
  {
    title: "Remittance, Travel and B2B Businesses",
    body: "Connect card, wallet and settlement experiences across high-volume payment environments.",
    icon: "/icons/remittance.svg",
    width: 63,
    height: 57,
    measure: "max-w-[442px]",
  },
];

/*
 * Spine axis: in the frame the ring (x=893, w=190) and the rule (x=984, w=5)
 * share a centre at ~987 — 27px right of the content column's centre. The
 * ring, the rule and the CTA are all pinned to `calc(49.44% + 35.5px)`.
 *
 * Sequence: the ring settles, the rule draws down out of it, then items land.
 */
const RING_DURATION = 0.6;
const LINE_DELAY = 0.45;
const LINE_DURATION = 0.95;
const ITEMS_DELAY = 0.8;
const ITEM_STAGGER = 0.24;

const ringVariants: Variants = {
  hidden: { opacity: 0, scale: 0.86 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: RING_DURATION, ease: EASE },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: LINE_DURATION, ease: EASE, delay: LINE_DELAY },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function AudienceIcon({ item }: { item: Audience }) {
  return (
    <Image
      src={item.icon}
      alt=""
      width={item.width}
      height={item.height}
      aria-hidden
      className="h-auto w-[44px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/item:scale-110 motion-reduce:transform-none lg:w-[62px]"
    />
  );
}

function AudienceCopy({
  item,
  align,
}: {
  item: Audience;
  align: "left" | "right";
}) {
  return (
    <div className={cn(align === "right" && "lg:text-right")}>
      <h3 className="text-[20px] leading-[1.1488] font-semibold text-brand xl:text-[24px]">
        {item.title}
      </h3>
      <p
        className={cn(
          "mt-3 text-[16px] leading-[1.1488] text-body xl:text-[24px]",
          item.measure,
          align === "right" && "lg:ml-auto",
        )}
      >
        {item.body}
      </p>
    </div>
  );
}

/**
 * Hover treatment for an entry: a small lift and a soft shadow on the copy
 * only — the spine itself never moves.
 */
function HoverLift({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/item:-translate-y-1 group-hover/item:shadow-[0_16px_36px_-18px_rgba(8,84,165,0.35)] motion-reduce:transform-none motion-reduce:shadow-none">
      {children}
    </div>
  );
}

export function AudienceTimeline() {
  const reduced = useReducedMotion();
  const viewport = { once: true, amount: 0.2 } as const;

  return (
    <section className="bg-white pb-16 lg:pb-[105px]">
      <Container>
        {/*
          The ring is centred on the spine axis — not the page — so the rule
          leaves exactly from its bottom centre, as in the frame.
        */}
        <motion.div
          className="mx-auto w-[120px] lg:mx-0 lg:ml-[calc(49.44%_+_35.5px)] lg:w-[190px] lg:-translate-x-1/2"
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={viewport}
          variants={reduced ? undefined : ringVariants}
        >
          <Image
            src="/images/ring.png"
            alt=""
            width={190}
            height={193}
            aria-hidden
            className="h-auto w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* pb extends the rule past the last entry, as the frame does. */}
        <motion.ol
          className="relative lg:pb-[88px]"
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={viewport}
        >
          {/* Spine — drawn downward from the ring's bottom centre. */}
          <motion.span
            aria-hidden
            className="absolute inset-y-0 left-[10px] w-[5px] origin-top rounded-full bg-steel/25 lg:left-[calc(49.44%_+_35.5px)] lg:-translate-x-1/2"
            variants={reduced ? undefined : lineVariants}
          />

          {AUDIENCES.map((item, index) => {
            // Odd rows put the copy left of the spine and the icon right of it.
            const copyOnLeft = index % 2 === 1;

            return (
              <motion.li
                key={item.title}
                className={cn(
                  "group/item relative pt-10 pl-12 lg:grid lg:grid-cols-[49.44%_71px_1fr] lg:items-start lg:pl-0",
                  index === 0 && "lg:pt-[71px]",
                  index === 1 && "lg:pt-[75px]",
                  index === 2 && "lg:pt-[90px]",
                  index === 3 && "lg:pt-[75px]",
                )}
                variants={reduced ? undefined : itemVariants}
                transition={
                  reduced
                    ? undefined
                    : {
                        duration: 0.55,
                        ease: EASE,
                        delay: ITEMS_DELAY + index * ITEM_STAGGER,
                      }
                }
              >
                <div className="hidden lg:flex lg:justify-end lg:pt-1">
                  {copyOnLeft ? (
                    <HoverLift>
                      <AudienceCopy item={item} align="right" />
                    </HoverLift>
                  ) : (
                    <AudienceIcon item={item} />
                  )}
                </div>

                <div className="absolute top-[42px] left-0 lg:relative lg:top-auto lg:left-auto lg:flex lg:justify-center lg:pt-2">
                  <span
                    aria-hidden
                    className="block size-[22px] rounded-full bg-brand"
                  />
                </div>

                <div className="lg:flex lg:justify-start lg:pt-1">
                  {/* Small screens always show icon above copy on the right rail. */}
                  <div className="lg:hidden">
                    <AudienceIcon item={item} />
                    <div className="mt-3">
                      <HoverLift>
                        <AudienceCopy item={item} align="left" />
                      </HoverLift>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    {copyOnLeft ? (
                      <AudienceIcon item={item} />
                    ) : (
                      <HoverLift>
                        <AudienceCopy item={item} align="left" />
                      </HoverLift>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Centred on the spine rather than the page, as in the frame. */}
        <div className="mt-12 flex justify-center lg:mt-[5px] lg:justify-start">
          <Button
            href="/solutions"
            className="h-[46px] w-full px-6 text-[16px] sm:w-[250px] lg:ml-[calc(49.44%_-_89.5px)] lg:text-[18px]"
          >
            Explore Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
