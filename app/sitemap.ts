import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eldusallc.com'
  const serviceLastModified = new Date('2026-03-01T00:00:00.000Z')
  const blogLastModified = {
    blog: new Date('2026-03-01T00:00:00.000Z'),
    eldViolations: new Date('2026-03-01T00:00:00.000Z'),
    eldRules: new Date('2026-02-28T00:00:00.000Z'),
    inspectionChecklist: new Date('2026-02-25T00:00:00.000Z'),
    logbookMistakes: new Date('2026-02-20T00:00:00.000Z'),
    auditPreparation: new Date('2026-02-15T00:00:00.000Z'),
  }
  
  return [
    {
      url: baseUrl,
      lastModified: serviceLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/eld-service`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-support`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-monitoring`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logbook-correction`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dot-audit-help`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-compliance`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog pages
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastModified.blog,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/eld-violations-list`,
      lastModified: blogLastModified.eldViolations,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/eld-rules-2026`,
      lastModified: blogLastModified.eldRules,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dot-inspection-checklist`,
      lastModified: blogLastModified.inspectionChecklist,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-fix-eld-logbook-mistakes`,
      lastModified: blogLastModified.logbookMistakes,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dot-audit-preparation-guide`,
      lastModified: blogLastModified.auditPreparation,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // High-traffic SEO pages
    {
      url: `${baseUrl}/eld-violations`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dot-inspection-checklist`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-rules-2026`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dot-violations`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-malfunction`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Tool pages
    {
      url: `${baseUrl}/hos-calculator`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eld-exemptions`,
      lastModified: serviceLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
