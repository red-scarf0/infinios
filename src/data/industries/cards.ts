import type { CapabilityCard } from "@/components/shared/capability-cards";

/**
 * The five "INDUSTRIES" cards.
 *
 * Copy for the expanded state comes from the frame's separate "hover state of
 * industries cards" group; the resting state shows only the glyph and the
 * title. Titles carry their frame line breaks, which the card renders with
 * `whitespace-pre-line`.
 *
 * The frame's hover group also holds a sixth card, Marketplaces & Digital
 * Platforms, but the industries page itself lays out five — so five is what
 * the row shows and what has a route.
 */
export const industryCards: CapabilityCard[] = [
  {
    title: "Travel",
    body: "Use virtual cards, supplier settlement and booking-level reconciliation across high-volume travel payments.",
    icon: "/icons/industries/cards/travel.svg",
    iconWidth: 38,
    iconHeight: 50,
    href: "/industries/travel",
  },
  {
    title: "Fintechs",
    body: "Launch cards, wallets and embedded payment products without building every infrastructure layer.",
    icon: "/icons/industries/cards/fintechs.svg",
    iconWidth: 42,
    iconHeight: 51,
    href: "/industries/fintech",
  },
  {
    title: "Banks & Financial\nInstitutions",
    body: "Modernise issuing, processing and wallet capabilities within regulated environments.",
    icon: "/icons/industries/cards/banks.svg",
    iconWidth: 62,
    iconHeight: 58,
    href: "/industries/banks-financial-institutions",
  },
  {
    title: "Payment Service\nProviders",
    body: "Extend an existing proposition with issuing, wallets and stronger operational visibility.",
    icon: "/icons/industries/cards/psps.svg",
    iconWidth: 67,
    iconHeight: 54,
    href: "/industries/payment-service-providers",
  },
  {
    title: "Remittance & MTOs",
    body: "Connect transfers to wallet funding, cards, payouts and cross-border payment operations.",
    icon: "/icons/industries/cards/remittance.svg",
    iconWidth: 55,
    iconHeight: 55,
    href: "/industries/remittance-money-transfer-operators",
  },
];
