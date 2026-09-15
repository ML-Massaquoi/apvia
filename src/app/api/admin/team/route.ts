import { NextRequest, NextResponse } from "next/server";
import { getDb, type TeamMember } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const members = db.prepare("SELECT * FROM team_members ORDER BY sort_order ASC, id ASC").all() as TeamMember[];
  return NextResponse.json({ members });
}

export async function POST(req: NextRequest) {
  const db = getDb();
  const { name, role, bio, photo_path, email, sort_order } = await req.json();

  if (!name || !role) {
    return NextResponse.json({ error: "Name and role are required" }, { status: 400 });
  }

  const result = db.prepare(
    "INSERT INTO team_members (name, role, bio, photo_path, email, sort_order) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(name, role, bio || "", photo_path || "", email || "", sort_order || 0);

  const member = db.prepare("SELECT * FROM team_members WHERE id = ?").get(result.lastInsertRowid) as TeamMember;
  return NextResponse.json({ member }, { status: 201 });
}
