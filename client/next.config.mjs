/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // Empty object to enable Turbopack
  },
  images: {
  remotePatterns: [
    {
      protocol: "http",
      hostname: "localhost",
      port: "4020",
    },
  ],
},

};

export default nextConfig;
