import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LegalPage } from "@/components/legal/legal-page";
import { security } from "@/data/legal/security";

export const metadata: Metadata = {
  title: "Security",
  description: "INFINIOS information security and cybersecurity commitment.",
};

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage document={security} />
      </main>
      <SiteFooter />
    </>
  );
}
