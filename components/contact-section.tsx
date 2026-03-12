"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  Loader2,
  MapPin,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const contactMethods = [
    {
      title: t("contact.telegram"),
      value: "@nextlogfullservice",
      icon: MessageCircle,
      href: "https://t.me/nextlogfullservice",
    },
    {
      title: t("contact.phone"),
      value: "309-223-3263",
      icon: Phone,
      href: "tel:+13092233263",
      note: t("contact.phone.note"),
    },
    {
      title: t("contact.whatsapp"),
      value: "+996 508 228 328",
      icon: Phone,
      href: "https://wa.me/996508228328",
    },
    {
      title: t("contact.email"),
      value: "workingeld@gmail.com",
      icon: Mail,
      href: "mailto:workingeld@gmail.com",
    },
  ]

  const formTitle: Record<string, string> = {
    en: "Leave a request",
    ru: "Оставьте заявку",
    kg: "Арыз калтырыңыз",
    uz: "Ariza qoldiring",
    tr: "Basvuru birakin",
  }

  const formSubtitle: Record<string, string> = {
    en: "Fill out the form and our team will contact you.",
    ru: "Заполните форму и наша команда свяжется с вами.",
    kg: "Форманы толтуруңуз, команда сиз менен байланышат.",
    uz: "Formani to'ldiring, jamoa siz bilan bog'lanadi.",
    tr: "Formu doldurun, ekibimiz sizinle iletisime gececek.",
  }

  const requiredError: Record<string, string> = {
    en: "Please fill in name and phone",
    ru: "Заполните имя и телефон",
    kg: "Атыңызды жана телефонду толтуруңуз",
    uz: "Ism va telefonni to'ldiring",
    tr: "Ad ve telefonu doldurun",
  }

  const sendError: Record<string, string> = {
    en: "Error sending",
    ru: "Ошибка отправки",
    kg: "Жөнөтүү катасы",
    uz: "Yuborishda xatolik",
    tr: "Gonderme hatasi",
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg(requiredError[language] || requiredError.en)
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || (sendError[language] || sendError.en))
      }

      setStatus("success")
      setForm({ name: "", phone: "", email: "", company: "", message: "" })
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : (sendError[language] || sendError.en))
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
            {t("nav.contact")}
          </p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-xs text-muted-foreground leading-relaxed sm:text-sm">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-2 sm:gap-3 lg:col-span-2">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-3 transition-all hover:border-primary/40 sm:gap-4 sm:p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                  <method.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground sm:text-sm">
                    {method.title}
                    {"note" in method && method.note && (
                      <span className="ml-1.5 text-[10px] font-normal text-muted-foreground sm:ml-2 sm:text-xs">({method.note})</span>
                    )}
                  </div>
                  <div className="text-xs text-primary sm:text-sm">{method.value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-3 sm:gap-4 sm:p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                <MapPin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground sm:text-sm">{t("contact.address")}</div>
                <div className="text-[10px] text-muted-foreground leading-relaxed sm:text-xs">
                  30 N Gould St Ste R,<br />Sheridan, WY 82801, USA
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-3 sm:p-4">
              <p className="text-[10px] text-muted-foreground leading-relaxed sm:text-xs">
                {t("contact.coverage")}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-4 sm:p-5 lg:col-span-3 lg:p-6">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {t("contact.form.success")}
                </h3>
                <p className="mb-5 text-sm text-muted-foreground">
                  {t("contact.form.success.desc")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus("idle")}
                  className="border-border text-foreground hover:bg-secondary"
                >
                  {t("contact.form.newRequest")}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-lg font-bold text-foreground">
                  {formTitle[language] || formTitle.en}
                </h3>
                <p className="mb-5 text-sm text-muted-foreground">
                  {formSubtitle[language] || formSubtitle.en}
                </p>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-foreground">
                        {t("contact.form.name")} <span className="text-red-400">*</span>
                      </label>
                      <Input
                        placeholder={t("contact.form.name")}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-foreground">
                        {t("contact.form.phone")} <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      placeholder="email@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      {t("contact.form.company")}
                    </label>
                    <Input
                      placeholder={t("contact.form.company")}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      placeholder={t("contact.form.message")}
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {status === "error" && errorMsg && (
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
