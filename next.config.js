/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "assets.citrux.in",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "flowbite.s3.amazonaws.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  