import type { JourneyFlowData } from "../journey";

const ICONS = "/icons/industries/approach";

/**
 * "INDUSTRY APPROACH" — the six-step flow on the industries frame.
 *
 * Same diagram as every product, solution and industry journey, so it runs
 * through the same component: everything rests grey and hovering a step paints
 * that step and the arrows touching it brand blue, with nothing moving.
 * Coordinates are the 1920px frame's own; the origin is its 208px content
 * gutter, which is where the page's content column starts.
 */
export const industryApproach: JourneyFlowData = {
  label: "INDUSTRY APPROACH",
  origin: { x: 208, y: 2533 },
  steps: [
    {
      label: "Understand the Flow",
      x: 224,
      y: 2681,
      width: 348,
      icon: `${ICONS}/understand-the-flow.svg`,
      iconX: 359,
      iconY: 2594,
      iconWidth: 80,
      iconHeight: 72,
    },
    {
      label: "Select Capabilities",
      x: 668,
      y: 2681,
      width: 358,
      icon: `${ICONS}/select-capabilities.svg`,
      iconX: 801,
      iconY: 2594,
      iconWidth: 63.54,
      iconHeight: 71.39,
    },
    {
      label: "Configure the Programme",
      x: 1136,
      y: 2681,
      width: 427,
      icon: `${ICONS}/configure-the-programme.svg`,
      iconX: 1315,
      iconY: 2612,
      iconWidth: 69.18,
      iconHeight: 51.97,
    },
    {
      label: "Integrate",
      x: 227,
      y: 2871,
      width: 204,
      icon: `${ICONS}/integrate.svg`,
      iconX: 286,
      iconY: 2803.83,
      iconWidth: 84.36,
      iconHeight: 43.77,
    },
    {
      label: "Operate",
      x: 541,
      y: 2871,
      width: 192,
      icon: `${ICONS}/operate.svg`,
      iconX: 607,
      iconY: 2796,
      iconWidth: 59.27,
      iconHeight: 60.58,
    },
    {
      label: "Scale",
      x: 848,
      y: 2871,
      width: 140,
      icon: `${ICONS}/scale.svg`,
      iconX: 886,
      iconY: 2794,
      iconWidth: 61.79,
      iconHeight: 60.97,
    },
  ],
  connectors: [
    { x: 589, y: 2706 },
    { x: 1050, y: 2706 },
    { x: 442, y: 2896 },
    { x: 749, y: 2896 },
  ],
};
