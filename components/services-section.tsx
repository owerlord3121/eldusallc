"use client"

import { Zap, Eye, ShieldCheck, FileSpreadsheet, HeartPulse, Gift } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Zap,
      title: { en: "Fast Setup", ru: "Быстрая настройка", kg: "Тез орнотуу", uz: "Tez sozlash", tr: "Hizli Kurulum" },
      description: {
        en: "Get your ELD workflow configured quickly with setup assistance for your drivers and fleet.",
        ru: "Быстро запускаем ELD-процесс и помогаем настроить работу для водителей и флота.",
        kg: "ELD иш процессин тез ишке киргизип, айдоочулар жана флот үчүн орнотууга жардам беребиз.",
        uz: "ELD ish jarayonini tez ishga tushirib, haydovchilar va park uchun sozlashda yordam beramiz.",
        tr: "ELD is akisini hizli sekilde kurup suruculer ve filo icin yapilandirmaya yardimci oluruz.",
      },
    },
    {
      icon: Eye,
      title: { en: "24/7 Monitoring", ru: "Мониторинг 24/7", kg: "24/7 Мониторинг", uz: "24/7 Monitoring", tr: "7/24 Izleme" },
      description: {
        en: "Round-the-clock ELD and logbook monitoring, driver assistance, and early identification of compliance issues.",
        ru: "Круглосуточный мониторинг ELD и логбуков, помощь водителям и раннее выявление compliance-проблем.",
        kg: "ELD жана логбуктарды 24/7 көзөмөлдөө, айдоочуларга жардам жана compliance көйгөйлөрүн эрте аныктоо.",
        uz: "ELD va logbuklarni 24/7 kuzatish, haydovchilarga yordam va compliance muammolarini erta aniqlash.",
        tr: "ELD ve log kayitlarini 7/24 izleme, surucu destegi ve uyumluluk sorunlarini erken tespit etme.",
      },
    },
    {
      icon: ShieldCheck,
      title: { en: "DOT Compliance", ru: "DOT Compliance", kg: "DOT Compliance", uz: "DOT Compliance", tr: "DOT Uyumlulugu" },
      description: {
        en: "DOT inspection and audit preparation backed by experience from 400+ inspections and 30+ DOT audits.",
        ru: "Подготовка к DOT-инспекциям и аудитам с опытом сопровождения 400+ инспекций и 30+ DOT-аудитов.",
        kg: "400+ инспекция жана 30+ DOT аудит тажрыйбасына негизделген DOT текшерүүлөрүнө жана аудиттерине даярдык.",
        uz: "400+ inspeksiya va 30+ DOT audit tajribasiga tayangan holda DOT tekshiruvlari va auditlariga tayyorgarlik.",
        tr: "400+ inceleme ve 30+ DOT denetimi deneyimine dayali DOT inceleme ve denetim hazirligi.",
      },
    },
    {
      icon: FileSpreadsheet,
      title: { en: "IFTA & Safety", ru: "IFTA & Safety", kg: "IFTA & Коопсуздук", uz: "IFTA & Xavfsizlik", tr: "IFTA & Guvenlik" },
      description: {
        en: "IFTA reporting support, HOS workflow review, violation follow-up, and practical safety guidance.",
        ru: "Поддержка IFTA-отчётности, контроль HOS-процессов, работа с нарушениями и практические рекомендации по safety.",
        kg: "IFTA отчетторуна жардам, HOS процессин көзөмөлдөө, бузуулар менен иштөө жана коопсуздук боюнча кеңештер.",
        uz: "IFTA hisobotlariga yordam, HOS jarayonini nazorat qilish, buzilishlar bilan ishlash va xavfsizlik bo'yicha tavsiyalar.",
        tr: "IFTA raporlama destegi, HOS sureci takibi, ihlal takibi ve pratik guvenlik destegi.",
      },
    },
    {
      icon: HeartPulse,
      title: { en: "Driver Support", ru: "Поддержка водителей", kg: "Айдоочуларды колдоо", uz: "Haydovchilarni qo'llab-quvvatlash", tr: "Surucu Destegi" },
      description: {
        en: "Help drivers understand ELD workflows, resolve common device or sync issues, and prepare for inspections.",
        ru: "Помогаем водителям работать с ELD, решать типовые проблемы устройства или синхронизации и готовиться к инспекциям.",
        kg: "Айдоочуларга ELD менен иштөөгө, түзмөк же синхрондоштуруу көйгөйлөрүн чечүүгө жана инспекцияга даярданууга жардам беребиз.",
        uz: "Haydovchilarga ELD bilan ishlash, qurilma yoki sinxronlash muammolarini hal qilish va inspeksiyaga tayyorlanishda yordam beramiz.",
        tr: "Suruculere ELD is akisini anlama, cihaz veya senkronizasyon sorunlarini cozme ve denetime hazirlanma konusunda yardim ederiz.",
      },
    },
    {
      icon: Gift,
      title: { en: "Free Trial", ru: "Бесплатный пробный период", kg: "Бекер сыноо мезгили", uz: "Bepul sinov davri", tr: "Ucretsiz Deneme" },
      description: {
        en: "Try the service before committing and see how the support workflow fits your operation.",
        ru: "Попробуйте сервис до подключения на постоянной основе и оцените, подходит ли наш процесс вашей компании.",
        kg: "Туруктуу кошулардан мурун кызматты сынап, иш процессиңизге ылайыктуубу баалаңыз.",
        uz: "Doimiy ulanishdan oldin xizmatni sinab ko'ring va ish jarayoningizga mosligini baholang.",
        tr: "Kalici olarak baslamadan once hizmeti deneyin ve operasyonunuza uygunlugunu gorun.",
      },
    },
  ]

  const title: Record<string, string> = {
    en: "ELD Monitoring 24/7",
    ru: "ELD Мониторинг 24/7",
    kg: "ELD Мониторинг 24/7",
    uz: "ELD Monitoring 24/7",
    tr: "7/24 ELD Izleme",
  }

  const subtitle: Record<string, string> = {
    en: "Practical ELD and compliance support for drivers, owner-operators, and fleets",
    ru: "Практическая ELD и compliance-поддержка для водителей, owner-operators и флотов",
    kg: "Айдоочулар, owner-operator жана флоттор үчүн ELD жана compliance колдоосу",
    uz: "Haydovchilar, owner-operatorlar va parklar uchun ELD va compliance yordami",
    tr: "Suruculer, owner-operatorlar ve filolar icin ELD ve uyumluluk destegi",
  }

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">{t("nav.services")}</p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">{title[language] || title.en}</h2>
          <p className="mx-auto max-w-xl text-pretty text-xs text-muted-foreground leading-relaxed sm:text-sm">{subtitle[language] || subtitle.en}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title.en} className="group rounded-2xl border border-primary/10 bg-card/85 p-4 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 sm:p-5">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 sm:mb-3"><service.icon className="h-4 w-4 text-accent sm:h-5 sm:w-5" /></div>
              <h3 className="mb-1 text-sm font-semibold text-foreground sm:mb-1.5 sm:text-base">{service.title[language as keyof typeof service.title] || service.title.en}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{service.description[language as keyof typeof service.description] || service.description.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
