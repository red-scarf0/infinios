import type { Metadata } from "next";

import { ProductDetailPage } from "@/components/products/detail/product-detail-page";
import { apisIntegrations } from "@/data/products";

export const metadata: Metadata = apisIntegrations.metadata;

export default function ApisIntegrationsPage() {
  return <ProductDetailPage product={apisIntegrations} />;
}
