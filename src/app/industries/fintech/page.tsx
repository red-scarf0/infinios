import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { fintech } from "@/data/industries";

export const metadata: Metadata = fintech.metadata;

export default function FintechPage() {
  return <IndustryDetailPage industry={fintech} />;
}
