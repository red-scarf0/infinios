import Image from "next/image";
import Link from "next/link";

/**
 * Footer navigation.
 *
 * Labels are the frame's own — they are shorter than the page titles they
 * point at ("Platform Dashboard" is Platform & Operations, "Enterprise Cards"
 * is Enterprise Card Programmes) — so the destination is stated per item
 * rather than derived from the text.
 *
 * TODO: items without an `href` have no page yet, so they render as plain
 * text rather than as a link to nowhere. Give them a route and they light up:
 *   Marketplaces & Digital Platforms — designed (Figma section 186:13652),
 *     not built; the industries page itself lists only the other five.
 *   Leadership Team, Partners — no frame in the Final page.
 *   Privacy Policy, Terms & Conditions, Investor Relations — no frame either.
 */
type FooterLink = { label: string; href?: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Products",
    links: [
      { label: "Card Issuing", href: "/products/card-issuing" },
      { label: "Digital Wallets", href: "/products/digital-wallets" },
      { label: "Payment Processing", href: "/products/payment-processing" },
      { label: "API & Integrations", href: "/products/apis-integrations" },
      { label: "Platform Dashboard", href: "/products/platform-operations" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "B2B Payments", href: "/solutions/b2b-payments" },
      { label: "Card-as-a-Service", href: "/solutions/card-as-a-service" },
      {
        label: "Wallet & Payments",
        href: "/solutions/wallet-payment-solutions",
      },
      {
        label: "Enterprise Cards",
        href: "/solutions/enterprise-card-programmes",
      },
      {
        label: "BIN Sponsorship",
        href: "/solutions/programme-launch-bin-sponsorship",
      },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Travel", href: "/industries/travel" },
      { label: "Fintechs", href: "/industries/fintech" },
      { label: "Banks", href: "/industries/banks-financial-institutions" },
      { label: "PSPs", href: "/industries/payment-service-providers" },
      {
        label: "Remittance / MTOs",
        href: "/industries/remittance-money-transfer-operators",
      },
      { label: "Marketplaces" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership Team" },
      { label: "Partners" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const LEGAL: FooterLink[] = [
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
  { label: "Investor Relations" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="mx-auto w-full max-w-[1800px] px-5 py-14 sm:px-8 lg:px-[78px] lg:pt-[76px] lg:pb-[97px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[469px_repeat(4,minmax(0,234px))] lg:gap-x-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            {/* Block, not inline: an inline wrapper would sit on a baseline
                and add descender space under the logo, nudging the copy down. */}
            <Link href="/" aria-label="INFINIOS home" className="block w-fit">
              <Image
                src="/icons/logo-white.svg"
                alt="INFINIOS"
                width={226}
                height={33}
                className="h-[33px] w-auto"
              />
            </Link>
            <p className="mt-[44px] max-w-[200px] text-[12px] leading-[19.2px] text-white/70">
              Building the infrastructure behind modern payment ecosystems.
              Enterprise-grade issuing, processing, wallet, and API
              infrastructure.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-[10px] font-bold tracking-[1px] text-white uppercase">
                {column.heading}
              </h2>
              <ul className="mt-[30px] space-y-[14px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="rounded-sm text-[12px] leading-[19.2px] text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span
                        aria-disabled
                        className="text-[12px] leading-[19.2px] text-white/80"
                      >
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-[40px] lg:pt-[11px]">
          <p className="text-[12px] leading-[19.2px] text-white/55">
            © 2025 INFINIOS. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="rounded-sm text-[12px] leading-[19.2px] text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-disabled
                    className="text-[12px] leading-[19.2px] text-white/55"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
