"use client";

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const sectorData = [
  { name: "Mining & Minerals", value: 35, color: "#052e16" },
  { name: "Energy & Power", value: 25, color: "#14532d" },
  { name: "Agriculture", value: 18, color: "#d97706" },
  { name: "Construction", value: 12, color: "#166534" },
  { name: "Trade & Export", value: 10, color: "#fbbf24" },
];

const gdpGrowthData = [
  { year: "2020", growth: -2.1, region: "Sierra Leone" },
  { year: "2021", growth: 3.1, region: "Sierra Leone" },
  { year: "2022", growth: 4.2, region: "Sierra Leone" },
  { year: "2023", growth: 4.8, region: "Sierra Leone" },
  { year: "2024", growth: 5.4, region: "Sierra Leone" },
  { year: "2025*", growth: 6.1, region: "Sierra Leone" },
];

const investmentReturns = [
  { sector: "Mining", roi: 22, risk: "Medium" },
  { sector: "Energy", roi: 18, risk: "Low" },
  { sector: "Agriculture", roi: 15, risk: "Low" },
  { sector: "Real Estate", roi: 20, risk: "Medium" },
  { sector: "Infrastructure", roi: 16, risk: "Low" },
];

const COLORS = ["#052e16", "#14532d", "#d97706", "#166534", "#fbbf24"];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number | string; name: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-bold text-[#1a1a1a]">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-sm text-gray-600">{entry.name}: <span className="font-semibold text-[#14532d]">{entry.value}%</span></p>
        ))}
      </div>
    );
  }
  return null;
};

export default function InvestorCharts() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="gold-line mx-auto mb-4 sm:mb-5" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Investment Landscape at a Glance</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Data-driven insights into Sierra Leone&apos;s investment potential</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pie Chart - Sector Allocation */}
          <div className="bg-[#f8f9fa] rounded-2xl p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1">Sector Investment Split</h3>
            <p className="text-gray-400 text-xs mb-4">Estimated opportunity distribution by sector</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {sectorData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5 text-xs">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 truncate">{item.name}</span>
                  <span className="font-semibold text-[#1a1a1a] ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart - GDP Growth */}
          <div className="bg-[#f8f9fa] rounded-2xl p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1">GDP Growth Trend</h3>
            <p className="text-gray-400 text-xs mb-4">Annual GDP growth rate (%)</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={gdpGrowthData}>
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} domain={[-5, 10]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="growth" name="GDP Growth" radius={[4, 4, 0, 0]}>
                  {gdpGrowthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.growth < 0 ? "#dc2626" : "#052e16"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
              <span>* 2025 projected</span>
            </div>
          </div>

          {/* ROI Comparison */}
          <div className="bg-[#f8f9fa] rounded-2xl p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1">Projected ROI by Sector</h3>
            <p className="text-gray-400 text-xs mb-4">Expected annual returns (%)</p>
            <div className="space-y-3">
              {investmentReturns.map((item) => (
                <div key={item.sector}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[#1a1a1a]">{item.sector}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        item.risk === "Low" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>{item.risk} Risk</span>
                      <span className="text-sm font-bold text-[#14532d]">{item.roi}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${(item.roi / 25) * 100}%`,
                        background: `linear-gradient(90deg, #052e16, #14532d)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-[#052e16] rounded-lg text-center">
              <p className="text-white text-xs font-medium">Average Portfolio Return</p>
              <p className="text-[#fbbf24] text-xl font-bold">18.2% p.a.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
