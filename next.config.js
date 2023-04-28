/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.shutterstock.com',
          port: '',
          pathname: '/image-illustration/drapery-fabric-stripes-3d-illustration-600w-1621785067.jpg',
        },
      ],
    }
  },
};
module.exports = nextConfig;
