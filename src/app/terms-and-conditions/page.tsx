import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LegalPage } from "@/components/legal/legal-page";
import { termsAndConditions } from "@/data/legal/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing access to and use of the INFINIOS website.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage document={termsAndConditions} />
      </main>
      <SiteFooter />
    </>
  );
}
