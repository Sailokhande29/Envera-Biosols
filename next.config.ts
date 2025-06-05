/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Envera-Biosols' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Envera-Biosols/' : '',
  // Ensure static files are properly handled
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
    });
    return config;
  },
  // Disable server-side features
  experimental: {
    appDir: true,
  },
  // Ensure proper static generation
  generateStaticParams: async () => {
    return [];
  },
  // Disable telemetry
  telemetry: {
    disabled: true,
  },
};

export default nextConfig;
