import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { marketplacesDigitalPlatforms } from "@/data/industries";

export const metadata: Metadata = marketplacesDigitalPlatforms.metadata;

export default function MarketplacesDigitalPlatformsPage() {
  return <IndustryDetailPage industry={marketplacesDigitalPlatforms} />;
}
