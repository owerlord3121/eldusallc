import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DOT Violations Guide for Truck Drivers | ELD Logbook & HOS Violations",
  description:
    "Complete guide to DOT violations for truck drivers. Learn about ELD violations, logbook violations, HOS violations, and how to avoid Out Of Service orders.",
  keywords: [
    "DOT violations",
    "ELD violations",
    "logbook violations",
    "HOS violation",
    "DOT inspection violation",
    "Out of Service",
    "CSA score",
    "FMCSA violations",
    "truck driver violations",
    "ELD logbook errors",
  ],
  openGraph: {
    title: "DOT Violations Guide for Truck Drivers | ELD Logbook & HOS Violations",
    description:
      "Complete guide to DOT violations for truck drivers. Learn about ELD violations, logbook violations, HOS violations, and how to avoid Out Of Service orders.",
    url: "https://eldusallc.com/dot-violations",
    type: "article",
  },
  alternates: {
    canonical: "https://eldusallc.com/dot-violations",
  },
}

export default function DOTViolationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
