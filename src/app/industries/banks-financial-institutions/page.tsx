import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { banksFinancialInstitutions } from "@/data/industries";

export const metadata: Metadata = banksFinancialInstitutions.metadata;

export default function BanksFinancialInstitutionsPage() {
  return <IndustryDetailPage industry={banksFinancialInstitutions} />;
}
