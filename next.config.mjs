/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/**',
          },

          {
            protocol: 'https',
            hostname: 'logo-marque.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol:'https',
            hostname:"w7.pngwing.com",
            port:'',
            pathname:'/**'
          }

        ],
      },

      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
