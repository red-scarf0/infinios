import { cn } from "@/lib/utils";

/**
 * The trailing, grey clause of a two-tone paragraph.
 *
 * Renders exactly as designed at rest; on hover of the surrounding paragraph
 * the brand colour sweeps in from the left. Only the two paragraphs that the
 * frame actually paints in two colours use this — the "Why INFINIOS" and
 * "Stablecoin infrastructure" copy.
 *
 * Wrap the paragraph in `group/flow` for the hover to register.
 */
export function ColorFlowText({
  children,
  from,
  to = "#0854a5",
  className,
}: {
  children: React.ReactNode;
  /** The resting colour, straight from the frame. */
  from: string;
  /** The colour that flows in. Defaults to the brand blue. */
  to?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("color-flow", className)}
      style={{ "--flow-from": from, "--flow-to": to } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
