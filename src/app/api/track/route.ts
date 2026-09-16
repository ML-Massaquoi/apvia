import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    if (!path) return NextResponse.json({ error: "Missing path" }, { status: 400 });

    await ensureSchema();
    const db = getDb();
    await db.execute({ sql: "INSERT INTO page_views (path) VALUES (?)", args: [path] });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
