/**
 * The 1894x856 plate (r=89) carrying the frames' radial wash from #6B93DE to
 * white. Drawn as an absolute layer because the content that sits on it —
 * the capability card rows, the contact form card — deliberately overhangs or
 * inset-floats within it rather than being wrapped by it.
 */
export function PlateBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-3 top-0 h-[calc(100%-40px)] rounded-[40px] lg:inset-x-[13px] lg:h-[856px] lg:rounded-[89px]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 100%, #6b93de 12%, #ffffff 96%)",
      }}
    />
  );
}
