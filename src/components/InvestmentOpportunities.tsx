"use client";

import { useState } from "react";
import InsightModal from "@/components/InsightModal";

const investmentSectors = [
  {
    title: "Mining & Minerals",
    desc: "Invest in Sierra Leone's rich mineral resources including diamonds, gold, rutile, and bauxite.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    modalTitle: "Mining & Minerals Investment Opportunity",
    overview: "Sierra Leone sits on one of Africa's richest mineral belts with an estimated $10 billion in untapped mineral wealth. The country is the world's largest rutile producer and 7th largest diamond producer, with significant bauxite, iron ore, and gold deposits.",
    highlights: [
      { label: "Total Value", value: "$10B+", desc: "Estimated untapped mineral wealth across Sierra Leone's mineral belt" },
      { label: "Diamond Rank", value: "#7 Global", desc: "7th largest diamond producer in the world" },
      { label: "Rutile", value: "#1 World", desc: "World's largest rutile deposits" },
      { label: "Export Revenue", value: "$165M/yr", desc: "Current annual mineral export revenue" },
      { label: "Active Mines", value: "15+", desc: "Operational mining sites" },
      { label: "Growth", value: "18% YoY", desc: "Year-on-year export growth" },
    ],
    chart: {
      type: "pie" as const,
      title: "Mineral Export Composition",
      data: [
        { name: "Diamonds", value: 35, color: "#052e16" },
        { name: "Rutile", value: 28, color: "#14532d" },
        { name: "Gold", value: 18, color: "#d97706" },
        { name: "Bauxite", value: 12, color: "#166534" },
        { name: "Iron Ore", value: 7, color: "#fbbf24" },
      ],
    },
  },
  {
    title: "Agriculture & Farming",
    desc: "Sustainable agriculture investments in cocoa, coffee, palm oil, and rice farming.",
    icon: "M12 22V8m0 0c-2 0-6 2-6 6m6-6c2 0 6 2 6 6m-12 0c0 4 2 6 6 6m0 0c4 0 6-2 6-6",
    modalTitle: "Agriculture & Farming Investment Opportunity",
    overview: "Sierra Leone has 5.4 million hectares of arable land, of which only 15% is currently cultivated. The agricultural sector employs 60% of the workforce and contributes 23% to GDP. High-demand exports include cocoa, coffee, palm oil, and cashew nuts. The government offers tax holidays, duty-free import of farm machinery, and free land allocation for agricultural investments. Our farming operations integrate modern techniques with traditional knowledge for maximum yield.",
    highlights: [
      { label: "Arable Land", value: "5.4M ha", desc: "Total arable land with only 15% currently cultivated — massive expansion potential" },
      { label: "GDP Share", value: "23%", desc: "Agriculture's contribution to national GDP, with plans to increase to 30% by 2030" },
      { label: "Workforce", value: "60%", desc: "Percentage of population employed in agriculture — ready and available labor" },
      { label: "Cocoa Output", value: "85K tons", desc: "Annual cocoa production, Sierra Leone is a premium origin for fine flavor cocoa" },
      { label: "Export Growth", value: "22% YoY", desc: "Year-on-year growth in agricultural exports driven by global demand" },
      { label: "Tax Holiday", value: "10 yrs", desc: "Government tax holiday for agricultural investments with duty-free machinery import" },
    ],
  },
  {
    title: "Construction & Infrastructure",
    desc: "Infrastructure development projects including roads, buildings, and utilities.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    modalTitle: "Construction & Infrastructure Investment Opportunity",
    overview: "Sierra Leone's infrastructure deficit represents a $15 billion opportunity. The government has prioritized road construction (12,000km network), port expansion at Freetown, water systems, and telecommunications under the National Infrastructure Plan. Public-Private Partnership frameworks with sovereign guarantees make infrastructure investments secure and profitable. Our projects include the Freetown Port Modernization, Highway Corridor Development, and Industrial Park Construction.",
    highlights: [
      { label: "Market Gap", value: "$15B", desc: "Estimated infrastructure investment gap creating massive opportunities" },
      { label: "PPP Projects", value: "8 Active", desc: "Government-backed Public-Private Partnership projects open for investment" },
      { label: "Road Network", value: "12,000 km", desc: "National road network being expanded and modernized with international funding" },
      { label: "Port Capacity", value: "3x Growth", desc: "Freetown Port expansion tripling cargo handling capacity by 2027" },
      { label: "Govt Guarantee", value: "Sovereign", desc: "Sovereign-backed guarantees ensuring secure returns on infrastructure investments" },
      { label: "Job Creation", value: "50K+", desc: "Estimated jobs to be created across all infrastructure projects by 2030" },
    ],
  },
  {
    title: "Import & Export Trade",
    desc: "Facilitate international trade connecting Sierra Leone with global markets.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    modalTitle: "Import & Export Trade Opportunity",
    overview: "Sierra Leone's strategic West African location provides access to over 400 million consumers in the ECOWAS region. The country offers 100% repatriation of profits, duty-free access to ECOWAS markets, and preferential trade agreements with the EU (Everything But Arms initiative). Key exports include minerals, agricultural products, and fisheries. Our trade division manages end-to-end supply chains from sourcing to international shipping.",
    highlights: [
      { label: "ECOWAS Reach", value: "400M+", desc: "Total consumer market accessible through ECOWAS free trade agreements" },
      { label: "Profit Repatriation", value: "100%", desc: "Full repatriation of profits, dividends, and capital — no restrictions" },
      { label: "EU Access", value: "Duty-Free", desc: "Preferential EU market access under Everything But Arms initiative" },
      { label: "Trade Growth", value: "15% YoY", desc: "Year-on-year growth in total trade volume driven by export diversification" },
      { label: "Port Throughput", value: "2M tons", desc: "Annual cargo throughput at Freetown deep-water port with expansion underway" },
      { label: "Trade Partners", value: "45+", desc: "Active trade partnerships across Africa, Europe, Asia, and the Americas" },
    ],
  },
  {
    title: "Real Estate & Property",
    desc: "Commercial and residential real estate development in Freetown and growing urban centers.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    modalTitle: "Real Estate & Property Investment Opportunity",
    overview: "Freetown's real estate market has seen 25% annual price appreciation driven by urbanization, a growing middle class, and limited supply. Commercial office vacancy rates are below 5%, and residential rental yields average 12-18% annually. The government has designated Special Economic Zones with tax incentives for real estate developers. Our portfolio includes commercial complexes, residential estates, and mixed-use developments.",
    highlights: [
      { label: "Price Growth", value: "25% YoY", desc: "Annual property price appreciation in Freetown driven by demand-supply gap" },
      { label: "Rental Yield", value: "12-18%", desc: "Average annual rental yields for well-located commercial and residential properties" },
      { label: "Vacancy Rate", value: "<5%", desc: "Commercial office vacancy rate indicating severe supply shortage" },
      { label: "Urbanization", value: "4.2% pa", desc: "Annual urbanization rate driving continuous demand for housing and offices" },
      { label: "SEZ Benefits", value: "Tax-Free", desc: "Special Economic Zone incentives including tax holidays and duty exemptions" },
      { label: "ROI Period", value: "4-6 yrs", desc: "Average payback period for real estate investments in prime locations" },
    ],
  },
  {
    title: "Energy & Utilities",
    desc: "Renewable energy and utility infrastructure investments.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    modalTitle: "Energy & Utilities Investment Opportunity",
    overview: "Sierra Leone's energy sector represents a $4.2 billion investment opportunity with a current electrification rate of just 26%. The National Energy Plan targets 1GW of new capacity by 2030, primarily through renewables. With over 2,000 hours of sunshine annually and abundant river systems for hydropower, the country is ideal for clean energy investments. IPP frameworks with guaranteed off-take agreements are now in place.",
    highlights: [
      { label: "Market Size", value: "$4.2B", desc: "Total investment opportunity in Sierra Leone's energy sector through 2030" },
      { label: "Target Capacity", value: "1 GW", desc: "New power generation capacity to be added by 2030 under the National Energy Plan" },
      { label: "Electrification", value: "26%", desc: "Current electrification rate with massive room for expansion and impact" },
      { label: "Solar Hours", value: "2,000+/yr", desc: "Annual sunshine hours making Sierra Leone ideal for solar energy projects" },
      { label: "Mini-Grids", value: "200+", desc: "Identified mini-grid sites for off-grid and mini-grid power solutions" },
      { label: "IPP Licenses", value: "12 Issued", desc: "Independent Power Producer licenses issued with guaranteed off-take agreements" },
    ],
  },
];

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
                key={sector.title}
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
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">{sector.desc}</p>
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
