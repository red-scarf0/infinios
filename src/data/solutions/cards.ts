import type { CapabilityCard } from "@/components/shared/capability-cards";

/**
 * The five "INFINIOS SOLUTIONS" cards.
 *
 * Copy for the expanded state comes from the frame's separate "hover state of
 * cards infinios solutions" group; the resting state shows only the glyph and
 * the title. Titles carry their frame line breaks, which the card renders with
 * `whitespace-pre-line`.
 */
export const solutionCards: CapabilityCard[] = [
  {
    title: "B2B Payments",
    body: "Connect supplier payments, virtual cards, disbursements and reconciliation.",
    icon: "/icons/solutions/cards/b2b-payments.svg",
    iconWidth: 55,
    iconHeight: 38,
    href: "/solutions/b2b-payments",
  },
  {
    title: "Card-as-a-Service",
    body: "Launch branded card programmes through issuing, processing, APIs and operations.",
    icon: "/icons/solutions/cards/card-as-a-service.svg",
    iconWidth: 69,
    iconHeight: 56,
    href: "/solutions/card-as-a-service",
  },
  {
    title: "Wallet & Payment\nSolutions",
    body: "Create customer and business journeys around balances, funding, transfers and payments.",
    icon: "/icons/solutions/cards/wallet-payment-solutions.svg",
    iconWidth: 46,
    iconHeight: 51,
    href: "/solutions/wallet-payment-solutions",
  },
  {
    title: "Enterprise Card\nProgrammes",
    body: "Control employee, procurement, travel and supplier spend through configurable cards.",
    icon: "/icons/solutions/cards/enterprise-card-programmes.svg",
    iconWidth: 56,
    iconHeight: 49,
    href: "/solutions/enterprise-card-programmes",
  },
  {
    title: "Programme Launch\n& BIN Sponsorship",
    body: "Structure infrastructure, ecosystem coordination, integration and operational readiness.",
    icon: "/icons/solutions/cards/programme-launch.svg",
    iconWidth: 55,
    iconHeight: 49,
    href: "/solutions/programme-launch-bin-sponsorship",
  },
];
