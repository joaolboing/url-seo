import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/url-seo" : "",
  trailingSlash: true,
  assetPrefix: isProd ? "/url-seo" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
