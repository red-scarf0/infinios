import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { Product } from "./product-card";

import { ProductGrid } from "./product-grid";

const PRODUCTS: Product[] = [
  {
    title: "Card Issuing",
    body: "Launch and manage virtual and physical cards with configurable rules and lifecycle controls.",
    icon: "/icons/card-issuing.svg",
    iconWidth: 55,
    iconHeight: 38,
    href: "/products/card-issuing",
  },
  {
    title: "Digital Wallets",
    body: "Launch and manage virtual and physical cards with configurable rules and lifecycle controls.",
    icon: "/icons/digital-wallets.svg",
    iconWidth: 54,
    iconHeight: 45,
    href: "/products/digital-wallets",
  },
  {
    title: "Payment Processing",
    body: "Launch and manage virtual and physical cards with configurable rules and lifecycle controls.",
    icon: "/icons/payment-processing.svg",
    iconWidth: 51,
    iconHeight: 35,
    href: "/products/payment-processing",
  },
  {
    title: "APIs & Integrations",
    body: "Launch and manage virtual and physical cards with configurable rules and lifecycle controls.",
    icon: "/icons/apis-operations.svg",
    iconWidth: 61,
    iconHeight: 32,
    href: "/products/apis-integrations",
  },
  {
    title: "Platform & Operations",
    body: "Launch and manage virtual and physical cards with configurable rules and lifecycle controls.",
    icon: "/icons/platform-operations.svg",
    iconWidth: 46,
    iconHeight: 36,
    href: "/products/platform-operations",
  },
];

/**
 * "INFINIOS PRODUCTS" — the capability cards sit on a large rounded plate
 * (1894x856, r=89) carrying a radial wash from #6B93DE to white.
 */
export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative pt-0 pb-16 lg:-mt-[64px] lg:pb-[179px]"
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

      <div className="relative px-5 pt-14 sm:px-8 lg:pt-[171px] lg:pr-[189px] lg:pl-[203px]">
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
            <p className="group/flow mt-6 max-w-[944px] text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[66px] lg:ml-[14px] lg:text-[40px]">
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
          <ProductGrid products={PRODUCTS} />
        </Reveal>
      </div>
    </section>
  );
}
