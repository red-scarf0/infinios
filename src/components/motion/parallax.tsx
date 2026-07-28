"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Subtle vertical parallax tied to scroll progress through the viewport.
 * Deliberately small — the design is static, this only adds depth.
 */
export function Parallax({
  children,
  className,
  distance = 34,
}: {
  children: React.ReactNode;
  className?: string;
  /** Total travel in px across the full scroll range. */
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 26, mass: 0.4 });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      {/*
        `will-change: transform` makes this a containing block for absolutely
        positioned descendants, so it must carry the wrapper's size — otherwise
        a `next/image` with `fill` inside resolves against a zero-height box.
      */}
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
