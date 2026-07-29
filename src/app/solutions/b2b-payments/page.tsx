import type { Metadata } from "next";

import { SolutionDetailPage } from "@/components/solutions/detail/solution-detail-page";
import { b2bPayments } from "@/data/solutions";

export const metadata: Metadata = b2bPayments.metadata;

export default function B2bPaymentsPage() {
  return <SolutionDetailPage solution={b2bPayments} />;
}
