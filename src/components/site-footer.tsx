import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Products",
    links: [
      "Card Issuing",
      "Digital Wallets",
      "Payment Processing",
      "API & Integrations",
      "Platform Dashboard",
    ],
  },
  {
    heading: "Solutions",
    links: [
      "B2B Payments",
      "Card-as-a-Service",
      "Wallet & Payments",
      "Enterprise Cards",
      "BIN Sponsorship",
    ],
  },
  {
    heading: "Industries",
    links: [
      "Travel",
      "Fintechs",
      "Banks",
      "PSPs",
      "Remittance / MTOs",
      "Marketplaces",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Leadership Team", "Partners", "Careers", "Contact Us"],
  },
];

const LEGAL = ["Privacy Policy", "Terms & Conditions", "Investor Relations"];

export function SiteFooter() {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="mx-auto w-full max-w-[1800px] px-5 py-14 sm:px-8 lg:px-[78px] lg:pt-[76px] lg:pb-[97px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[469px_repeat(4,minmax(0,234px))] lg:gap-x-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Image
              src="/icons/logo-white.svg"
              alt="INFINIOS"
              width={226}
              height={33}
              className="h-[33px] w-auto"
            />
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
                  <li key={link}>
                    <Link
                      href="#"
                      className="rounded-sm text-[12px] leading-[19.2px] text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {link}
                    </Link>
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
              <li key={item}>
                <Link
                  href="#"
                  className="rounded-sm text-[12px] leading-[19.2px] text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
