"use client";

import { useEffect, useState } from "react";

type AnalyticsData = {
  totalMessages: number;
  unreadMessages: number;
  totalConsents: number;
  totalTeam: number;
  viewsPerDay: { date: string; views: number }[];
  topPages: { path: string; views: number }[];
};

export default function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetch("/api/admin/analytics").then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="flex items-center justify-center h-64"><p className="text-gray-400">Loading...</p></div>;

  const maxViews = Math.max(...data.viewsPerDay.map((d) => d.views), 1);

  return (
    <div className="space-y-6">
      {/* Views Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Page Views (Last 30 Days)</h2>
        {data.viewsPerDay.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-8">No page view data yet. Add page view tracking to collect this data.</p>
        ) : (
          <div className="flex items-end gap-1 h-40">
            {data.viewsPerDay.map((d) => (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-[#052e16] rounded-t"
                  style={{ height: `${(d.views / maxViews) * 100}%`, minHeight: 4 }}
                  title={`${d.date}: ${d.views} views`}
                />
                <span className="text-[9px] text-gray-300">{d.date.slice(5)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Top Pages</h2>
        {data.topPages.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-4">No data yet</p>
        ) : (
          <div className="space-y-2">
            {data.topPages.map((p) => (
              <div key={p.path} className="flex items-center gap-3">
                <span className="text-xs text-[#1a1a1a] font-mono flex-1 truncate">{p.path}</span>
                <div className="w-32 bg-gray-100 rounded-full h-2">
                  <div className="bg-[#052e16] h-2 rounded-full" style={{ width: `${(p.views / (data.topPages[0]?.views || 1)) * 100}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-12 text-right">{p.views}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
