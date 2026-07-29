"use client";

import { useState } from "react";

import { ProductCard, type Product } from "./product-card";

/**
 * The five capability cards.
 *
 * Hovering — or tabbing to a card's "+" — expands it into its blue state;
 * only one card is ever active. Navigation lives on the "+" alone, so moving
 * across the row never commits to a page.
 */
export function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul
      onMouseLeave={() => setActive(null)}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-[7px]"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.title}
          product={product}
          active={active === index}
          onHover={() => setActive(index)}
        />
      ))}
    </ul>
  );
}
