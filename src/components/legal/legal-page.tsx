import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import type { LegalBlock, LegalDocument } from "@/data/legal/types";

/** Matches the contact addresses that appear inside the approved copy. */
const EMAIL = /([\w.+-]+@[\w-]+\.[\w.]+)/g;

/**
 * Renders body copy with any email address in it turned into a `mailto:`
 * link, so the wording stays exactly as approved while the address is still
 * actionable. The address itself is the link text, which is its own
 * accessible name.
 */
function Copy({ text }: { text: string }) {
  return (
    <>
      {text.split(EMAIL).map((part, index) =>
        index % 2 === 1 ? (
          <a
            key={index}
            href={`mailto:${part}`}
            className="rounded-sm text-brand underline underline-offset-4 transition-colors hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Body-copy scale for these pages, one step looser than the marketing
    sections: same family, weight and #4b4b4b as `FeatureRows`, but the
    leading is opened up because these paragraphs run long. */
const BODY = "text-[16px] leading-[1.75] font-light text-body lg:text-[18px]";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-12 text-[22px] leading-[1.1488] font-semibold text-brand sm:text-[24px] lg:mt-[64px] lg:text-[28px]">
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className={`mt-5 ${BODY}`}>
          <Copy text={block.text} />
        </p>
      );

    case "bullets":
      return (
        <ul
          className={`mt-5 list-disc space-y-3 pl-5 marker:text-brand ${BODY}`}
        >
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      );

    case "clauses":
      return (
        <ol
          className={`mt-6 list-decimal space-y-6 pl-6 marker:font-medium marker:text-brand ${BODY}`}
        >
          {block.items.map((item) => (
            <li key={item} className="pl-2">
              {item}
            </li>
          ))}
        </ol>
      );

    case "terms":
      return (
        <ul
          className={`mt-5 list-disc space-y-4 pl-5 marker:text-brand ${BODY}`}
        >
          {block.items.map((item) => (
            <li key={item.term} className="pl-1">
              <span className="font-semibold text-brand-soft">
                {item.term}:
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );

    case "contact":
      return (
        <address className={`mt-5 not-italic ${BODY}`}>
          <span className="block">{block.name}</span>
          <span className="block">
            Email: <Copy text={block.email} />
          </span>
          <span className="block">Address: {block.address}</span>
        </address>
      );
  }
}

/**
 * Shared shell for the privacy, terms and security pages.
 *
 * A navy title band carrying the page's `<h1>` — the site's heroes are all
 * dark, and this is the same heading scale — followed by a single white
 * content column. Nothing here is new: type scale, colours and the page
 * gutter are the existing system, and the measure is capped so the copy stays
 * readable on wide screens rather than running the full content column.
 */
export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <section className="bg-navy-ink pt-[132px] pb-12 sm:pt-[150px] lg:pt-[236px] lg:pb-[84px]">
        <Container>
          <Reveal trigger="mount" delay={0.1} stagger={0.12}>
            <RevealItem>
              <h1 className="max-w-[900px] text-[30px] leading-[1.1488] font-semibold text-white sm:text-[38px] lg:text-[48px]">
                {document.title}
              </h1>
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white pt-12 pb-16 lg:pt-[80px] lg:pb-[140px]">
        <Container>
          {/* `first:mt-0` on the leading block keeps the section's own top
              padding as the only space above the first line. */}
          <div className="max-w-[820px] [&>*:first-child]:mt-0">
            {document.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
