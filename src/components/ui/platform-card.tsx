import Image from "next/image";

import { cn } from "@/lib/utils";

export type PlatformCardData = {
  title: string;
  body: string;
  icon: string;
  width: number;
  height: number;
};

/**
 * Platform capability card — 414x328 at the 1920 frame width, r=35.
 *
 * Both states come straight from the frame: white with a 1px #15214E edge by
 * default, and the featured treatment (#0854A5 at 20% behind a 4px #0854A5
 * edge) on hover. Both edges are drawn as inset shadows rather than borders so
 * the 1px -> 4px change costs no layout.
 */
export function PlatformCard({ card }: { card: PlatformCardData }) {
  return (
    <article
      className={cn(
        "platform-card group/card flex h-full w-[300px] shrink-0 flex-col rounded-[35px] p-6",
        "sm:w-[360px] lg:h-[328px] lg:w-[414px] lg:p-[37px_24px_0_67px]",
      )}
    >
      <Image
        src={card.icon}
        alt=""
        width={card.width}
        height={card.height}
        aria-hidden
        // The rail auto-scrolls, so off-screen cards come into view on their
        // own — lazy loading would make icons pop in. They are 1-3KB SVGs.
        loading="eager"
        className="h-[35px] w-auto shrink-0 self-start transition-transform duration-[350ms] ease-out group-hover/card:scale-[1.06] lg:h-[37px]"
      />
      <h3 className="mt-5 text-[20px] leading-[1.1488] font-semibold text-brand lg:mt-[15px] lg:text-[24px]">
        {card.title}
      </h3>
      <p className="mt-3 max-w-[294px] text-[16px] leading-[1.1488] text-body lg:mt-[26px] lg:text-[24px]">
        {card.body}
      </p>
    </article>
  );
}
