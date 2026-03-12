"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "Put your electronic logbooks under professional control",
    ru: "Поставьте электронные логбуки под профессиональный контроль",
    kg: "Электрондук логбуктарыңызды профессионалдуу контролго коюңуз",
    uz: "Elektron logbuklaringizni professional nazorat ostiga qo'ying",
    tr: "Elektronik logbuklarinizi profesyonel kontrol altina alin",
  }

  const subtitle: Record<string, string> = {
    en: "Stop losing money on mistakes and fines. Contact us today and get a free consultation.",
    ru: "Перестаньте терять деньги на ошибках и штрафах. Свяжитесь с нами сегодня и получите консультацию бесплатно.",
    kg: "Каталарга жана айыптарга акча жоготууну токтотуңуз. Бүгүн биз менен байланышыңыз жана бекер консультация алыңыз.",
    uz: "Xatoliklar va jarimalardan pul yo'qotishni to'xtating. Bugun biz bilan bog'laning va bepul maslahat oling.",
    tr: "Hatalar ve cezalardan para kaybetmeyi birakin. Bugun bizimle iletisime gecin ve ucretsiz danismanlik alin.",
  }

  const cta: Record<string, string> = {
    en: "Get Consultation",
    ru: "Получить консультацию",
    kg: "Консультация алуу",
    uz: "Maslahat olish",
    tr: "Danismanlik Al",
  }

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center sm:p-8 lg:p-12">
          <h2 className="mb-2 text-balance text-lg font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            {title[language] || title.en}
          </h2>
          <p className="mx-auto mb-5 max-w-xl text-pretty text-xs text-muted-foreground leading-relaxed sm:mb-6 sm:text-base">
            {subtitle[language] || subtitle.en}
          </p>
          <Button
            size="lg"
            className="w-full gap-2 bg-primary px-8 text-sm text-primary-foreground hover:bg-primary/90 sm:w-auto sm:text-base"
            asChild
          >
            <a href="#contact">
              {cta[language] || cta.en}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
