import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Save to database
    const db = getDb();
    db.prepare(
      "INSERT INTO messages (name, email, subject, message, source) VALUES (?, ?, ?, ?, 'contact')"
    ).run(name, email, subject || "", message);

    // Send email via Web3Forms
    if (WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: subject || `New Contact Form Submission from ${name}`,
          from_name: name,
          from_email: email,
          to: "info@apvia-sl.com",
          message: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`.trim(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
