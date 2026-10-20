import type { Metadata } from "next"
import { LocalizedSeoLanding } from "@/components/localized-seo-landing"

export const metadata: Metadata = {
  title: "O'zbekcha ELD Yordami | 24/7 ELD Monitoring va Flot Yordami",
  description: "USA ELD: AQSh trucking kompaniyalari uchun 24/7 ELD monitoring, o'zbekcha haydovchi yordami, logbook, HOS, DOT audit tayyorgarligi va IFTA yordami.",
  alternates: {
    canonical: "https://eldusallc.com/uz",
    languages: {
      "en-US": "https://eldusallc.com/",
      ru: "https://eldusallc.com/ru",
      tr: "https://eldusallc.com/tr",
      uz: "https://eldusallc.com/uz",
      ky: "https://eldusallc.com/ky",
      "x-default": "https://eldusallc.com/",
    },
  },
  openGraph: { type: "website", url: "https://eldusallc.com/uz", title: "USA ELD O'zbekcha | 24/7 ELD Yordami", description: "AQSh va Kanadadagi owner-operator va flotlar uchun ELD monitoring va o'zbekcha yordam.", images: ["https://eldusallc.com/opengraph-image"] },
}

export default function UzbekPage() {
  return <LocalizedSeoLanding locale="uz" />
}
