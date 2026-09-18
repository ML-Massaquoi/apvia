import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flagship Projects | APVIA Ltd",
  description:
    "APVIA Ltd aligns with President Bio's Big Five Game Changers — flagship national development projects in agriculture, energy, youth employment, infrastructure, and mining driving Sierra Leone's transformation.",
  keywords: [
    "APVIA flagship projects",
    "Big Five Game Changers",
    "President Bio projects Sierra Leone",
    "Feed Salone",
    "Sierra Leone energy infrastructure",
    "Sierra Leone mining investment",
    "youth employment Sierra Leone",
    "Blue Economy Sierra Leone",
    "invest Sierra Leone",
  ],
  openGraph: {
    title: "Flagship Projects | APVIA Ltd",
    description:
      "How APVIA Ltd aligns with Sierra Leone's Big Five Game Changers — flagship national development projects driving transformation.",
    url: "https://www.apvia-sl.com/flagship",
  },
};

const projects = [
  {
    id: "feed-salone",
    num: "01",
    title: "Feed Salone",
    tagline: "Agricultural Transformation",
    color: "#059669",
    colorLight: "#d1fae5",
    description:
      "The centrepiece of President Bio's Medium-Term National Development Plan 2024–2030. Feed Salone transforms Sierra Leone from a food-importing to a food-producing nation through mechanisation, irrigation, seed innovation, and agro-processing.",
    stats: [
      { value: "28%→13%", label: "Food insecurity decline", sub: "2023–2025 (WFP)" },
      { value: "$45M+", label: "Agribusiness mobilised", sub: "Credit, grants & blended finance" },
      { value: "30+", label: "New seed varieties", sub: "Rice, cassava & maize" },
      { value: "270K", label: "Children fed daily", sub: "40% locally sourced rice" },
    ],
    pillars: ["Mechanisation & Irrigation", "Seeds & Input Systems", "Aggregation & Processing", "Agricultural Finance", "AgTech & Climate Smart", "Women & Youth Empowerment"],
    investments: [
      { name: "Special Agro-Processing Zone", value: "$75M", location: "Kambia & Port Loko" },
      { name: "Livestock & Livelihood Project", value: "$105M", location: "11 districts, 62,000 households" },
      { name: "World Bank SAVIG Project", value: "$40M", location: "Rice, maize, onion, cocoa" },
      { name: "EIB SME Facility", value: "€10M", location: "Agricultural SMEs" },
      { name: "UNCDF Blended Finance", value: "€7M", location: "Women & youth agribusiness" },
      { name: "Tormabum–Gbondapi Irrigation", value: "5,000 ha", location: "Northern Province" },
    ],
    apviaRole: {
      title: "How APVIA Delivers",
      items: [
        "Provide agricultural mechanisation services — tractors, harvesters, and irrigation equipment to smallholder farmers",
        "Build and operate agro-processing facilities and cold chain logistics across production zones",
        "Lead supply chain management from farm gate to export markets, reducing post-harvest losses",
        "Deploy mobile agritech platforms connecting farmers to markets, finance, and extension services",
        "Partner with international development banks to co-fund agricultural infrastructure projects",
      ],
    },
    investorBenefits: {
      title: "Investor Returns",
      subtitle: "Agriculture offers stable, long-term returns backed by government policy and international funding",
      items: [
        { label: "Projected ROI", value: "18–24%", detail: "Over 5-year investment horizon" },
        { label: "Market Size", value: "$2.1B", detail: "Sierra Leone agricultural GDP" },
        { label: "Government Guarantee", value: "Policy-backed", detail: "MTNDP 2024–2030 priority" },
        { label: "Export Potential", value: "Cocoa, Rice, Cashew", detail: "EU & ECOWAS markets" },
      ],
    },
  },
  {
    id: "energy",
    num: "02",
    title: "Energy & Solar Infrastructure",
    tagline: "Powering Sierra Leone's Green Future",
    color: "#d97706",
    colorLight: "#fef3c7",
    description:
      "Sierra Leone is investing massively in clean energy — deploying solar minigrids, expanding hydroelectric capacity, and building a national power grid. The goal: 100% electrification by 2040 through renewables and grid expansion.",
    stats: [
      { value: "€34M", label: "SOGREA solar minigrid", sub: "25,000 households, 60 communities" },
      { value: "40 MW", label: "Newton Solar Plant", sub: "Largest solar plant, commissioned 2026" },
      { value: "108 MW", label: "Nant Power Plant", sub: "Under construction, grid connection" },
      { value: "100 MW", label: "Bumbuna Hydro target", sub: "Doubling capacity with $76M expansion" },
    ],
    pillars: ["Off-grid Solar Minigrids", "Hydroelectric Expansion", "Grid Densification", "Clean Cooking", "Green Hydrogen & EVs"],
    investments: [
      { name: "SOGREA Solar Minigrids", value: "€34M", location: "60 rural communities" },
      { name: "Newton Solar Power Plant", value: "40 MW", location: "Operational 2026" },
      { name: "Nant Power Plant", value: "108 MW", location: "Under construction" },
      { name: "Bumbuna II Hydro Expansion", value: "$76M", location: "OPEC + BADEA financing" },
      { name: "Lungi Solar Plant", value: "10 MW", location: "Nearing completion" },
      { name: "Moyamba Solar Pilot", value: "1 MW", location: "3,000 households connected" },
    ],
    apviaRole: {
      title: "How APVIA Delivers",
      items: [
        "Engineering, procurement and construction (EPC) for solar minigrid and hydroelectric projects",
        "Supply and installation of power distribution infrastructure across rural and urban areas",
        "Maintenance and operations management for energy assets post-commissioning",
        "Import and distribution of solar panels, inverters, battery storage systems, and grid equipment",
        "Project management and technical advisory for international energy developers entering Sierra Leone",
      ],
    },
    investorBenefits: {
      title: "Investor Returns",
      subtitle: "Energy infrastructure offers guaranteed returns through power purchase agreements and government concessions",
      items: [
        { label: "Projected ROI", value: "20–30%", detail: "Through PPA guaranteed revenue" },
        { label: "Energy Market Gap", value: "85%", detail: "Currently only 15% electrification" },
        { label: "Government Target", value: "100%", detail: "Universal access by 2040" },
        { label: "Carbon Credits", value: "Additional", detail: "Revenue from clean energy credits" },
      ],
    },
  },
  {
    id: "youth",
    num: "03",
    title: "Youth Employment Scheme",
    tagline: "500,000 Pathways to Dignity by 2030",
    color: "#2563eb",
    colorLight: "#dbeafe",
    description:
      "With over 70% of Sierra Leone's population under 35, YES is the Government's bold response — creating 500,000 new jobs through skills training, entrepreneurship support, agribusiness, and creative industries by 2030.",
    stats: [
      { value: "500K", label: "Jobs target by 2030", sub: "Public and private sectors" },
      { value: "120K+", label: "New entrants/year", sub: "Entering the labour force" },
      { value: "70%+", label: "Population under 35", sub: "Demographic dividend" },
      { value: "$20M", label: "AfDB youth grant", sub: "Climate-smart agriculture jobs" },
    ],
    pillars: ["Employment Promotion", "TVET & Digital Skills", "Youth Agribusiness", "Creative Industries", "Youth Protection"],
    investments: [
      { name: "500,000 Jobs Programme", value: "YES", location: "National scope by 2030" },
      { name: "AfDB Youth & Women Grant", value: "$20M", location: "Climate-smart agriculture" },
      { name: "Youth Employment Portal", value: "Digital", location: "National job matching platform" },
      { name: "UniPod Sierra Leone", value: "UNDP", location: "Innovation hub, Fourah Bay College" },
      { name: "Skills Certification", value: "228 youth", location: "Mechanical, construction, electrical" },
      { name: "Rural Youth Assets", value: "Fishing boats", location: "Tricycles & start-up grants" },
    ],
    apviaRole: {
      title: "How APVIA Delivers",
      items: [
        "Create direct employment through construction, mining, and logistics operations — hiring locally first",
        "Establish apprenticeship and vocational training programmes in partnership with TVET institutions",
        "Provide mentorship and seed funding for youth-led agribusiness and SME ventures",
        "Deploy digital skills bootcamps in coding, data analytics, and digital marketing",
        "Partner with UNDP and World Bank on youth employment and entrepreneurship initiatives",
      ],
    },
    investorBenefits: {
      title: "Investor Returns",
      subtitle: "Youth-focused investments unlock Sierra Leone's demographic dividend with strong social impact returns",
      items: [
        { label: "Projected ROI", value: "15–22%", detail: "Social impact + financial returns" },
        { label: "Labour Force Growth", value: "3.2%", detail: "Annual workforce expansion" },
        { label: "Impact Multiplier", value: "4.5x", detail: "Each job creates 4.5 indirect jobs" },
        { label: "ESG Alignment", value: "SDG 8", detail: "Decent work & economic growth" },
      ],
    },
  },
  {
    id: "infrastructure",
    num: "04",
    title: "Infrastructure & Connectivity",
    tagline: "Building the Backbone of a Modern Economy",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    description:
      "Infrastructure is the engine of national transformation. Sierra Leone is building roads, bridges, digital systems, and transport networks to connect rural to urban, government to citizen, and the nation to the world.",
    stats: [
      { value: "$1.5B", label: "Lungi Bridge", sub: "7km link, Acrow Corporation (USA)" },
      { value: "65 km", label: "Bendu Chaa–Bauya Road", sub: "Major highway under construction" },
      { value: "4", label: "Agricultural bridges", sub: "Bonthe, Kenema, Kailahun, Karene" },
      { value: "e-Gov", label: "Digital government", sub: "Birth, taxes, licences online" },
    ],
    pillars: ["Road & Transport", "Digital Transformation", "Energy Access", "WASH", "Land & Housing"],
    investments: [
      { name: "Lungi Bridge", value: "$1.15–1.5B", location: "Acrow Corp, 30-year concession" },
      { name: "World Bank SAVIG Roads", value: "$40M", location: "Rural road connectivity" },
      { name: "Bendu Chaa–Bauya Road", value: "65 km", location: "Under construction" },
      { name: "EU Oil Palm Roads", value: "Pujehun", location: "Road infrastructure" },
      { name: "e-Government Portals", value: "National", location: "Digital identity & services" },
      { name: "Agricultural Bridges", value: "4 built", location: "Across production districts" },
    ],
    apviaRole: {
      title: "How APVIA Delivers",
      items: [
        "Execute civil engineering and road construction projects across Sierra Leone's districts",
        "Provide heavy equipment rental and project logistics for infrastructure development",
        "Lead import and distribution of construction materials, steel, and building components",
        "Manage port logistics and customs clearance for international infrastructure contractors",
        "Deliver telecommunications infrastructure including fibre optic and tower installation",
      ],
    },
    investorBenefits: {
      title: "Investor Returns",
      subtitle: "Infrastructure investments offer long-term, government-backed returns with concession income",
      items: [
        { label: "Projected ROI", value: "12–18%", detail: "Through concession & toll revenue" },
        { label: "Infrastructure Gap", value: "$4.2B", detail: "Unmet investment need" },
        { label: "GDP Multiplier", value: "1.5x", detail: "Every $1 invested → $1.5 GDP" },
        { label: "Concession Period", value: "30–35 years", detail: "Stable long-term cash flow" },
      ],
    },
  },
  {
    id: "mining",
    num: "05",
    title: "Mining & Blue Economy",
    tagline: "Harnessing Sierra Leone's Natural Wealth",
    color: "#e11d48",
    colorLight: "#ffe4e6",
    description:
      "Sierra Leone sits on some of Africa's richest mineral deposits and has 570km of coastline. The Government is reforming mining governance and building the Blue Economy — the Julius Maada Bio Industrial Fishing Port is the centrepiece.",
    stats: [
      { value: "$55M", label: "Black Johnson Fishing Port", sub: "China-aided, 20,000MT/year capacity" },
      { value: "3.75M", label: "Marampa iron ore tonnes/yr", sub: "$200M+ expansion investment" },
      { value: "$230M", label: "Magnetite Processing Plant", sub: "12 MTPA in Tonkolili" },
      { value: "450K", label: "MT fish stock potential", sub: "Sustainable marine resources" },
    ],
    pillars: ["Industrial Fishing Port", "Responsible Mining", "Mineral Processing", "Maritime Governance", "Environmental Sustainability"],
    investments: [
      { name: "Julius Maada Bio Fishing Port", value: "$55M", location: "Black Johnson, China grant" },
      { name: "Marampa Mines Expansion", value: "$200M+", location: "3.75M tonnes/year iron ore" },
      { name: "Magnetite Processing Plant", value: "$230M", location: "Tonkolili, Leone Rock Metal" },
      { name: "Community Dev. Fund", value: "$3.7M", location: "Mining-affected communities" },
      { name: "Blue Economy Framework", value: "National", location: "Strategic action plan" },
      { name: "Fish Port Infrastructure", value: "500m", location: "Breakwater, 300K sq.m basin" },
    ],
    apviaRole: {
      title: "How APVIA Delivers",
      items: [
        "Provide mining equipment supply, maintenance, and operational support services",
        "Manage import-export logistics for mineral concentrates, fishing equipment, and maritime supplies",
        "Lead construction of port facilities, processing plants, and supporting infrastructure",
        "Operate maritime services including vessel support, fuel supply, and cargo handling",
        "Develop community benefit programmes aligned with Community Development Agreements",
      ],
    },
    investorBenefits: {
      title: "Investor Returns",
      subtitle: "Mining and maritime investments offer high returns with commodity-backed revenue streams",
      items: [
        { label: "Projected ROI", value: "25–40%", detail: "Commodity price dependent" },
        { label: "Mineral Reserves", value: "Iron, Gold, Rutile", detail: "World-class deposits" },
        { label: "Fish Export Revenue", value: "$60M+/yr", detail: "From Black Johnson port" },
        { label: "CDA Revenue Share", value: "1%", detail: "Guaranteed community benefit" },
      ],
    },
  },
];

function BarChart({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

function DonutStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" strokeWidth="6" />
          <circle cx="40" cy="40" r="34" fill="none" stroke={color} strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="53.4" strokeLinecap="round" className="transition-all duration-1000" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[#1a1a1a]">{value}</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center leading-tight">{label}</p>
    </div>
  );
}

export default function FlagshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#052e16] via-[#0a3d1f] to-[#14532d]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fbbf24]/3 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
              <span className="text-[#fbbf24] text-xs font-semibold tracking-wider uppercase">National Development Plan 2024–2030</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Big Five<br />
              <span className="text-[#fbbf24]">Game Changers</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              President Julius Maada Bio&apos;s flagship national projects are transforming Sierra Leone.
              APVIA Ltd aligns its investment portfolio and service delivery with these priorities —
              creating value for investors, communities, and the nation.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "$1.2B+", label: "Total Flagship Investment", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "5", label: "Game Changer Sectors", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" },
              { value: "7+", label: "Development Partners", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
              { value: "2030", label: "Target Completion", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <svg className="w-5 h-5 text-[#fbbf24] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Sections */}
      {projects.map((project, idx) => (
        <section key={project.id} id={project.id} className={`scroll-mt-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
          <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-7xl font-black text-gray-100 select-none">{project.num}</span>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.color }}>{project.tagline}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-1">{project.title}</h2>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-4xl">{project.description}</p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: project.color }}>{s.value}</p>
                  <p className="text-[#1a1a1a] font-semibold text-sm mt-2">{s.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Two-Column Layout: APVIA Role + Investor Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {/* APVIA Role */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: project.colorLight }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={project.color}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{project.apviaRole.title}</h3>
                </div>
                <div className="space-y-4">
                  {project.apviaRole.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: project.colorLight }}>
                        <span className="text-xs font-bold" style={{ color: project.color }}>{i + 1}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investor Benefits */}
              <div className="rounded-3xl p-8 text-white" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{project.investorBenefits.title}</h3>
                    <p className="text-white/70 text-xs mt-0.5">{project.investorBenefits.subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {project.investorBenefits.items.map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <p className="text-white/60 text-xs font-medium">{item.label}</p>
                      <p className="text-2xl font-bold mt-1">{item.value}</p>
                      <p className="text-white/50 text-xs mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment Pipeline */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">Investment Pipeline</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Project</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Location / Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.investments.map((inv, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-[#1a1a1a]">{inv.name}</td>
                        <td className="py-3 px-4 font-bold" style={{ color: project.color }}>{inv.value}</td>
                        <td className="py-3 px-4 text-gray-500">{inv.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Strategic Pillars</h4>
              <div className="flex flex-wrap gap-2">
                {project.pillars.map((p) => (
                  <span key={p} className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: `${project.color}30`, color: project.color, backgroundColor: `${project.color}08` }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Total Investment Summary */}
      <section className="bg-gradient-to-br from-[#052e16] to-[#14532d] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Total Investment Landscape</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              A visual overview of the flagship investment pipeline across all five Game Changer sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { name: "Feed Salone", value: "$267M+", pct: 85, color: "#059669" },
              { name: "Energy", value: "$350M+", pct: 100, color: "#d97706" },
              { name: "Youth Employment", value: "$520M+", pct: 95, color: "#2563eb" },
              { name: "Infrastructure", value: "$1.6B+", pct: 100, color: "#7c3aed" },
              { name: "Mining & Blue Economy", value: "$540M+", pct: 92, color: "#e11d48" },
            ].map((s) => (
              <div key={s.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-white/40 text-xs font-medium mb-2">{s.name}</p>
                <p className="text-2xl font-bold text-white mb-3">{s.value}</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-2xl">
              <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/80 text-sm">Combined investment pipeline exceeds <strong className="text-white">$3.2 Billion</strong> across all sectors</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Invest in Sierra Leone&apos;s Future</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            APVIA Ltd is your gateway to co-investing in President Bio&apos;s flagship national projects.
            We provide project structuring, local expertise, and operational delivery across all five Game Changer sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#1a1a1a] font-semibold text-sm hover:border-[#14532d]/30 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
