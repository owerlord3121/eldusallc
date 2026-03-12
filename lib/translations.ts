"use client"

export type Language = "en" | "ru" | "kg" | "uz" | "tr"

export const languageNames: Record<Language, string> = {
  en: "English",
  ru: "Русский",
  kg: "Кыргызча",
  uz: "O'zbek",
  tr: "Türkçe",
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.results": "Results",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.call": "Call Us",

    // Hero
    "hero.badge": "ELD + Full Service",
"hero.title": "Professional ELD & Service",
  "hero.subtitle": "for Your Business",
    "hero.description": "Monitoring 24/7, DOT audit preparation, IFTA, full support. We work across all 50 US states and Canada.",
    "hero.cta": "Get a Quote",
    "hero.stats.carriers": "Carriers",
    "hero.stats.support": "Support",
    "hero.stats.experience": "Years Experience",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Full range of services for carriers",
    "services.eld.title": "ELD Monitoring 24/7",
    "services.eld.desc": "Round-the-clock monitoring of your logs. We catch errors before DOT does.",
    "services.dot.title": "DOT Audit Preparation",
    "services.dot.desc": "Full preparation of documents and logs for passing DOT inspections.",
    "services.ifta.title": "IFTA Reporting",
    "services.ifta.desc": "Quarterly IFTA report preparation and filing for your fleet.",
    "services.consulting.title": "Consulting",
    "services.consulting.desc": "Consultations on compliance, HOS rules, and DOT requirements.",
    "services.training.title": "Driver Training",
    "services.training.desc": "Training drivers to properly work with ELD and follow HOS rules.",
    "services.support.title": "Technical Support",
    "services.support.desc": "Help setting up and troubleshooting ELD devices.",

    // Pricing
    "pricing.title": "Pricing Calculator",
    "pricing.subtitle": "ELD + Service — the more trucks, the cheaper",
    "pricing.select": "Select number of trucks:",
    "pricing.trucks": "Trucks",
    "pricing.price": "Price",
    "pricing.perTruck": "/truck",
    "pricing.total": "Total per month",
    "pricing.individual": "Individual",
    "pricing.contact": "Contact Us",
    "pricing.cta": "Order Service",
    "pricing.negotiable": "Negotiable price",

    // Why Choose
    "why.title": "Work Results",
    "why.subtitle": "What our clients achieve",
    "why.violations": "Violations",
    "why.violations.desc": "Reduction in HOS violations",
    "why.audits": "DOT Audits",
    "why.audits.desc": "Successful audit passes",
    "why.savings": "Savings",
    "why.savings.desc": "Average client savings",

    // Languages
    "lang.title": "Support in 4 Languages",
    "lang.subtitle": "We speak your language",

    // CTA
    "cta.title": "Ready to get started?",
    "cta.subtitle": "Contact us today for a free consultation",
    "cta.button": "Contact Us",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Answers to popular questions",
    "faq.q1": "What is included in ELD monitoring?",
    "faq.a1": "24/7 log monitoring, error correction, HOS compliance check, notifications about potential violations, and preparation for DOT inspections.",
    "faq.q2": "How quickly do you respond to issues?",
    "faq.a2": "Our average response time is 15 minutes. We work around the clock, 7 days a week, so we are always in touch.",
    "faq.q3": "Do you work with owner-operators?",
    "faq.a3": "Yes, we work with both individual owner-operators and large fleets up to 300+ trucks.",
    "faq.q4": "What ELD devices do you support?",
    "faq.a4": "We work with all major ELD providers: KeepTruckin, Samsara, ELD Mandate, BigRoad, and many others.",
    "faq.q5": "How does DOT audit preparation work?",
    "faq.a5": "We analyze all your logs for the period, correct errors, prepare documentation, and can represent your company during the audit.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are always in touch",
    "contact.form.name": "Your Name",
    "contact.form.phone": "Phone",
    "contact.form.email": "Email",
    "contact.form.company": "Company Name",
    "contact.form.trucks": "Number of Trucks",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit Request",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Request sent!",
    "contact.form.success.desc": "We will contact you shortly",
    "contact.form.newRequest": "New Request",
    "contact.telegram": "Telegram",
    "contact.phone": "Phone",
    "contact.phone.note": "business hours",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.coverage": "Coverage: all 50 US states + Canada. 24/7 support in 4 languages.",

    // Footer
    "footer.rights": "All rights reserved.",
  },

  ru: {
    // Navbar
    "nav.services": "Услуги",
    "nav.pricing": "Цены",
    "nav.results": "Результаты",
    "nav.faq": "FAQ",
    "nav.contact": "Контакты",
    "nav.call": "Позвонить",

    // Hero
    "hero.badge": "ELD + Full Service",
    "hero.title": "Профессиональный ELD & Service",
    "hero.subtitle": "для вашего бизнеса",
    "hero.description": "Мониторинг 24/7, подготовка к DOT аудитам, IFTA, полное сопровождение. Работаем по всем 50 штатам США и Канаде.",
    "hero.cta": "Получить консультацию",
    "hero.stats.carriers": "Перевозчиков",
    "hero.stats.support": "Поддержка",
    "hero.stats.experience": "Лет опыта",

    // Services
    "services.title": "Наши услуги",
    "services.subtitle": "Полный спектр услуг для перевозчиков",
    "services.eld.title": "ELD Мониторинг 24/7",
    "services.eld.desc": "Круглосуточный контроль ваших логов. Мы ловим ошибки раньше, чем DOT.",
    "services.dot.title": "Подготовка к DOT Аудитам",
    "services.dot.desc": "Полная подготовка документов и логов для прохождения проверок DOT.",
    "services.ifta.title": "IFTA Отчётность",
    "services.ifta.desc": "Подготовка и подача квартальных IFTA отчётов за ваш флот.",
    "services.consulting.title": "Консалтинг",
    "services.consulting.desc": "Консультации по compliance, правилам HOS и требованиям DOT.",
    "services.training.title": "Обучение водителей",
    "services.training.desc": "Обучаем водителей правильно работать с ELD и соблюдать HOS.",
    "services.support.title": "Техподдержка",
    "services.support.desc": "Помощь в настройке и решении проблем с ELD устройствами.",

    // Pricing
    "pricing.title": "Калькулятор цен",
    "pricing.subtitle": "ELD + Сервис — чем больше траков, тем дешевле",
    "pricing.select": "Выберите количество траков:",
    "pricing.trucks": "Траков",
    "pricing.price": "Цена",
    "pricing.perTruck": "/трак",
    "pricing.total": "Итого в месяц",
    "pricing.individual": "Индивидуально",
    "pricing.contact": "Связаться",
    "pricing.cta": "Заказать услугу",
    "pricing.negotiable": "Договорная цена",

    // Why Choose
    "why.title": "Результаты работы",
    "why.subtitle": "Чего добиваются наши клиенты",
    "why.violations": "Нарушений",
    "why.violations.desc": "Снижение нарушений HOS",
    "why.audits": "DOT Аудитов",
    "why.audits.desc": "Успешно пройденных проверок",
    "why.savings": "Экономия",
    "why.savings.desc": "Средняя экономия клиентов",

    // Languages
    "lang.title": "Поддержка на 4 языках",
    "lang.subtitle": "Говорим на вашем языке",

    // CTA
    "cta.title": "Готовы начать?",
    "cta.subtitle": "Свяжитесь с нами сегодня для бесплатной консультации",
    "cta.button": "Связаться",

    // FAQ
    "faq.title": "Часто задаваемые вопросы",
    "faq.subtitle": "Ответы на популярные вопросы",
    "faq.q1": "Что входит в ELD мониторинг?",
    "faq.a1": "Круглосуточный контроль логов, исправление ошибок, проверка соответствия HOS, уведомления о потенциальных нарушениях и подготовка к DOT проверкам.",
    "faq.q2": "Как быстро вы реагируете на проблемы?",
    "faq.a2": "Среднее время отклика — 15 минут. Работаем круглосуточно, 7 дней в неделю, поэтому всегда на связи.",
    "faq.q3": "Работаете ли вы с owner-operators?",
    "faq.a3": "Да, мы работаем как с отдельными owner-operators, так и с большими флотами до 300+ траков.",
    "faq.q4": "Какие ELD устройства вы поддерживаете?",
    "faq.a4": "Мы работаем со всеми основными ELD провайдерами: KeepTruckin, Samsara, ELD Mandate, BigRoad и многими другими.",
    "faq.q5": "Как происходит подготовка к DOT аудиту?",
    "faq.a5": "Мы анализируем все ваши логи за период, исправляем ошибки, готовим документацию и можем представлять вашу компанию во время аудита.",

    // Contact
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Мы всегда на связи",
    "contact.form.name": "Ваше имя",
    "contact.form.phone": "Телефон",
    "contact.form.email": "Email",
    "contact.form.company": "Название компании",
    "contact.form.trucks": "Количество траков",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить заявку",
    "contact.form.sending": "Отправка...",
    "contact.form.success": "Заявка отправлена!",
    "contact.form.success.desc": "Мы свяжемся с вами в ближайшее время",
    "contact.form.newRequest": "Новая заявка",
    "contact.telegram": "Telegram",
    "contact.phone": "Телефон",
    "contact.phone.note": "в рабочее время",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Адрес",
    "contact.coverage": "Покрытие: все 50 штатов США + Канада. Поддержка 24/7 на 4 языках.",

    // Footer
    "footer.rights": "Все права защищены.",
  },

  kg: {
    // Navbar
    "nav.services": "Кызматтар",
    "nav.pricing": "Баалар",
    "nav.results": "Жыйынтыктар",
    "nav.faq": "FAQ",
    "nav.contact": "Байланыш",
    "nav.call": "Чалуу",

    // Hero
    "hero.badge": "ELD + Толук кызмат",
"hero.title": "Professional ELD & Service",
  "hero.subtitle": "сиздин бизнесиңиз үчүн",
    "hero.description": "24/7 мониторинг, DOT аудиттерине даярдык, IFTA, толук колдоо. АКШнын бардык 50 штатында жана Канадада иштейбиз.",
    "hero.cta": "Консультация алуу",
    "hero.stats.carriers": "Ташуучулар",
    "hero.stats.support": "Колдоо",
    "hero.stats.experience": "Жыл тажрыйба",

    // Services
    "services.title": "Биздин кызматтар",
    "services.subtitle": "Ташуучулар үчүн толук кызмат",
    "services.eld.title": "ELD Мониторинг 24/7",
    "services.eld.desc": "Логдоруңузду күнү-түнү көзөмөлдөө. DOTтон мурун каталарды табабыз.",
    "services.dot.title": "DOT Аудитке даярдык",
    "services.dot.desc": "DOT текшерүүлөрүн өтүү үчүн документтерди толук даярдоо.",
    "services.ifta.title": "IFTA Отчёттуулук",
    "services.ifta.desc": "Флотуңуз үчүн чейректик IFTA отчётторун даярдоо жана тапшыруу.",
    "services.consulting.title": "Консалтинг",
    "services.consulting.desc": "Compliance, HOS эрежелери жана DOT талаптары боюнча консультациялар.",
    "services.training.title": "Айдоочуларды окутуу",
    "services.training.desc": "Айдоочуларды ELD менен иштөөгө жана HOS сактоого үйрөтөбүз.",
    "services.support.title": "Техникалык колдоо",
    "services.support.desc": "ELD түзмөктөрүн орнотууда жана көйгөйлөрдү чечүүдө жардам.",

    // Pricing
    "pricing.title": "Баа калькулятору",
    "pricing.subtitle": "ELD + Кызмат — трактар канчалык көп болсо, ошончолук арзан",
    "pricing.select": "Трактардын санын тандаңыз:",
    "pricing.trucks": "Трактар",
    "pricing.price": "Баасы",
    "pricing.perTruck": "/трак",
    "pricing.total": "Айына жыйынтык",
    "pricing.individual": "Жеке",
    "pricing.contact": "Байланышуу",
    "pricing.cta": "Кызмат буюртмалоо",
    "pricing.negotiable": "Келишимдик баа",

    // Why Choose
    "why.title": "Иш жыйынтыктары",
    "why.subtitle": "Биздин кардарлар эмнеге жетишет",
    "why.violations": "Бузуулар",
    "why.violations.desc": "HOS бузууларын азайтуу",
    "why.audits": "DOT Аудиттер",
    "why.audits.desc": "Ийгиликтүү өткөн текшерүүлөр",
    "why.savings": "Үнөмдөө",
    "why.savings.desc": "Кардарлардын орточо үнөмдөөсү",

    // Languages
    "lang.title": "4 тилде колдоо",
    "lang.subtitle": "Сиздин тилиңизде сүйлөйбүз",

    // CTA
    "cta.title": "Баштоого даярсызбы?",
    "cta.subtitle": "Бекер консультация үчүн бүгүн байланыш��ңыз",
    "cta.button": "Байланышуу",

    // FAQ
    "faq.title": "Көп берилүүчү суроолор",
    "faq.subtitle": "Популярдуу суроолорго жооптор",
    "faq.q1": "ELD мониторингине эмне кирет?",
    "faq.a1": "24/7 лог көзөмөлү, каталарды оңдоо, HOS шайкештигин текшерүү, мүмкүн болуучу бузуулар жөнүндө билдирүүлөр жана DOT текшерүүлөрүнө даярдык.",
    "faq.q2": "Көйгөйлөргө канчалык тез жооп бересиздер?",
    "faq.a2": "Орточо жооп берүү убактысы — 15 мүнөт. 7 күн бою 24 саат иштейбиз, ошондуктан дайыма байланыштабыз.",
    "faq.q3": "Owner-operators менен иштейсиздерби?",
    "faq.a3": "Ооба, биз жеке owner-operators менен да, 300+ тракка чейин чоң флоттор менен да иштейбиз.",
    "faq.q4": "Кайсы ELD түзмөктөрүн колдойсуздар?",
    "faq.a4": "Биз бардык негизги ELD провайдерлери менен иштейбиз: KeepTruckin, Samsara, ELD Mandate, BigRoad жана башкалар.",
    "faq.q5": "DOT аудитке даярдык кандай жүрөт?",
    "faq.a5": "Биз мезгил ичиндеги бардык логдоруңузду анализдеп, каталарды оңдоп, документтерди даярдайбыз жана аудит учурунда компанияңызды көрсөтө алабыз.",

    // Contact
    "contact.title": "Биз менен байланышыңыз",
    "contact.subtitle": "Биз дайыма байланыштабыз",
    "contact.form.name": "Атыңыз",
    "contact.form.phone": "Телефон",
    "contact.form.email": "Email",
    "contact.form.company": "Компаниянын аты",
    "contact.form.trucks": "Трактардын саны",
    "contact.form.message": "Билдирүү",
    "contact.form.submit": "Арыз жөнөтүү",
    "contact.form.sending": "Жөнөтүлүүдө...",
    "contact.form.success": "Арыз жөнөтүлдү!",
    "contact.form.success.desc": "Жакында сиз менен байланышабыз",
    "contact.form.newRequest": "Жаңы арыз",
    "contact.telegram": "Telegram",
    "contact.phone": "Телефон",
    "contact.phone.note": "иш убактысында",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Дарек",
    "contact.coverage": "Камтуу: АКШнын бардык 50 штаты + Канада. 4 тилде 24/7 колдоо.",

    // Footer
    "footer.rights": "Бардык укуктар корголгон.",
  },

  uz: {
    // Navbar
    "nav.services": "Xizmatlar",
    "nav.pricing": "Narxlar",
    "nav.results": "Natijalar",
    "nav.faq": "FAQ",
    "nav.contact": "Aloqa",
    "nav.call": "Qo'ng'iroq",

    // Hero
    "hero.badge": "ELD + To'liq xizmat",
"hero.title": "Professional ELD & Service",
  "hero.subtitle": "sizning biznesingiz uchun",
    "hero.description": "24/7 monitoring, DOT auditlariga tayyorgarlik, IFTA, to'liq qo'llab-quvvatlash. AQShning barcha 50 shtati va Kanadada ishlaymiz.",
    "hero.cta": "Maslahat olish",
    "hero.stats.carriers": "Tashuvchilar",
    "hero.stats.support": "Qo'llab-quvvatlash",
    "hero.stats.experience": "Yil tajriba",

    // Services
    "services.title": "Bizning xizmatlar",
    "services.subtitle": "Tashuvchilar uchun to'liq xizmatlar",
    "services.eld.title": "ELD Monitoring 24/7",
    "services.eld.desc": "Loglaringizni kechayu kunduz nazorat qilish. DOTdan oldin xatolarni topamiz.",
    "services.dot.title": "DOT Auditga tayyorgarlik",
    "services.dot.desc": "DOT tekshiruvlaridan o'tish uchun hujjatlarni to'liq tayyorlash.",
    "services.ifta.title": "IFTA Hisobotlar",
    "services.ifta.desc": "Flotingiz uchun choraklik IFTA hisobotlarini tayyorlash va topshirish.",
    "services.consulting.title": "Konsalting",
    "services.consulting.desc": "Compliance, HOS qoidalari va DOT talablari bo'yicha maslahatlar.",
    "services.training.title": "Haydovchilarni o'qitish",
    "services.training.desc": "Haydovchilarni ELD bilan ishlashga va HOS saqlashga o'rgatamiz.",
    "services.support.title": "Texnik yordam",
    "services.support.desc": "ELD qurilmalarini sozlash va muammolarni hal qilishda yordam.",

    // Pricing
    "pricing.title": "Narx kalkulyatori",
    "pricing.subtitle": "ELD + Xizmat — traklar qancha ko'p bo'lsa, shuncha arzon",
    "pricing.select": "Traklar sonini tanlang:",
    "pricing.trucks": "Traklar",
    "pricing.price": "Narxi",
    "pricing.perTruck": "/trak",
    "pricing.total": "Oyiga jami",
    "pricing.individual": "Individual",
    "pricing.contact": "Bog'lanish",
    "pricing.cta": "Xizmat buyurtma qilish",
    "pricing.negotiable": "Kelishilgan narx",

    // Why Choose
    "why.title": "Ish natijalari",
    "why.subtitle": "Mijozlarimiz nimaga erishadilar",
    "why.violations": "Buzilishlar",
    "why.violations.desc": "HOS buzilishlarini kamaytirish",
    "why.audits": "DOT Auditlar",
    "why.audits.desc": "Muvaffaqiyatli o'tilgan tekshiruvlar",
    "why.savings": "Tejash",
    "why.savings.desc": "Mijozlarning o'rtacha tejashi",

    // Languages
    "lang.title": "4 tilda qo'llab-quvvatlash",
    "lang.subtitle": "Sizning tilingizda gaplashamiz",

    // CTA
    "cta.title": "Boshlashga tayyormisiz?",
    "cta.subtitle": "Bepul maslahat uchun bugun bog'laning",
    "cta.button": "Bog'lanish",

    // FAQ
    "faq.title": "Ko'p beriladigan savollar",
    "faq.subtitle": "Mashhur savollarga javoblar",
    "faq.q1": "ELD monitoringiga nima kiradi?",
    "faq.a1": "24/7 log nazorati, xatolarni tuzatish, HOS muvofiqligini tekshirish, mumkin bo'lgan buzilishlar haqida bildirishnomalar va DOT tekshiruvlariga tayyorgarlik.",
    "faq.q2": "Muammolarga qanchalik tez javob berasiz?",
    "faq.a2": "O'rtacha javob berish vaqti — 15 daqiqa. Haftada 7 kun, 24 soat ishlaymiz, shuning uchun doimo aloqadamiz.",
    "faq.q3": "Owner-operators bilan ishlaysizmi?",
    "faq.a3": "Ha, biz yakka owner-operators bilan ham, 300+ trakgacha katta flotlar bilan ham ishlaymiz.",
    "faq.q4": "Qaysi ELD qurilmalarini qo'llab-quvvatlaysiz?",
    "faq.a4": "Biz barcha asosiy ELD provayderlari bilan ishlaymiz: KeepTruckin, Samsara, ELD Mandate, BigRoad va boshqalar.",
    "faq.q5": "DOT auditga tayyorgarlik qanday bo'ladi?",
    "faq.a5": "Biz davr davomidagi barcha loglaringizni tahlil qilamiz, xatolarni tuzatamiz, hujjatlarni tayyorlaymiz va audit vaqtida kompaniyangizni taqdim etishimiz mumkin.",

    // Contact
    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle": "Biz doimo aloqadamiz",
    "contact.form.name": "Ismingiz",
    "contact.form.phone": "Telefon",
    "contact.form.email": "Email",
    "contact.form.company": "Kompaniya nomi",
    "contact.form.trucks": "Traklar soni",
    "contact.form.message": "Xabar",
    "contact.form.submit": "Ariza yuborish",
    "contact.form.sending": "Yuborilmoqda...",
    "contact.form.success": "Ariza yuborildi!",
    "contact.form.success.desc": "Tez orada siz bilan bog'lanamiz",
    "contact.form.newRequest": "Yangi ariza",
    "contact.telegram": "Telegram",
    "contact.phone": "Telefon",
    "contact.phone.note": "ish vaqtida",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Manzil",
    "contact.coverage": "Qamrov: AQShning barcha 50 shtati + Kanada. 4 tilda 24/7 qo'llab-quvvatlash.",

    // Footer
    "footer.rights": "Barcha huquqlar himoyalangan.",
  },

  tr: {
    // Navbar
    "nav.services": "Hizmetler",
    "nav.pricing": "Fiyatlar",
    "nav.results": "Sonuclar",
    "nav.faq": "SSS",
    "nav.contact": "Iletisim",
    "nav.call": "Ara",

    // Hero
    "hero.badge": "ELD + Tam Hizmet",
"hero.title": "Professional ELD & Service",
  "hero.subtitle": "isletmeniz icin",
    "hero.description": "7/24 izleme, DOT denetim hazirlik, IFTA, tam destek. ABD'nin tum 50 eyaletinde ve Kanada'da calisiyoruz.",
    "hero.cta": "Danismanlik Al",
    "hero.stats.carriers": "Tasimaci",
    "hero.stats.support": "Destek",
    "hero.stats.experience": "Yil Deneyim",

    // Services
    "services.title": "Hizmetlerimiz",
    "services.subtitle": "Tasimaclar icin tam hizmet yelpazesi",
    "services.eld.title": "ELD Izleme 7/24",
    "services.eld.desc": "Loglarinizin gece gunduz izlenmesi. DOT'tan once hatalari yakalariz.",
    "services.dot.title": "DOT Denetim Hazirligi",
    "services.dot.desc": "DOT denetimlerini gecmek icin belgelerin tam hazirlanmasi.",
    "services.ifta.title": "IFTA Raporlama",
    "services.ifta.desc": "Filonuz icin ucaylik IFTA raporlarinin hazirlanmasi ve sunulmasi.",
    "services.consulting.title": "Danismanlik",
    "services.consulting.desc": "Uyumluluk, HOS kurallari ve DOT gereksinimleri hakkinda danismanlik.",
    "services.training.title": "Surucu Egitimi",
    "services.training.desc": "Suruculere ELD ile calismayi ve HOS'a uymayi ogretiyoruz.",
    "services.support.title": "Teknik Destek",
    "services.support.desc": "ELD cihazlarini kurmada ve sorunlari cozmede yardim.",

    // Pricing
    "pricing.title": "Fiyat Hesaplayici",
    "pricing.subtitle": "ELD + Hizmet — ne kadar cok tir, o kadar ucuz",
    "pricing.select": "Tir sayisini secin:",
    "pricing.trucks": "Tir",
    "pricing.price": "Fiyat",
    "pricing.perTruck": "/tir",
    "pricing.total": "Aylik toplam",
    "pricing.individual": "Bireysel",
    "pricing.contact": "Iletisim",
    "pricing.cta": "Hizmet Siparis Et",
    "pricing.negotiable": "Pazarlik fiyati",

    // Why Choose
    "why.title": "Calisma Sonuclari",
    "why.subtitle": "Musterilerimiz neye ulasir",
    "why.violations": "Ihlaller",
    "why.violations.desc": "HOS ihlallerinde azalma",
    "why.audits": "DOT Denetimleri",
    "why.audits.desc": "Basariyla gecilen denetimler",
    "why.savings": "Tasarruf",
    "why.savings.desc": "Musterilerin ortalama tasarrufu",

    // Languages
    "lang.title": "4 Dilde Destek",
    "lang.subtitle": "Sizin dilinizi konusuyoruz",

    // CTA
    "cta.title": "Baslamaya hazir misiniz?",
    "cta.subtitle": "Ucretsiz danismanlik icin bugun bize ulasin",
    "cta.button": "Iletisim",

    // FAQ
    "faq.title": "Sikca Sorulan Sorular",
    "faq.subtitle": "Populer sorulara yanitlar",
    "faq.q1": "ELD izlemeye neler dahil?",
    "faq.a1": "7/24 log izleme, hata duzeltme, HOS uyumluluk kontrolu, olasi ihlaller hakkinda bildirimler ve DOT denetimlerine hazirlik.",
    "faq.q2": "Sorunlara ne kadar hizli yanit veriyorsunuz?",
    "faq.a2": "Ortalama yanit suresi — 15 dakika. Haftada 7 gun, 24 saat calisiyoruz, bu yuzden her zaman iletisimdeyiz.",
    "faq.q3": "Owner-operators ile calisiyor musunuz?",
    "faq.a3": "Evet, hem bireysel owner-operators hem de 300+ tira kadar buyuk filolarla calisiyoruz.",
    "faq.q4": "Hangi ELD cihazlarini destekliyorsunuz?",
    "faq.a4": "Tum buyuk ELD saglayicilariyla calisiyoruz: KeepTruckin, Samsara, ELD Mandate, BigRoad ve daha fazlasi.",
    "faq.q5": "DOT denetim hazirligi nasil oluyor?",
    "faq.a5": "Donem boyunca tum loglarinizi analiz ediyoruz, hatalari duzeltiyoruz, belgeleri hazirliyoruz ve denetim sirasinda sirketinizi temsil edebiliyoruz.",

    // Contact
    "contact.title": "Bize Ulasin",
    "contact.subtitle": "Her zaman iletisimdeyiz",
    "contact.form.name": "Adiniz",
    "contact.form.phone": "Telefon",
    "contact.form.email": "Email",
    "contact.form.company": "Sirket Adi",
    "contact.form.trucks": "Tir Sayisi",
    "contact.form.message": "Mesaj",
    "contact.form.submit": "Basvuru Gonder",
    "contact.form.sending": "Gonderiliyor...",
    "contact.form.success": "Basvuru gonderildi!",
    "contact.form.success.desc": "En kisa surede sizinle iletisime gececegiz",
    "contact.form.newRequest": "Yeni basvuru",
    "contact.telegram": "Telegram",
    "contact.phone": "Telefon",
    "contact.phone.note": "mesai saatlerinde",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Adres",
    "contact.coverage": "Kapsam: ABD'nin tum 50 eyaleti + Kanada. 4 dilde 7/24 destek.",

    // Footer
    "footer.rights": "Tum haklar saklidir.",
  },
}

export function getTranslation(lang: Language, key: string): string {
  return translations[lang]?.[key] || translations.en[key] || key
}

export function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en"
  
  const browserLang = navigator.language.toLowerCase()
  
  if (browserLang.startsWith("ru")) return "ru"
  if (browserLang.startsWith("ky") || browserLang.startsWith("kg")) return "kg"
  if (browserLang.startsWith("uz")) return "uz"
  if (browserLang.startsWith("tr")) return "tr"
  
  return "en"
}
