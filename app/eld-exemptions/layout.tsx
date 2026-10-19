import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELD Exemptions 2026 | FMCSA ELD Exception Guide",
  description:
    "Current guide to common FMCSA ELD exceptions, including short-haul operations, the 8-days-in-30 rule, driveaway-towaway operations, and pre-2000 model-year vehicles or engines.",
  alternates: { canonical: "https://eldusallc.com/eld-exemptions" },
  openGraph: {
    title: "ELD Exemptions 2026 | FMCSA Guide",
    description: "Understand the main FMCSA exceptions to the ELD requirement and what records may still be required.",
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
      name: "What are common exceptions to the ELD requirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common exceptions include qualifying short-haul operations, drivers who are required to keep RODS on no more than 8 days in any 30-day period, qualifying driveaway-towaway operations, and vehicles with a pre-2000 model year. Vehicles with engines predating model year 2000 may also qualify under FMCSA guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 8-days-in-30 ELD exception?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A driver who is required to keep records of duty status on no more than 8 days within any rolling 30-day period may use paper RODS on those days instead of an ELD, provided all applicable requirements are met.",
      },
    },
    {
      "@type": "Question",
      name: "How does the pre-2000 model-year exception work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMCSA guidance generally uses the vehicle model year shown by the VIN. If the vehicle is pre-2000, an ELD is not required. A later-model vehicle with an engine predating model year 2000 may also qualify, and the motor carrier should maintain documentation on engine changes at its principal place of business.",
      },
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ELD Exemptions 2026: FMCSA ELD Exception Guide",
  description: "Current overview of common FMCSA exceptions to the ELD requirement.",
  mainEntityOfPage: "https://eldusallc.com/eld-exemptions",
  dateModified: "2026-10-20",
  author: { "@type": "Organization", name: "NextLog FullService" },
  publisher: {
    "@type": "Organization",
    name: "NextLog FullService",
    logo: { "@type": "ImageObject", url: "https://eldusallc.com/images/logo.png" },
  },
}

export default function ELDExemptionsLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>
}
