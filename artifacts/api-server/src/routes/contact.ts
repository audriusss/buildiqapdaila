import { Router } from "express";
import multer from "multer";
import rateLimit from "express-rate-limit";
import { logger } from "../lib/logger";

const router = Router();

// In-memory storage — we forward photos directly to Telegram, no disk needed
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024, files: 5 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    cb(null, allowed.includes(file.mimetype));
  },
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Per daug užklausų. Palaukite ir bandykite dar kartą." },
});

function validateContact(body: Record<string, unknown>): string | null {
  const phone = typeof body["phone"] === "string" ? body["phone"].trim() : "";
  const description = typeof body["description"] === "string" ? body["description"].trim() : "";
  if (!phone || phone.length < 6 || phone.length > 30) {
    return "Telefono numeris privalomas.";
  }
  if (!description || description.length < 5 || description.length > 2000) {
    return "Darbų aprašymas privalomas.";
  }
  return null;
}

async function sendToTelegram(
  message: string,
  photos: Express.Multer.File[]
): Promise<void> {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  const chatId = process.env["TELEGRAM_CHAT_ID"];

  if (!token || !chatId) {
    logger.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping Telegram send");
    return;
  }

  const apiBase = `https://api.telegram.org/bot${token}`;

  if (photos.length === 0) {
    const res = await fetch(`${apiBase}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Telegram sendMessage failed: ${body}`);
    }
    return;
  }

  // Send first photo with caption
  const firstPhoto = photos[0]!;
  const fd1 = new FormData();
  fd1.append("chat_id", chatId);
  fd1.append("caption", message.slice(0, 1024));
  fd1.append("parse_mode", "HTML");
  fd1.append(
    "photo",
    new Blob([firstPhoto.buffer as unknown as ArrayBuffer], { type: firstPhoto.mimetype }),
    firstPhoto.originalname
  );
  const r1 = await fetch(`${apiBase}/sendPhoto`, { method: "POST", body: fd1 });
  if (!r1.ok) {
    const body = await r1.text();
    throw new Error(`Telegram sendPhoto failed: ${body}`);
  }

  // Send remaining photos as a group
  if (photos.length > 1) {
    const fd2 = new FormData();
    fd2.append("chat_id", chatId);
    const media: Array<{ type: string; media: string }> = [];
    for (let i = 1; i < photos.length; i++) {
      const photo = photos[i]!;
      const field = `photo${i}`;
      fd2.append(
        field,
        new Blob([photo.buffer as unknown as ArrayBuffer], { type: photo.mimetype }),
        photo.originalname
      );
      media.push({ type: "photo", media: `attach://${field}` });
    }
    fd2.append("media", JSON.stringify(media));
    const r2 = await fetch(`${apiBase}/sendMediaGroup`, { method: "POST", body: fd2 });
    if (!r2.ok) {
      logger.warn("Telegram sendMediaGroup failed for additional photos");
    }
  }
}

router.post(
  "/contact",
  contactLimiter,
  upload.array("photos", 5),
  async (req, res) => {
    const body = req.body as Record<string, unknown>;

    // Honeypot
    if (body["website"]) {
      res.json({ ok: true });
      return;
    }

    const err = validateContact(body);
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    const name = typeof body["name"] === "string" ? body["name"].trim() : "";
    const phone = (body["phone"] as string).trim();
    const city = typeof body["city"] === "string" ? body["city"].trim() : "";
    const description = (body["description"] as string).trim();
    const deadline = typeof body["deadline"] === "string" ? body["deadline"].trim() : "";

    const photos = (req.files as Express.Multer.File[]) ?? [];

    const lines: string[] = [
      "🔨 <b>Nauja užklausa iš svetainės</b>",
      "",
      `<b>Klientas:</b> ${name || "—"}`,
      `<b>Telefonas:</b> ${phone}`,
      `<b>Miestas:</b> ${city || "—"}`,
      "",
      "<b>Darbai:</b>",
      description,
    ];
    if (deadline) lines.push("", `<b>Pageidaujamas terminas:</b>`, deadline);
    if (photos.length > 0) lines.push("", `📎 Pridėtos nuotraukos: ${photos.length}`);

    try {
      await sendToTelegram(lines.join("\n"), photos);
      res.json({ ok: true });
    } catch (sendErr) {
      logger.error({ err: sendErr }, "Failed to send Telegram message");
      res.status(500).json({
        error: "Nepavyko išsiųsti užklausos. Pabandykite vėliau arba skambinkite tiesiogiai.",
      });
    }
  }
);

export default router;
