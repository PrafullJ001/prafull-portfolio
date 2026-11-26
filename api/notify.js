const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { type, ref, referrer } = req.body || {};
  if (!["visit", "resume"].includes(type)) return res.status(400).json({ error: "Invalid type" });

  const h = req.headers;
  const ua = h["user-agent"] || "Unknown";

  // ignore bots and link previews
  if (/bot|crawl|spider|preview|vercel|lighthouse/i.test(ua)) {
    return res.status(200).json({ ignored: true });
  }

  const city = decodeURIComponent(h["x-vercel-ip-city"] || "Unknown");
  const country = h["x-vercel-ip-country"] || "Unknown";
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const title = type === "resume" ? "📄 Resume downloaded" : "👀 New portfolio visitor";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "jprafull40@gmail.com", pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Alerts" <jprafull40@gmail.com>`,
      to: "jprafull40@gmail.com",
      subject: title,
      text:
        `${title}\n\n` +
        `Time: ${time}\n` +
        `Location: ${city}, ${country}\n` +
        `Ref: ${ref || "none"}\n` +
        `Came from: ${referrer || "Direct"}\n` +
        `Device: ${ua}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("NOTIFY ERROR:", err);
    return res.status(500).json({ success: false });
  }
};