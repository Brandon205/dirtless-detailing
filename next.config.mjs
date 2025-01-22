/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dirtlessdetailing.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
