import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // The registry serves static JSON artifacts from /public/r/*.json
  // Other Bangicode projects install via: npx shadcn add <host>/r/<name>.json
};

export default config;
