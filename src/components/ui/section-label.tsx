import { cn } from "@/lib/utils";

const TONES = {
  /** #3967B5 — the default eyebrow on light sections. */
  brand: "text-brand-soft",
  /** #B1B1B1 — used by the ruled labels. */
  muted: "text-muted",
  /** On the dark vision plate. */
  white: "text-white",
  /** #151D48 — the careers block. */
  navy: "text-navy",
} as const;

/**
 * Uppercase eyebrow, Oxanium SemiBold 24px in the frame.
 *
 * Unruled labels take a tone; ruled labels are grey (#b1b1b1) on a #848484
 * hairline that bleeds to both viewport edges, and must be rendered *outside*
 * `Container` — the leading rule is one page gutter wide, so the label lands
 * on the content edge.
 */
export function SectionLabel({
  children,
  ruled = false,
  align = "left",
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  ruled?: boolean;
  align?: "left" | "center";
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const label = (
    <span
      className={cn(
        "shrink-0 text-[15px] font-semibold tracking-[0.06em] sm:text-[18px] lg:text-[24px] lg:tracking-normal",
        ruled ? TONES.muted : TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );

  if (!ruled) return label;

  return (
    <div className="flex w-full items-center gap-[18px]">
      <span
        aria-hidden
        className={cn(
          "h-px bg-[#848484]",
          align === "center"
            ? "flex-1"
            : "w-[calc(var(--page-gutter)_-_8px)] shrink-0",
        )}
      />
      {label}
      <span aria-hidden className="h-px flex-1 bg-[#848484]" />
    </div>
  );
}
