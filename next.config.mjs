/** @type {import('next').NextConfig} */
export const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable source maps for better error tracking
  productionBrowserSourceMaps: true,
  // Silence warnings
  // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

