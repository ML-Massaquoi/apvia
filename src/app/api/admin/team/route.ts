import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

export async function GET() {
  await ensureSchema();
  const db = getDb();
  const result = await db.execute("SELECT * FROM team_members ORDER BY sort_order ASC, id ASC");
  return NextResponse.json({ members: result.rows });
}

export async function POST(req: NextRequest) {
  const db = getDb();
  const { name, role, bio, photo_path, email, sort_order } = await req.json();

  if (!name || !role) {
    return NextResponse.json({ error: "Name and role are required" }, { status: 400 });
  }

  const result = await db.execute({
    sql: "INSERT INTO team_members (name, role, bio, photo_path, email, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
    args: [name, role, bio || "", photo_path || "", email || "", sort_order || 0],
  });

  const member = (await db.execute({ sql: "SELECT * FROM team_members WHERE id = ?", args: [Number(result.lastInsertRowid)] })).rows[0];
  return NextResponse.json({ member }, { status: 201 });
}
