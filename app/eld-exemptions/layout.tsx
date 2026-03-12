import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELD Exemptions 2026 | Who Does Not Need an ELD | FMCSA Guide",
  description:
    "Complete guide to ELD exemptions in 2026. Learn who is exempt from ELD requirements: short-haul drivers, pre-2000 vehicles, driveaway-towaway, and the 8-day rule.",
  keywords: [
    "ELD exemption",
    "ELD exemptions 2026",
    "who needs ELD",
    "FMCSA ELD exemption",
    "short haul exemption",
    "ELD requirements",
    "pre-2000 truck ELD",
    "driveaway towaway exemption",
    "8 day ELD rule",
    "who is exempt from ELD",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-exemptions" },
  openGraph: {
    title: "ELD Exemptions 2026 | Who Does Not Need an ELD",
    description:
      "Complete guide to ELD exemptions. Learn who is exempt from Electronic Logging Device requirements under FMCSA regulations.",
    url: "https://eldusallc.com/eld-exemptions",
    type: "article",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is exempt from ELD requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drivers who qualify for short-haul exemption (150 air-mile radius), operators of vehicles made before 2000, driveaway-towaway drivers, and those using RODS 8 days or less per month are exempt from ELD requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the short-haul ELD exemption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The short-haul exemption applies to drivers who operate within 150 air-miles of their work location, return within 14 hours, and do not exceed 11 hours of driving. They must keep time records but don't need an ELD.",
      },
    },
    {
      "@type": "Question",
      name: "Do pre-2000 trucks need ELD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, commercial motor vehicles with engines manufactured before December 18, 1999 are exempt from the ELD mandate. Drivers can use paper logs instead.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 8-day ELD exemption rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are required to keep Records of Duty Status for 8 or fewer days in any 30-day period, you are exempt from ELD requirements. Paper logs are acceptable for those days.",
      },
    },
    {
      "@type": "Question",
      name: "Can I lose my ELD exemption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you exceed the parameters of your exemption (e.g., driving beyond 150 miles, exceeding 8 RODS days per month), you must begin using an ELD immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What records must exempt drivers keep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Short-haul exempt drivers must keep time records showing start time, end time, and total hours worked. Other exempt drivers must maintain paper logs that comply with FMCSA regulations.",
      },
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ELD Exemptions 2026 | Who Does Not Need an ELD",
  description:
    "Complete guide to ELD exemptions under FMCSA regulations. Learn who is exempt from Electronic Logging Device requirements.",
  author: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  publisher: {
    "@type": "Organization",
    name: "NextLog FullService",
    logo: {
      "@type": "ImageObject",
      url: "https://eldusallc.com/images/logo.png",
    },
  },
  datePublished: "2024-01-15",
  dateModified: new Date().toISOString().split("T")[0],
}

export default function ELDExemptionsLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
