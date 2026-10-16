import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Required for @cloudflare/next-on-pages
  // @ts-expect-error — CF plugin types
  experimental: {
    runtime: "edge",
  },
};

export default nextConfig;
