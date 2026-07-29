import type { Metadata } from "next";

import { IndustryDetailPage } from "@/components/industries/detail/industry-detail-page";
import { paymentServiceProviders } from "@/data/industries";

export const metadata: Metadata = paymentServiceProviders.metadata;

export default function PaymentServiceProvidersPage() {
  return <IndustryDetailPage industry={paymentServiceProviders} />;
}
