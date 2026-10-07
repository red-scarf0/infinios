"use client";

export function DetailHeroCloseButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      aria-label="Close product detail"
      className="absolute right-3 top-3 z-20 flex h-6 w-6 items-center justify-center border border-white/80 bg-black/20 text-[14px] leading-none text-white transition-colors hover:bg-white hover:text-ink sm:right-5 sm:top-5"
    >
      <span aria-hidden>×</span>
    </button>
  );
}
