"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import {
  CONNECTOR_HEIGHT,
  CONNECTOR_WIDTH,
  DEFAULT_JOURNEY_ORIGIN,
  PILL_HEIGHT,
  type JourneyConnector,
  type JourneyFlowData,
  type JourneyStep,
} from "@/data/journey";

/**
 * Journey flow — one component behind every product and solution page.
 *
 * The pills are hand-placed in Figma, so the desktop layout is absolutely
 * positioned from the frame's own coordinates and scaled as one plane when the
 * content column is narrower than the band.
 *
 * Everything rests grey — pill, border, label, icon and connectors. Hovering a
 * step paints that step and the connectors touching it brand blue over 300ms;
 * every other step stays grey. Only colour transitions, so nothing moves.
 *
 * Icons are painted through CSS masks rather than rendered as images, which is
 * what lets one exported glyph carry both the grey and the blue state.
 */
export function JourneyFlow({
  journey,
  metrics = {},
}: {
  journey: JourneyFlowData;
  /** Section spacing. Each frame opens the band at its own height. */
  metrics?: { paddingTop?: number; paddingBottom?: number };
}) {
  const { paddingTop = 178, paddingBottom = 0 } = metrics;
  const [active, setActive] = useState<number | null>(null);

  const { steps, connectors } = journey;
  const origin = journey.origin ?? DEFAULT_JOURNEY_ORIGIN;

  const bandWidth =
    Math.max(
      ...steps.map((s) => s.x + s.width),
      ...steps.map((s) => (s.icon ? s.iconX! + s.iconWidth! : 0)),
      ...connectors.map((c) => c.x + CONNECTOR_WIDTH),
    ) - origin.x;

  const bandHeight =
    Math.max(
      ...steps.map((s) => s.y + PILL_HEIGHT),
      ...steps.map((s) => (s.icon ? s.iconY! + s.iconHeight! : 0)),
      ...connectors.map((c) => c.y + CONNECTOR_HEIGHT),
    ) - origin.y;

  const scale = useFitScale(bandWidth);
  const touching = connectorSteps(steps, connectors);

  return (
    <section
      className="bg-white pt-14 lg:pt-[var(--pt)] lg:pb-[var(--pb)]"
      style={
        {
          "--pt": `${paddingTop}px`,
          "--pb": `${paddingBottom}px`,
        } as React.CSSProperties
      }
    >
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
                <Connector
                  key={index}
                  connector={connector}
                  origin={origin}
                  lit={active !== null && touching[index].includes(active)}
                />
              ))}

              {steps.map((step, index) => (
                <Step
                  key={step.label}
                  step={step}
                  origin={origin}
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

type Origin = { x: number; y: number };

function Step({
  step,
  origin,
  active,
  onActivate,
}: {
  step: JourneyStep;
  origin: Origin;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <div data-journey-active={active} onMouseEnter={onActivate}>
      {step.icon ? (
        <span
          aria-hidden
          className="journey-icon absolute"
          style={{
            left: step.iconX! - origin.x,
            top: step.iconY! - origin.y,
            width: step.iconWidth,
            height: step.iconHeight,
            maskImage: `url(${step.icon})`,
            WebkitMaskImage: `url(${step.icon})`,
          }}
        />
      ) : null}
      <span
        className="journey-pill absolute flex items-center justify-center rounded-[41px] px-4 text-[32px] leading-[1.54] font-semibold whitespace-nowrap"
        style={{
          left: step.x - origin.x,
          top: step.y - origin.y,
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
  origin,
  lit,
}: {
  connector: JourneyConnector;
  origin: Origin;
  lit: boolean;
}) {
  return (
    <span
      aria-hidden
      data-journey-lit={lit}
      className="journey-connector absolute"
      style={{
        left: connector.x - origin.x,
        top: connector.y - origin.y,
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
        {step.icon ? (
          <span
            aria-hidden
            className="journey-icon mb-3"
            style={{
              width: step.iconWidth! * 0.75,
              height: step.iconHeight! * 0.75,
              maskImage: `url(${step.icon})`,
              WebkitMaskImage: `url(${step.icon})`,
            }}
          />
        ) : null}
        <span className="journey-pill flex min-h-[52px] items-center justify-center rounded-[41px] px-[22px] py-2 text-center text-[16px] leading-[1.3] font-semibold sm:text-[20px]">
          {step.label}
        </span>
      </div>
    </>
  );
}

/**
 * Which steps each connector joins.
 *
 * Read from the geometry rather than declared: on the connector's own row, it
 * lights up with the nearest pill either side of its midpoint. That holds for
 * every frame — six steps in two rows of three, five in three-plus-two, seven
 * in five-plus-two — with nothing to keep in sync.
 *
 * The split is the arrow's centre, not its ends: several frames overlap a pill
 * a pixel or two into the arrow, and an edge test would skip past it.
 */
function connectorSteps(steps: JourneyStep[], connectors: JourneyConnector[]) {
  return connectors.map((connector) => {
    const midline = connector.y + CONNECTOR_HEIGHT / 2;
    const centre = connector.x + CONNECTOR_WIDTH / 2;
    const row = steps
      .map((step, index) => ({ step, index }))
      .filter(
        ({ step }) =>
          Math.abs(step.y + PILL_HEIGHT / 2 - midline) < PILL_HEIGHT,
      );

    const before = row
      .filter(({ step }) => step.x + step.width <= centre)
      .sort((a, b) => b.step.x - a.step.x)[0];

    const after = row
      .filter(({ step }) => step.x >= centre)
      .sort((a, b) => a.step.x - b.step.x)[0];

    return [before?.index, after?.index].filter(
      (index): index is number => index !== undefined,
    );
  });
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
