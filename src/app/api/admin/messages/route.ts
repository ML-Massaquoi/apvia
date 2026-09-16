import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

export async function GET(req: NextRequest) {
  await ensureSchema();
  const db = getDb();
  const { searchParams } = new URL(req.url);
  const source = searchParams.get("source");
  const status = searchParams.get("status");

  let query = "SELECT * FROM messages";
  const conditions: string[] = [];
  const args: (string | number)[] = [];

  if (source) {
    conditions.push("source = ?");
    args.push(source);
  }
  if (status) {
    conditions.push("status = ?");
    args.push(status);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }
  query += " ORDER BY created_at DESC";

  const result = await db.execute({ sql: query, args });
  const messages = result.rows;
  const total = Number((await db.execute("SELECT COUNT(*) as count FROM messages")).rows[0]?.count ?? 0);
  const unread = Number((await db.execute("SELECT COUNT(*) as count FROM messages WHERE status = 'new'")).rows[0]?.count ?? 0);

  return NextResponse.json({ messages, total, unread });
}

export async function DELETE(req: NextRequest) {
  await ensureSchema();
  const db = getDb();
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await db.execute({ sql: "DELETE FROM messages WHERE id = ?", args: [id] });
  return NextResponse.json({ success: true });
}
