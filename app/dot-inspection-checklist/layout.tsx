import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DOT Inspection Checklist for Truck Drivers (2026)",
  description:
    "Complete DOT inspection checklist for truck drivers. Know what inspectors check during Level I, II, III inspections. ELD, brakes, lights, and safety equipment checklists.",
  keywords: [
    "DOT inspection checklist",
    "DOT inspection",
    "truck inspection checklist",
    "CDL inspection",
    "Level 1 inspection",
    "Level 2 inspection",
    "pre-trip inspection",
    "brake inspection",
    "ELD inspection",
    "trucking inspection checklist",
  ],
  alternates: { canonical: "https://eldusallc.com/dot-inspection-checklist" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/dot-inspection-checklist",
    title: "DOT Inspection Checklist for Truck Drivers (2026)",
    description:
      "Complete DOT inspection checklist. Know what inspectors check, prepare your ELD, vehicle, and documents.",
    siteName: "NextLog FullService",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOT Inspection Checklist | 2026 Guide",
    description:
      "Complete DOT inspection checklist for truck drivers. Prepare for Level I, II, III inspections.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do DOT inspectors check during a Level 1 inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Level 1 is the most comprehensive inspection. Inspectors check driver documents (CDL, medical card, HOS logs), ELD compliance, brakes, lights, tires, steering, suspension, coupling devices, and the entire vehicle exterior and under-hood components.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for a DOT inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a valid CDL, medical examiner's certificate, current ELD logs (last 7 days), vehicle registration, proof of insurance, annual inspection certificate, IFTA permit (if applicable), and bill of lading or shipping documents.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a DOT inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Level 1 inspection typically takes 45-60 minutes. Level 2 (walk-around) takes about 30 minutes. Level 3 (driver-only) takes 15-20 minutes. Time varies based on violations found.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I fail a DOT inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on severity, you may receive a warning, citation, or be placed Out of Service (OOS). OOS violations mean you cannot drive until the issue is corrected. Violations affect your CSA score and carrier's safety rating.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prepare my ELD for DOT inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ensure your ELD is registered and certified, logs are up to date with no unassigned driving time, you can display logs on screen and transfer them electronically or via printout, and you have paper logs as backup for the previous 7 days.",
      },
    },
  ],
}

export default function DOTInspectionChecklistLayout({
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
      {children}
    </>
  )
}
