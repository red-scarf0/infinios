"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type CapabilityCard = {
  title: string;
  body: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  href: string;
};

/**
 * Frame measures. The products and solutions rows draw the same card, but the
 * solutions glyphs stand taller, its titles run to two lines and its resting
 * content is anchored to the foot of the card rather than the top.
 */
export type CapabilityCardMetrics = {
  /** Glyph baseline box. Products 45, solutions 56. */
  iconBoxHeight?: number;
  iconMaxWidth?: number;
  /** Resting top padding. The solutions frame packs its 132px card tighter. */
  paddingTop?: number;
  /** Top padding once expanded; both frames open at 22. */
  paddingTopOpen?: number;
  paddingBottom?: number;
  /**
   * Title slot. The solutions frame mixes one- and two-line titles but starts
   * every body at the same height, so the slot is fixed at two lines and short
   * titles centre inside it.
   */
  titleSlot?: number;
  /** Glyph box to title. The products frame leaves 7px; the solutions frame
   *  runs the title straight on from the box. */
  titleGap?: number;
  /**
   * Glyph box to title once expanded. The industries frame keeps its glyph
   * still and slides the title up instead, so the two differ there.
   */
  titleGapOpen?: number;
  /**
   * How a one-line title sits in the slot. The solutions frame centres it;
   * the industries frame starts every title at the same height.
   */
  titleAlign?: "center" | "start";
  /** Title to body. */
  bodyGap?: number;
  /** Row height reserved for the expanded card, so hovering reflows nothing. */
  reserve?: number;
  /**
   * Hold every title to one line by capping it at the frame's 24px and letting
   * it shrink with the card when the card cannot seat that.
   *
   * The products frame draws five 300px cards whose longest title, "Platform &
   * Operations", sets to exactly 255px — the full content width, with no slack.
   * Our row is 1514px against the frame's 1530, so its cards come out at 297px
   * and that title alone wraps, standing the last card 19px taller than the
   * other four. Sizing the title off the card (which is a container) keeps all
   * five the same height at every width, and the cap means it is never drawn
   * larger than the frame.
   */
  fitTitle?: boolean;
};

/**
 * The capability card row — "INFINIOS PRODUCTS" on the products frame and
 * "INFINIOS SOLUTIONS" on the solutions frame. One component: both frames draw
 * the same light resting card and the same #B2CDFF expanded card, and both
 * keep their expanded state in a separate Figma group ("hover state of
 * infinios product cards" / "hover state of cards infinios solutions").
 *
 * Hovering — or tabbing to a card's "+" — expands one card at a time.
 * `activeHref` marks the card for the page you are already on: it starts
 * expanded, hovering another takes over, and leaving the row hands it back.
 *
 * Navigation lives on the "+" alone, so moving across the row never commits to
 * a page.
 *
 * The row fits as many cards as it can give the frame's ~300px to, so it runs
 * five across at 1920 exactly as drawn and folds to four, three and two on the
 * way down. A fixed five-column grid would squeeze each card to 180px on a
 * tablet, where the frame's copy runs to eight lines.
 */
export function CapabilityCardRow({
  items,
  activeHref,
  metrics = {},
}: {
  items: CapabilityCard[];
  /** Card to hold open by default — the current page, on a detail route. */
  activeHref?: string;
  metrics?: CapabilityCardMetrics;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const current = items.findIndex((item) => item.href === activeHref);
  const active = hovered ?? (current === -1 ? null : current);

  return (
    <ul
      onMouseLeave={() => setHovered(null)}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:items-start lg:gap-[7px]"
    >
      {items.map((item, index) => (
        <CapabilityCardTile
          key={item.title}
          item={item}
          active={active === index}
          metrics={metrics}
          onHover={() => setHovered(index)}
        />
      ))}
    </ul>
  );
}

/**
 * Resting state is the light 132px card from the frame (#EBF1FD); the expanded
 * state is the #B2CDFF card, where the body copy and the "+" fade in and the
 * card grows downward.
 *
 * Nothing here is a fixed height: the card carries the frame's height as a
 * floor and grows with its content, and the reveal collapses by animating its
 * grid track to zero rather than by cropping. The row reserves the expanded
 * height, so growing a card never reflows the ones beside it.
 *
 * The tile itself is presentation, so hovering it reveals the detail without
 * arming a click target the whole card wide.
 */
function CapabilityCardTile({
  item,
  active,
  metrics,
  onHover,
}: {
  item: CapabilityCard;
  active: boolean;
  metrics: CapabilityCardMetrics;
  onHover: () => void;
}) {
  const {
    iconBoxHeight = 45,
    iconMaxWidth = 61,
    paddingTop = 22,
    paddingTopOpen = 22,
    paddingBottom = 22,
    titleSlot = 0,
    titleGap = 7,
    titleGapOpen,
    titleAlign = "center",
    bodyGap = 18,
    reserve = 271,
    fitTitle = false,
  } = metrics;

  return (
    <li
      // Reserve the expanded height only where the row fits on one line —
      // there the frame leaves that space empty anyway, so hovering reflows
      // nothing. Once the grid wraps, reserving it would leave a hole between
      // the rows.
      className="min-[1552px]:min-h-[var(--card-reserve)]"
      style={{ "--card-reserve": `${reserve}px` } as React.CSSProperties}
    >
      <div
        onMouseEnter={onHover}
        style={
          {
            "--card-pt": `${paddingTop}px`,
            "--card-pt-open": `${paddingTopOpen}px`,
            "--card-pb": `${paddingBottom}px`,
            "--title-gap": `${titleGap}px`,
            "--title-gap-open": `${titleGapOpen ?? titleGap}px`,
          } as React.CSSProperties
        }
        className={cn(
          "product-card group/product relative rounded-[20px] px-5 lg:min-h-[132px] lg:px-[26px]",
          // The card becomes the container the title sizes itself against.
          fitTitle && "@container",
          active && "is-active",
        )}
      >
        {/* Icon sits on a common baseline: the frame's glyphs vary in height. */}
        <span
          className="flex items-end"
          style={{ height: iconBoxHeight }}
          aria-hidden
        >
          <Image
            src={item.icon}
            alt=""
            width={item.iconWidth}
            height={item.iconHeight}
            loading="eager"
            className="h-auto w-auto"
            style={{ maxHeight: iconBoxHeight, maxWidth: iconMaxWidth }}
          />
        </span>

        <h3
          className={cn(
            "product-card__title flex flex-col text-[18px] leading-[1.1488] font-bold whitespace-pre-line text-brand lg:text-[24px]",
            titleAlign === "start" ? "justify-start" : "justify-center",
            // 24px / 255px — the frame's size over its longest title — less a
            // couple of percent so font-metric rounding cannot tip the line
            // over. `cqw` is a share of the container's *content* box, so the
            // padding is already out of it. Capped at 24px, so a card wide
            // enough for the frame's setting is given exactly that.
            fitTitle && "lg:text-[min(24px,calc(100cqw*0.0923))]",
          )}
          style={{ minHeight: titleSlot || undefined }}
        >
          {item.title}
        </h3>

        {/* Collapses by animating the grid track, so nothing is ever cropped. */}
        <div className="product-card__reveal">
          <div className="min-h-0 overflow-hidden">
            <p
              className="product-card__body max-w-[237px] text-[16px] leading-[1.1488] font-light text-brand lg:text-[20px]"
              style={{ marginTop: bodyGap }}
            >
              {item.body}
            </p>

            <Link
              href={item.href}
              onFocus={onHover}
              className={cn(
                "product-card__plus mt-[20px] ml-auto grid size-9 place-items-center rounded-full bg-brand",
                "text-[22px] leading-none font-medium text-white",
                "hover:scale-105 motion-reduce:transform-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              )}
            >
              <span aria-hidden>+</span>
              <span className="sr-only">
                Explore {item.title.replace("\n", " ")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
