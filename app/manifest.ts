import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'USA ELD',
    short_name: 'USA ELD',
    description: '24/7 ELD monitoring and trucking compliance support for carriers and owner-operators.',
    start_url: '/',
    display: 'standalone',
    background_color: '#081A3A',
    theme_color: '#0B1F44',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
