import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { remittanceMoneyTransferOperators } from "@/data/industries";

export const metadata: Metadata = remittanceMoneyTransferOperators.metadata;

export default function RemittanceMoneyTransferOperatorsPage() {
  return <IndustryDetailPage industry={remittanceMoneyTransferOperators} />;
}
