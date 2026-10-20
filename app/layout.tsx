import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { siteConfig } from '@/lib/site'
import './globals.css'

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: 'USA ELD | ELD Service USA & 24/7 Compliance Support',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: `${siteConfig.url}/about` }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: 'Transportation',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'USA ELD | ELD Service USA & 24/7 Compliance Support',
    description: siteConfig.description,
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'USA ELD — 24/7 ELD monitoring and fleet compliance support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USA ELD | 24/7 ELD & Compliance Support',
    description: siteConfig.description,
    images: [`${siteConfig.url}/twitter-image`],
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
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1F44',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      alternateName: 'USA ELD LLC',
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
        width: 560,
        height: 150,
      },
      email: siteConfig.email,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: siteConfig.phone,
          email: siteConfig.email,
          availableLanguage: siteConfig.languages,
          areaServed: ['US', 'CA'],
        },
      ],
      sameAs: [siteConfig.telegram],
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
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': `${siteConfig.url}/#eld-service`,
      name: 'ELD Monitoring and Fleet Compliance Support',
      serviceType: 'ELD monitoring and trucking compliance support',
      description: siteConfig.description,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '125',
        description: 'ELD + Full Service plans start at $125 per truck per month.',
        url: `${siteConfig.url}/#pricing`,
      },
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
