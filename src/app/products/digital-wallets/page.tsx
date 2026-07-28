import type { Metadata } from "next";

import { ProductComingSoon } from "@/components/products/coming-soon";

export const metadata: Metadata = {
  title: "Digital Wallets",
};

export default function DigitalWalletsPage() {
  return <ProductComingSoon title="Digital Wallets" />;
}
