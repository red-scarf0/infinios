"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import type {
  JourneyConnector,
  JourneyStep,
  ProgrammeJourneyData,
} from "@/data/products";

/**
 * The frame's content gutter. Journey coordinates are measured from it, so a
 * step drawn at x=139 sits 32px into the page gutter exactly as designed.
 */
const ORIGIN_X = 171;
/** Top of the journey band in the frame. */
const ORIGIN_Y = 3050;

/** Constant across every frame. */
const PILL_HEIGHT = 69;
const CONNECTOR_WIDTH = 69;
const CONNECTOR_HEIGHT = 19;

/** Which two steps each connector joins, in frame order. */
const CONNECTOR_STEPS = [
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
];

/**
 * Programme journey — one component behind every product page.
 *
 * The six pills are hand-placed in Figma: the rows start at different offsets,
 * the gaps between pills are all different and the icons sit at their own
 * heights above each pill. No flex or grid rhythm reproduces that, so the
 * desktop layout is absolutely positioned from the frame's own coordinates and
 * scaled as one plane when the content column is narrower than the band.
 *
 * Everything rests grey — pill, border, label, icon and connectors. Hovering a
 * step paints that step and the connectors touching it brand blue over 300ms;
 * every other step stays grey. Only colour transitions, so nothing moves.
 *
 * Icons are painted through CSS masks rather than rendered as images, which is
 * what lets one exported glyph carry both the grey and the blue state.
 */
export function ProgrammeJourney({
  journey,
}: {
  journey: ProgrammeJourneyData;
}) {
  const [active, setActive] = useState<number | null>(null);

  const { steps, connectors } = journey;

  const bandWidth =
    Math.max(
      ...steps.map((s) => s.x + s.width),
      ...steps.map((s) => s.iconX + s.iconWidth),
      ...connectors.map((c) => c.x + CONNECTOR_WIDTH),
    ) - ORIGIN_X;

  const bandHeight =
    Math.max(
      ...steps.map((s) => s.y + PILL_HEIGHT),
      ...steps.map((s) => s.iconY + s.iconHeight),
      ...connectors.map((c) => c.y + CONNECTOR_HEIGHT),
    ) - ORIGIN_Y;

  const scale = useFitScale(bandWidth);

  const lit = (index: number) =>
    active !== null && CONNECTOR_STEPS[index].includes(active);

  return (
    <section className="bg-white pt-14 lg:pt-[178px]">
      <Container>
        <Reveal>
          <SectionLabel>{journey.label}</SectionLabel>
        </Reveal>

        <div onMouseLeave={() => setActive(null)}>
          {/* Desktop: the frame's exact geometry, scaled as a single plane. */}
          <Reveal
            className="mt-10 hidden lg:mt-[52px] lg:block"
            style={{ height: bandHeight * scale.value }}
          >
            <div
              ref={scale.ref}
              className="relative"
              style={{
                width: bandWidth,
                height: bandHeight,
                transform: `scale(${scale.value})`,
                transformOrigin: "left top",
              }}
            >
              {connectors.map((connector, index) => (
                <Connector key={index} connector={connector} lit={lit(index)} />
              ))}

              {steps.map((step, index) => (
                <Step
                  key={step.label}
                  step={step}
                  active={active === index}
                  onActivate={() => setActive(index)}
                />
              ))}
            </div>
          </Reveal>

          {/* Below the frame's only breakpoint the flow stacks. */}
          <Reveal className="mt-10 flex flex-col items-center lg:hidden">
            {steps.map((step, index) => (
              <StackedStep
                key={step.label}
                step={step}
                first={index === 0}
                active={active === index}
                litIn={active === index || active === index - 1}
                onActivate={() => setActive(index)}
              />
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Step({
  step,
  active,
  onActivate,
}: {
  step: JourneyStep;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <div data-journey-active={active} onMouseEnter={onActivate}>
      <span
        aria-hidden
        className="journey-icon absolute"
        style={{
          left: step.iconX - ORIGIN_X,
          top: step.iconY - ORIGIN_Y,
          width: step.iconWidth,
          height: step.iconHeight,
          maskImage: `url(${step.icon})`,
          WebkitMaskImage: `url(${step.icon})`,
        }}
      />
      <span
        className="journey-pill absolute flex items-center justify-center rounded-[41px] px-4 text-[32px] leading-[1.54] font-semibold whitespace-nowrap"
        style={{
          left: step.x - ORIGIN_X,
          top: step.y - ORIGIN_Y,
          width: step.width,
          height: PILL_HEIGHT,
        }}
      >
        {step.label}
      </span>
    </div>
  );
}

function Connector({
  connector,
  lit,
}: {
  connector: JourneyConnector;
  lit: boolean;
}) {
  return (
    <span
      aria-hidden
      data-journey-lit={lit}
      className="journey-connector absolute"
      style={{
        left: connector.x - ORIGIN_X,
        top: connector.y - ORIGIN_Y,
        width: CONNECTOR_WIDTH,
        height: CONNECTOR_HEIGHT,
      }}
    />
  );
}

/** Stacked fallback: same pills and glyphs, connectors turned a quarter-turn. */
function StackedStep({
  step,
  first,
  active,
  litIn,
  onActivate,
}: {
  step: JourneyStep;
  first: boolean;
  active: boolean;
  litIn: boolean;
  onActivate: () => void;
}) {
  return (
    <>
      {!first ? (
        /* The arrow is turned a quarter-turn, so its box has to reserve the
           69px it visually spans — a rotation costs no layout height. */
        <span
          aria-hidden
          className="flex h-[69px] w-full items-center justify-center"
        >
          <span
            data-journey-lit={litIn}
            className="journey-connector h-[19px] w-[69px] rotate-90"
          />
        </span>
      ) : null}
      <div
        data-journey-active={active}
        onMouseEnter={onActivate}
        className="flex max-w-full flex-col items-center"
      >
        <span
          aria-hidden
          className="journey-icon mb-3"
          style={{
            width: step.iconWidth * 0.75,
            height: step.iconHeight * 0.75,
            maskImage: `url(${step.icon})`,
            WebkitMaskImage: `url(${step.icon})`,
          }}
        />
        <span className="journey-pill flex min-h-[52px] items-center justify-center rounded-[41px] px-[22px] py-2 text-center text-[16px] leading-[1.3] font-semibold sm:text-[20px]">
          {step.label}
        </span>
      </div>
    </>
  );
}

/**
 * Scales the journey plane down when the content column is narrower than the
 * band. At the frame's own width it resolves to 1 and nothing is transformed.
 */
function useFitScale(bandWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(1);

  const measure = useCallback(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;
    setValue(Math.min(1, parent.clientWidth / bandWidth));
  }, [bandWidth]);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (ref.current?.parentElement) observer.observe(ref.current.parentElement);
    return () => observer.disconnect();
  }, [measure]);

  return { ref, value };
}
