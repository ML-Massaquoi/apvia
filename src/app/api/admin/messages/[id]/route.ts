import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb();
  const { id } = await params;
  const { status } = await req.json();

  if (!status || !["new", "read", "replied"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  await db.execute({ sql: "UPDATE messages SET status = ? WHERE id = ?", args: [status, Number(id)] });
  const result = await db.execute({ sql: "SELECT * FROM messages WHERE id = ?", args: [Number(id)] });
  const message = result.rows[0];

  if (!message) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ message });
}
