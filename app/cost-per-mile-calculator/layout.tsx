import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Cost Per Mile Calculator | Owner-Operator CPM Tool",
  description:
    "Free truck cost-per-mile calculator for owner-operators and fleets. Estimate CPM using monthly miles, fuel, truck payment, insurance, maintenance, and other operating costs.",
  alternates: { canonical: "https://eldusallc.com/cost-per-mile-calculator" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/cost-per-mile-calculator",
    title: "Truck Cost Per Mile Calculator | NextLog FullService",
    description: "Estimate your real truck operating cost per mile before setting rate targets or reviewing load profitability.",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Truck Cost Per Mile Calculator",
  url: "https://eldusallc.com/cost-per-mile-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</>
}
