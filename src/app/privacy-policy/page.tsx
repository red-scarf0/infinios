import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/data/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "INFINIOS Privacy Policy and information about how we collect, use, protect and process personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage document={privacyPolicy} />
      </main>
      <SiteFooter />
    </>
  );
}
