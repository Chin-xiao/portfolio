// api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text =
    `📬 *New Contact Message*\n\n` +
    `*Name:* ${escapeMd(name)}\n` +
    `*Email:* ${escapeMd(email)}\n` +
    `*Subject:* ${escapeMd(subject || "—")}\n\n` +
    `${escapeMd(message)}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "MarkdownV2",
        }),
      }
    );

    const data = await tgRes.json();

    if (!data.ok) {
    console.error("Telegram API error:", data);
    return res.status(502).json({ error: "Failed to send message" }); 
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

// Telegram MarkdownV2 requires escaping these characters
function escapeMd(str = "") {
  return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}