import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();

  const totalMessages = (db.prepare("SELECT COUNT(*) as count FROM messages").get() as { count: number }).count;
  const unreadMessages = (db.prepare("SELECT COUNT(*) as count FROM messages WHERE status = 'new'").get() as { count: number }).count;
  const totalConsents = (db.prepare("SELECT COUNT(*) as count FROM cookie_consents").get() as { count: number }).count;
  const totalTeam = (db.prepare("SELECT COUNT(*) as count FROM team_members").get() as { count: number }).count;

  // Views per day (last 30 days)
  const viewsPerDay = db.prepare(`
    SELECT date(created_at) as date, COUNT(*) as views
    FROM page_views
    WHERE created_at >= datetime('now', '-30 days')
    GROUP BY date(created_at)
    ORDER BY date ASC
  `).all();

  // Top pages
  const topPages = db.prepare(`
    SELECT path, COUNT(*) as views
    FROM page_views
    GROUP BY path
    ORDER BY views DESC
    LIMIT 10
  `).all();

  // Recent messages
  const recentMessages = db.prepare(`
    SELECT id, name, email, subject, source, status, created_at
    FROM messages
    ORDER BY created_at DESC
    LIMIT 5
  `).all();

  return NextResponse.json({
    totalMessages,
    unreadMessages,
    totalConsents,
    totalTeam,
    viewsPerDay,
    topPages,
    recentMessages,
  });
}
