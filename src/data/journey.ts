/**
 * Journey flows — the pill-and-arrow diagram that closes most detail frames.
 *
 * Every frame draws one: "PROGRAMME JOURNEY" and "TRANSACTION FLOW" on the
 * product pages, "DELIVERY MODEL", "PAYMENT FLOW", "CUSTOMER JOURNEY",
 * "PROGRAMME FLOW" and "LAUNCH JOURNEY" across the solutions pages. They are
 * all the same object, so they all share one component.
 *
 * The pills are hand-placed in Figma rather than laid out on a grid — the rows
 * start at different offsets, every gap differs and the glyphs sit at their own
 * heights above each pill. No flex or grid rhythm reproduces that, so each
 * `x`/`y` below is a frame coordinate read straight off the design and the
 * component translates them against the frame's content gutter.
 */
export type JourneyFlowData = {
  /** Section eyebrow — "PAYMENT FLOW", "DELIVERY MODEL", ... */
  label: string;
  /** Frames lay these out as two rows; the launch frame uses five then two. */
  steps: JourneyStep[];
  /** The dashed arrows between consecutive steps, in frame order. */
  connectors: JourneyConnector[];
  /**
   * Origin of the band in frame coordinates: `x` is the frame's content
   * gutter, `y` sits one section gap below the eyebrow. Defaults to the
   * product frames' own origin.
   */
  origin?: { x: number; y: number };
};

export type JourneyStep = {
  label: string;
  /** Pill rectangle. Height is a constant 69 across every frame. */
  x: number;
  y: number;
  width: number;
  /**
   * Line icon above the pill, painted through a CSS mask so one exported
   * glyph can carry both the resting grey and the hovered blue. Some frames
   * decorate only part of the flow, so a step may have no glyph at all.
   */
  icon?: string;
  /** Icon box. The glyphs sit on no common grid, so each keeps its own size. */
  iconX?: number;
  iconY?: number;
  iconWidth?: number;
  iconHeight?: number;
};

export type JourneyConnector = {
  x: number;
  y: number;
};

/** The product frames' band origin, kept as the default for those pages. */
export const DEFAULT_JOURNEY_ORIGIN = { x: 171, y: 3050 } as const;

/** Constant across every frame. */
export const PILL_HEIGHT = 69;
export const CONNECTOR_WIDTH = 69;
export const CONNECTOR_HEIGHT = 19;
