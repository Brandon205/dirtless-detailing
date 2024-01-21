/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
      },
    ],
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "dirtless-detailing/"),
    },
  },
};

export default nextConfig;
