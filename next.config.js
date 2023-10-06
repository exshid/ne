/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.alipayobjects.com',
        },
        ],
      },
    
}

module.exports = nextConfig
