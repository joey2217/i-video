/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.sekahui.cn',
      'image.ijycnd.com',
      'image.iapijy.com',
    ],
  },
}

module.exports = nextConfig
