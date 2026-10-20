"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function SEOContentSection() {
  const { language } = useLanguage()

  const content: Record<string, { title: string; paragraphs: string[] }> = {
    en: {
      title: "USA ELD - Professional ELD Support for Trucking Companies",
      paragraphs: [
        "USA ELD provides 24/7 ELD monitoring, driver support, logbook assistance, DOT audit preparation, IFTA reporting, and compliance support for owner-operators and trucking fleets across the United States and Canada.",
        "Our team helps carriers keep electronic logs accurate, identify potential HOS issues early, prepare documentation for inspections and audits, and support drivers when ELD questions or operational problems appear on the road.",
        "Whether you operate one truck or a growing fleet, USA ELD gives you practical day-to-day support focused on reliable ELD operations, faster response times, and better compliance readiness.",
      ],
    },
    ru: {
      title: "USA ELD - Профессиональная поддержка ELD для транспортных компаний",
      paragraphs: [
        "USA ELD предоставляет круглосуточный мониторинг ELD, поддержку водителей, помощь с логбуками, подготовку к DOT аудитам, IFTA и сопровождение транспортных компаний в США и Канаде.",
        "Наша команда помогает поддерживать электронные логи в порядке, заранее выявлять возможные проблемы HOS, готовить документы к инспекциям и аудитам и оперативно помогать водителям по вопросам ELD.",
        "Независимо от того, управляете вы одним траком или растущим флотом, USA ELD обеспечивает практическую ежедневную поддержку и подготовленность к требованиям compliance.",
      ],
    },
    kg: {
      title: "USA ELD - Транспорттук компаниялар үчүн профессионалдуу ELD колдоосу",
      paragraphs: [
        "USA ELD АКШ жана Канададагы owner-operator жана флоттор үчүн 24/7 ELD мониторингин, айдоочуларды колдоону, логбук жардамын, DOT аудитине даярдоону жана IFTA колдоосун сунуштайт.",
        "Команда электрондук логдорду так жүргүзүүгө, HOS көйгөйлөрүн эрте табууга, текшерүүлөргө документтерди даярдоого жана айдоочуларга ELD боюнча ыкчам жардам берүүгө көмөктөшөт.",
        "Бир трактан чоң флотко чейин USA ELD күнүмдүк ишке ыңгайлуу жана compliance талаптарына багытталган колдоо көрсөтөт.",
      ],
    },
    uz: {
      title: "USA ELD - Transport kompaniyalari uchun professional ELD yordami",
      paragraphs: [
        "USA ELD AQSh va Kanadadagi owner-operator va flotlar uchun 24/7 ELD monitoringi, haydovchi yordami, logbook assistance, DOT audit tayyorgarligi va IFTA xizmatlarini taqdim etadi.",
        "Jamoamiz elektron loglarni aniq yuritishga, HOS muammolarini erta aniqlashga, tekshiruv va audit hujjatlarini tayyorlashga hamda haydovchilarga ELD bo'yicha tezkor yordam berishga ko'maklashadi.",
        "Bitta truckdan katta flotgacha USA ELD kundalik operatsiyalar va compliance tayyorgarligi uchun amaliy yordam beradi.",
      ],
    },
    tr: {
      title: "USA ELD - Nakliye şirketleri için profesyonel ELD desteği",
      paragraphs: [
        "USA ELD, ABD ve Kanada'daki owner-operator ve filolar için 7/24 ELD izleme, sürücü desteği, logbook yardımı, DOT denetim hazırlığı ve IFTA desteği sunar.",
        "Ekibimiz elektronik kayıtların doğru tutulmasına, olası HOS sorunlarının erken fark edilmesine, denetim belgelerinin hazırlanmasına ve sürücülere ELD konusunda hızlı destek verilmesine yardımcı olur.",
        "Tek kamyondan büyüyen filolara kadar USA ELD günlük operasyonlar ve compliance hazırlığı için pratik destek sağlar.",
      ],
    },
  }

  const currentContent = content[language] || content.en

  const seoLinks = [
    { href: "/eld-service", label: "ELD Service" },
    { href: "/eld-support", label: "ELD Support" },
    { href: "/eld-monitoring", label: "ELD Monitoring" },
    { href: "/logbook-correction", label: "Logbook Correction" },
    { href: "/dot-audit-help", label: "DOT Audit Help" },
    { href: "/eld-compliance", label: "ELD Compliance" },
  ]

  return (
    <section className="border-t border-border/40 bg-card py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-xl font-bold text-foreground sm:mb-8 sm:text-2xl md:text-3xl">
          {currentContent.title}
        </h2>
        <div className="prose prose-sm prose-invert mx-auto max-w-none">
          {currentContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 sm:mt-10 sm:pt-8">
          <h3 className="mb-4 text-center text-sm font-semibold text-foreground sm:text-base">
            {language === "ru" ? "Наши услуги" : language === "kg" ? "Биздин кызматтар" : language === "uz" ? "Bizning xizmatlar" : language === "tr" ? "Hizmetlerimiz" : "Our Services"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border/50 bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:px-4 sm:py-2 sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
