export const siteConfig = {
  name: "USA ELD",
  legalName: "USA ELD LLC",
  url: "https://eldusallc.com",
  description:
    "24/7 ELD monitoring, driver support, logbook assistance, DOT audit preparation, IFTA reporting, and fleet compliance support for trucking companies across the U.S. and Canada.",
  email: "info@eldusallc.com",
  phone: "+18155506576",
  phoneDisplay: "(815) 550-6576",
  telegram: "https://t.me/usaeld",
  logo: "https://eldusallc.com/images/usa-eld-logo.svg",
  address: {
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  languages: ["English", "Russian", "Turkish", "Uzbek", "Kyrgyz"],
} as const

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`
}

export function breadcrumbJsonLd(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  }
}
