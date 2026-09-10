import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { necessary, analytics, marketing, timestamp, userAgent } = body;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "New Cookie Consent Submission - APVIA Website",
        from_name: "APVIA Website",
        to: "info@apvia-sl.com",
        message: `
Cookie Consent Submission

Necessary: ${necessary ? "Accepted" : "Rejected"}
Analytics: ${analytics ? "Accepted" : "Rejected"}
Marketing: ${marketing ? "Accepted" : "Rejected"}

Timestamp: ${timestamp}
User Agent: ${userAgent}
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
