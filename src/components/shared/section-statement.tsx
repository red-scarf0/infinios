import { Container } from "@/components/ui/container";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { Reveal, RevealItem } from "@/components/motion/reveal";

/**
 * A 50px heading over a two-tone 40px paragraph — the block that closes the
 * travel frame ("Powered by INFINIOS. Extended through APISO."). Same two-tone
 * treatment the solutions and industries plates use: brand blue up to the
 * break, then the frame's grey, which sweeps to blue on hover.
 */
export function SectionStatement({
  heading,
  lead,
  trail,
  metrics = {},
}: {
  heading: string;
  /** The brand-blue clause. */
  lead: string;
  /** The grey clause. */
  trail: string;
  metrics?: {
    paddingTop?: number;
    paddingBottom?: number;
    headingMeasure?: number;
    bodyGap?: number;
    bodyMeasure?: number;
  };
}) {
  const {
    paddingTop = 168,
    paddingBottom = 0,
    headingMeasure = 778,
    bodyGap = 59,
    bodyMeasure = 944,
  } = metrics;

  return (
    <section
      className="bg-white pt-14 pb-8 lg:pt-[var(--pt)] lg:pb-[var(--pb)]"
      style={
        {
          "--pt": `${paddingTop}px`,
          "--pb": `${paddingBottom}px`,
        } as React.CSSProperties
      }
    >
      <Container>
        <Reveal stagger={0.14}>
          <RevealItem>
            <h2
              className="text-[28px] leading-[1.1488] font-semibold text-brand sm:text-[36px] lg:text-[50px]"
              style={{ maxWidth: headingMeasure }}
            >
              {heading}
            </h2>
          </RevealItem>

          <RevealItem>
            <p
              className="group/flow mt-6 text-[20px] leading-[1.1488] sm:text-[28px] lg:mt-[var(--body-gap)] lg:text-[40px]"
              style={
                {
                  maxWidth: bodyMeasure,
                  "--body-gap": `${bodyGap}px`,
                } as React.CSSProperties
              }
            >
              <span className="text-brand">{lead} </span>
              <ColorFlowText from="#d9d9d9">{trail}</ColorFlowText>
            </p>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
