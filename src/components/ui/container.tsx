import { cn } from "@/lib/utils";

/**
 * Page gutter. Driven by the `--page-gutter` custom property so that
 * full-bleed elements (section rules, the platform carousel) can align to the
 * same content edge. At 1920px this yields the frame's 1504px content column.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full px-[var(--page-gutter)]", className)}>
      {children}
    </div>
  );
}
