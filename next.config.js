/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxgsqxdi3/**",
      },
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "res-console.cloudinary.com",
      },
      {
        hostname: "1.bp.blogspot.com",
      },
    ],
  },
};

module.exports = nextConfig;
