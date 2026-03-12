import type { Metadata } from "next"

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ELD Malfunction Support',
  description: 'Professional 24/7 ELD malfunction support for truck drivers. Remote troubleshooting, paper log assistance, and compliance guidance.',
  provider: {
    '@type': 'Organization',
    name: 'NextLog FullService',
    url: 'https://eldusallc.com',
  },
  serviceType: 'ELD Support',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What counts as an ELD malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ELD malfunction is any failure of the device to record, retain, or display required data accurately. This includes: failure to record engine hours, vehicle miles, or location; inability to print or transfer data; screen display issues; or failure to sync with the vehicle\'s ECM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can I drive with a malfunctioning ELD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per FMCSA regulations (49 CFR 395.34), you can continue operating for up to 8 days after discovering an ELD malfunction, provided you maintain accurate paper logs. The carrier must ensure the ELD is repaired, replaced, or serviced within those 8 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to notify my carrier about ELD malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you must notify your motor carrier of the ELD malfunction within 24 hours. Document the malfunction by noting it in the remarks section of your paper log.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the ELD malfunctions during a roadside inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your ELD malfunctions during an inspection, show the inspector your paper logs and documentation of the malfunction. Explain when the malfunction occurred and that you\'ve notified your carrier. Having proper paper logs prevents an Out of Service order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I be cited for ELD malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can be cited if you don\'t have proper documentation of the malfunction, fail to maintain paper logs during the malfunction period, don\'t notify your carrier within 24 hours, or continue operating beyond 8 days with a malfunctioning ELD.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I switch from ELD to paper logs during malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When your ELD malfunctions: 1) Note the date, time, and nature of the malfunction in your remarks, 2) Reconstruct your records for the current 24-hour period on paper, 3) Continue keeping paper logs until the ELD is repaired, 4) Keep the paper logs in your possession for inspection.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'ELD Malfunction Guide | What Truck Drivers Must Do',
  description:
    'Complete ELD malfunction guide for truck drivers. Learn FMCSA rules, how long you can drive without ELD, paper log requirements, and when to contact ELD support.',
  keywords: [
    'ELD malfunction',
    'ELD not working',
    'ELD error',
    'ELD support USA',
    'ELD troubleshooting',
    'paper logs',
    'FMCSA ELD rules',
    '8 day malfunction',
    'ELD device failure',
  ],
  openGraph: {
    title: 'ELD Malfunction Guide | What Truck Drivers Must Do',
    description:
      'Complete ELD malfunction guide for truck drivers. Learn FMCSA rules, how long you can drive without ELD, paper log requirements, and when to contact ELD support.',
    url: 'https://eldusallc.com/eld-malfunction',
    type: 'article',
  },
  alternates: {
    canonical: 'https://eldusallc.com/eld-malfunction',
  },
}

export default function ELDMalfunctionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      {children}
    </>
  )
}
