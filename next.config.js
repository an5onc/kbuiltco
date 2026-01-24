/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // Redirects from old Buildertrend paths if needed
      // Add any legacy URL redirects here
    ];
  },
};

module.exports = nextConfig;
