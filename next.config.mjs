import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
  images: {
    // Placeholder for when you use a CMS or external image source
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
  }
};

export default nextConfig;