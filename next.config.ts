import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Pin the tracing root to this directory (avoids workspace root detection warning)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
