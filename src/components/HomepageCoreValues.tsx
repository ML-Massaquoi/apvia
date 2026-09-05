"use client";

import { useState } from "react";
import Link from "next/link";
import InsightModal from "@/components/InsightModal";
import { coreValuesContent } from "@/data/content";

const iconPaths: Record<string, string> = {
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  leaf: "M12 21a8 8 0 008-8c0-3.75-2.95-7.56-6.5-9.48a1.5 1.5 0 00-2 0C8.95 11.44 6 15.25 6 19a8 8 0 006 2z M12 21v-6",
  users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
};

export default function HomepageCoreValues() {
  const [selected, setSelected] = useState<typeof coreValuesContent[0] | null>(null);

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">The principles that guide every decision and action at APVIA Ltd</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValuesContent.map((value) => (
              <div
                key={value.title}
                onClick={() => setSelected(value)}
                className="card-white p-6 sm:p-8 text-center cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#052e16] flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[value.icon] || iconPaths.star} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm mb-3">{value.description}</p>
                <span className="inline-flex items-center gap-1 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                  Learn More
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `Our Value: ${selected.title}` : ""}
        overview={selected?.modalOverview || ""}
        highlights={selected?.highlights || []}
        chart={selected?.chart}
        cta="Partner With Us"
      />
    </>
  );
}
