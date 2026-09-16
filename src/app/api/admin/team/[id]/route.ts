import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await ensureSchema();
  const db = getDb();
  const { id } = await params;
  const { name, role, bio, photo_path, email, sort_order } = await req.json();

  await db.execute({
    sql: "UPDATE team_members SET name = ?, role = ?, bio = ?, photo_path = ?, email = ?, sort_order = ? WHERE id = ?",
    args: [name, role, bio || "", photo_path || "", email || "", sort_order || 0, Number(id)],
  });

  const result = await db.execute({ sql: "SELECT * FROM team_members WHERE id = ?", args: [Number(id)] });
  const member = result.rows[0];
  if (!member) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ member });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb();
  const { id } = await params;
  await db.execute({ sql: "DELETE FROM team_members WHERE id = ?", args: [Number(id)] });
  return NextResponse.json({ success: true });
}
