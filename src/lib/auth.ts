const SECRET = process.env.ADMIN_SECRET || "apvia-admin-secret-change-me";

function base64url(input: string): string {
  return Buffer.from(input).toString("base64url");
}

function base64urlDecode(input: string): string {
  return Buffer.from(input, "base64url").toString();
}

async function hmacSign(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return Buffer.from(sig).toString("base64url");
}

export async function createSessionToken(): Promise<string> {
  const payload = JSON.stringify({ ts: Date.now() });
  const data = base64url(payload);
  const sig = await hmacSign(data);
  return `${data}.${sig}`;
}

export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return false;
    const expected = await hmacSign(data);
    if (sig !== expected) return false;
    const payload = JSON.parse(base64urlDecode(data));
    return Date.now() - payload.ts < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function verifyPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD || "apvia2024";
  return password === adminPassword;
}
