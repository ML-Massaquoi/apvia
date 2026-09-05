"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import InsightModal from "@/components/InsightModal";
import { companyData } from "@/data/company";

const impactMetrics = [
  { label: "Sectors", value: "11", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Countries", value: "5+", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Projects", value: "50+", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { label: "Jobs Created", value: "5K+", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
];

const visionChartData = [
  { name: "Mining", value: 25, color: "#052e16" },
  { name: "Construction", value: 20, color: "#14532d" },
  { name: "Trade", value: 18, color: "#d97706" },
  { name: "Energy", value: 15, color: "#166534" },
  { name: "Agriculture", value: 12, color: "#fbbf24" },
  { name: "Maritime", value: 10, color: "#065f46" },
];

const missionChartData = [
  { name: "Quality", value: 98, color: "#052e16" },
  { name: "Safety", value: 100, color: "#14532d" },
  { name: "Sustainability", value: 95, color: "#d97706" },
  { name: "Partnerships", value: 92, color: "#166534" },
];

export default function HomepageVisionMission() {
  const [selectedVision, setSelectedVision] = useState(false);
  const [selectedMission, setSelectedMission] = useState(false);

  return (
    <>
      {/* Vision & Mission Hero Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #052e16 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
              Building Africa&apos;s <span className="text-[#14532d]">Future</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Driving sustainable economic development across West Africa through integrated, multi-sectoral excellence
            </p>
          </div>

          {/* Impact Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-3 p-3 sm:p-4 bg-[#f8f9fa] rounded-xl border border-gray-100 hover:border-[#14532d]/20 transition-colors">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#052e16] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={metric.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#052e16]">{metric.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            {/* Vision Card */}
            <div
              onClick={() => setSelectedVision(true)}
              className="group relative bg-gradient-to-br from-[#052e16] to-[#14532d] rounded-2xl p-6 sm:p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#fbbf24]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
                    <p className="text-white/40 text-xs">Where we&apos;re headed</p>
                  </div>
                </div>

                <p className="text-white/90 font-medium text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  &ldquo;{companyData.vision}&rdquo;
                </p>

                {/* Mini Chart */}
                <div className="bg-white/5 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 backdrop-blur-sm">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider font-medium mb-2">Sector Focus</p>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={visionChartData} cx="50%" cy="50%" innerRadius={20} outerRadius={35} paddingAngle={3} dataKey="value">
                            {visionChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {visionChartData.map((item) => (
                        <div key={item.name} className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                          <span className="text-white/60">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#fbbf24] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Explore Our Vision</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              onClick={() => setSelectedMission(true)}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 cursor-pointer hover:shadow-2xl hover:border-[#14532d]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#052e16]/3 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a]">Our Mission</h3>
                    <p className="text-gray-400 text-xs">What drives us</p>
                  </div>
                </div>

                <p className="text-[#14532d] font-medium text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  &ldquo;{companyData.mission}&rdquo;
                </p>

                {/* Mission Performance Bars */}
                <div className="bg-[#f8f9fa] rounded-xl p-3 sm:p-4 mb-4 sm:mb-5">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider font-medium mb-3">Performance Standards</p>
                  <div className="space-y-2.5">
                    {missionChartData.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600 font-medium">{item.name}</span>
                          <span className="text-xs font-bold text-[#052e16]">{item.value}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#14532d] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Discover Our Mission</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <InsightModal
        isOpen={selectedVision}
        onClose={() => setSelectedVision(false)}
        title="Our Vision"
        overview={companyData.visionDescription}
        highlights={[
          { label: "Sectors", value: "11", desc: "Core business verticals across West Africa" },
          { label: "Markets", value: "5+", desc: "West African countries with active operations" },
          { label: "Projects", value: "50+", desc: "Major projects delivered across all sectors" },
          { label: "Partners", value: "25+", desc: "International strategic partnerships" },
          { label: "Experience", value: "30+ yrs", desc: "Combined leadership experience in African markets" },
          { label: "Aspiration", value: "$1B", desc: "Target enterprise value within the next decade" },
        ]}
        chart={{
          type: "pie",
          title: "Sector Investment Focus",
          data: visionChartData,
        }}
        cta="Discuss Partnership Opportunities"
      />

      {/* Mission Modal */}
      <InsightModal
        isOpen={selectedMission}
        onClose={() => setSelectedMission(false)}
        title="Our Mission"
        overview={companyData.mission}
        highlights={companyData.missionActions.map((action, i) => ({
          label: `Action ${i + 1}`,
          value: "Active",
          desc: action,
        }))}
        chart={{
          type: "bar",
          title: "Mission Delivery Performance",
          data: missionChartData,
        }}
        cta="Start a Conversation"
      />
    </>
  );
}
