import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock3, Globe2, Headphones, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export type SeoLocale = "ru" | "tr" | "uz" | "ky"

type Copy = {
  path: string
  lang: string
  eyebrow: string
  title: string
  subtitle: string
  servicesTitle: string
  servicesIntro: string
  services: Array<{ title: string; text: string }>
  pricingEyebrow: string
  pricingTitle: string
  pricingText: string
  perTruck: string
  custom: string
  whyTitle: string
  whyItems: string[]
  resourcesTitle: string
  resourceService: string
  resourceMonitoring: string
  resourcePricing: string
  resourceGuides: string
  contactTitle: string
  contactText: string
  contactButton: string
}

const copies: Record<SeoLocale, Copy> = {
  ru: {
    path: "/ru",
    lang: "ru",
    eyebrow: "ELD-сервис в США",
    title: "ELD-мониторинг и поддержка для траковых компаний",
    subtitle: "USA ELD помогает owner-operators и автопаркам с круглосуточным мониторингом ELD, поддержкой водителей, логбуками, подготовкой к DOT-проверкам и IFTA.",
    servicesTitle: "Поддержка ELD 24/7 для вашего флота",
    servicesIntro: "Мы берём на себя ежедневные ELD-задачи, чтобы диспетчеры, safety-менеджеры и водители быстрее решали проблемы и лучше готовились к проверкам.",
    services: [
      { title: "Мониторинг ELD 24/7", text: "Наблюдение за логами и рабочими ELD-событиями с оперативным реагированием на проблемы." },
      { title: "Поддержка водителей", text: "Помощь водителям по вопросам ELD, синхронизации, логбуков и подготовки к roadside inspection." },
      { title: "DOT и compliance", text: "Подготовка записей и рабочих процессов к инспекциям, аудитам и требованиям HOS." },
      { title: "IFTA и отчётность", text: "Поддержка по IFTA и связанным операционным отчётам для trucking-компаний." },
    ],
    pricingEyebrow: "Прозрачные цены",
    pricingTitle: "ELD + Full Service от $125 за трак",
    pricingText: "Стоимость снижается для более крупных флотов. В тариф входит не только ELD, но и постоянная поддержка команды.",
    perTruck: "за трак / месяц",
    custom: "Индивидуально",
    whyTitle: "Почему компании выбирают USA ELD",
    whyItems: ["Поддержка 24/7", "5 языков для водителей", "Работа с owner-operators и флотами", "Фокус на ELD, HOS и compliance", "Поддержка по инспекциям и DOT-аудитам", "США и Канада"],
    resourcesTitle: "Полезные разделы",
    resourceService: "ELD-сервис",
    resourceMonitoring: "ELD-мониторинг",
    resourcePricing: "Цены",
    resourceGuides: "Гайды и инструменты",
    contactTitle: "Нужна поддержка для вашего флота?",
    contactText: "Напишите нам количество траков и какие задачи по ELD или compliance хотите закрыть.",
    contactButton: "Связаться с USA ELD",
  },
  tr: {
    path: "/tr",
    lang: "tr",
    eyebrow: "ABD için ELD hizmeti",
    title: "Kamyon filoları için 7/24 ELD izleme ve destek",
    subtitle: "USA ELD; owner-operator ve filolara ELD izleme, sürücü desteği, logbook yardımı, DOT denetim hazırlığı ve IFTA süreçlerinde destek sağlar.",
    servicesTitle: "Filonuz için 7/24 ELD desteği",
    servicesIntro: "Günlük ELD iş akışlarını takip ederek sürücülerin, dispatch ve safety ekiplerinin sorunları daha hızlı çözmesine yardımcı oluyoruz.",
    services: [
      { title: "7/24 ELD izleme", text: "Elektronik logların ve önemli ELD olaylarının sürekli takibi ve sorunlarda hızlı aksiyon." },
      { title: "Sürücü desteği", text: "ELD kullanımı, senkronizasyon, logbook ve roadside inspection hazırlığı konusunda yardım." },
      { title: "DOT ve compliance", text: "HOS iş akışları, denetimler ve DOT audit hazırlığı için operasyonel destek." },
      { title: "IFTA desteği", text: "Taşımacılık şirketleri için IFTA ve ilgili raporlama süreçlerinde destek." },
    ],
    pricingEyebrow: "Şeffaf fiyatlandırma",
    pricingTitle: "ELD + Full Service kamyon başına $125'dan başlar",
    pricingText: "Filo büyüdükçe kamyon başına fiyat düşer. Paket yalnızca ELD erişimini değil, sürekli ekip desteğini de içerir.",
    perTruck: "kamyon / ay",
    custom: "Özel teklif",
    whyTitle: "Neden USA ELD?",
    whyItems: ["7/24 destek", "5 dilde sürücü desteği", "Owner-operator ve filolar için", "ELD, HOS ve compliance odağı", "Denetim ve DOT audit desteği", "ABD ve Kanada kapsamı"],
    resourcesTitle: "Faydalı bağlantılar",
    resourceService: "ELD hizmeti",
    resourceMonitoring: "ELD izleme",
    resourcePricing: "Fiyatlandırma",
    resourceGuides: "Rehberler ve araçlar",
    contactTitle: "Filonuz için ELD desteğine mi ihtiyacınız var?",
    contactText: "Kamyon sayınızı ve çözmek istediğiniz ELD veya compliance ihtiyaçlarını bize iletin.",
    contactButton: "USA ELD ile iletişime geç",
  },
  uz: {
    path: "/uz",
    lang: "uz",
    eyebrow: "AQSh uchun ELD xizmati",
    title: "Yuk tashish kompaniyalari uchun 24/7 ELD monitoring va yordam",
    subtitle: "USA ELD owner-operator va flotlarga ELD monitoringi, haydovchi yordami, logbook, DOT tekshiruviga tayyorgarlik va IFTA jarayonlarida yordam beradi.",
    servicesTitle: "Flotingiz uchun 24/7 ELD yordami",
    servicesIntro: "Kundalik ELD jarayonlarini kuzatib, haydovchilar, dispatch va safety jamoalariga muammolarni tezroq hal qilishga yordam beramiz.",
    services: [
      { title: "24/7 ELD monitoring", text: "Elektron loglar va muhim ELD holatlarini doimiy kuzatish va muammo bo'lsa tezkor yordam." },
      { title: "Haydovchi yordami", text: "ELD ishlatish, sinxronizatsiya, logbook va roadside inspection tayyorgarligi bo'yicha yordam." },
      { title: "DOT va compliance", text: "HOS jarayonlari, tekshiruvlar va DOT auditga tayyorgarlik bo'yicha amaliy yordam." },
      { title: "IFTA yordami", text: "Trucking kompaniyalari uchun IFTA va tegishli hisobot jarayonlarini qo'llab-quvvatlash." },
    ],
    pricingEyebrow: "Tushunarli narxlar",
    pricingTitle: "ELD + Full Service har bir truck uchun $125 dan",
    pricingText: "Flot kattalashgani sari har bir truck uchun narx pasayadi. Paket ELD bilan birga doimiy jamoa yordamini ham o'z ichiga oladi.",
    perTruck: "truck / oy",
    custom: "Maxsus narx",
    whyTitle: "Nega USA ELD?",
    whyItems: ["24/7 yordam", "Haydovchilar uchun 5 til", "Owner-operator va flotlar uchun", "ELD, HOS va compliance yo'nalishi", "Inspection va DOT audit yordami", "AQSh va Kanada"],
    resourcesTitle: "Foydali bo'limlar",
    resourceService: "ELD xizmati",
    resourceMonitoring: "ELD monitoring",
    resourcePricing: "Narxlar",
    resourceGuides: "Qo'llanmalar va vositalar",
    contactTitle: "Flotingiz uchun ELD yordami kerakmi?",
    contactText: "Trucklar sonini va qaysi ELD yoki compliance vazifalarini hal qilmoqchi ekaningizni yozing.",
    contactButton: "USA ELD bilan bog'lanish",
  },
  ky: {
    path: "/ky",
    lang: "ky",
    eyebrow: "АКШ үчүн ELD кызматы",
    title: "Трак компаниялар үчүн 24/7 ELD мониторинг жана колдоо",
    subtitle: "USA ELD owner-operator жана флотторго ELD мониторинги, айдоочуларды колдоо, логбук, DOT текшерүүсүнө даярдык жана IFTA боюнча жардам көрсөтөт.",
    servicesTitle: "Флотуңуз үчүн 24/7 ELD колдоосу",
    servicesIntro: "Күнүмдүк ELD процесстерин көзөмөлдөп, айдоочуларга, dispatch жана safety командаларына көйгөйлөрдү тезирээк чечүүгө жардам беребиз.",
    services: [
      { title: "24/7 ELD мониторинг", text: "Электрондук логдорду жана маанилүү ELD окуяларын туруктуу көзөмөлдөө жана көйгөй чыкканда ыкчам жардам." },
      { title: "Айдоочуларды колдоо", text: "ELD колдонуу, синхрондоштуруу, логбук жана roadside inspection даярдыгы боюнча жардам." },
      { title: "DOT жана compliance", text: "HOS процесстери, текшерүүлөр жана DOT аудитине даярдык боюнча практикалык колдоо." },
      { title: "IFTA колдоосу", text: "Trucking компаниялар үчүн IFTA жана тиешелүү отчет процесстери боюнча жардам." },
    ],
    pricingEyebrow: "Түшүнүктүү баалар",
    pricingTitle: "ELD + Full Service ар бир трак үчүн $125дан",
    pricingText: "Флот чоңойгон сайын бир тракка болгон баа төмөндөйт. Пакет ELD менен кошо команданын туруктуу колдоосун камтыйт.",
    perTruck: "трак / ай",
    custom: "Жеке баа",
    whyTitle: "Эмне үчүн USA ELD?",
    whyItems: ["24/7 колдоо", "Айдоочулар үчүн 5 тил", "Owner-operator жана флоттор үчүн", "ELD, HOS жана compliance багыты", "Inspection жана DOT аудит колдоосу", "АКШ жана Канада"],
    resourcesTitle: "Пайдалуу бөлүмдөр",
    resourceService: "ELD кызматы",
    resourceMonitoring: "ELD мониторинг",
    resourcePricing: "Баалар",
    resourceGuides: "Гайддар жана инструменттер",
    contactTitle: "Флотуңузга ELD колдоосу керекпи?",
    contactText: "Трактардын санын жана кайсы ELD же compliance маселелерин чечкиңиз келгенин жазыңыз.",
    contactButton: "USA ELD менен байланышуу",
  },
}

const icons = [Clock3, Headphones, ShieldCheck, Globe2]

export function LocalizedSeoLanding({ locale }: { locale: SeoLocale }) {
  const copy = copies[locale]
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `USA ELD - ${copy.title}`,
    url: `https://eldusallc.com${copy.path}`,
    inLanguage: copy.lang,
    provider: { "@id": "https://eldusallc.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    serviceType: "ELD monitoring and trucking compliance support",
  }

  return (
    <main lang={copy.lang} className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] max-w-5xl bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_65%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{copy.eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{copy.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-lg">{copy.subtitle}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">{copy.contactButton}<ArrowRight className="h-4 w-4" /></Link>
            <Link href="/eld-pricing" className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40">{copy.resourcePricing}</Link>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 text-xs text-muted-foreground sm:grid-cols-4">
            {["24/7", "5 languages", "USA + Canada", "1–100+ trucks"].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card/60 px-3 py-3">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-card/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><h2 className="text-2xl font-bold text-foreground sm:text-3xl">{copy.servicesTitle}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{copy.servicesIntro}</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.services.map((service, index) => {
              const Icon = icons[index]
              return <div key={service.title} className="rounded-2xl border border-border/50 bg-background/70 p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div><h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p></div>
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{copy.pricingEyebrow}</p><h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{copy.pricingTitle}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{copy.pricingText}</p><Link href="/eld-pricing" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">{copy.resourcePricing}<ArrowRight className="h-4 w-4" /></Link></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[{size:"1–20",price:"$125"},{size:"21–40",price:"$115"},{size:"41–100",price:"$100"},{size:"101+",price:copy.custom}].map((plan) => <div key={plan.size} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex items-center gap-2 text-sm font-medium text-foreground"><Truck className="h-4 w-4 text-primary" />{plan.size} trucks</div><div className="mt-3 text-2xl font-bold text-foreground">{plan.price}</div>{plan.price.startsWith("$") && <div className="mt-1 text-xs text-muted-foreground">{copy.perTruck}</div>}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-card/40 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><h2 className="text-2xl font-bold text-foreground sm:text-3xl">{copy.whyTitle}</h2><div className="mt-6 grid gap-3">{copy.whyItems.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div></div>
          <div><h2 className="text-2xl font-bold text-foreground sm:text-3xl">{copy.resourcesTitle}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2"><LinkCard href="/eld-service" label={copy.resourceService} /><LinkCard href="/eld-monitoring" label={copy.resourceMonitoring} /><LinkCard href="/eld-pricing" label={copy.resourcePricing} /><LinkCard href="/blog" label={copy.resourceGuides} /></div></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-foreground sm:text-4xl">{copy.contactTitle}</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{copy.contactText}</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white">{copy.contactButton}<ArrowRight className="h-4 w-4" /></Link><a href="tel:+18155506576" className="inline-flex items-center justify-center rounded-xl border border-border/70 px-6 py-3 text-sm font-semibold text-foreground">(815) 550-6576</a></div></div>
      </section>

      <Footer />
    </main>
  )
}

function LinkCard({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="group flex items-center justify-between rounded-xl border border-border/50 bg-background/70 px-4 py-4 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"><span>{label}</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
}
