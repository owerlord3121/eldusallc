"use client"

import {
  Zap,
  Eye,
  ShieldCheck,
  FileSpreadsheet,
  HeartPulse,
  Gift,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Zap,
      title: {
        en: "Fast Setup",
        ru: "Быстрая настройка",
        kg: "Тез орнотуу",
        uz: "Tez sozlash",
        tr: "Hizli Kurulum",
      },
      description: {
        en: "ELD system launch without delays. We'll set up everything for you.",
        ru: "Запуск ELD системы без задержек и сложностей. Подключим и настроим всё за вас.",
        kg: "ELD тутумун кечиктирбестен ишке киргизүү. Баарын биз орнотобуз.",
        uz: "ELD tizimini kechiktirishsiz ishga tushirish. Hammasini biz sozlaymiz.",
        tr: "ELD sistemini gecikme olmadan baslatin. Her seyi sizin icin ayarlayalim.",
      },
    },
    {
      icon: Eye,
      title: {
        en: "24/7 Monitoring",
        ru: "Мониторинг 24/7",
        kg: "24/7 Мониторинг",
        uz: "24/7 Monitoring",
        tr: "7/24 Izleme",
      },
      description: {
        en: "Round-the-clock logbook control, driver support, fixing violations before they become problems.",
        ru: "Круглосуточный контроль логбуков, поддержка водителей, исправление нарушений до того, как они станут проблемой.",
        kg: "Күнү-түнү логбук контролу, айдоочуларга колдоо, кeйгeйге айланганга чейин бузууларды оңдоо.",
        uz: "Kechayu kunduz logbuk nazorati, haydovchilarga yordam, muammoga aylanishidan oldin buzilishlarni tuzatish.",
        tr: "Gece gunduz logbuk kontrolu, surucu destegi, sorun haline gelmeden ihlalleri duzeltme.",
      },
    },
    {
      icon: ShieldCheck,
      title: {
        en: "DOT Compliance",
        ru: "DOT Compliance под ключ",
        kg: "DOT Compliance толук",
        uz: "DOT Compliance to'liq",
        tr: "Tam DOT Uyumlulugu",
      },
      description: {
        en: "DOT audit preparation. Full inspection support. 400+ successful audits passed. Dozens of audits closed without fines.",
        ru: "Подготовка к DOT аудиту. Полное сопровождение проверки. 400+ успешно пройденных проверок. Десятки закрытых аудитов без штрафов.",
        kg: "DOT аудитине даярдык. Текшерүүнү толук коштоо. 400+ ийгиликтүү ɵткɵн текшерүү.",
        uz: "DOT auditiga tayyorgarlik. Tekshiruvni to'liq qo'llab-quvvatlash. 400+ muvaffaqiyatli o'tilgan tekshiruv.",
        tr: "DOT denetim hazirligi. Tam denetim destegi. 400+ basarili gecilen denetim.",
      },
    },
    {
      icon: FileSpreadsheet,
      title: {
        en: "IFTA & Safety",
        ru: "IFTA & Safety",
        kg: "IFTA & Коопсуздук",
        uz: "IFTA & Xavfsizlik",
        tr: "IFTA & Guvenlik",
      },
      description: {
        en: "IFTA management, HOS control, violation handling, safety consulting.",
        ru: "Ведение IFTA, контроль HOS, работа с нарушениями, консалтинг по безопасности.",
        kg: "IFTA жүргүзүү, HOS контролу, бузуулар менен иштөө, коопсуздук консалтинги.",
        uz: "IFTA yuritish, HOS nazorati, buzilishlar bilan ishlash, xavfsizlik konsaltingi.",
        tr: "IFTA yonetimi, HOS kontrolu, ihlal isleme, guvenlik danismanligi.",
      },
    },
    {
      icon: HeartPulse,
      title: {
        en: "Driver Support",
        ru: "Поддержка водителей",
        kg: "Айдоочуларды колдоо",
        uz: "Haydovchilarni qo'llab-quvvatlash",
        tr: "Surucu Destegi",
      },
      description: {
        en: "Training drivers to use ELD properly. Help available 24/7.",
        ru: "Обучаем водителей правильному использованию ELD. Помогаем в любое время суток.",
        kg: "Айдоочуларды ELD туура колдонууга үйрөтөбүз. 24/7 жардам.",
        uz: "Haydovchilarga ELD dan to'g'ri foydalanishni o'rgatamiz. 24/7 yordam.",
        tr: "Suruculere ELD'yi dogru kullanmayi ogretiyoruz. 7/24 yardim.",
      },
    },
    {
      icon: Gift,
      title: {
        en: "Free Trial",
        ru: "Бесплатный пробный период",
        kg: "Бекер сыноо мезгили",
        uz: "Bepul sinov davri",
        tr: "Ucretsiz Deneme",
      },
      description: {
        en: "Test our service risk-free. See the quality before payment.",
        ru: "Протестируйте наш сервис без риска. Убедитесь в качестве до оплаты.",
        kg: "Биздин кызматты тобокелсиз сынаңыз. Төлөгөнгө чейин сапатын текшериңиз.",
        uz: "Bizning xizmatimizni xavfsiz sinab ko'ring. To'lashdan oldin sifatiga ishonch hosil qiling.",
        tr: "Hizmetimizi risksiz deneyin. Odemeden once kaliteyi gorun.",
      },
    },
  ]

  const whyChoose: Record<string, string> = {
    en: "ELD Monitoring 24/7",
    ru: "ELD Мониторинг 24/7",
    kg: "ELD Мониторинг 24/7",
    uz: "ELD Monitoring 24/7",
    tr: "7/24 ELD Izleme",
  }

  const subtitle: Record<string, string> = {
    en: "Full range of services for your peace of mind on the road",
    ru: "Полный спектр услуг для вашего спокойствия на дороге",
    kg: "Жолдогу тынчтыгыңыз үчүн кызматтардын толук спектри",
    uz: "Yo'ldagi tinchligingiz uchun to'liq xizmatlar spektri",
    tr: "Yoldaki huzurunuz icin eksiksiz hizmet yelpazesi",
  }

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
            {t("nav.services")}
          </p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            {whyChoose[language] || whyChoose.en}
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-xs text-muted-foreground leading-relaxed sm:text-sm">
            {subtitle[language] || subtitle.en}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title.en}
              className="group rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-primary/40 sm:p-5"
            >
              <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 sm:mb-3 sm:h-10 sm:w-10">
                <service.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground sm:mb-1.5 sm:text-base">
                {service.title[language as keyof typeof service.title] || service.title.en}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {service.description[language as keyof typeof service.description] || service.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
