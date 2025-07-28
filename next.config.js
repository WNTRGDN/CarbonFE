/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  object-src 'none';
`;

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    async headers() {
      const headers = [{
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      }];
      if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
        headers.push({
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex',
            },
          ],
          source: '/:path*',
        });
      }
      return headers;
    }
  }
  
  module.exports = nextConfig