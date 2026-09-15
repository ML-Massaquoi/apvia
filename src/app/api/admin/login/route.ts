import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSessionToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!verifyPassword(password)) {
      return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
    }

    const token = createSessionToken();
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60, // 24 hours
    });
    return res;
  } catch {
    return NextResponse.json({ success: false, error: "Failed to login" }, { status: 500 });
  }
}
