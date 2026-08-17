"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * The scroll window the sweep is scrubbed across, expressed against the
 * paragraph and the viewport rather than in pixels so it holds at every screen
 * size: progress is 0 while the paragraph's top edge is still below 90% of the
 * viewport height, and reaches 1 as its bottom edge rises to 60% — by which
 * point the whole paragraph is sitting comfortably in view.
 */
const FLOW_OFFSET = ["start 0.9", "end 0.6"] as const;

/**
 * The trailing, grey clause of a two-tone paragraph.
 *
 * Renders exactly as designed at rest; the brand colour is then scrubbed in
 * from the left by scroll position — down fills, up drains, and stopping
 * half-way holds half-way. Nothing latches: the fill is a function of where
 * the paragraph sits, never of an animation having played. Only the two
 * paragraphs that the frame actually paints in two colours use this — the
 * "Why INFINIOS" and "Stablecoin infrastructure" copy and their siblings.
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
  const spanRef = useRef<HTMLSpanElement>(null);
  /**
   * The sweep is timed off the block the clause sits in, not off the clause
   * itself: `useScroll` measures its target with `clientHeight`, which is 0 for
   * an inline box, and a zero-length range would snap the fill from 0 to 1 in
   * a single pixel of scroll. The paragraph is also the right subject — the
   * grey clause is the tail of a sentence that starts in brand blue, so the
   * sentence is what should drive the timing.
   *
   * Resolved after mount rather than passed in, so no consumer has to thread a
   * ref through. `useScroll` tolerates a ref that hydrates in a later effect
   * and defers its measurement until this one has run.
   */
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let node: HTMLElement | null = spanRef.current;
    while (node && getComputedStyle(node).display === "inline") {
      node = node.parentElement;
    }
    scopeRef.current = node ?? spanRef.current;
  }, []);

  const { scrollYProgress } = useScroll({
    target: scopeRef,
    offset: [...FLOW_OFFSET],
  });

  /*
   * Clamped, so scrolling past the paragraph parks the sweep at either end
   * instead of running the gradient off the text.
   */
  const swept = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const backgroundPosition = useMotionTemplate`${swept}% 0`;

  const reduced = useReducedMotion();

  const palette = {
    "--flow-from": from,
    "--flow-to": to,
  } as React.CSSProperties;

  return (
    <motion.span
      ref={spanRef}
      className={cn("color-flow", className)}
      style={reduced ? palette : { ...palette, backgroundPosition }}
    >
      {children}
    </motion.span>
  );
}
