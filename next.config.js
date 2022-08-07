/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.sekahui.cn',
      'image.ijycnd.com',
    ],
  },
}

module.exports = nextConfig
