/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Envera-Biosols',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
