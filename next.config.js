/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms-dafi18.kodingkeun.my.id', 'kodingkeun.my.id', 'kodingkeun.com'],
  },
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
  },
  experimental: {
    workerThreads: false,
    cpus: 4
  },
}

module.exports = nextConfig
