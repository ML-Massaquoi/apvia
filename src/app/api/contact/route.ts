import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: subject || `New Contact Form Submission from ${name}`,
        from_name: name,
        from_email: email,
        to: "info@apvia-sl.com",
        message: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `.trim(),
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data.message }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
