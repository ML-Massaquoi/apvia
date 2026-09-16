"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend,
} from "recharts";

type Data = {
  totalMessages: number;
  unreadMessages: number;
  totalConsents: number;
  totalTeam: number;
  viewsPerDay: { date: string; views: number }[];
  topPages: { path: string; views: number }[];
  messagesBySource: { source: string; count: number }[];
  messagesByStatus: { status: string; count: number }[];
  consentAnalytics: number;
  consentMarketing: number;
  messagesPerDay: { date: string; count: number }[];
};

const GREEN = "#052e16";
const GOLD = "#fbbf24";
const TEAL = "#14532d";
const RED = "#ef4444";
const ORANGE = "#d97706";
const GRAY = "#9ca3af";
const SOURCE_COLORS: Record<string, string> = { contact: GREEN, chat: TEAL };
const STATUS_COLORS: Record<string, string> = { new: RED, read: ORANGE, replied: GREEN };

export default function AdminAnalytics() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/admin/analytics").then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="flex items-center justify-center h-64"><p className="text-gray-400">Loading...</p></div>;

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

  const consentData = [
    { name: "Analytics", value: data.consentAnalytics, color: GREEN },
    { name: "Marketing", value: data.consentMarketing, color: GOLD },
    { name: "Neither", value: Math.max(0, data.totalConsents - data.consentAnalytics - data.consentMarketing), color: GRAY },
  ].filter((d) => d.value > 0);

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Messages", value: data.totalMessages, accent: GREEN },
          { label: "Unread", value: data.unreadMessages, accent: RED },
          { label: "Cookie Consents", value: data.totalConsents, accent: TEAL },
          { label: "Team Members", value: data.totalTeam, accent: ORANGE },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: s.accent }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Row 1: Views + Messages Over Time */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Views Over Time */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Page Views (Last 30 Days)</h2>
          {data.viewsPerDay.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-12">No page view data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={data.viewsPerDay}>
                <defs>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={GREEN} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={GREEN} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => v.slice(5)} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} allowDecimals={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                <Area type="monotone" dataKey="views" stroke={GREEN} fill="url(#viewsGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Messages Over Time */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Messages (Last 14 Days)</h2>
          {data.messagesPerDay.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-12">No messages yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={data.messagesPerDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => v.slice(5)} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} allowDecimals={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                <Bar dataKey="count" fill={TEAL} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Chart Row 2: Source + Status Pie Charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Messages by Source */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">By Source</h2>
          {messagesBySource.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No data</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={messagesBySource} cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={4} dataKey="value">
                    {messagesBySource.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {messagesBySource.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-[10px] text-gray-500">{d.name}: {d.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Message Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">By Status</h2>
          {messagesByStatus.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No data</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={messagesByStatus} cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={4} dataKey="value">
                    {messagesByStatus.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {messagesByStatus.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-[10px] text-gray-500">{d.name}: {d.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Cookie Consent Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Cookie Consent</h2>
          {data.totalConsents === 0 ? (
            <p className="text-gray-400 text-xs text-center py-8">No data</p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={consentData} cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={4} dataKey="value">
                    {consentData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {consentData.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-[10px] text-gray-500">{d.name}: {d.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Top Pages Bar Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Top Pages</h2>
        {data.topPages.length === 0 ? (
          <p className="text-gray-400 text-xs text-center py-8">No page view data yet</p>
        ) : (
          <ResponsiveContainer width="100%" height={Math.max(200, data.topPages.length * 36)}>
            <BarChart data={data.topPages} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: "#9ca3af" }} allowDecimals={false} />
              <YAxis type="category" dataKey="path" tick={{ fontSize: 10, fill: "#9ca3af" }} width={150} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
              <Bar dataKey="views" fill={GREEN} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
