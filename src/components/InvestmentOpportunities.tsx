"use client";

import { useState } from "react";
import InsightModal from "@/components/InsightModal";
import { investmentSectors } from "@/data/content";

export default function InvestmentOpportunities() {
  const [selectedSector, setSelectedSector] = useState<typeof investmentSectors[0] | null>(null);

  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Investment Opportunities in Sierra Leone</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Explore diverse investment sectors with high growth potential — click any sector for detailed metrics</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {investmentSectors.map((sector) => (
              <div
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className="card-white p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sector.icon} />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{sector.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">{sector.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                  View Details & Metrics
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightModal
        isOpen={!!selectedSector}
        onClose={() => setSelectedSector(null)}
        title={selectedSector?.modalTitle || ""}
        overview={selectedSector?.overview || ""}
        highlights={selectedSector?.highlights || []}
        chart={selectedSector?.chart}
        cta="Invest in This Sector"
      />
    </>
  );
}
