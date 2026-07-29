import type { Metadata } from "next";

import { ProductDetailPage } from "@/components/products/detail/product-detail-page";
import { digitalWallets } from "@/data/products";

export const metadata: Metadata = digitalWallets.metadata;

export default function DigitalWalletsPage() {
  return <ProductDetailPage product={digitalWallets} />;
}
