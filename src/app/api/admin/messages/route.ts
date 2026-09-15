import { NextRequest, NextResponse } from "next/server";
import { getDb, type Message } from "@/lib/db";

export async function GET(req: NextRequest) {
  const db = getDb();
  const { searchParams } = new URL(req.url);
  const source = searchParams.get("source");
  const status = searchParams.get("status");

  let query = "SELECT * FROM messages";
  const conditions: string[] = [];
  const params: string[] = [];

  if (source) {
    conditions.push("source = ?");
    params.push(source);
  }
  if (status) {
    conditions.push("status = ?");
    params.push(status);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }
  query += " ORDER BY created_at DESC";

  const messages = db.prepare(query).all(...params) as Message[];
  const total = db.prepare("SELECT COUNT(*) as count FROM messages").get() as { count: number };
  const unread = db.prepare("SELECT COUNT(*) as count FROM messages WHERE status = 'new'").get() as { count: number };

  return NextResponse.json({ messages, total: total.count, unread: unread.count });
}

export async function DELETE(req: NextRequest) {
  const db = getDb();
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  db.prepare("DELETE FROM messages WHERE id = ?").run(id);
  return NextResponse.json({ success: true });
}
