/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    GITHUB_KEY: process.env.GITHUB_KEY,
  }
}

module.exports = nextConfig
