"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type DashboardData = {
  totalMessages: number;
  unreadMessages: number;
  totalConsents: number;
  totalTeam: number;
  recentMessages: { id: number; name: string; email: string; subject: string; source: string; status: string; created_at: string }[];
};

export default function AdminOverview() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/api/admin/analytics").then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="flex items-center justify-center h-64"><p className="text-gray-400">Loading...</p></div>;

  const stats = [
    { label: "Total Messages", value: data.totalMessages, color: "bg-[#052e16]", href: "/admin/messages" },
    { label: "Unread", value: data.unreadMessages, color: "bg-red-500", href: "/admin/messages" },
    { label: "Cookie Consents", value: data.totalConsents, color: "bg-[#14532d]", href: "/admin/consent" },
    { label: "Team Members", value: data.totalTeam, color: "bg-[#d97706]", href: "/admin/team" },
  ];

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
  );
}
