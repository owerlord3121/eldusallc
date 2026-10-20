import { NextResponse } from "next/server"

type RateEntry = { count: number; resetAt: number }

const globalForRateLimit = globalThis as typeof globalThis & {
  usaEldContactRateLimit?: Map<string, RateEntry>
}

const rateLimit = globalForRateLimit.usaEldContactRateLimit ?? new Map<string, RateEntry>()
globalForRateLimit.usaEldContactRateLimit = rateLimit

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Слишком много заявок. Попробуйте немного позже." },
        { status: 429 }
      )
    }

    if (!req.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ error: "Неверный формат запроса" }, { status: 415 })
    }

    const body = await req.json()
    const name = cleanField(body.name, 100)
    const phone = cleanField(body.phone, 60)
    const email = cleanField(body.email, 160)
    const company = cleanField(body.company, 160)
    const message = cleanField(body.message, 2000)

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      )
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Проверьте email" }, { status: 400 })
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram env vars not set")
      return NextResponse.json(
        { error: "Сервер не настроен для отправки" },
        { status: 500 }
      )
    }

    const text = [
      `🚛 *Новая заявка с сайта USA ELD*`,
      ``,
      `👤 *Имя:* ${escapeMarkdown(name)}`,
      `📞 *Телефон:* ${escapeMarkdown(phone)}`,
      email ? `📧 *Email:* ${escapeMarkdown(email)}` : null,
      company ? `🏢 *Компания:* ${escapeMarkdown(company)}` : null,
      message ? `💬 *Сообщение:* ${escapeMarkdown(message)}` : null,
      ``,
      `📅 ${new Date().toLocaleString("ru-RU", { timeZone: "America/New_York" })} (ET)`,
    ]
      .filter(Boolean)
      .join("\n")

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
        cache: "no-store",
      }
    )

    if (!telegramRes.ok) {
      const errData = await telegramRes.json()
      console.error("Telegram API error:", errData)
      return NextResponse.json(
        { error: "Ошибка отправки в Telegram" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

function cleanField(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength)
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")
  return forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const current = rateLimit.get(ip)

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    cleanupRateLimit(now)
    return false
  }

  if (current.count >= MAX_REQUESTS) return true
  current.count += 1
  return false
}

function cleanupRateLimit(now: number) {
  if (rateLimit.size < 500) return
  for (const [key, value] of rateLimit) {
    if (value.resetAt <= now) rateLimit.delete(key)
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1")
}
