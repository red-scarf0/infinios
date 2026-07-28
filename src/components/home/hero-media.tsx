"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export const HERO_POSTER = "/images/hero-poster.png";

/**
 * Hero background video sources, best format first. Drop the files in
 * `public/videos/` and they are picked up with no code change; if they are
 * absent (or fail to decode) the component falls back to the poster still.
 */
export const HERO_VIDEO_SOURCES = [
  { src: "/videos/hero.webm", type: "video/webm" },
  { src: "/videos/hero.mp4", type: "video/mp4" },
] as const;

/**
 * Decorative hero backdrop.
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

    // Autoplay can be refused (low-power mode, data saver, engagement rules).
    // The poster stays visible in that case, which is the designed fallback.
    const attempt = video.play();
    if (attempt) attempt.catch(() => {});
  }, [reduced]);

  /**
   * `error` fires per `<source>`, so one unsupported codec is not a failure —
   * Safari rejects the WebM and then plays the MP4. Only swap to the still
   * once the element has exhausted every candidate.
   */
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
        src={HERO_POSTER}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      disablePictureInPicture
      // `metadata` keeps the hero off the critical path; the poster carries
      // first paint and playback starts as soon as enough data has buffered.
      preload="metadata"
      poster={HERO_POSTER}
      aria-hidden
      onError={handleError}
      className="size-full object-cover"
    >
      {HERO_VIDEO_SOURCES.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
