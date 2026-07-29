import type { Metadata } from "next";

import { ProductDetailPage } from "@/components/products/detail/product-detail-page";
import { cardIssuing } from "@/data/products";

export const metadata: Metadata = cardIssuing.metadata;

export default function CardIssuingPage() {
  return <ProductDetailPage product={cardIssuing} />;
}
