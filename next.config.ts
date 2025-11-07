/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      pure: true,
      cssProp: false,
    },
  },
  experimental: {
    optimizeCss: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
