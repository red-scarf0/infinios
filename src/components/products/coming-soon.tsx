import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

/**
 * Placeholder shell for the individual product pages. Deliberately unstyled
 * beyond the shared header/footer — these are routed but not yet designed.
 */
export function ProductComingSoon({ title }: { title: string }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="flex min-h-[70vh] items-center bg-white pt-[220px] pb-24 lg:pt-[280px]">
          <Container>
            <Reveal trigger="mount" delay={0.1}>
              <h1 className="max-w-[900px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[38px] lg:text-[50px]">
                {title} Page Coming Soon
              </h1>
              <Link
                href="/products"
                className="mt-8 inline-block rounded-sm text-[18px] font-medium text-navy-ink underline underline-offset-4 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Back to Products
              </Link>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
