// import plugin for LESS
import withLess from 'next-plugin-less';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
};

export default withLess(nextConfig);


