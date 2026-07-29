import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContactHero } from "@/components/contact/hero";
import { EnquirySection } from "@/components/contact/enquiry-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about the payment product, programme or infrastructure challenge you are working on. We will connect you with the right team to discuss the next step.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
