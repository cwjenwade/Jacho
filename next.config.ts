import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["motion", "framer-motion", "@phosphor-icons/react"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
