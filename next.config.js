/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost","i.ibb.co"],
    images: {
      domains: ['i.ibb.co','tuk-cdn.s3.amazonaws.com','w7.pngwing.com'],
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
