import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the default `.next` build output so Vercel can find the assets/functions
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
