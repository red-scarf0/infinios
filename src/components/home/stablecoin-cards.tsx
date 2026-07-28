import Image from "next/image";

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
              className="flex flex-col rounded-[28px] bg-steel/45 p-6 lg:h-[502px] lg:rounded-[39px] lg:p-[22px_24px_0]"
            >
              <Image
                src={card.image}
                alt=""
                width={391}
                height={237}
                aria-hidden
                sizes="(min-width: 1024px) 391px, (min-width: 640px) 45vw, 90vw"
                className="h-[180px] w-full rounded-[22px] object-cover lg:h-[237px] lg:rounded-[33px]"
              />
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
