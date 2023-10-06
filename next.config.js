/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.alipayobjects.com',
        },
        {
          protocol: 'https',
          hostname: '**.unsplash.com',
      },

        ],
      },
    
}

module.exports = nextConfig
