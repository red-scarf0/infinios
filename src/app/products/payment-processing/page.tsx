import type { Metadata } from "next";

import { ProductComingSoon } from "@/components/products/coming-soon";

export const metadata: Metadata = {
  title: "Payment Processing",
};

export default function PaymentProcessingPage() {
  return <ProductComingSoon title="Payment Processing" />;
}
