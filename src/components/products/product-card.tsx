"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type Product = {
  title: string;
  body: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  href: string;
};

/**
 * Product capability card.
 *
 * Default is the light 300x132 card from the frame (#EBF1FD); hover is the
 * 301x271 blue card from the "hover state of infinios product cards" group
 * (#B2CDFF) — body copy and the "+" button fade in, and the card grows
 * downward.
 *
 * Only the "+" navigates. The tile itself is presentation, so hovering it
 * reveals the detail without arming a click target the whole card wide.
 *
 * The row reserves the expanded height, so growing a card never reflows the
 * ones beside it.
 */
export function ProductCard({
  product,
  active,
  onHover,
}: {
  product: Product;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <li className="lg:h-[271px]">
      <div
        onMouseEnter={onHover}
        className={cn(
          "product-card group/product relative overflow-hidden rounded-[20px] p-[22px_20px] lg:h-[132px] lg:p-[22px_26px]",
          active && "is-active",
        )}
      >
        {/* Icon sits on a common baseline: the frame's glyphs vary in height. */}
        <span className="flex h-[45px] items-end">
          <Image
            src={product.icon}
            alt=""
            width={product.iconWidth}
            height={product.iconHeight}
            aria-hidden
            loading="eager"
            className="h-auto max-h-[45px] w-auto max-w-[61px]"
          />
        </span>

        <h3 className="mt-[7px] text-[18px] leading-[1.1488] font-bold text-brand lg:text-[24px]">
          {product.title}
        </h3>

        {/* Revealed with the expanded state. */}
        <p className="product-card__body mt-[18px] max-w-[237px] text-[16px] leading-[1.1488] font-light text-brand lg:text-[20px]">
          {product.body}
        </p>

        <Link
          href={product.href}
          onFocus={onHover}
          className={cn(
            "product-card__plus absolute right-[24px] bottom-[22px] grid size-9 place-items-center rounded-full bg-brand",
            "text-[22px] leading-none font-medium text-white",
            "hover:scale-105 motion-reduce:transform-none",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          )}
        >
          <span aria-hidden>+</span>
          <span className="sr-only">Explore {product.title}</span>
        </Link>
      </div>
    </li>
  );
}
