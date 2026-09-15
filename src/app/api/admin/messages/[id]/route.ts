import { NextRequest, NextResponse } from "next/server";
import { getDb, type Message } from "@/lib/db";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb();
  const { id } = await params;
  const { status } = await req.json();

  if (!status || !["new", "read", "replied"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  db.prepare("UPDATE messages SET status = ? WHERE id = ?").run(status, Number(id));
  const message = db.prepare("SELECT * FROM messages WHERE id = ?").get(Number(id)) as Message | undefined;

  if (!message) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ message });
}
