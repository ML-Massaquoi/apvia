"use client";

import { useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface InsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  overview: string;
  highlights: { label: string; value: string; desc: string }[];
  chart?: {
    type: "pie" | "bar";
    data: { name: string; value: number; color?: string }[];
    title: string;
  };
  cta?: string;
}

export default function InsightModal({ isOpen, onClose, title, overview, highlights, chart, cta }: InsightModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] rounded-t-2xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 sm:p-7">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{overview}</p>

          {/* Chart */}
          {chart && (
            <div className="mb-5 bg-[#f8f9fa] rounded-xl p-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{chart.title}</h4>
              <ResponsiveContainer width="100%" height={180}>
                {chart.type === "pie" ? (
                  <PieChart>
                    <Pie
                      data={chart.data}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {chart.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color || ["#052e16", "#14532d", "#d97706", "#166534", "#fbbf24", "#065f46"][index % 6]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                ) : (
                  <BarChart data={chart.data}>
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {chart.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color || "#052e16"} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-2">
                {chart.data.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-1.5 text-xs">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color || ["#052e16", "#14532d", "#d97706", "#166534", "#fbbf24", "#065f46"][i % 6] }} />
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-semibold text-[#1a1a1a]">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Metrics */}
          {highlights.length > 0 && (
            <div className="space-y-2.5 mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Metrics & Insights</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {highlights.map((h) => (
                  <div key={h.label} className="p-3 bg-[#f8f9fa] rounded-xl text-center">
                    <div className="text-lg font-bold text-[#14532d]">{h.value}</div>
                    <div className="text-[10px] text-gray-400 font-medium mb-1">{h.label}</div>
                    <p className="text-gray-500 text-[10px] leading-tight">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#052e16] text-white rounded-lg font-semibold text-sm hover:bg-[#14532d] transition-colors"
            >
              {cta || "Discuss This Opportunity"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
