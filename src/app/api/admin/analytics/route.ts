import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();

  const totalMessages = Number((await db.execute("SELECT COUNT(*) as count FROM messages")).rows[0]?.count ?? 0);
  const unreadMessages = Number((await db.execute("SELECT COUNT(*) as count FROM messages WHERE status = 'new'")).rows[0]?.count ?? 0);
  const totalConsents = Number((await db.execute("SELECT COUNT(*) as count FROM cookie_consents")).rows[0]?.count ?? 0);
  const totalTeam = Number((await db.execute("SELECT COUNT(*) as count FROM team_members")).rows[0]?.count ?? 0);

  const viewsPerDay = (await db.execute(`
    SELECT date(created_at) as date, COUNT(*) as views
    FROM page_views
    WHERE created_at >= datetime('now', '-30 days')
    GROUP BY date(created_at)
    ORDER BY date ASC
  `)).rows;

  const topPages = (await db.execute(`
    SELECT path, COUNT(*) as views
    FROM page_views
    GROUP BY path
    ORDER BY views DESC
    LIMIT 10
  `)).rows;

  const messagesBySource = (await db.execute(`
    SELECT source, COUNT(*) as count FROM messages GROUP BY source
  `)).rows;

  const messagesByStatus = (await db.execute(`
    SELECT status, COUNT(*) as count FROM messages GROUP BY status
  `)).rows;

  const consentAnalytics = Number((await db.execute("SELECT COUNT(*) as count FROM cookie_consents WHERE analytics = 1")).rows[0]?.count ?? 0);
  const consentMarketing = Number((await db.execute("SELECT COUNT(*) as count FROM cookie_consents WHERE marketing = 1")).rows[0]?.count ?? 0);

  const messagesPerDay = (await db.execute(`
    SELECT date(created_at) as date, COUNT(*) as count
    FROM messages
    WHERE created_at >= datetime('now', '-14 days')
    GROUP BY date(created_at)
    ORDER BY date ASC
  `)).rows;

  const recentMessages = (await db.execute(`
    SELECT id, name, email, subject, source, status, created_at
    FROM messages
    ORDER BY created_at DESC
    LIMIT 5
  `)).rows;

  return NextResponse.json({
    totalMessages,
    unreadMessages,
    totalConsents,
    totalTeam,
    viewsPerDay,
    topPages,
    messagesBySource,
    messagesByStatus,
    consentAnalytics,
    consentMarketing,
    messagesPerDay,
    recentMessages,
  });
}
