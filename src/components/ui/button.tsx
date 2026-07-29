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
        "transition-[transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-95 active:scale-[0.99]",
        "motion-reduce:transform-none motion-reduce:transition-none",
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
          className="h-[15px] w-[30px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1 motion-reduce:transform-none sm:w-[43px]"
        />
      ) : null}
    </Link>
  );
}
