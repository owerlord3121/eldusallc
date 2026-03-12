"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function SEOContentSection() {
  const { language } = useLanguage()

  const content: Record<string, { title: string; paragraphs: string[] }> = {
    en: {
      title: "ELD Service USA - Professional ELD Support for Trucking Companies",
      paragraphs: [
        "Welcome to NextLog FullService, the leading ELD service provider in the United States. We specialize in comprehensive ELD monitoring, logbook correction, DOT audit preparation, and full ELD compliance support for trucking companies of all sizes. Our professional team provides 24/7 ELD support to ensure your fleet stays compliant with all federal regulations.",
        "Our ELD service USA covers everything you need for successful trucking operations. We understand that ELD compliance is not just about having the right equipment – it's about having expert support available whenever you need it. That's why our ELD monitoring service operates around the clock, helping drivers and fleet managers maintain accurate electronic logs and avoid costly violations.",
        "Logbook correction is one of our core services. Many drivers struggle with properly filling out their electronic logs, leading to errors that can result in fines during DOT inspections. Our experienced team reviews your logbooks daily, identifies potential issues, and helps correct them before they become problems. This proactive approach to ELD support has helped our clients pass over 400 inspections and more than 30 DOT audits successfully.",
        "DOT audit preparation is critical for any trucking company. When you receive notice of an audit, the stress can be overwhelming. Our DOT audit help service takes that burden off your shoulders. We prepare all necessary documentation, review your compliance history, identify any gaps, and guide you through the entire audit process. Our track record speaks for itself – companies that use our ELD service consistently pass their DOT audits.",
        "ELD compliance is not optional – it's required by federal law for most commercial motor vehicles. Our ELD compliance support ensures that your company meets all FMCSA requirements. We stay up-to-date with the latest regulations and communicate any changes that might affect your operations. From Hours of Service (HOS) rules to electronic logging device specifications, we've got you covered.",
        "Beyond basic ELD monitoring, we offer IFTA reporting services, driver training support, and fleet management assistance. Our goal is to be your complete trucking compliance partner. Whether you operate 1 truck or 300, our flexible pricing makes professional ELD service accessible to every carrier. We support drivers in multiple languages including English, Russian, Turkish, Uzbek, and Kyrgyz.",
        "Choose NextLog FullService for reliable ELD service USA. Contact us today to learn how our ELD support can help your trucking business thrive while staying fully compliant with all DOT regulations.",
      ],
    },
    ru: {
      title: "ELD Сервис США - Профессиональная поддержка ELD для транспортных компаний",
      paragraphs: [
        "Добро пожаловать в NextLog FullService, ведущего поставщика ELD услуг в США. Мы специализируемся на комплексном мониторинге ELD, коррекции логбуков, подготовке к DOT аудитам и полной поддержке соответствия ELD для транспортных компаний любого размера. Наша профессиональная команда обеспечивает поддержку ELD 24/7, чтобы ваш автопарк соответствовал всем федеральным нормам.",
        "Наш ELD сервис в США охватывает все, что вам нужно для успешных грузоперевозок. Мы понимаем, что соответствие ELD - это не только правильное оборудование, но и экспертная поддержка в любое время. Поэтому наш сервис мониторинга ELD работает круглосуточно, помогая водителям и менеджерам автопарков вести точные электронные журналы и избегать дорогостоящих нарушений.",
        "Коррекция логбуков - одна из наших основных услуг. Многие водители испытывают трудности с правильным заполнением электронных журналов, что приводит к ошибкам и штрафам при инспекциях DOT. Наша опытная команда ежедневно проверяет ваши логбуки, выявляет потенциальные проблемы и помогает исправить их до того, как они станут проблемой.",
        "Подготовка к DOT аудиту критически важна для любой транспортной компании. Когда вы получаете уведомление об аудите, стресс может быть огромным. Наша услуга помощи с DOT аудитом снимает это бремя с ваших плеч. Мы готовим всю необходимую документацию, проверяем историю соответствия, выявляем пробелы и проводим вас через весь процесс аудита.",
        "Соответствие ELD не опционально - это требование федерального закона для большинства коммерческих транспортных средств. Наша поддержка соответствия ELD гарантирует, что ваша компания соответствует всем требованиям FMCSA. Мы следим за последними нормативами и сообщаем о любых изменениях, которые могут повлиять на вашу деятельность.",
        "Помимо базового мониторинга ELD, мы предлагаем услуги отчетности IFTA, поддержку обучения водителей и помощь в управлении автопарком. Наша цель - быть вашим комплексным партнером по соответствию. Независимо от того, управляете ли вы 1 грузовиком или 300, наши гибкие цены делают профессиональный ELD сервис доступным для каждого перевозчика.",
        "Выберите NextLog FullService для надежного ELD сервиса в США. Свяжитесь с нами сегодня, чтобы узнать, как наша поддержка ELD может помочь вашему бизнесу процветать, оставаясь в полном соответствии со всеми правилами DOT.",
      ],
    },
    kg: {
      title: "ELD Сервис АКШ - Транспорттук компаниялар үчүн профессионалдуу ELD колдоосу",
      paragraphs: [
        "NextLog FullService компаниясына кош келиңиз - АКШдагы алдыңкы ELD кызмат көрсөтүүчү. Биз ар кандай өлчөмдөгү транспорттук компаниялар үчүн комплекстүү ELD мониторинги, логбукту оңдоо, DOT аудитине даярдоо жана толук ELD шайкештик колдоосу боюнча адистешкенбиз.",
        "Биздин АКШдагы ELD кызматы ийгиликтүү жүк ташуу операциялары үчүн керектүү нерселердин баарын камтыйт. Биз ELD шайкештиги - бул жөн гана туура жабдуулар эмес, ал сизге керек болгондо эксперттик колдоо экенин түшүнөбүз.",
        "Логбукту оңдоо биздин негизги кызматтарыбыздын бири. Көптөгөн айдоочулар электрондук журналдарын туура толтурууда кыйынчылыктарга туш болушат, бул DOT текшерүүлөрүндө айыптык санкцияларга алып келет. Биздин тажрыйбалуу команда сиздин логбуктарыңызды күн сайын текшерет.",
        "DOT аудитине даярдануу ар бир транспорттук компания үчүн маанилүү. Аудит тууралуу билдирүү алганда стресс өтө чоң болушу мүмкүн. Биздин DOT аудити боюнча жардам кызматы бул жүктү сиздин ийниңизден алып салат.",
        "ELD шайкештиги милдеттүү - бул көпчүлүк коммерциялык автоунаалар үчүн федералдык мыйзам талабы. Биздин ELD шайкештик колдоосу сиздин компанияңыз бардык FMCSA талаптарына жооп берерин камсыздайт.",
        "Негизги ELD мониторингинен тышкары, биз IFTA отчеттуулугу кызматтарын, айдоочуларды окутууну колдоо жана автопаркту башкарууда жардам сунуштайбыз. Биздин максат - сиздин толук транспорттук шайкештик өнөктөшүңүз болуу.",
        "Ишенимдүү АКШ ELD кызматы үчүн NextLog FullService тандаңыз. Бүгүн биз менен байланышыңыз.",
      ],
    },
    uz: {
      title: "ELD Xizmati AQSh - Transport kompaniyalari uchun professional ELD qo'llab-quvvatlash",
      paragraphs: [
        "NextLog FullService-ga xush kelibsiz - AQShdagi yetakchi ELD xizmat ko'rsatuvchi. Biz har qanday o'lchamdagi transport kompaniyalari uchun kompleks ELD monitoringi, logbook tuzatish, DOT auditiga tayyorgarlik va to'liq ELD muvofiqlik qo'llab-quvvatlash bo'yicha ixtisoslashganmiz.",
        "Bizning AQShdagi ELD xizmatimiz muvaffaqiyatli yuk tashish operatsiyalari uchun kerak bo'lgan hamma narsani qamrab oladi. Biz ELD muvofiqligini tushunimiz - bu faqat to'g'ri uskunalar emas, balki sizga kerak bo'lganda ekspert yordami ham.",
        "Logbook tuzatish bizning asosiy xizmatlarimizdan biridir. Ko'plab haydovchilar elektron jurnallarini to'g'ri to'ldirishda qiyinchiliklarga duch kelishadi, bu DOT tekshiruvlarida jarimalar keltirib chiqaradi.",
        "DOT auditiga tayyorgarlik har qanday transport kompaniyasi uchun muhim. Audit haqida xabar olganingizda stress juda katta bo'lishi mumkin. Bizning DOT audit yordami xizmati bu yukni yelkangizdan olib tashlaydi.",
        "ELD muvofiqligini ta'minlash ixtiyoriy emas - bu aksariyat tijorat avtomobillari uchun federal qonun talabi. Bizning ELD muvofiqlik qo'llab-quvvatlashimiz kompaniyangiz barcha FMCSA talablariga javob berishini ta'minlaydi.",
        "Asosiy ELD monitoringidan tashqari, biz IFTA hisoboti xizmatlarini, haydovchilarni o'qitishni qo'llab-quvvatlash va avtopark boshqaruvida yordam taklif qilamiz. Bizning maqsadimiz - sizning to'liq transport muvofiqlik hamkoringiz bo'lish.",
        "Ishonchli AQSh ELD xizmati uchun NextLog FullService-ni tanlang. Bugun biz bilan bog'laning.",
      ],
    },
    tr: {
      title: "ELD Hizmeti ABD - Nakliye Sirketleri icin Profesyonel ELD Destegi",
      paragraphs: [
        "ABD'nin onde gelen ELD hizmet saglayicisi NextLog FullService'e hos geldiniz. Her buyuklukteki nakliye sirketi icin kapsamli ELD izleme, log defteri duzeltme, DOT denetim hazirligi ve tam ELD uyumluluk destegi konusunda uzmaniz.",
        "ABD'deki ELD hizmetimiz basarili nakliye operasyonlari icin ihtiyaciniz olan her seyi kapsar. ELD uyumlulugu sadece dogru ekipmana sahip olmak degil, ihtiyaciniz oldugunda uzman destegine sahip olmaktir.",
        "Log defteri duzeltme temel hizmetlerimizden biridir. Bircok surucu elektronik gunluklerini dogru bir sekilde doldurmakta zorlanir ve bu da DOT denetimlerinde para cezalarina yol acar. Deneyimli ekibimiz her gun log defterlerinizi inceler.",
        "DOT denetim hazirligi her nakliye sirketi icin kritik oneme sahiptir. Bir denetim bildirimi aldiginizda stres bunaltici olabilir. DOT denetim yardimi hizmetimiz bu yuku omuzlarinizdan alir.",
        "ELD uyumlulugu istege bagli degildir - cogu ticari motorlu arac icin federal yasa gerekliligidir. ELD uyumluluk destegimiz sirketinizin tum FMCSA gereksinimlerini karsilamasini saglar.",
        "Temel ELD izlemenin otesinde, IFTA raporlama hizmetleri, surucu egitim destegi ve filo yonetim yardimi sunuyoruz. Amacimiz tam nakliye uyumluluk ortaginiz olmaktir.",
        "Guvenilir ABD ELD hizmeti icin NextLog FullService'i secin. ELD destegimizin nakliye isinizin gelismesine nasil yardimci olabilecegini ogrenmek icin bugun bizimle iletisime gecin.",
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
