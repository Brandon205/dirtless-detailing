/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 65, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dirtlessdetailing.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "www.dirtlessdetailing.com",
        port: ""
      }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
