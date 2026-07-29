import type { Metadata } from "next";

import { SolutionDetailPage } from "@/components/solutions/detail/solution-detail-page";
import { cardAsAService } from "@/data/solutions";

export const metadata: Metadata = cardAsAService.metadata;

export default function CardAsAServicePage() {
  return <SolutionDetailPage solution={cardAsAService} />;
}
