import { createClient, type Client } from "@libsql/client";

const TURSO_URL = process.env.TURSO_DATABASE_URL || "libsql://apvia-andymojo21.aws-us-west-2.turso.io";
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN || "";

let _db: Client | null = null;

export function getDb(): Client {
  if (!_db) {
    _db = createClient({ url: TURSO_URL, authToken: TURSO_TOKEN });
  }
  return _db;
}

export async function initSchema() {
  const db = getDb();
  await db.executeMultiple(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT DEFAULT '',
      message TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'contact',
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS cookie_consents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      necessary INTEGER NOT NULL DEFAULT 1,
      analytics INTEGER NOT NULL DEFAULT 0,
      marketing INTEGER NOT NULL DEFAULT 0,
      user_agent TEXT DEFAULT '',
      ip TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS team_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      bio TEXT DEFAULT '',
      photo_path TEXT DEFAULT '',
      email TEXT DEFAULT '',
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

export type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  source: "contact" | "chat";
  status: "new" | "read" | "replied";
  created_at: string;
};

export type CookieConsent = {
  id: number;
  necessary: number;
  analytics: number;
  marketing: number;
  user_agent: string;
  ip: string;
  created_at: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo_path: string;
  email: string;
  sort_order: number;
  created_at: string;
};

export type Setting = {
  key: string;
  value: string;
};
