"use client";

import { useCallback, useRef, useState } from "react";
import { useAnimationFrame, useReducedMotion } from "framer-motion";

import {
  PlatformCard,
  type PlatformCardData,
} from "@/components/ui/platform-card";

/** Auto-scroll speed in CSS pixels per second. */
const SPEED = 53;
/** How long to wait after a manual swipe before auto-scroll resumes. */
const RESUME_DELAY = 1200;

/**
 * Seamless infinite marquee.
 *
 * The card set is rendered twice and the scroller wraps by exactly half the
 * scroll width, so the seam is invisible. Each card carries a trailing margin
 * (rather than the track using `gap`) so that half the scroll width is exactly
 * one set — with `gap` it would be one set minus half a gap, which shows as a
 * jump on every loop.
 *
 * Scrolling is native, so touch swipe and trackpads work with no extra code;
 * the animation frame only nudges `scrollLeft` along.
 */
export function PlatformCarousel({ cards }: { cards: PlatformCardData[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();

  /** Pause while the user is interacting, then resume shortly after. */
  const holdThenResume = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  useAnimationFrame((_, delta) => {
    const el = scrollerRef.current;
    if (!el || paused || reduced) return;

    const half = el.scrollWidth / 2;
    if (half <= 0) return;

    // Carry the position as a float of our own. Accumulating onto `scrollLeft`
    // instead re-reads a value the browser has rounded, and the rounding does
    // not cancel out: at this speed it measured 56.5px/s against the 53 asked
    // for, and the error moves with the frame rate. Off our own accumulator it
    // measures 52.8. Re-sync when something else moves the scroller (a swipe,
    // a wheel, focus), which is the only way the two can diverge.
    if (Math.abs(offset.current - el.scrollLeft) > 2)
      offset.current = el.scrollLeft;

    // delta can spike after a background tab; clamp so we never jump.
    offset.current += (SPEED * Math.min(delta, 50)) / 1000;
    if (offset.current >= half) offset.current -= half;
    el.scrollLeft = offset.current;
  });

  return (
    <div
      ref={scrollerRef}
      // `scroll-behavior: auto` overrides the page-level smooth scrolling,
      // which would otherwise animate (and fight) every frame's scrollLeft.
      className="no-scrollbar overflow-x-auto overscroll-x-contain [scroll-behavior:auto]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={holdThenResume}
      onWheel={holdThenResume}
      aria-label="Platform capabilities"
    >
      <ul className="flex w-max items-stretch py-1">
        {cards.map((card) => (
          <li key={card.title} className="mr-5 lg:mr-[39px]">
            <PlatformCard card={card} />
          </li>
        ))}
        {/* Duplicate set — the seam of the loop, hidden from assistive tech. */}
        {cards.map((card) => (
          <li
            key={`dup-${card.title}`}
            aria-hidden
            className="mr-5 lg:mr-[39px]"
          >
            <PlatformCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
