/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com',"openweathermap.org"],
  },
  env:{
    url:process.env.NEXT_PUBLIC_url,
  },

}
