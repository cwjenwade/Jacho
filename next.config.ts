import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["motion", "framer-motion", "@phosphor-icons/react"],
  outputFileTracingIncludes: {
    "/counseling/*": ["./public/brand/counseling.html"],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/brand/index.html" },
        { source: "/about", destination: "/brand/about.html" },
        { source: "/counseling", destination: "/brand/counseling.html" },
        { source: "/journal", destination: "/brand/journal.html" },
        { source: "/article.html", destination: "/brand/article.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
