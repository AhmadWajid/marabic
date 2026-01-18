import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set Turbopack root to current directory to avoid lockfile warning
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
