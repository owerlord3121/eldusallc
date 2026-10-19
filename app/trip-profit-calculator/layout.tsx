import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Trip Profit Calculator | Load Rate & Deadhead Tool",
  description:
    "Free truck trip profit calculator for owner-operators. Estimate load profit using revenue, loaded miles, deadhead, fuel, tolls, dispatch, factoring, and other trip costs.",
  alternates: { canonical: "https://eldusallc.com/trip-profit-calculator" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/trip-profit-calculator",
    title: "Truck Trip Profit Calculator | NextLog FullService",
    description: "Estimate load profit, gross rate per mile, deadhead impact, and trip costs before booking a load.",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Truck Trip Profit Calculator",
  url: "https://eldusallc.com/trip-profit-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</>
}
