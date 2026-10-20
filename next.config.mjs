/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/blog/eld-rules-2026',
        destination: '/eld-rules-2026',
        permanent: true,
      },
      {
        source: '/blog/eld-violations-list',
        destination: '/eld-violations',
        permanent: true,
      },
      {
        source: '/blog/dot-inspection-checklist',
        destination: '/dot-inspection-checklist',
        permanent: true,
      },
      {
        source: '/eld-service-preview.jpg',
        destination: '/opengraph-image',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ]
  },
}

export default nextConfig
