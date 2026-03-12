import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOS Calculator | FMCSA Hours of Service Calculator for Truck Drivers",
  description:
    "Free HOS calculator for truck drivers. Calculate remaining driving hours, on-duty time, and 60/70 hour cycle. Stay FMCSA compliant with our Hours of Service calculator.",
  keywords: [
    "HOS calculator",
    "hours of service calculator",
    "truck driver hours calculator",
    "ELD hours calculator",
    "FMCSA HOS calculator",
    "11 hour rule calculator",
    "14 hour rule",
    "driving hours calculator",
    "trucker hours calculator",
  ],
  alternates: { canonical: "https://eldusallc.com/hos-calculator" },
  openGraph: {
    title: "HOS Calculator | FMCSA Hours of Service Calculator",
    description:
      "Free HOS calculator for truck drivers. Calculate your remaining driving hours and stay FMCSA compliant.",
    url: "https://eldusallc.com/hos-calculator",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my remaining driving hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Subtract your current driving hours from 11 (the maximum allowed). For example, if you've driven 6 hours, you have 5 hours remaining. Also check your 14-hour window and cycle hours.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed the 11-hour driving limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exceeding the 11-hour limit is a serious HOS violation that can result in fines up to $16,000 per violation, CSA points, and being placed out of service until you complete a 10-hour break.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pause my 14-hour clock by taking a break?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the 14-hour clock cannot be paused or stopped. It runs continuously from the time you come on duty until 14 hours have passed, regardless of breaks taken.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 34-hour restart rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 34-hour restart allows you to reset your 60/70-hour cycle by taking 34 consecutive hours off duty. After completing the restart, you begin a new 7 or 8 day cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an ELD to track my HOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most commercial drivers are required to use an ELD to track their Hours of Service. Exceptions include drivers using the short-haul exception, drivers of vehicles manufactured before 2000, and driveaway-towaway operations.",
      },
    },
  ],
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HOS Calculator",
  description: "Free Hours of Service calculator for truck drivers",
  url: "https://eldusallc.com/hos-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

export default function HOSCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {children}
    </>
  )
}
