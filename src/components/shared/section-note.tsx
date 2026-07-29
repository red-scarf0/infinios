import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

/**
 * A standalone paragraph between two sections — the caveat that closes the
 * programme-launch frame's journey. 20px light copy on the frame's 588px
 * measure.
 */
export function SectionNote({
  body,
  paddingTop = 116,
  paddingBottom = 0,
}: {
  body: string;
  paddingTop?: number;
  paddingBottom?: number;
}) {
  return (
    <section
      className="bg-white pt-12 lg:pt-[var(--pt)] lg:pb-[var(--pb)]"
      style={
        {
          "--pt": `${paddingTop}px`,
          "--pb": `${paddingBottom}px`,
        } as React.CSSProperties
      }
    >
      <Container>
        <Reveal>
          <p className="max-w-[588px] text-[16px] leading-[1.1488] font-light text-body lg:text-[20px]">
            {body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
