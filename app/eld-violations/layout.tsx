import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELD Violations List and How to Fix Them | 2026 Guide",
  description:
    "Complete list of ELD violations for truck drivers. Learn about common violations, logbook form and manner errors, how to fix ELD logbook mistakes, and avoid DOT inspection issues.",
  keywords: [
    "ELD violations",
    "ELD violations list",
    "ELD violation codes",
    "logbook violations",
    "DOT violations",
    "ELD logbook errors",
    "fix ELD violations",
    "ELD compliance violations",
    "395.8 violations",
    "trucking violations",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-violations" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/eld-violations",
    title: "ELD Violations List and How to Fix Them | 2026 Guide",
    description:
      "Complete list of ELD violations for truck drivers. Learn about common violations and how to fix logbook errors.",
    siteName: "NextLog FullService",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Violations List | 2026 Guide",
    description:
      "Complete list of ELD violations for truck drivers. Learn how to fix logbook errors and avoid DOT issues.",
  },
}

export default function ELDViolationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
