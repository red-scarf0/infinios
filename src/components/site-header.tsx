"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About us", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /**
   * Marks the section you are in — including its detail routes, so
   * /products/card-issuing still lights "Products". Exposed through
   * `aria-current` alone: the frame draws no active treatment, so this
   * changes nothing visually.
   */
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-4 z-50 px-4 sm:px-6 lg:top-[62px] lg:px-[39px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1841px] flex-col rounded-[24px] bg-white px-5 py-4 shadow-sm xl:h-[106px] xl:flex-row xl:items-center xl:px-[32px] xl:py-0 2xl:px-[65px]"
      >
        <div className="flex items-center justify-between lg:flex-none">
          <Link href="/" aria-label="INFINIOS home" className="shrink-0">
            <Image
              src="/icons/logo-navy.svg"
              alt="INFINIOS"
              width={273}
              height={45}
              priority
              className="h-[30px] w-auto xl:h-[36px] 2xl:h-[44px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            className="-mr-2 flex size-11 items-center justify-center rounded-lg text-navy-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200",
                  open ? "top-[7px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-[7px] left-0 h-0.5 w-6 bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200",
                  open ? "top-[7px] -rotate-45" : "top-[14px]",
                )}
              />
            </span>
          </button>
        </div>

        <div
          id="primary-menu"
          className={cn(
            "flex-1 flex-col gap-6 pt-6 pb-4 xl:flex xl:flex-row xl:items-center xl:justify-center xl:gap-[24px] xl:p-0 2xl:gap-[50px]",
            open ? "flex" : "hidden",
          )}
        >
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-[24px] 2xl:gap-[50px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="rounded-sm text-[18px] font-semibold text-navy-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:text-[18px] 2xl:text-[20px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 xl:hidden">
            <Button
              href="/contact"
              variant="ghost"
              arrow={false}
              aria-current={isCurrent("/contact") ? "page" : undefined}
              className="h-9 px-5 text-[16px]"
            >
              Contact
            </Button>
            <Button
              href="/contact"
              variant="solid"
              arrow={false}
              className="h-9 px-5 text-[16px]"
            >
              Request a Demo
            </Button>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-[14px] xl:flex">
          <Button
            href="/contact"
            variant="ghost"
            arrow={false}
            aria-current={isCurrent("/contact") ? "page" : undefined}
            className="h-8 w-[101px] text-[16px]"
          >
            Contact
          </Button>
          <Button
            href="/contact"
            variant="solid"
            arrow={false}
            className="h-8 w-[167px] text-[16px]"
          >
            Request a Demo
          </Button>
        </div>
      </nav>
    </header>
  );
}
