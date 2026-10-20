import type { Metadata } from "next"
import { LocalizedSeoLanding } from "@/components/localized-seo-landing"

export const metadata: Metadata = {
  title: "Türkçe ELD Desteği | 7/24 ELD İzleme ve Filo Desteği",
  description: "USA ELD: ABD'deki kamyon şirketleri için 7/24 ELD izleme, Türkçe sürücü desteği, logbook yardımı, HOS, DOT denetim hazırlığı ve IFTA desteği.",
  alternates: {
    canonical: "https://eldusallc.com/tr",
    languages: {
      "en-US": "https://eldusallc.com/",
      ru: "https://eldusallc.com/ru",
      tr: "https://eldusallc.com/tr",
      uz: "https://eldusallc.com/uz",
      ky: "https://eldusallc.com/ky",
      "x-default": "https://eldusallc.com/",
    },
  },
  openGraph: { type: "website", url: "https://eldusallc.com/tr", title: "USA ELD Türkçe | 7/24 ELD Desteği", description: "ABD ve Kanada'daki owner-operator ve filolar için ELD izleme ve Türkçe destek.", images: ["https://eldusallc.com/opengraph-image"] },
}

export default function TurkishPage() {
  return <LocalizedSeoLanding locale="tr" />
}
