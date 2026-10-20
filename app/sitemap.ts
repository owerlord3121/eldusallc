import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-10-20T00:00:00.000Z')
  const routes = [
    '',
    '/ru',
    '/tr',
    '/uz',
    '/ky',
    '/about',
    '/contact',
    '/eld-service',
    '/eld-pricing',
    '/eld-cost',
    '/eld-for-owner-operators',
    '/eld-for-fleets',
    '/eld-support',
    '/eld-monitoring',
    '/logbook-correction',
    '/dot-audit-help',
    '/eld-compliance',
    '/ifta-reporting',
    '/eld-violations',
    '/dot-inspection-checklist',
    '/eld-rules-2026',
    '/dot-violations',
    '/eld-malfunction',
    '/personal-conveyance-rules',
    '/yard-move-rules',
    '/unassigned-driving-time',
    '/tools',
    '/hos-calculator',
    '/eld-exemptions',
    '/cost-per-mile-calculator',
    '/trip-profit-calculator',
    '/blog',
    '/blog/how-to-fix-eld-logbook-mistakes',
    '/blog/dot-audit-preparation-guide',
    '/privacy',
    '/terms',
  ]

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: updated,
  }))
}
