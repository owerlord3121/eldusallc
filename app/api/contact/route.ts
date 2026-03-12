import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, company, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      )
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
      `🚛 *Новая заявка с сайта NextLog*`,
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

function escapeMarkdown(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1")
}
