/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  swcMinify: true,
};

module.exports = nextConfig;
