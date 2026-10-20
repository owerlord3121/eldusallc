import type { Metadata } from "next"

const pageUrl = "https://eldusallc.com/eld-malfunction"

const faq = [
  {
    q: "What should a driver do when an ELD malfunctions?",
    a: "The driver should notify the motor carrier of the malfunction within 24 hours. If the malfunction prevents accurate HOS recording or presentation, the driver must use paper RODS or another compliant method while the ELD is out of service.",
  },
  {
    q: "How long does a carrier have to repair or replace a malfunctioning ELD?",
    a: "The motor carrier generally has 8 days from discovery of the malfunction or the driver's notification, whichever occurs first, to repair, replace, or service the ELD.",
  },
  {
    q: "Can a motor carrier request more than 8 days?",
    a: "Yes. Under 49 CFR 395.34, a carrier may request an extension from the FMCSA Division Administrator for the State of its principal place of business. The request must be made within 5 days after the driver notifies the carrier and must include the required malfunction and repair-effort information.",
  },
  {
    q: "Can a driver keep using paper logs for more than 8 days?",
    a: "Paper RODS generally cannot continue beyond the 8-day malfunction period unless FMCSA grants an extension. A driver using paper logs beyond that period without proof of an extension may be placed out of service.",
  },
]

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "ELD Malfunction Support",
  url: pageUrl,
  description: "ELD malfunction support, paper-log workflow guidance, troubleshooting coordination, and compliance preparation for trucking fleets.",
  provider: { "@id": "https://eldusallc.com/#organization" },
  serviceType: "ELD Support",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
}

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export const metadata: Metadata = {
  title: "ELD Malfunction Guide | FMCSA 8-Day Rule & Extension Process",
  description:
    "Current ELD malfunction guide: driver notification, paper RODS, the 8-day repair period, FMCSA extension requests, and carrier responsibilities under 49 CFR 395.34.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ELD Malfunction Guide | USA ELD",
    description: "Driver and carrier steps for ELD malfunctions, paper RODS, the 8-day repair rule, and FMCSA extensions.",
    url: pageUrl,
    type: "article",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Malfunction Guide | USA ELD",
    description: "Current FMCSA-aligned malfunction procedures for drivers and carriers.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

export default function ELDMalfunctionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      {children}
    </>
  )
}
