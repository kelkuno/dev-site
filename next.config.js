/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "", // Optional: specify port if needed
        pathname: "/**", // Optional: specify paths if needed
      },
    ],
  },
};

module.exports = nextConfig;
