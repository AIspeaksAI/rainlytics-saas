/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Heroku specific configuration
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

export default nextConfig
