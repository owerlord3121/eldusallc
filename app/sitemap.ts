import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eldusallc.com'
  const updated = new Date('2026-10-19T00:00:00.000Z')

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/eld-service', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/eld-support', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/eld-monitoring', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/logbook-correction', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/dot-audit-help', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/eld-compliance', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/eld-violations', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/dot-inspection-checklist', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/eld-rules-2026', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/dot-violations', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/eld-malfunction', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/hos-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/eld-exemptions', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/eld-violations-list', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/eld-rules-2026', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/dot-inspection-checklist', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/how-to-fix-eld-logbook-mistakes', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/dot-audit-preparation-guide', changeFrequency: 'monthly', priority: 0.7 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: updated,
    changeFrequency,
    priority,
  }))
}
