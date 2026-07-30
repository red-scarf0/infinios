import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const CARDS = [
  {
    title: "Integrated Infrastructure",
    body: "Connect stablecoin-enabled flows with cards, wallets and payment operations.",
    image: "/images/stablecoin-1.png",
  },
  {
    title: "Enterprise Controls",
    body: "Maintain visibility, governance and operational oversight.",
    image: "/images/stablecoin-2.png",
  },
  {
    title: "Built for Regulated Environments",
    body: "Support innovation without separating it from the standards expected of financial infrastructure.",
    image: "/images/stablecoin-3.png",
  },
];

export function StablecoinCards() {
  return (
    <section className="bg-white pb-16 lg:pb-[201px]">
      <Container>
        <Reveal
          as="ul"
          stagger={0.13}
          className="grid gap-6 sm:grid-cols-2 lg:ml-[2.26%] lg:w-[93.02%] lg:grid-cols-3 lg:gap-[38px]"
        >
          {CARDS.map((card) => (
            <li
              key={card.title}
              className={cn(
                "group/card flex flex-col rounded-[28px] bg-steel/45 p-6 lg:h-[502px] lg:rounded-[39px] lg:p-[22px_24px_0]",
                // Hover only — the resting state is left exactly as designed.
                // `translate` is named explicitly because Tailwind v4 writes it
                // as its own CSS property, so a `transform` transition would
                // never match it and the lift would snap instead of easing.
                "transition-[translate,background-color,box-shadow] duration-300 ease-out",
                // Lift and brighten. Dropping the steel opacity lets more white
                // through, which lifts the value without shifting the hue.
                "hover:-translate-y-[10px] hover:bg-steel/35",
                // The 1px spread is the brand accent edge, the two soft layers
                // are the depth. All of it is box-shadow, so none of it costs a
                // pixel of layout or nudges a neighbour. The resting value
                // repeats the structure in transparent so box-shadow has a
                // matching list to interpolate against rather than `none`.
                "shadow-[0_0_0_1px_rgba(8,84,165,0),0_0_0_0_rgba(6,27,58,0),0_0_0_0_rgba(8,84,165,0)]",
                "hover:shadow-[0_0_0_1px_rgba(8,84,165,0.28),0_18px_38px_-16px_rgba(6,27,58,0.3),0_6px_16px_-8px_rgba(8,84,165,0.22)]",
                "motion-reduce:transition-none motion-reduce:hover:translate-none",
              )}
            >
              {/* The radius moves to a clipping wrapper so the image can scale
                  inside it without spilling past the rounded corner. The
                  wrapper carries the image's exact former box, so the card's
                  internal geometry is unchanged. */}
              <div className="h-[180px] w-full overflow-hidden rounded-[22px] lg:h-[237px] lg:rounded-[33px]">
                <Image
                  src={card.image}
                  alt=""
                  width={391}
                  height={237}
                  aria-hidden
                  sizes="(min-width: 1024px) 391px, (min-width: 640px) 45vw, 90vw"
                  className={cn(
                    "h-full w-full object-cover",
                    "transition-[scale] duration-[350ms] ease-out group-hover/card:scale-[1.04]",
                    "motion-reduce:transition-none motion-reduce:group-hover/card:scale-100",
                  )}
                />
              </div>
              <h3 className="mt-6 text-[20px] leading-[1.1488] font-semibold text-brand lg:mt-[43px] lg:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.1488] text-body lg:mt-[14px] lg:text-[24px]">
                {card.body}
              </p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
