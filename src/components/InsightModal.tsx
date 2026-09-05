"use client";

import { useEffect } from "react";

interface InsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  overview: string;
  highlights: { label: string; value: string; desc: string }[];
  cta?: string;
}

export default function InsightModal({ isOpen, onClose, title, overview, highlights, cta }: InsightModalProps) {
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
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] rounded-t-2xl" />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 sm:p-7">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{overview}</p>

          {highlights.length > 0 && (
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Metrics & Insights</h4>
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-4 p-3 bg-[#f8f9fa] rounded-xl">
                  <div className="w-16 text-center shrink-0">
                    <div className="text-lg font-bold text-[#14532d]">{h.value}</div>
                    <div className="text-[10px] text-gray-400 font-medium">{h.label}</div>
                  </div>
                  <div className="border-l border-gray-200 pl-4">
                    <p className="text-gray-600 text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

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
