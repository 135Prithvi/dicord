/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  node: {
    fs: 'empty',
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'cdn.sanity.io' ,"img.icons8.com"],
  },
}

module.exports = nextConfig
