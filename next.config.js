/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.sekahui.cn'],
  },
}

module.exports = nextConfig
