import type { Metadata } from "next";

import { ProductComingSoon } from "@/components/products/coming-soon";

export const metadata: Metadata = {
  title: "Card Issuing",
};

export default function CardIssuingPage() {
  return <ProductComingSoon title="Card Issuing" />;
}
