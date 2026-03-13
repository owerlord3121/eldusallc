import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://eldusallc.com',
    sitemap: 'https://eldusallc.com/sitemap.xml',
  }
}
