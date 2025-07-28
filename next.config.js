/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://use.typekit.net;
  img-src 'self' data: https://wntrau-001-site1.qtempurl.com https://www.google-analytics.com;
  font-src 'self' https://use.typekit.net;
  connect-src 'self' https://www.google-analytics.com;
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