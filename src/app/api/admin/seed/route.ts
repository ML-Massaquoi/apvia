import { NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";

export async function POST() {
  try {
    await ensureSchema();
    const db = getDb();

    // Seed team members
    const team = [
      { name: "Farouk Al-Wahab", role: "Lead Consultant & Chairman", photo: "/team/farouk-al-wahab.jpg", email: "farouk@apvia-sl.com", bio: "Globally certified diplomatic and investments consultant with extensive experience in international relations and African governance." },
      { name: "Amir Al Malik Bangura", role: "Managing Director", photo: "/team/amir-bangura.jpg", email: "amiralmalik@apvia-sl.com", bio: "Visionary leader with 20+ years in retail management, civil engineering, and project operations. PRINCE2 and Lean Six Sigma certified." },
      { name: "Ibrahim Rogers", role: "Projects & Operations Manager", photo: "/team/ibrahim-rogers.jpg", email: "ibrahimrogers@apvia-sl.com", bio: "Professional Geologist with 15+ years in the Mineral Sands Industry. BSc honours in Geology from Fourah Bay College." },
      { name: "Vincent Davies", role: "HR & Administrative Manager", photo: "/team/vincent-davies.jpg", email: "vincentdavies@apvia-sl.com", bio: "Seasoned HR professional with 16+ years across extractive, fintech and aviation industries. MBA candidate at Nexford University." },
      { name: "Fanta Fadia Kakay", role: "Finance and Procurement Manager", photo: "/team/fanta-kakay.jpg", email: "fanta@apvia-sl.com", bio: "Accomplished banking professional with 13 years experience. Branch Manager at Zenith Bank (SL) Ltd." },
      { name: "Patrick Layormie Taylor-Ayikon", role: "Logistics & Supply Chain Manager", photo: "/team/patrick-layormie.jpg", email: "patricktaylor@apvia-sl.com", bio: "18+ years in marine engineering and logistics. Founded Tayman Business Agency." },
      { name: "Sahr James", role: "Contract & Business Development Manager", photo: "/team/shar-james.jpg", email: "sahrjames@apvia-sl.com", bio: "Certified IT professional with BSc Computer Science and 10+ years in network engineering." },
      { name: "Michael Kenneth Ondaan", role: "Investment & Principal Manager", photo: "/team/michael-ondaan.jpg", email: "michaelkondaan@apvia-sl.com", bio: "Investment and Principal Manager overseeing investment strategy and capital deployment." },
    ];

    const teamStmts = team.map((m, i) => ({
      sql: "INSERT OR IGNORE INTO team_members (name, role, bio, photo_path, email, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      args: [m.name, m.role, m.bio, m.photo, m.email, i + 1],
    }));
    await db.batch(teamStmts);

    // Seed settings
    const settings: Record<string, string> = {
      company_name: "APVIA Ltd",
      phone: "232 73 88 66 22",
      email: "info@apvia-sl.com",
      compliance_email: "compliance@apvia-sl.com",
      address: "91 Fort Street, Freetown, Sierra Leone",
      linkedin: "https://www.linkedin.com/in/apvia-sl-446918433/",
      facebook: "https://www.facebook.com/profile.php?id=61594107118933",
      instagram: "https://www.instagram.com/apviasierraleone/",
      twitter: "",
    };

    const settingsStmts = Object.entries(settings).map(([key, value]) => ({
      sql: "INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)",
      args: [key, value],
    }));
    await db.batch(settingsStmts);

    // Verify
    const teamCount = (await db.execute("SELECT COUNT(*) as count FROM team_members")).rows[0]?.count ?? 0;
    const settingsCount = (await db.execute("SELECT COUNT(*) as count FROM settings")).rows[0]?.count ?? 0;

    return NextResponse.json({
      success: true,
      message: `Seeded ${teamCount} team members and ${settingsCount} settings`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
