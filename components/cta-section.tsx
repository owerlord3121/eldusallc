"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "Your ELD operation should be easier to run",
    ru: "Управлять ELD должно быть проще",
    kg: "ELD ишин башкаруу жеңил болушу керек",
    uz: "ELD ishini boshqarish oson bo'lishi kerak",
    tr: "ELD operasyonunu yönetmek daha kolay olmalı",
  }
  const subtitle: Record<string, string> = {
    en: "Tell us how many trucks you operate. We will show you a practical setup for monitoring, driver support and compliance.",
    ru: "Скажите, сколько у вас траков. Мы покажем практичную схему мониторинга, поддержки водителей и compliance.",
    kg: "Канча трак бар экенин айтыңыз. Мониторинг, айдоочу колдоо жана compliance үчүн ылайыктуу схеманы көрсөтөбүз.",
    uz: "Nechta truck ishlatishingizni ayting. Monitoring, haydovchi yordami va compliance uchun amaliy yechim ko'rsatamiz.",
    tr: "Kaç kamyon işlettiğinizi söyleyin. İzleme, sürücü desteği ve compliance için pratik bir yapı gösterelim.",
  }
  const cta: Record<string, string> = {
    en: "Get a free consultation", ru: "Получить консультацию", kg: "Бекер консультация алуу", uz: "Bepul maslahat olish", tr: "Ücretsiz danışmanlık alın",
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.08] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><CheckCircle2 className="h-3.5 w-3.5" />Free fleet review</div>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">{title[language] || title.en}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{subtitle[language] || subtitle.en}</p>
            </div>
            <Button size="lg" className="h-12 rounded-xl bg-white px-6 text-[#07111f] hover:bg-white/90" asChild>
              <a href="#contact">{cta[language] || cta.en}<ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
