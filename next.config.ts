import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /*
     * WebP only. The source art is large (the globe is 1920x1920), and AVIF
     * encoding at that size takes long enough that the optimizer request
     * times out and the image never paints. WebP encodes fast and is
     * supported everywhere we care about.
     */
    formats: ["image/webp"],
  },
};

export default nextConfig;
