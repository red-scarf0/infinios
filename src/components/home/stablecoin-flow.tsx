import Image from "next/image";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * These icons are exported at their Figma frame size, and several of those
 * frames carry a lot of transparent padding around the glyph. `size` is tuned
 * per icon so the *visible* glyph lands at a consistent scale inside the ring.
 *
 * That padding is also uneven, so centring the *box* in the ring leaves the
 * glyph off-centre. `nudge` corrects each one by the measured offset between
 * its glyph's bounding box and its own centre — rasterised and read off the
 * alpha channel, as a percentage of the box so it holds at every breakpoint.
 * Fiat sits 3.6% low; wallet 1.4% right and 2.5% high; global 4.1% right and
 * 8.6% low. Stablecoin's glyph fills its box, so it needs nothing.
 */
const STEPS = [
  {
    label: "Fiat",
    icon: "/icons/flow-fiat.svg",
    width: 103,
    height: 104,
    size: "w-[50px] lg:w-[82px]",
    nudge: "-translate-y-[3.6%]",
  },
  {
    label: "Stablecoin",
    icon: "/icons/flow-stablecoin.svg",
    width: 81,
    height: 81,
    size: "w-[47px] lg:w-[78px]",
    nudge: "",
  },
  {
    label: "Wallet",
    icon: "/icons/flow-wallet.svg",
    width: 178,
    height: 181,
    size: "w-[101px] lg:w-[168px]",
    nudge: "-translate-x-[1.4%] translate-y-[2.5%]",
  },
  {
    label: "Global Payment",
    icon: "/icons/flow-global.svg",
    width: 179,
    height: 182,
    size: "w-[89px] lg:w-[148px]",
    nudge: "-translate-x-[4.1%] -translate-y-[8.6%]",
  },
];

export function StablecoinFlow() {
  return (
    <section className="bg-white pb-14 lg:pb-[266px]">
      <Container>
        <Reveal
          as="ol"
          stagger={0.11}
          className={cn(
            "flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center",
            // From lg the row is seven explicit tracks: four 190px ring
            // columns with three equal flexible columns between them. Equal
            // tracks are what make the ring spacing equal and land every arrow
            // on the exact midpoint. The previous `flex-1` cells each sized a
            // ring *plus its arrow* — except the last, which had no arrow — so
            // the final gap ran 59px wide and the arrows were squeezed to 70px
            // at 1920 and to nothing at all at 1024.
            "lg:grid lg:grid-cols-[repeat(3,190px_minmax(0,1fr))_190px] lg:items-start lg:gap-0",
            // The frame's row offset is measured at 1920 and only fits there:
            // 4x190 + 3x157 = 1231 against the 1231.8 this yields. Below that
            // the row needs the whole column or the arrow tracks collapse.
            "2xl:ml-[11.04%] 2xl:w-[81.9%]",
          )}
        >
          {STEPS.map((step, index) => (
            <RevealItem
              key={step.label}
              as="li"
              className={cn(
                "flex flex-col items-center sm:flex-row sm:items-start",
                // Steps with an arrow span their ring track and the gap track
                // after it, and hand both to their two children via subgrid.
                index < STEPS.length - 1 &&
                  "lg:col-span-2 lg:grid lg:grid-cols-subgrid",
              )}
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
                    className={cn("relative h-auto", step.size, step.nudge)}
                  />
                </div>
                <span className="cta-gradient mt-3 inline-flex h-[46px] min-w-[153px] items-center justify-center rounded-[21px] px-5 text-[16px] font-medium text-white lg:mt-[14px]">
                  {step.label}
                </span>
              </div>

              {index < STEPS.length - 1 ? (
                // The wrapper is exactly the ring's height and top-aligns with
                // it, so centring inside puts the arrow on the ring's axis no
                // matter how tall the arrow itself renders. Centring the arrow
                // against the step as a whole — the old behaviour — dropped it
                // 30px below the rings, half the label pill and its gap.
                <div className="my-4 flex items-center justify-center sm:mx-4 sm:my-0 sm:h-[140px] lg:mx-0 lg:h-[190px]">
                  <Image
                    src="/icons/flow-arrow.svg"
                    alt=""
                    width={109}
                    height={30}
                    aria-hidden
                    className="h-auto w-[60px] rotate-90 sm:rotate-0 lg:w-full lg:max-w-[109px]"
                  />
                </div>
              ) : null}
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
