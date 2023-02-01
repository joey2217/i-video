/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.sekahui.cn',
      'image.ijycnd.com',
      'image.iapijy.com',
      'pan.dysmz.top',
      'pan1.dysmz.top',
      'pic.wujinpp.com',
    ],
  },
}

module.exports = nextConfig
