"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "Logbook Correction & ELD Compliance Support",
    ru: "Коррекция логбуков и поддержка ELD Compliance",
    kg: "Логбук оңдоо & ELD Compliance колдоо",
    uz: "Logbuk tuzatish & ELD Compliance qo'llab-quvvatlash",
    tr: "Logbuk Duzeltme & ELD Uyumluluk Destegi",
  }

  const faqs = [
    {
      question: {
        en: "How quickly can I get started?",
        ru: "Как быстро можно подключиться?",
        kg: "Канчалык тез баштаса болот?",
        uz: "Qanchalik tez boshlash mumkin?",
        tr: "Ne kadar hizli baslanabilir?",
      },
      answer: {
        en: "ELD system setup takes minimal time. We handle all the technical aspects: device configuration, driver account setup, and training. Most clients start working within 24 hours.",
        ru: "Настройка ELD системы занимает минимальное время. Мы берём на себя всю техническую часть: конфигурацию устройства, настройку аккаунтов водителей и обучение. Большинство клиентов начинают работать в течение 24 часов.",
        kg: "ELD тутумун орнотуу минималдуу убакытты талап кылат. Биз бардык техникалык тарапты өзүбүз алабыз. Көпчүлүк кардарлар 24 саат ичинде иштей баштайт.",
        uz: "ELD tizimini sozlash minimal vaqt oladi. Biz barcha texnik ishlarni o'zimiz qilamiz. Ko'pchilik mijozlar 24 soat ichida ishlashni boshlaydi.",
        tr: "ELD sistem kurulumu minimum zaman alir. Tum teknik islemleri biz hallediyoruz. Cogu musteri 24 saat icinde calismaya baslar.",
      },
    },
    {
      question: {
        en: "What makes your service different from others?",
        ru: "Чем ваш сервис отличается от других?",
        kg: "Сиздин кызмат башкалардан эмнеси менен айырмаланат?",
        uz: "Sizning xizmatingiz boshqalardan nimasi bilan farq qiladi?",
        tr: "Hizmetinizi digerlerinden farkli kilan ne?",
      },
      answer: {
        en: "We don't just sell ELD. We provide full support: 24/7 logbook monitoring, error correction, DOT audit preparation, and IFTA management. Our team works for you around the clock.",
        ru: "Мы не просто продаём ELD. Мы обеспечиваем полное сопровождение: круглосуточный мониторинг логбуков, исправление ошибок, подготовку к DOT аудитам и ведение IFTA. Наша команда работает на вас 24/7.",
        kg: "Биз жөн гана ELD сатпайбыз. Толук колдоону камсыз кылабыз: 24/7 логбук мониторинги, каталарды оңдоо, DOT аудитке даярдык жана IFTA жүргүзүү.",
        uz: "Biz faqat ELD sotmaymiz. To'liq qo'llab-quvvatlashni ta'minlaymiz: 24/7 logbuk monitoringi, xatolarni tuzatish, DOT auditga tayyorgarlik va IFTA yuritish.",
        tr: "Sadece ELD satmiyoruz. Tam destek sagliyoruz: 7/24 logbuk izleme, hata duzeltme, DOT denetim hazirligi ve IFTA yonetimi.",
      },
    },
    {
      question: {
        en: "How does DOT audit preparation work?",
        ru: "Как проходит подготовка к DOT аудиту?",
        kg: "DOT аудитке даярдык кандай өтөт?",
        uz: "DOT auditga tayyorgarlik qanday o'tadi?",
        tr: "DOT denetim hazirligi nasil oluyor?",
      },
      answer: {
        en: "We review all logbooks, fix violations in advance, prepare documentation, and support you during the inspection. We have over 400 successful inspections without fines.",
        ru: "Мы проверяем все логбуки, исправляем нарушения заранее, готовим документацию и сопровождаем вас во время проверки. У нас более 400 успешно пройденных проверок без штрафов.",
        kg: "Биз бардык логбуктарды текшеребиз, бузууларды алдын ала оңдойбуз, документтерди даярдайбыз жана текшерүү учурунда сизди коштойбуз. Бизде 400+ ийгиликтүү текшерүү бар.",
        uz: "Biz barcha logbuklarni tekshiramiz, buzilishlarni oldindan tuzatamiz, hujjatlarni tayyorlaymiz va tekshiruv vaqtida sizni qo'llab-quvvatlaymiz. Bizda 400+ muvaffaqiyatli tekshiruv bor.",
        tr: "Tum logbuklari inceliyoruz, ihlalleri onceden duzeltiyoruz, belgeleri hazirliyoruz ve denetim sirasinda size destek oluyoruz. 400'den fazla basarili denetimimiz var.",
      },
    },
    {
      question: {
        en: "What languages does your support work in?",
        ru: "На каких языках работает поддержка?",
        kg: "Колдоо кандай тилдерде иштейт?",
        uz: "Qo'llab-quvvatlash qaysi tillarda ishlaydi?",
        tr: "Destek hangi dillerde calisiyor?",
      },
      answer: {
        en: "Our team works in 5 languages: English, Russian, Turkish, Kyrgyz, and Uzbek. You can always contact us in your preferred language.",
        ru: "Наша команда работает на 5 языках: английский, русский, турецкий, кыргызский и узбекский. Вы всегда можете связаться с нами на удобном для вас языке.",
        kg: "Биздин команда 5 тилде иштейт: англисче, орусча, түркчө, кыргызча жана өзбекче. Сиз дайыма өзүңүзгө ыңгайлуу тилде биз менен байланыша аласыз.",
        uz: "Bizning jamoa 5 tilda ishlaydi: inglizcha, ruscha, turkcha, qirg'izcha va o'zbekcha. Siz doimo o'zingizga qulay tilda biz bilan bog'lanishingiz mumkin.",
        tr: "Ekibimiz 5 dilde calisiyor: Ingilizce, Rusca, Turkce, Kirgizca ve Ozbekce. Bize her zaman istediginiz dilde ulasabilirsiniz.",
      },
    },
    {
      question: {
        en: "Is there a trial period?",
        ru: "Есть ли пробный период?",
        kg: "Сыноо мезгили барбы?",
        uz: "Sinov davri bormi?",
        tr: "Deneme suresi var mi?",
      },
      answer: {
        en: "Yes, we offer a free trial period so you can experience the quality of our service before payment. Contact us for details.",
        ru: "Да, мы предлагаем бесплатный пробный период, чтобы вы могли убедиться в качестве нашего сервиса до оплаты. Свяжитесь с нами для деталей.",
        kg: "Ооба, биз бекер сыноо мезгилин сунуштайбыз, ошондуктан сиз төлөгөнгө чейин биздин кызматтын сапатын текшере аласыз. Деталдар үчүн биз менен байланышыңыз.",
        uz: "Ha, biz bepul sinov davrini taklif qilamiz, shunda siz to'lashdan oldin xizmatimiz sifatini ko'rishingiz mumkin. Tafsilotlar uchun biz bilan bog'laning.",
        tr: "Evet, ucretsiz deneme suresi sunuyoruz, boylece odeme yapmadan once hizmetimizin kalitesini gorebilirsiniz. Detaylar icin bizimle iletisime gecin.",
      },
    },
  ]

  return (
    <section id="faq" className="border-y border-border/40 bg-card py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
            FAQ
          </p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            {title[language] || title.en}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="rounded-xl border border-border/50 bg-secondary px-3 last:border-b sm:px-5"
            >
              <AccordionTrigger className="text-left text-xs font-medium text-foreground hover:no-underline sm:text-sm">
                {faq.question[language as keyof typeof faq.question] || faq.question.en}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {faq.answer[language as keyof typeof faq.answer] || faq.answer.en}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
