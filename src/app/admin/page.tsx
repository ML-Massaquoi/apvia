"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";

type Data = {
  totalMessages: number;
  unreadMessages: number;
  totalConsents: number;
  totalTeam: number;
  viewsPerDay: { date: string; views: number }[];
  messagesPerDay: { date: string; count: number }[];
  messagesBySource: { source: string; count: number }[];
  messagesByStatus: { status: string; count: number }[];
  recentMessages: { id: number; name: string; subject: string; source: string; status: string; created_at: string }[];
};

const GREEN = "#052e16";
const GOLD = "#fbbf24";
const TEAL = "#14532d";
const RED = "#ef4444";
const ORANGE = "#d97706";
const GRAY = "#9ca3af";
const SOURCE_COLORS: Record<string, string> = { contact: GREEN, chat: TEAL };
const STATUS_COLORS: Record<string, string> = { new: RED, read: ORANGE, replied: GREEN };

export default function AdminOverview() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/admin/analytics").then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="flex items-center justify-center h-64"><p className="text-gray-400">Loading...</p></div>;

  const stats = [
    { label: "Total Messages", value: data.totalMessages, href: "/admin/messages" },
    { label: "Unread", value: data.unreadMessages, href: "/admin/messages" },
    { label: "Cookie Consents", value: data.totalConsents, href: "/admin/consent" },
    { label: "Team Members", value: data.totalTeam, href: "/admin/team" },
  ];

  const messagesBySource = data.messagesBySource.map((d) => ({
    name: d.source === "contact" ? "Contact Form" : "Chat",
    value: d.count,
    color: SOURCE_COLORS[d.source] || GRAY,
  }));

  const messagesByStatus = data.messagesByStatus.map((d) => ({
    name: d.status.charAt(0).toUpperCase() + d.status.slice(1),
    value: d.count,
    color: STATUS_COLORS[d.status] || GRAY,
  }));

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#052e16]/20 transition-colors">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-[#1a1a1a] mt-1">{s.value}</p>
          </Link>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Messages Over Time */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Messages (Last 14 Days)</h2>
          {data.messagesPerDay.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No messages yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={data.messagesPerDay}>
                <defs>
                  <linearGradient id="msgGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={GREEN} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={GREEN} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => v.slice(5)} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} allowDecimals={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                <Area type="monotone" dataKey="count" stroke={GREEN} fill="url(#msgGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Messages by Source */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Messages by Source</h2>
          {messagesBySource.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No data yet</p>
          ) : (
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={160}>
                <PieChart>
                  <Pie data={messagesBySource} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={4} dataKey="value">
                    {messagesBySource.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {messagesBySource.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-xs text-gray-500">{d.name}</span>
                    <span className="text-xs font-semibold text-[#1a1a1a]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Messages by Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Message Status</h2>
          {messagesByStatus.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No data yet</p>
          ) : (
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={160}>
                <PieChart>
                  <Pie data={messagesByStatus} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={4} dataKey="value">
                    {messagesByStatus.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {messagesByStatus.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-xs text-gray-500">{d.name}</span>
                    <span className="text-xs font-semibold text-[#1a1a1a]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#1a1a1a]">Recent Messages</h2>
            <Link href="/admin/messages" className="text-xs text-[#052e16] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {data.recentMessages.length === 0 && (
              <p className="px-5 py-8 text-gray-400 text-sm text-center">No messages yet</p>
            )}
            {data.recentMessages.map((m) => (
              <div key={m.id} className="px-5 py-3 flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full shrink-0 ${m.status === "new" ? "bg-red-400" : "bg-gray-200"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1a1a1a] font-medium truncate">{m.name} — {m.subject || "No subject"}</p>
                  <p className="text-xs text-gray-400">{m.source} · {new Date(m.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
