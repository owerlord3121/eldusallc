import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const siteUrl = 'https://eldusallc.com'
const siteName = 'NextLog FullService'
const siteDescription =
  '24/7 ELD monitoring, driver support, logbook assistance, DOT audit preparation, IFTA reporting, and fleet compliance support for trucking companies across the U.S. and Canada.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'NextLog FullService | ELD Service USA & 24/7 Compliance Support',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: `${siteUrl}/about` }],
  creator: siteName,
  publisher: siteName,
  category: 'Transportation',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: 'NextLog FullService | ELD Service USA & 24/7 Compliance Support',
    description: siteDescription,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'NextLog FullService — 24/7 ELD monitoring and fleet compliance support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextLog FullService | 24/7 ELD & Compliance Support',
    description: siteDescription,
    images: [`${siteUrl}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      alternateName: 'NextLog',
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      telephone: '+1-815-550-6576',
      description: siteDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30 N Gould St Ste R',
        addressLocality: 'Sheridan',
        addressRegion: 'WY',
        postalCode: '82801',
        addressCountry: 'US',
      },
      sameAs: ['https://t.me/nextlogfullservice'],
      knowsAbout: [
        'Electronic Logging Devices',
        'Hours of Service',
        'FMCSA compliance',
        'DOT audit preparation',
        'IFTA reporting',
        'Trucking compliance',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#eld-service`,
      name: 'ELD Monitoring and Fleet Compliance Support',
      serviceType: 'ELD monitoring and trucking compliance support',
      description: siteDescription,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'ELD and Compliance Services',
        itemListElement: [
          '24/7 ELD Monitoring',
          'Driver ELD Support',
          'Logbook Assistance',
          'DOT Audit Preparation',
          'IFTA Reporting',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
