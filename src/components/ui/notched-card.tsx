import { cn } from "@/lib/utils";

/**
 * Bordered card with a single large radius on the top-right corner and a short
 * accent bar riding the top edge. In the frame the corners are
 * `[0, 60, 0, 0]` — square everywhere except a 60px top-right — so a plain
 * asymmetric `border-radius` reproduces it and the 1px border follows the
 * curve natively; no clip-path needed.
 *
 * Two tones, both from the frame: `brand` (#1156A3) in "Built on experience"
 * and `navy` (#151D48) in the careers grid.
 */
export function NotchedCard({
  title,
  body,
  tone = "brand",
  className,
  contentClassName,
  contentStyle,
}: {
  title: React.ReactNode;
  body: React.ReactNode;
  tone?: "brand" | "navy";
  className?: string;
  /** Padding override — the product pages sit on a shorter 213px card. */
  contentClassName?: string;
  /** Frame measures, e.g. the card height a detail grid was drawn at. */
  contentStyle?: React.CSSProperties;
}) {
  const line = tone === "brand" ? "border-[#1156a3]" : "border-navy";
  const barTone = tone === "brand" ? "bg-[#1156a3]" : "bg-navy";
  const heading = tone === "brand" ? "text-[#1156a3]" : "text-navy";

  return (
    <article
      className={cn(
        "group/notch relative transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1 motion-reduce:transform-none",
        className,
      )}
    >
      {/* Accent bar sits 2px proud of the card's top edge, as in the frame. */}
      <span
        aria-hidden
        className={cn(
          "absolute -top-[2px] left-[33px] z-10 h-[7px] w-[80px] lg:h-[11px] lg:w-[109px]",
          barTone,
        )}
      />
      <div
        style={contentStyle}
        className={cn(
          "h-full rounded-tr-[40px] border p-6 lg:rounded-tr-[60px] lg:p-[41px_30px_37px_33px]",
          "transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover/notch:shadow-[0_18px_40px_-16px_rgba(17,86,163,0.35)] motion-reduce:shadow-none",
          line,
          contentClassName,
        )}
      >
        <h3
          className={cn(
            "text-[24px] leading-[1.1488] font-bold whitespace-pre-line lg:text-[32px]",
            heading,
          )}
        >
          {title}
        </h3>
        <p className="mt-4 text-[16px] leading-[1.45] font-light text-body lg:mt-[26px] lg:text-[20px]">
          {body}
        </p>
      </div>
    </article>
  );
}
