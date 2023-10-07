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
      {
        protocol: 'https',
        hostname: '**.kobo.com',
    },
    {
      protocol: 'https',
      hostname: '**.brightspotcdn.com',
  },
  {
    protocol: 'https',
    hostname: '**.media-amazon.com',
},

      
      
      
      
        ],
      },
    
}

module.exports = nextConfig
