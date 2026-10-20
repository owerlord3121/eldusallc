import type { Metadata } from "next"
import { LocalizedSeoLanding } from "@/components/localized-seo-landing"

export const metadata: Metadata = {
  title: "Кыргызча ELD колдоо | 24/7 ELD мониторинг жана флот колдоосу",
  description: "USA ELD: АКШдагы трак компаниялар үчүн 24/7 ELD мониторинг, кыргызча айдоочу колдоосу, логбук, HOS, DOT аудитине даярдык жана IFTA боюнча жардам.",
  alternates: {
    canonical: "https://eldusallc.com/ky",
    languages: {
      "en-US": "https://eldusallc.com/",
      ru: "https://eldusallc.com/ru",
      tr: "https://eldusallc.com/tr",
      uz: "https://eldusallc.com/uz",
      ky: "https://eldusallc.com/ky",
      "x-default": "https://eldusallc.com/",
    },
  },
  openGraph: { type: "website", url: "https://eldusallc.com/ky", title: "USA ELD Кыргызча | 24/7 ELD колдоо", description: "АКШ жана Канададагы owner-operator жана флоттор үчүн ELD мониторинг жана кыргызча колдоо.", images: ["https://eldusallc.com/opengraph-image"] },
}

export default function KyrgyzPage() {
  return <LocalizedSeoLanding locale="ky" />
}
