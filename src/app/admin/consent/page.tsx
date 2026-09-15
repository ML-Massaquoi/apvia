"use client";

import { useEffect, useState } from "react";

type Consent = {
  id: number;
  necessary: number;
  analytics: number;
  marketing: number;
  user_agent: string;
  ip: string;
  created_at: string;
};

export default function AdminConsent() {
  const [records, setRecords] = useState<Consent[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("/api/admin/consent")
      .then((r) => r.json())
      .then((d) => { setRecords(d.records); setTotal(d.total); });
  }, []);

  const exportCsv = () => {
    window.open("/api/admin/consent?export=csv", "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">{total} records</p>
        <button onClick={exportCsv} className="px-4 py-2 bg-[#052e16] text-white rounded-lg text-xs font-medium hover:bg-[#14532d] transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-200">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">ID</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Necessary</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Analytics</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Marketing</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">IP</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {records.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-12 text-gray-400 text-center text-sm">No consent records yet</td></tr>
              )}
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-[#f8f9fa]">
                  <td className="px-5 py-3 text-[#1a1a1a]">{r.id}</td>
                  <td className="px-5 py-3"><span className={`text-xs font-medium ${r.necessary ? "text-green-600" : "text-red-500"}`}>{r.necessary ? "Yes" : "No"}</span></td>
                  <td className="px-5 py-3"><span className={`text-xs font-medium ${r.analytics ? "text-green-600" : "text-red-500"}`}>{r.analytics ? "Yes" : "No"}</span></td>
                  <td className="px-5 py-3"><span className={`text-xs font-medium ${r.marketing ? "text-green-600" : "text-red-500"}`}>{r.marketing ? "Yes" : "No"}</span></td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{r.ip || "—"}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{new Date(r.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
