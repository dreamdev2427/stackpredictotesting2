/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    appDir: true,
    assetPrefix: ".",
  },
  basePath:'',
};

module.exports = nextConfig;
