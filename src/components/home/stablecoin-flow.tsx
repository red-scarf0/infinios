import Image from "next/image";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * These icons are exported at their Figma frame size, and several of those
 * frames carry a lot of transparent padding around the glyph. `size` is tuned
 * per icon so the *visible* glyph lands at a consistent scale inside the ring.
 */
const STEPS = [
  {
    label: "Fiat",
    icon: "/icons/flow-fiat.svg",
    width: 103,
    height: 104,
    size: "w-[50px] lg:w-[82px]",
  },
  {
    label: "Stablecoin",
    icon: "/icons/flow-stablecoin.svg",
    width: 81,
    height: 81,
    size: "w-[47px] lg:w-[78px]",
  },
  {
    label: "Wallet",
    icon: "/icons/flow-wallet.svg",
    width: 178,
    height: 181,
    size: "w-[101px] lg:w-[168px]",
  },
  {
    label: "Global Payment",
    icon: "/icons/flow-global.svg",
    width: 179,
    height: 182,
    size: "w-[89px] lg:w-[148px]",
  },
];

export function StablecoinFlow() {
  return (
    <section className="bg-white pb-14 lg:pb-[266px]">
      <Container>
        <Reveal
          as="ol"
          stagger={0.11}
          className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center lg:ml-[11.04%] lg:w-[81.9%] lg:flex-nowrap lg:gap-0"
        >
          {STEPS.map((step, index) => (
            <RevealItem
              key={step.label}
              as="li"
              className="flex flex-col items-center sm:flex-row lg:flex-1 lg:justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative grid size-[140px] place-items-center lg:size-[190px]">
                  <Image
                    src="/images/ring.png"
                    alt=""
                    fill
                    aria-hidden
                    sizes="190px"
                    className="object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  />
                  <Image
                    src={step.icon}
                    alt=""
                    width={step.width}
                    height={step.height}
                    aria-hidden
                    className={cn("relative h-auto", step.size)}
                  />
                </div>
                <span className="cta-gradient mt-3 inline-flex h-[46px] min-w-[153px] items-center justify-center rounded-[21px] px-5 text-[16px] font-medium text-white lg:mt-[14px]">
                  {step.label}
                </span>
              </div>

              {index < STEPS.length - 1 ? (
                <Image
                  src="/icons/flow-arrow.svg"
                  alt=""
                  width={109}
                  height={30}
                  aria-hidden
                  className="my-4 h-auto w-[60px] rotate-90 sm:mx-4 sm:my-0 sm:rotate-0 lg:mx-6 lg:w-[109px]"
                />
              ) : null}
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
