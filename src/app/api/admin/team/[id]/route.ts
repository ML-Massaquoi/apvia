import { NextRequest, NextResponse } from "next/server";
import { getDb, type TeamMember } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb();
  const { id } = await params;
  const { name, role, bio, photo_path, email, sort_order } = await req.json();

  db.prepare(
    "UPDATE team_members SET name = ?, role = ?, bio = ?, photo_path = ?, email = ?, sort_order = ? WHERE id = ?"
  ).run(name, role, bio || "", photo_path || "", email || "", sort_order || 0, Number(id));

  const member = db.prepare("SELECT * FROM team_members WHERE id = ?").get(Number(id)) as TeamMember | undefined;
  if (!member) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ member });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb();
  const { id } = await params;
  db.prepare("DELETE FROM team_members WHERE id = ?").run(Number(id));
  return NextResponse.json({ success: true });
}
