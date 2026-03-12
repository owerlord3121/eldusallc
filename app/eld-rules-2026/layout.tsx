import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELD Rules 2026 – Complete Guide for Truck Drivers",
  description:
    "Complete guide to ELD rules and regulations in 2026. Understand what ELD is, Hours of Service rules, logbook requirements, common mistakes, and how to stay DOT compliant.",
  keywords: [
    "ELD rules 2026",
    "ELD regulations",
    "ELD rules",
    "ELD requirements",
    "Hours of Service",
    "HOS rules",
    "ELD mandate",
    "FMCSA ELD",
    "ELD compliance",
    "trucking regulations 2026",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-rules-2026" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/eld-rules-2026",
    title: "ELD Rules 2026 – Complete Guide for Truck Drivers",
    description:
      "Complete guide to ELD rules and regulations in 2026. HOS rules, logbook requirements, and how to stay compliant.",
    siteName: "NextLog FullService",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Rules 2026 | Complete Guide",
    description:
      "Complete guide to ELD rules and regulations in 2026 for truck drivers.",
  },
}

export default function ELDRules2026Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
