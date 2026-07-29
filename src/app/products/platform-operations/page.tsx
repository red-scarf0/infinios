import type { Metadata } from "next";

import { ProductDetailPage } from "@/components/products/detail/product-detail-page";
import { platformOperations } from "@/data/products";

export const metadata: Metadata = platformOperations.metadata;

export default function PlatformOperationsPage() {
  return <ProductDetailPage product={platformOperations} />;
}
