import type { Metadata } from "next";

import { ProductDetailPage } from "@/components/products/detail/product-detail-page";
import { paymentProcessing } from "@/data/products";

export const metadata: Metadata = paymentProcessing.metadata;

export default function PaymentProcessingPage() {
  return <ProductDetailPage product={paymentProcessing} />;
}
