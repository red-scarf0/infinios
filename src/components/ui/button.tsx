import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "gradient" | "light" | "outline" | "solid" | "ghost";

const VARIANTS: Record<ButtonVariant, string> = {
  // Section CTAs — "Explore the Platform", "Explore Solutions", flow labels.
  gradient: "cta-gradient text-white rounded-[21px]",
  // Hero primary — white pill on the video backdrop.
  light: "bg-white text-navy-ink rounded-[21px]",
  // Hero secondary — 2px white hairline on the video backdrop.
  outline: "border-2 border-white text-white rounded-[29px]",
  // Header primary.
  solid: "bg-brand-button text-white rounded-[19px]",
  // Header secondary.
  ghost: "border border-brand-button text-navy-ink rounded-[15px]",
};

const ARROW_TONE: Record<ButtonVariant, "dark" | "white" | null> = {
  gradient: "white",
  light: "dark",
  outline: "white",
  solid: null,
  ghost: null,
};

export function Button({
  href,
  children,
  variant = "gradient",
  className,
  style,
  arrow = true,
  "aria-current": ariaCurrent,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Frame-specific measures, e.g. the detail heroes' CTA widths. */
  style?: React.CSSProperties;
  arrow?: boolean;
  /** Set when the button points at the page you are already on. */
  "aria-current"?: "page";
}) {
  const tone = arrow ? ARROW_TONE[variant] : null;

  return (
    <Link
      href={href}
      style={style}
      aria-current={ariaCurrent}
      className={cn(
        "group/btn inline-flex items-center justify-center gap-3 font-medium whitespace-nowrap",
        // Callers set the frame's pill width, but a label longer than that
        // width was drawn for does not shrink — `whitespace-nowrap` keeps it at
        // its min-content — so it grew straight through the padding and out of
        // the pill. `min-width: fit-content` makes the declared width a floor
        // instead of a cage: a pill whose content fits keeps exactly the width
        // it was given, and only one that cannot hold its label grows, so the
        // padding below is always honoured on both sides.
        //
        // Only from `sm`, which is where those fixed widths start. Below it the
        // pills are `w-full` and already have room, and a floor there would let
        // the longest labels push past the edge of a 320px screen.
        "sm:min-w-fit",
        // Transition `translate` and `scale`, not `transform`: Tailwind v4
        // writes those as their own CSS properties, so this arbitrary list
        // never matched them and the lift snapped instead of easing.
        "transition-[translate,scale,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-95 active:scale-[0.99]",
        "motion-reduce:transition-none motion-reduce:hover:translate-none motion-reduce:hover:scale-100",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        VARIANTS[variant],
        className,
      )}
    >
      <span>{children}</span>
      {tone ? (
        <Image
          src={
            tone === "dark" ? "/icons/arrow-dark.svg" : "/icons/arrow-white.svg"
          }
          alt=""
          width={43}
          height={15}
          aria-hidden
          // `transition-transform` is the utility, not an arbitrary list, so
          // v4 expands it to cover `translate` — the 4px glide already eases.
          // It travels into the padding the rule above now guarantees, so it
          // stays inside the pill without anything having to clip it.
          className="h-[15px] w-[30px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1 motion-reduce:group-hover/btn:translate-none sm:w-[43px]"
        />
      ) : null}
    </Link>
  );
}
