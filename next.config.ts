/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Envera-Biosols',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: '/Envera-Biosols/',
};

export default nextConfig;
