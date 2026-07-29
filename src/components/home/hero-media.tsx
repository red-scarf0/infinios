"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/**
 * The still, in two weights.
 *
 * `HERO_POSTER` is the video's own frame 0 at its native 864x496, 37KB — the
 * browser upscales it exactly as it upscales the video, so the handoff into
 * playback is seamless, and it is light enough to be on screen before the
 * video's first frame can decode. `HERO_STILL` is the full 1920x1116 original,
 * used only where the image is the permanent backdrop rather than a placeholder
 * and next/image can optimise it.
 */
export const HERO_POSTER = "/images/hero-poster.jpg";
export const HERO_STILL = "/images/hero-poster.png";

/** The designer's final hero backdrop — 864x496 H.264, a 5s loop. */
export const HERO_VIDEO_SRC = "/videos/hero.mp4";

/**
 * Decorative hero backdrop.
 *
 * The frame paints this as a VIDEO fill on a 1944x1116 rect with
 * `scaleMode: FILL` and an identity transform — cover, centred — and the
 * delivered file carries that rect's exact 1.7419 aspect ratio, so
 * `object-cover object-center` reproduces the composition with nothing
 * stretched and the centre glass shape held in frame at every width.
 *
 * Renders the looping video when it can play, and the poster still otherwise —
 * covering three cases the design has to survive: the file is missing, the
 * codec fails, or the browser blocks autoplay. `poster` keeps the exact same
 * first frame painted while the video loads, so there is never a flash.
 */
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unavailable, setUnavailable] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;

    // React applies `muted` as a property, which on a hydrated element can
    // land after autoplay has already been adjudicated — Safari then refuses
    // it as unmuted. Assert it before asking to play.
    video.muted = true;

    // Autoplay can still be refused (low-power mode, data saver, engagement
    // rules). The poster stays visible in that case, the designed fallback.
    const attempt = video.play();
    if (attempt) attempt.catch(() => {});
  }, [reduced]);

  /** Nothing left to decode — swap to the still. */
  const handleError = () => {
    const video = videoRef.current;
    if (!video || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      setUnavailable(true);
    }
  };

  // Reduced motion: never play; show the still.
  if (reduced || unavailable) {
    return (
      <Image
        src={HERO_STILL}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={HERO_VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      disablePictureInPicture
      // The hero is above the fold and has to be moving on arrival, so the
      // 1.2MB file is fetched eagerly rather than left to `metadata`.
      preload="auto"
      poster={HERO_POSTER}
      aria-hidden
      onError={handleError}
      className="size-full object-cover object-center"
    />
  );
}
