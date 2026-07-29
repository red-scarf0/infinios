import type { Metadata } from "next";

import { SolutionDetailPage } from "@/components/solutions/detail/solution-detail-page";
import { programmeLaunchBinSponsorship } from "@/data/solutions";

export const metadata: Metadata = programmeLaunchBinSponsorship.metadata;

export default function ProgrammeLaunchBinSponsorshipPage() {
  return <SolutionDetailPage solution={programmeLaunchBinSponsorship} />;
}
