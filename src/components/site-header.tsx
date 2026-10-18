"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { EASE } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  /** Renders the item as a dropdown; the label itself still links to `href`. */
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Card Issuing", href: "/products/card-issuing" },
      { label: "Digital Wallets", href: "/products/digital-wallets" },
      { label: "Payment Processing", href: "/products/payment-processing" },
      { label: "APIs & Integrations", href: "/products/apis-integrations" },
      { label: "Platform & Operations", href: "/products/platform-operations" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "B2B Payments", href: "/solutions/b2b-payments" },
      { label: "Card-as-a-Service", href: "/solutions/card-as-a-service" },
      {
        label: "Explore Card-as-a-Service",
        href: "/solutions/card-as-a-service",
      },
      {
        label: "Wallet & Payment Solutions",
        href: "/solutions/wallet-payment-solutions",
      },
      {
        label: "Enterprise Card Programmes",
        href: "/solutions/enterprise-card-programmes",
      },
      {
        label: "Programme Launch & BIN Sponsorship",
        href: "/solutions/programme-launch-bin-sponsorship",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Travel", href: "/industries/travel" },
      { label: "Fintechs", href: "/industries/fintech" },
      {
        label: "Banks & Financial Institutions",
        href: "/industries/banks-financial-institutions",
      },
      {
        label: "Payment Service Providers",
        href: "/industries/payment-service-providers",
      },
      {
        label: "Remittance & MTOs",
        href: "/industries/remittance-money-transfer-operators",
      },
      {
        label: "Marketplaces & Digital Platforms",
        href: "/industries/marketplaces-digital-platforms",
      },
    ],
  },
  { label: "About us", href: "/about" },
];

const LINK_CLASS =
  "rounded-sm text-[18px] font-semibold text-navy-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:text-[18px] 2xl:text-[20px]";

/** The header's own breakpoint: the row layout starts at `xl`. */
const DESKTOP_QUERY = "(min-width: 80rem)";

const DROPDOWN_OPEN_EVENT = "infinios:nav-dropdown-open";

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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <NavDropdown
                  key={link.label}
                  link={link}
                  current={isCurrent(link.href)}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={LINK_CLASS}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
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

/**
 * A nav item with a sub-menu. The label stays a link to the section's hub
 * page; the chevron beside it is the disclosure button.
 *
 * Desktop: opens on hover, or pinned open by clicking the chevron. A hover
 * open survives the pointer crossing into the panel (the panel's top padding
 * bridges the gap, and leaving waits a beat before closing). Clicking
 * outside, pressing Escape or tabbing away closes it.
 *
 * Mobile: the chevron expands the links in place, inside the open menu.
 */
function NavDropdown({
  link,
  current,
  pathname,
  onNavigate,
}: {
  link: NavLink;
  current: boolean;
  pathname: string;
  onNavigate: () => void;
}) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = pinned || hovered;

  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const reduced = useReducedMotion();
  const panelId = useId();

  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<number | undefined>(undefined);
  /** Set by arrow keys on the button; applied once the panel has rendered. */
  const pendingFocus = useRef<number | null>(null);

  const close = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setPinned(false);
    setHovered(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    if (pendingFocus.current !== null) {
      itemRefs.current[pendingFocus.current]?.focus();
      pendingFocus.current = null;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const hadFocus = rootRef.current?.contains(document.activeElement);
      close();
      if (hadFocus) buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  /*
   * Only one dropdown is open at a time: opening this one tells its siblings
   * to close at once, rather than both panels overlapping while the other
   * waits out its hover-leave delay.
   */
  useEffect(() => {
    const onSiblingOpen = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== panelId) close();
    };
    document.addEventListener(DROPDOWN_OPEN_EVENT, onSiblingOpen);
    return () =>
      document.removeEventListener(DROPDOWN_OPEN_EVENT, onSiblingOpen);
  }, [panelId, close]);

  useEffect(() => {
    if (open) {
      document.dispatchEvent(
        new CustomEvent(DROPDOWN_OPEN_EVENT, { detail: panelId }),
      );
    }
  }, [open, panelId]);

  const children = link.children ?? [];

  const openWithFocus = (index: number) => {
    pendingFocus.current = index;
    if (open) {
      itemRefs.current[index]?.focus();
      pendingFocus.current = null;
    } else {
      setPinned(true);
    }
  };

  const onButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openWithFocus(0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openWithFocus(children.length - 1);
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = children.length - 1;
    const target = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    itemRefs.current[target]?.focus();
  };

  /* Hover only means something for a mouse on the row layout. */
  const onPointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !isDesktop) return;
    window.clearTimeout(closeTimer.current);
    setHovered(true);
  };
  const onPointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !isDesktop) return;
    closeTimer.current = window.setTimeout(() => setHovered(false), 150);
  };

  /* Tabbing past the last link (or back past the label) closes the panel. */
  const onBlur = (event: React.FocusEvent) => {
    const next = event.relatedTarget as Node | null;
    if (next && !rootRef.current?.contains(next)) close();
  };

  const transition = reduced ? { duration: 0 } : { duration: 0.24, ease: EASE };

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onBlur}
    >
      <div className="flex items-center justify-between gap-1">
        <Link
          href={link.href}
          onClick={() => {
            close();
            onNavigate();
          }}
          aria-current={current ? "page" : undefined}
          className={LINK_CLASS}
        >
          {link.label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${link.label} menu`}
          // A hover-opened panel is pinned by the click, not closed by it.
          onClick={() => (pinned ? close() : setPinned(true))}
          onKeyDown={onButtonKeyDown}
          className="-my-2 -mr-2 flex size-11 items-center justify-center rounded-sm text-navy-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:m-0 xl:size-6"
        >
          <svg
            aria-hidden
            viewBox="0 0 12 8"
            fill="none"
            className={cn(
              "h-2 w-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open && "rotate-180",
            )}
          >
            <path
              d="M1 1.5 6 6.5l5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id={panelId}
            initial={
              isDesktop ? { opacity: 0, y: -8 } : { opacity: 0, height: 0 }
            }
            animate={
              isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, height: "auto" }
            }
            exit={
              isDesktop
                ? {
                    opacity: 0,
                    y: -6,
                    transition: { ...transition, duration: reduced ? 0 : 0.16 },
                  }
                : { opacity: 0, height: 0 }
            }
            transition={transition}
            className={
              isDesktop
                ? "absolute top-full left-1/2 z-10 -translate-x-1/2 pt-[53px]"
                : "overflow-hidden"
            }
          >
            <ul
              className={cn(
                isDesktop
                  ? "w-max min-w-[260px] rounded-[24px] bg-white p-3 shadow-[0_18px_40px_-16px_rgba(21,33,78,0.28)] ring-1 ring-navy-ink/5"
                  : "mt-3 flex flex-col border-l-2 border-muted-soft pl-4",
              )}
            >
              {children.map((child, index) => (
                // Labels, not hrefs: two Solutions entries share a page.
                <li key={child.label}>
                  <Link
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    href={child.href}
                    onClick={() => {
                      close();
                      onNavigate();
                    }}
                    onKeyDown={(event) => onItemKeyDown(event, index)}
                    aria-current={pathname === child.href ? "page" : undefined}
                    className="block rounded-[14px] px-4 py-3 text-[16px] leading-[1.25] font-semibold text-navy-ink transition-colors hover:bg-page hover:text-brand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand xl:py-[11px] xl:whitespace-nowrap 2xl:text-[18px]"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

/** `matchMedia` as React state; false on the server and before hydration. */
function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
