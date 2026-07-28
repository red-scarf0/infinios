"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

/** Shared easing — a gentle, premium-feeling ease-out. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fade-up on viewport entry. Wraps arbitrary content so server components can
 * stay server components and only opt into motion at the boundary.
 *
 * With `stagger`, direct children animate in sequence — use `<RevealItem>`
 * for each child.
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 28,
  stagger,
  amount = 0.25,
  trigger = "view",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "ul" | "ol" | "li";
  delay?: number;
  y?: number;
  stagger?: number;
  amount?: number;
  /** "view" animates on scroll into view; "mount" animates on page load. */
  trigger?: "view" | "mount";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const variants: Variants = stagger
    ? {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE, delay },
        },
      };

  const trigger_props =
    trigger === "mount"
      ? { animate: "show" as const }
      : {
          whileInView: "show" as const,
          viewport: { once: true, amount },
        };

  return (
    <MotionTag
      className={cn(className)}
      style={style}
      initial="hidden"
      variants={variants}
      {...trigger_props}
    >
      {children}
    </MotionTag>
  );
}

/** A child of a staggered `<Reveal>`. */
export function RevealItem({
  children,
  className,
  as = "div",
  y = 28,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
  y?: number;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}
