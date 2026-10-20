import type { Metadata } from "next"
import { LocalizedSeoLanding } from "@/components/localized-seo-landing"

export const metadata: Metadata = {
  title: "ELD сервис на русском | Мониторинг и поддержка 24/7",
  description: "USA ELD: ELD-мониторинг 24/7, поддержка водителей на русском языке, помощь с логбуками, DOT-проверками, HOS и IFTA для траковых компаний в США.",
  alternates: {
    canonical: "https://eldusallc.com/ru",
    languages: {
      "en-US": "https://eldusallc.com/",
      ru: "https://eldusallc.com/ru",
      tr: "https://eldusallc.com/tr",
      uz: "https://eldusallc.com/uz",
      ky: "https://eldusallc.com/ky",
      "x-default": "https://eldusallc.com/",
    },
  },
  openGraph: { type: "website", url: "https://eldusallc.com/ru", title: "USA ELD на русском | Поддержка 24/7", description: "ELD-мониторинг и поддержка для траковых компаний и owner-operators в США и Канаде.", images: ["https://eldusallc.com/opengraph-image"] },
}

export default function RussianPage() {
  return <LocalizedSeoLanding locale="ru" />
}
