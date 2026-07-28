import type { Metadata } from "next";

import { ProductComingSoon } from "@/components/products/coming-soon";

export const metadata: Metadata = {
  title: "Platform & Operations",
};

export default function PlatformOperationsPage() {
  return <ProductComingSoon title="Platform & Operations" />;
}
