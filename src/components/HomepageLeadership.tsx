"use client";

import { useState } from "react";
import Link from "next/link";
import InsightModal from "@/components/InsightModal";

const leadershipData = [
  {
    role: "Managing Director",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    overview: "Our Managing Director provides strategic leadership and vision for APVIA Ltd, steering the company towards its goal of becoming the leading integrated multi-sectoral enterprise in West Africa. With deep expertise in business development and international relations, the MD ensures alignment between operational execution and long-term strategic objectives.",
    highlights: [
      { label: "Experience", value: "20+ yrs", desc: "Senior leadership experience across multiple sectors and countries" },
      { label: "Strategy", value: "11 Divisions", desc: "Oversight of all 11 business verticals and their strategic direction" },
      { label: "Partnerships", value: "25+", desc: "Strategic partnerships established under current leadership" },
      { label: "Growth", value: "40% YoY", desc: "Company revenue growth achieved under MD's leadership" },
      { label: "Markets", value: "5+", desc: "West African markets penetrated under strategic direction" },
      { label: "Team", value: "200+", desc: "Employees led across all divisions and project sites" },
    ],
  },
  {
    role: "Operations",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    overview: "Our Operations leadership ensures seamless execution of projects and services across all divisions. With a focus on efficiency, quality, and safety, the operations team drives day-to-day performance while maintaining the highest standards of project delivery and client satisfaction.",
    highlights: [
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "Safety", value: "Zero Harm", desc: "Zero lost-time incidents across all operations" },
      { label: "Efficiency", value: "15% YoY", desc: "Year-on-year improvement in operational efficiency" },
      { label: "Quality", value: "4.8/5", desc: "Average quality rating from project assessments" },
      { label: "Sites", value: "20+", desc: "Active project sites managed simultaneously" },
      { label: "Budget", value: "96%", desc: "Projects completed within approved budget" },
    ],
  },
  {
    role: "Finance",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    overview: "Our Finance leadership provides robust financial stewardship, ensuring sound fiscal management, investor confidence, and sustainable growth. The finance team manages capital allocation, risk management, financial reporting, and compliance across all business divisions.",
    highlights: [
      { label: "Revenue", value: "$50M+", desc: "Annual revenue managed across all business divisions" },
      { label: "ROI", value: "18-22%", desc: "Average return on investment across project portfolio" },
      { label: "Growth", value: "35% YoY", desc: "Revenue growth rate under current financial leadership" },
      { label: "Compliance", value: "100%", desc: "Full regulatory and tax compliance across all markets" },
      { label: "Audit", value: "Clean", desc: "Clean audit opinion for consecutive years" },
      { label: "Investors", value: "15+", desc: "Active investor relationships and capital partnerships" },
    ],
  },
  {
    role: "Strategy",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    overview: "Our Strategy leadership drives market analysis, business development, and long-term planning to position APVIA Ltd for sustainable growth. The strategy team identifies new market opportunities, evaluates partnerships, and develops roadmaps for expansion across West Africa.",
    highlights: [
      { label: "Markets", value: "5+", desc: "West African markets analyzed and entered under strategic guidance" },
      { label: "Pipeline", value: "$500M+", desc: "Strategic opportunity pipeline identified and being pursued" },
      { label: "Diversification", value: "11 Sectors", desc: "Business verticals under the strategic diversification plan" },
      { label: "Research", value: "Quarterly", desc: "Market intelligence reports and competitive analysis" },
      { label: "Partnerships", value: "12 New", desc: "Strategic alliances formed in the last 24 months" },
      { label: "Forecast", value: "5 Year", desc: "Strategic growth roadmap with 5-year projections" },
    ],
  },
];

export default function HomepageLeadership() {
  const [selected, setSelected] = useState<typeof leadershipData[0] | null>(null);

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="max-w-lg">
              <div className="gold-line mb-4 sm:mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 sm:mb-5">
                Leadership That <span className="text-gradient-gold">Drives Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">APVIA Ltd is led by a highly experienced and capable management team with diverse backgrounds in business, engineering, finance, law, diplomacy, and international development.</p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Our leadership combines local market intelligence with international standards of excellence, delivering end-to-end solutions that create lasting value for stakeholders.</p>
              <Link href="/team" className="btn-primary text-sm sm:text-base">Meet Our Team</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {leadershipData.map((item) => (
                <div
                  key={item.role}
                  onClick={() => setSelected(item)}
                  className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-2">{item.role}</p>
                  <span className="inline-flex items-center gap-1 text-[#14532d] text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InsightModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.role} Leadership` : ""}
        overview={selected?.overview || ""}
        highlights={selected?.highlights || []}
        cta="Contact Leadership"
      />
    </>
  );
}
