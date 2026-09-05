"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      setVisible(scrollTop + clientHeight >= scrollHeight - 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Back to top"
    >
      <div className="relative flex items-center gap-2 bg-[#052e16] hover:bg-[#14532d] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm font-semibold hidden sm:inline">Top</span>
      </div>
    </button>
  );
}
