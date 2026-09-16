import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const db = getDb();
  const { searchParams } = new URL(req.url);
  const exportCsv = searchParams.get("export");

  const result = await db.execute("SELECT * FROM cookie_consents ORDER BY created_at DESC");
  const records = result.rows;
  const total = Number((await db.execute("SELECT COUNT(*) as count FROM cookie_consents")).rows[0]?.count ?? 0);

  if (exportCsv === "csv") {
    const header = "ID,Necessary,Analytics,Marketing,User Agent,IP,Timestamp\n";
    const rows = records.map(r =>
      `${r.id},${r.necessary ? "Yes" : "No"},${r.analytics ? "Yes" : "No"},${r.marketing ? "Yes" : "No"},"${r.user_agent}","${r.ip}","${r.created_at}"`
    ).join("\n");

    return new NextResponse(header + rows, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=cookie-consents.csv",
      },
    });
  }

  return NextResponse.json({ records, total });
}
