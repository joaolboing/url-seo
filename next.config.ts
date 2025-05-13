import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  basePath: '/url-seo',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
