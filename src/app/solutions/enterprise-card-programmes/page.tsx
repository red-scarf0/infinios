import type { Metadata } from "next";

import { SolutionDetailPage } from "@/components/solutions/detail/solution-detail-page";
import { enterpriseCardProgrammes } from "@/data/solutions";

export const metadata: Metadata = enterpriseCardProgrammes.metadata;

export default function EnterpriseCardProgrammesPage() {
  return <SolutionDetailPage solution={enterpriseCardProgrammes} />;
}
