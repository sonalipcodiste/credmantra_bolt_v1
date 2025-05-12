/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Disable webpack caching to resolve corruption issues
    config.cache = false;
    return config;
  },
  swcMinify: false // Disable SWC minification
};

module.exports = nextConfig;