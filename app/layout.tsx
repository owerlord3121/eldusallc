import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://eldusallc.com'),
  title: {
    default: 'ELD Service USA | ELD Support 24/7 | Logbook Correction | DOT Audit Help',
    template: '%s | ELD Service USA | NextLog FullService',
  },
  description:
    'Professional ELD service in USA for trucking companies. 24/7 ELD monitoring, logbook correction, DOT audit preparation, IFTA reporting and full compliance support.',
  keywords: [
    'ELD',
    'ELD service',
    'ELD service USA',
    'ELD USA',
    'USA ELD',
    'ELD support',
    'ELD support trucking',
    'ELD monitoring',
    'ELD monitoring 24/7',
    'ELD compliance',
    'logbook correction',
    'logbook help',
    'DOT audit help',
    'DOT compliance',
    'DOT audit preparation',
    'trucking ELD service',
    'trucking compliance',
    'IFTA reporting',
    'electronic logging device',
    'fleet ELD service',
    'best ELD service USA',
  ],
  alternates: { canonical: 'https://eldusallc.com' },
  openGraph: {
    type: 'website',
    url: 'https://eldusallc.com',
    siteName: 'NextLog FullService - ELD Service USA',
    title: 'ELD Service USA | ELD Support 24/7 | Logbook Correction | DOT Audit Help',
    description:
      'Professional ELD service in USA for trucking companies. 24/7 ELD monitoring, logbook correction, DOT audit preparation, IFTA reporting and full compliance support.',
    locale: 'en_US',
    images: [
      {
        url: 'https://eldusallc.com/eld-service-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'ELD Service USA - 24/7 Monitoring, Logbook Correction, DOT Audit Help',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELD Service USA | ELD Support 24/7 | Logbook Correction',
    description:
      'Professional ELD service in USA. 24/7 monitoring, logbook correction, DOT audit help, full ELD compliance support.',
    images: ['https://eldusallc.com/eld-service-preview.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://eldusallc.com/#localbusiness',
  name: 'NextLog FullService',
  alternateName: 'ELD Service USA',
  description:
    'Professional ELD service for trucking companies in USA. 24/7 ELD monitoring, logbook correction, DOT audit preparation, IFTA reporting, full compliance support.',
  url: 'https://eldusallc.com',
  telephone: '+1-307-535-0021',
  email: 'support@eldusallc.com',
  image: 'https://eldusallc.com/images/logo.png',
  logo: 'https://eldusallc.com/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St Ste R',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.7972,
    longitude: -106.9561,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://t.me/nextlogfullservice',
    'https://wa.me/13075350021',
  ],
  priceRange: '$110-$150 per truck/month',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, Zelle',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
    sameAs: 'https://en.wikipedia.org/wiki/United_States',
  },
  serviceType: ['ELD monitoring', 'Logbook correction', 'DOT audit help', 'ELD compliance', 'IFTA reporting'],
  knowsAbout: ['ELD', 'Electronic Logging Device', 'DOT compliance', 'HOS rules', 'FMCSA regulations', 'Trucking compliance'],
  slogan: 'Professional ELD & Service for Your Business',
  foundingDate: '2020',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eldusallc.com/#organization',
  name: 'NextLog FullService',
  url: 'https://eldusallc.com',
  logo: 'https://eldusallc.com/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1 (307) 535-0021',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: ['English', 'Russian', 'Turkish', 'Uzbek', 'Kyrgyz'],
  },
  sameAs: ['https://t.me/nextlogfullservice'],
}

const jsonLdServices = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://eldusallc.com/#service',
  serviceType: 'ELD Service USA',
  provider: {
    '@type': 'Organization',
    name: 'NextLog FullService',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ELD Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ELD Monitoring 24/7',
          description: '24/7 real-time ELD monitoring and logbook support for trucking companies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Logbook Correction',
          description: 'Professional logbook correction and HOS compliance service',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'DOT Audit Help',
          description: 'Full preparation and support for DOT audits and inspections',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ELD Compliance Support',
          description: 'Complete ELD compliance management for trucking companies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IFTA Reporting',
          description: 'Complete IFTA fuel tax reporting service',
        },
      },
    ],
  },
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eldusallc.com/#website',
  url: 'https://eldusallc.com',
  name: 'NextLog FullService - ELD Service USA',
  publisher: {
    '@type': 'Organization',
    name: 'NextLog FullService',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
