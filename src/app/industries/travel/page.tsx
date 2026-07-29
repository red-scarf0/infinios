import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { travel } from "@/data/industries";

export const metadata: Metadata = travel.metadata;

export default function TravelPage() {
  return <IndustryDetailPage industry={travel} />;
}
