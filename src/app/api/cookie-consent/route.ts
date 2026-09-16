import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { necessary, analytics, marketing, timestamp, userAgent } = body;

    await ensureSchema();
    const db = getDb();
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
    await db.execute({
      sql: "INSERT INTO cookie_consents (necessary, analytics, marketing, user_agent, ip) VALUES (?, ?, ?, ?, ?)",
      args: [necessary ? 1 : 0, analytics ? 1 : 0, marketing ? 1 : 0, userAgent || "", ip],
    });

    if (WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Cookie Consent Submission - APVIA Website",
          from_name: "APVIA Website",
          to: "info@apvia-sl.com",
          message: `Cookie Consent Submission\n\nNecessary: ${necessary ? "Accepted" : "Rejected"}\nAnalytics: ${analytics ? "Accepted" : "Rejected"}\nMarketing: ${marketing ? "Accepted" : "Rejected"}\n\nTimestamp: ${timestamp}\nUser Agent: ${userAgent}`.trim(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}
