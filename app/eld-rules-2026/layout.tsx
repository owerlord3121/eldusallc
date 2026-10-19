import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELD Rules 2026 | FMCSA Requirements for Drivers & Carriers",
  description:
    "Current 2026 guide to FMCSA ELD requirements, property-carrying HOS limits, ELD exceptions, roadside inspection readiness, malfunction procedures, and recordkeeping.",
  alternates: { canonical: "https://eldusallc.com/eld-rules-2026" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/eld-rules-2026",
    title: "ELD Rules 2026 | FMCSA Requirements for Drivers & Carriers",
    description: "Current guide to ELD requirements, HOS limits, exceptions, inspections, and malfunction procedures.",
    siteName: "NextLog FullService",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Rules 2026 | FMCSA Guide",
    description: "Current ELD and HOS requirements for truck drivers and motor carriers.",
  },
}

export default function ELDRules2026Layout({ children }: { children: React.ReactNode }) {
  return children
}
