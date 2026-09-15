import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || "apvia-admin-secret-change-me";

export function createSessionToken(): string {
  const payload = JSON.stringify({ ts: Date.now() });
  const data = Buffer.from(payload).toString("base64url");
  const sig = crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return false;
    const expected = crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
    if (sig !== expected) return false;
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    // Token expires after 24 hours
    return Date.now() - payload.ts < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function verifyPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD || "apvia2024";
  return password === adminPassword;
}
