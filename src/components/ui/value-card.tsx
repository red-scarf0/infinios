import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Tall image card with the copy overlaid at the bottom — 454x740, r=55 in the
 * frame. The artwork is already dark where the text sits, so no scrim is
 * added; a gentle zoom on hover keeps it consistent with the other cards.
 */
export function ValueCard({
  title,
  body,
  image,
  className,
}: {
  title: string;
  body: string;
  image: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group/value relative isolate aspect-[454/740] overflow-hidden rounded-[36px] lg:rounded-[55px]",
        "transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1.5 hover:shadow-[0_26px_54px_-20px_rgba(1,4,13,0.55)]",
        "motion-reduce:transform-none motion-reduce:shadow-none",
        className,
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        aria-hidden
        sizes="(min-width: 1024px) 454px, (min-width: 640px) 45vw, 90vw"
        className="-z-10 object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/value:scale-[1.04] motion-reduce:transform-none"
      />

      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-[0_35px_77px_53px]">
        <h3 className="text-[24px] leading-[1.1488] font-bold text-white lg:text-[32px]">
          {title}
        </h3>
        <p className="mt-3 max-w-[313px] text-[15px] leading-[1.1488] text-white lg:mt-[18px] lg:text-[24px]">
          {body}
        </p>
      </div>
    </article>
  );
}
