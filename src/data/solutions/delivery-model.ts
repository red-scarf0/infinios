import type { JourneyFlowData } from "../journey";

/**
 * "DELIVERY MODEL" — the five-step flow on the solutions frame.
 *
 * Same diagram as the detail pages' journeys, so it runs through the same
 * component. Coordinates are the 1920px frame's own; the origin is its 208px
 * content gutter, which is exactly where the page's content column starts.
 */
export const deliveryModel: JourneyFlowData = {
  label: "DELIVERY MODEL",
  origin: { x: 208, y: 2544 },
  steps: [
    {
      label: "Discover the Need",
      x: 237,
      y: 2690,
      width: 348,
      icon: "/icons/solutions/delivery/discover-the-need.svg",
      iconX: 366,
      iconY: 2610.46,
      iconWidth: 69.08,
      iconHeight: 68.1,
    },
    {
      label: "Design the Solution",
      x: 669,
      y: 2690,
      width: 358,
      icon: "/icons/solutions/delivery/design-the-solution.svg",
      iconX: 805,
      iconY: 2595,
      iconWidth: 86.7,
      iconHeight: 83.47,
    },
    {
      label: "Connect the Platform",
      x: 1157,
      y: 2690,
      width: 367,
      icon: "/icons/solutions/delivery/connect-the-platform.svg",
      iconX: 1282,
      iconY: 2612,
      iconWidth: 117.37,
      iconHeight: 64.1,
    },
    {
      label: "Prepare Operations",
      x: 240,
      y: 2880,
      width: 362,
      icon: "/icons/solutions/delivery/prepare-operations.svg",
      iconX: 385,
      iconY: 2792,
      iconWidth: 71.85,
      iconHeight: 69.73,
    },
    {
      label: "Launch & Scale",
      x: 719,
      y: 2880,
      width: 288,
      icon: "/icons/solutions/delivery/launch-and-scale.svg",
      iconX: 828,
      iconY: 2799,
      iconWidth: 70.79,
      iconHeight: 64.6,
    },
  ],
  connectors: [
    { x: 602, y: 2715 },
    { x: 1063, y: 2715 },
    { x: 620, y: 2905 },
  ],
};
