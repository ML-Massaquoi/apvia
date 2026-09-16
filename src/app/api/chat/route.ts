import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

const REPLY_MAP: Record<string, string> = {
  services: "We offer investment facilitation, project management, renewable energy, agribusiness support, and capacity building. Visit /services for details.",
  invest: "We can help you invest in Sierra Leone's emerging sectors — agriculture, energy, infrastructure, and more. Let's schedule a call at info@apvia-sl.com.",
  contact: "You can reach us at info@apvia-sl.com or call 232 73 88 66 22. We're at 91 Fort Street, Freetown.",
  about: "APVIA Ltd (African Projects Ventures Investments and Advancement Limited) drives sustainable development across West Africa. Learn more at /about.",
  team: "Our experienced leadership team is available at /team. Key contacts include our CEO and Managing Directors.",
  partner: "We welcome partnerships! Email info@apvia-sl.com with your proposal and our team will respond within 24 hours.",
  hello: "Hello! How can we assist you today?",
  hi: "Hi there! What can APVIA help you with?",
  help: "I can help with information about our services, investment opportunities, or connect you with our team. What are you interested in?",
  thanks: "You're welcome! Feel free to reach out anytime.",
  thank: "You're welcome! Feel free to reach out anytime.",
};

function getReply(message: string): string {
  const lower = message.toLowerCase();
  for (const [key, reply] of Object.entries(REPLY_MAP)) {
    if (lower.includes(key)) return reply;
  }
  return "Thank you for your message. Our team will review it and get back to you shortly. For immediate assistance, email info@apvia-sl.com or call 232 73 88 66 22.";
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Please type a message." });
    }

    const db = getDb();
    await db.execute({
      sql: "INSERT INTO messages (name, email, subject, message, source) VALUES (?, ?, ?, ?, 'chat')",
      args: ["Visitor", "", "Chat Message", message],
    });

    if (WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Chat Message: ${message.substring(0, 50)}`,
          from_name: "APVIA Website Chat",
          to: "info@apvia-sl.com",
          message: `New chat message received:\n\n"${message}"\n\nReply at info@apvia-sl.com`,
        }),
      });
    }

    const reply = getReply(message);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: "Sorry, something went wrong. Please email info@apvia-sl.com or call 232 73 88 66 22.",
    });
  }
}
