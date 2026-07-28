import type { Metadata } from "next";

import { ProductComingSoon } from "@/components/products/coming-soon";

export const metadata: Metadata = {
  title: "APIs & Integrations",
};

export default function ApisIntegrationsPage() {
  return <ProductComingSoon title="APIs & Integrations" />;
}
