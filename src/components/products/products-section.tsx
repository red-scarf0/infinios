import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import {
  CapabilityCardRow,
  type CapabilityCard,
} from "@/components/shared/capability-cards";

const PRODUCTS: CapabilityCard[] = [
  {
    title: "Card Issuing",
    body: "Launch virtual and physical card programs with lifecycle management, transaction controls, and operational visibility.",
    icon: "/icons/card-issuing.svg",
    iconWidth: 55,
    iconHeight: 38,
    href: "/products/card-issuing",
  },
  {
    title: "Digital Wallets",
    body: "Create wallet-led experiences with balances, funding flows, transfers, and embedded payments.",
    icon: "/icons/digital-wallets.svg",
    iconWidth: 54,
    iconHeight: 45,
    href: "/products/digital-wallets",
  },
  {
    title: "Payment Processing",
    body: "Process transactions with authorization, routing, settlement, reconciliation, and reporting capabilities.",
    icon: "/icons/payment-processing.svg",
    iconWidth: 51,
    iconHeight: 35,
    href: "/products/payment-processing",
  },
  {
    title: "APIs & Integrations",
    body: "Connect financial infrastructure into client applications, core systems, and operational environments.",
    icon: "/icons/apis-operations.svg",
    iconWidth: 61,
    iconHeight: 32,
    href: "/products/apis-integrations",
  },
  {
    title: "Platform & Operations",
    body: "Manage programs, users, transactions, reporting, controls, and workflows from one centralized interface.",
    icon: "/icons/platform-operations.svg",
    iconWidth: 46,
    iconHeight: 36,
    href: "/products/platform-operations",
  },
];

/** Row height reserved for an expanded card where the row fits on one line. */
const CARD_RESERVE = 336;

/**
 * "INFINIOS PRODUCTS" — the capability cards sit on a large rounded plate
 * (1894x856, r=89) carrying a radial wash from #6B93DE to white.
 */
export function ProductsSection() {
  return (
    <section
      id="products"
      // From 1552px the row reserves CARD_RESERVE rather than the default
      // 271px; the bottom padding gives the 65px back, so the section ends
      // exactly where it did. The two ranges don't overlap, so neither
      // depends on which rule the stylesheet emits last.
      className="relative pt-0 pb-16 min-[1552px]:pb-[114px] lg:-mt-[64px] lg:max-[1552px]:pb-[179px]"
    >
      {/*
        The plate is a fixed 1894x856 backdrop (r=89) that the card row
        deliberately overhangs, exactly as in the frame — so it is painted as
        an absolute layer rather than wrapping the content.
      */}
      <div
        aria-hidden
        className="absolute inset-x-3 top-0 h-[calc(100%-40px)] rounded-[40px] lg:inset-x-[13px] lg:h-[856px] lg:rounded-[89px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 100%, #6b93de 12%, #ffffff 96%)",
        }}
      />

      {/* Fluid gutter: the frame's 203px inset at 1920, the page gutter below
          it, so the card row is not squeezed on a tablet. */}
      <div className="relative px-5 pt-14 sm:px-8 lg:px-[max(3rem,calc((100vw-1514px)/2))] lg:pt-[171px]">
        <Reveal className="lg:ml-[8px]">
          <SectionLabel>INFINIOS PRODUCTS</SectionLabel>
        </Reveal>

        <Reveal stagger={0.14}>
          <RevealItem>
            <h2 className="mt-8 max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:mt-[77px] lg:ml-[8px] lg:text-[50px]">
              Infrastructure that works independently and performs better
              together.
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[66px] lg:ml-[14px] lg:text-[40px]">
              <span className="text-brand">
                Each INFINIOS product solves a specific part of the payment
                lifecycle
              </span>
              <ColorFlowText from="#d1d1d1">
                . Together, they create a connected foundation for launching
                products, moving transactions and managing programmes with
                greater control.
              </ColorFlowText>
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 lg:mt-[31px]">
          {/* `fitTitle` keeps "Platform & Operations" on one line, so all five
              cards stand the same height. See the metric for why.
              `reserve` holds the tallest expanded card (Card Issuing's copy
              runs to six lines), so hovering never pushes the page down. */}
          <CapabilityCardRow
            items={PRODUCTS}
            metrics={{ fitTitle: true, reserve: CARD_RESERVE }}
          />
        </Reveal>
      </div>
    </section>
  );
}
