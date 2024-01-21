/** @type {import('next').NextConfig} */
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
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "dirtless-detailing");
    return config;
  },
};

export default nextConfig;
