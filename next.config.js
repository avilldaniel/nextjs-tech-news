/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  // images: {
  //   loader: "cloudinary",
  //   path: "res.cloudinary.com",
  // },
};

module.exports = nextConfig;
