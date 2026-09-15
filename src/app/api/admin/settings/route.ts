import { NextRequest, NextResponse } from "next/server";
import { getDb, type Setting } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const settings = db.prepare("SELECT * FROM settings").all() as Setting[];
  const obj: Record<string, string> = {};
  settings.forEach((s) => { obj[s.key] = s.value; });
  return NextResponse.json({ settings: obj });
}

export async function PUT(req: NextRequest) {
  const db = getDb();
  const updates = await req.json();

  const stmt = db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)");
  const transaction = db.transaction(() => {
    for (const [key, value] of Object.entries(updates)) {
      stmt.run(key, value as string);
    }
  });
  transaction();

  return NextResponse.json({ success: true });
}
