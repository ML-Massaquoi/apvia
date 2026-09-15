import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "apvia.db");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.pragma("foreign_keys = ON");
    initSchema(_db);
  }
  return _db;
}

function initSchema(db: Database.Database) {
  db.exec(`
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
