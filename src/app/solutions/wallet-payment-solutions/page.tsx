import type { Metadata } from "next";

import { SolutionDetailPage } from "@/components/solutions/detail/solution-detail-page";
import { walletPaymentSolutions } from "@/data/solutions";

export const metadata: Metadata = walletPaymentSolutions.metadata;

export default function WalletPaymentSolutionsPage() {
  return <SolutionDetailPage solution={walletPaymentSolutions} />;
}
