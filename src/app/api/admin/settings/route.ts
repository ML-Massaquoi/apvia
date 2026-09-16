import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const result = await db.execute("SELECT * FROM settings");
  const settings: Record<string, string> = {};
  result.rows.forEach((s) => { settings[s.key as string] = s.value as string; });
  return NextResponse.json({ settings });
}

export async function PUT(req: NextRequest) {
  const db = getDb();
  const updates = await req.json();

  const stmts = Object.entries(updates).map(([key, value]) => ({
    sql: "INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)",
    args: [key, value as string],
  }));

  await db.batch(stmts);
  return NextResponse.json({ success: true });
}
