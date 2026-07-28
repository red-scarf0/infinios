"use client";

import { useState } from "react";

import { ProductCard, type Product } from "./product-card";

/**
 * The five capability cards.
 *
 * Hovering expands a card into its blue state; clicking selects it — which
 * persists after the pointer leaves — and navigates to the product page. Only
 * one card is ever active.
 */
export function ProductGrid({ products }: { products: Product[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ul
      onMouseLeave={() => setHovered(null)}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-[7px]"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.title}
          product={product}
          active={hovered === index || (hovered === null && selected === index)}
          onHover={() => setHovered(index)}
          onSelect={() => setSelected(index)}
        />
      ))}
    </ul>
  );
}
