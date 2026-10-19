import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOS Calculator | FMCSA Hours of Service Calculator for Truck Drivers",
  description:
    "Free HOS planning calculator for property-carrying truck drivers. Estimate remaining 11-hour driving, 14-hour window, and 60/70-hour cycle availability using your current ELD values.",
  alternates: { canonical: "https://eldusallc.com/hos-calculator" },
  openGraph: {
    title: "HOS Calculator | FMCSA Hours of Service Planning Tool",
    description: "Estimate remaining driving, duty-window, and cycle availability from your current HOS values.",
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
      name: "How do I estimate my remaining driving time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a typical property-carrying driver, remaining driving availability is limited by the 11-hour driving limit, the 14-hour driving window, and the applicable 60/70-hour cycle. Your ELD and the actual facts of your duty period control.",
      },
    },
    {
      "@type": "Question",
      name: "Can qualifying sleeper-berth periods affect the 14-hour window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under the FMCSA sleeper-berth provision, qualifying split periods can be paired so that neither qualifying period counts against the 14-hour driving window. Drivers must meet all requirements for the split.",
      },
    },
    {
      "@type": "Question",
      name: "When is the 30-minute break required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For drivers subject to the property-carrying rule, a 30-minute non-driving break is required after 8 cumulative hours of driving without at least a 30-minute interruption, unless an applicable exception applies.",
      },
    },
  ],
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HOS Calculator",
  description: "Free Hours of Service planning calculator for property-carrying truck drivers",
  url: "https://eldusallc.com/hos-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function HOSCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />{children}</>
}
