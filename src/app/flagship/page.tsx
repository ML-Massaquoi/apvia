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
    description:
      "The centrepiece of President Bio's Medium-Term National Development Plan 2024–2030. Feed Salone transforms Sierra Leone from a food-importing to a food-producing nation through mechanisation, irrigation, seed innovation, and agro-processing.",
    stats: [
      { value: "28%→13%", label: "Food insecurity decline", sub: "2023–2025 (WFP data)" },
      { value: "$45M+", label: "Agribusiness mobilised", sub: "Credit, grants & blended finance" },
      { value: "30+", label: "New seed varieties released", sub: "Rice, cassava & maize by SLARI" },
      { value: "270K", label: "Children fed daily", sub: "40% locally sourced rice" },
    ],
    pillars: ["Mechanisation & Irrigation", "Seeds & Input Systems", "Aggregation & Processing", "Agricultural Finance", "AgTech & Climate Smart", "Women & Youth Empowerment"],
    investments: [
      { name: "Special Agro-Processing Zone (SAPZ)", value: "$75M", location: "Kambia & Port Loko" },
      { name: "Livestock & Livelihood Development", value: "$105M", location: "11 districts, 62,000 households" },
      { name: "World Bank SAVIG Project", value: "$40M", location: "Rice, maize, onion, cocoa value chains" },
      { name: "European Investment Bank SME Facility", value: "€10M", location: "Agricultural SMEs" },
      { name: "UNCDF Blended Finance", value: "€7M", location: "Women & youth agribusiness" },
      { name: "Tormabum–Gbondapi Irrigation", value: "5,000 ha", location: "Northern Province" },
    ],
    apviaRole: [
      "Provide agricultural mechanisation services — tractors, harvesters, and irrigation equipment to smallholder farmers",
      "Build and operate agro-processing facilities and cold chain logistics across production zones",
      "Lead supply chain management from farm gate to export markets, reducing post-harvest losses",
      "Deploy mobile agritech platforms connecting farmers to markets, finance, and extension services",
      "Partner with international development banks to co-fund agricultural infrastructure projects",
    ],
    investorReturn: { range: "18–24%", horizon: "5-year", market: "$2.1B agricultural GDP", guarantee: "Policy-backed MTNDP 2024–2030", exports: "Cocoa, Rice, Cashew → EU & ECOWAS" },
  },
  {
    id: "energy",
    num: "02",
    title: "Energy & Solar Infrastructure",
    tagline: "Powering Sierra Leone's Green Future",
    description:
      "Sierra Leone is investing massively in clean energy — deploying solar minigrids, expanding hydroelectric capacity, and building a national power grid. The goal: 100% electrification by 2040 through renewables and grid expansion.",
    stats: [
      { value: "€34M", label: "SOGREA solar minigrid", sub: "25,000 households, 60 communities" },
      { value: "40 MW", label: "Newton Solar Plant", sub: "Largest solar plant, commissioned 2026" },
      { value: "108 MW", label: "Nant Power Plant", sub: "Under construction, connecting to grid" },
      { value: "100 MW", label: "Bumbuna Hydro target", sub: "Doubling capacity with $76M expansion" },
    ],
    pillars: ["Off-grid Solar Minigrids", "Hydroelectric Expansion", "Grid Densification", "Clean Cooking", "Green Hydrogen & EVs"],
    investments: [
      { name: "SOGREA Solar Minigrids", value: "€34M", location: "60 rural communities" },
      { name: "Newton Solar Power Plant", value: "40 MW", location: "Operational 2026" },
      { name: "Nant Power Plant", value: "108 MW", location: "Under construction" },
      { name: "Bumbuna II Hydro Expansion", value: "$76M", location: "OPEC Fund + BADEA financing" },
      { name: "Lungi Solar Plant", value: "10 MW", location: "Nearing completion" },
      { name: "Moyamba Solar Pilot", value: "1 MW", location: "3,000 households connected" },
    ],
    apviaRole: [
      "Engineering, procurement and construction (EPC) for solar minigrid and hydroelectric projects",
      "Supply and installation of power distribution infrastructure across rural and urban areas",
      "Maintenance and operations management for energy assets post-commissioning",
      "Import and distribution of solar panels, inverters, battery storage systems, and grid equipment",
      "Project management and technical advisory for international energy developers entering Sierra Leone",
    ],
    investorReturn: { range: "20–30%", horizon: "PPA guaranteed", market: "85% electrification gap (only 15% today)", guarantee: "100% universal access target by 2040", exports: "Carbon credits from clean energy" },
  },
  {
    id: "youth",
    num: "03",
    title: "Youth Employment Scheme",
    tagline: "500,000 Pathways to Dignity by 2030",
    description:
      "With over 70% of Sierra Leone's population under 35, YES is the Government's bold response — creating 500,000 new jobs through skills training, entrepreneurship support, agribusiness, and creative industries by 2030.",
    stats: [
      { value: "500K", label: "Jobs target by 2030", sub: "Public and private sectors" },
      { value: "120K+", label: "New entrants per year", sub: "Entering the labour force annually" },
      { value: "70%+", label: "Population under 35", sub: "Sierra Leone's demographic dividend" },
      { value: "$20M", label: "AfDB youth grant", sub: "Climate-smart agriculture jobs" },
    ],
    pillars: ["Employment Promotion", "TVET & Digital Skills", "Youth Agribusiness", "Creative Industries", "Youth Protection"],
    investments: [
      { name: "500,000 Jobs Programme (YES)", value: "National", location: "Target by 2030" },
      { name: "AfDB Youth & Women Grant", value: "$20M", location: "Climate-smart agriculture" },
      { name: "Youth Employment Portal", value: "Digital", location: "National job matching platform" },
      { name: "UniPod Sierra Leone", value: "UNDP", location: "Innovation hub, Fourah Bay College" },
      { name: "Skills Certification Programme", value: "228 youth", location: "Mechanical, construction, electrical" },
      { name: "Rural Youth Asset Provision", value: "Fishing boats", location: "Tricycles & start-up grants" },
    ],
    apviaRole: [
      "Create direct employment through construction, mining, and logistics operations — hiring locally first",
      "Establish apprenticeship and vocational training programmes in partnership with TVET institutions",
      "Provide mentorship and seed funding for youth-led agribusiness and SME ventures",
      "Deploy digital skills bootcamps in coding, data analytics, and digital marketing",
      "Partner with UNDP and World Bank on youth employment and entrepreneurship initiatives",
    ],
    investorReturn: { range: "15–22%", horizon: "Social + financial", market: "3.2% annual workforce growth", guarantee: "4.5x job multiplier effect", exports: "SDG 8 aligned — decent work & growth" },
  },
  {
    id: "infrastructure",
    num: "04",
    title: "Infrastructure & Connectivity",
    tagline: "Building the Backbone of a Modern Economy",
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
      { name: "Lungi Bridge (Acrow Corporation)", value: "$1.15–1.5B", location: "30-year concession" },
      { name: "World Bank SAVIG Roads", value: "$40M", location: "Rural road connectivity" },
      { name: "Bendu Chaa–Bauya Road", value: "65 km", location: "Under construction" },
      { name: "EU Oil Palm Roads", value: "Pujehun", location: "Road infrastructure" },
      { name: "e-Government Portals", value: "National", location: "Digital identity & services" },
      { name: "Agricultural Bridges", value: "4 built", location: "Across production districts" },
    ],
    apviaRole: [
      "Execute civil engineering and road construction projects across Sierra Leone's districts",
      "Provide heavy equipment rental and project logistics for infrastructure development",
      "Lead import and distribution of construction materials, steel, and building components",
      "Manage port logistics and customs clearance for international infrastructure contractors",
      "Deliver telecommunications infrastructure including fibre optic and tower installation",
    ],
    investorReturn: { range: "12–18%", horizon: "30–35 year concession", market: "$4.2B infrastructure gap", guarantee: "1.5x GDP multiplier per $1 invested", exports: "Stable long-term cash flow" },
  },
  {
    id: "mining",
    num: "05",
    title: "Mining & Blue Economy",
    tagline: "Harnessing Sierra Leone's Natural Wealth",
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
      { name: "Community Development Fund", value: "$3.7M", location: "Mining-affected communities" },
      { name: "Blue Economy Framework", value: "National", location: "Strategic action plan" },
      { name: "Fish Port Infrastructure", value: "500m", location: "Breakwater, 300K sq.m basin" },
    ],
    apviaRole: [
      "Provide mining equipment supply, maintenance, and operational support services",
      "Manage import-export logistics for mineral concentrates, fishing equipment, and maritime supplies",
      "Lead construction of port facilities, processing plants, and supporting infrastructure",
      "Operate maritime services including vessel support, fuel supply, and cargo handling",
      "Develop community benefit programmes aligned with Community Development Agreements",
    ],
    investorReturn: { range: "25–40%", horizon: "Commodity-backed", market: "Iron, Gold, Rutile — world-class deposits", guarantee: "$60M+/yr fish export revenue", exports: "1% CDA revenue share guaranteed" },
  },
];

export default function FlagshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-6">
              National Development Plan 2024–2030
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Big Five<br />
              <span className="text-gray-400">Game Changers</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              President Julius Maada Bio&apos;s flagship national projects are transforming Sierra Leone.
              APVIA Ltd aligns its investment portfolio and service delivery with these priorities —
              creating value for investors, communities, and the nation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-16">
            {[
              { value: "$1.2B+", label: "Total Flagship Investment" },
              { value: "5", label: "Game Changer Sectors" },
              { value: "7+", label: "Development Partners" },
              { value: "2030", label: "Target Completion" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0a] p-6 md:p-8">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, idx) => (
        <section key={project.id} id={project.id} className={`scroll-mt-20 ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
            {/* Header */}
            <div className="flex items-start gap-6 mb-12">
              <span className="text-6xl md:text-8xl font-black text-gray-200 select-none leading-none">{project.num}</span>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">{project.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111]">{project.title}</h2>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-14 max-w-4xl">{project.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 mb-16">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-white p-6 md:p-8">
                  <p className="text-3xl md:text-4xl font-bold text-[#111]">{s.value}</p>
                  <p className="text-[#111] font-semibold text-sm mt-2">{s.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 mb-16">
              {/* APVIA Role */}
              <div className="bg-white p-8 md:p-10">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-8">How APVIA Delivers</h3>
                <div className="space-y-5">
                  {project.apviaRole.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-xs font-bold text-gray-300 mt-1 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investor Benefits */}
              <div className="bg-[#111] p-8 md:p-10 text-white">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-8">Investor Returns</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Projected ROI</p>
                    <p className="text-3xl font-bold mt-2">{project.investorReturn.range}</p>
                    <p className="text-gray-500 text-xs mt-1">{project.investorReturn.horizon}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Market</p>
                    <p className="text-lg font-semibold mt-2 leading-snug">{project.investorReturn.market}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Guarantee</p>
                    <p className="text-lg font-semibold mt-2 leading-snug">{project.investorReturn.guarantee}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Revenue</p>
                    <p className="text-lg font-semibold mt-2 leading-snug">{project.investorReturn.exports}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Table */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <div className="px-8 py-5 border-b border-gray-200">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Investment Pipeline</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left py-3 px-8 text-gray-400 font-medium">Project</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                    <th className="text-left py-3 px-8 text-gray-400 font-medium">Location / Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {project.investments.map((inv, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8 font-medium text-[#111]">{inv.name}</td>
                      <td className="py-4 px-4 font-bold text-[#111]">{inv.value}</td>
                      <td className="py-4 px-8 text-gray-500">{inv.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pillars */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.pillars.map((p) => (
                <span key={p} className="px-4 py-2 border border-gray-200 text-gray-500 text-sm rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Summary */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Landscape</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Combined flagship investment pipeline across all five Game Changer sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10">
            {[
              { name: "Feed Salone", value: "$267M+" },
              { name: "Energy", value: "$350M+" },
              { name: "Youth Employment", value: "$520M+" },
              { name: "Infrastructure", value: "$1.6B+" },
              { name: "Mining & Blue Economy", value: "$540M+" },
            ].map((s) => (
              <div key={s.name} className="bg-[#0a0a0a] p-6 text-center">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">{s.name}</p>
                <p className="text-2xl font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Combined investment pipeline exceeds <span className="text-white font-semibold">$3.2 Billion</span> across all sectors
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">Invest in Sierra Leone&apos;s Future</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            APVIA Ltd is your gateway to co-investing in President Bio&apos;s flagship national projects.
            We provide project structuring, local expertise, and operational delivery across all five Game Changer sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#111] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-black transition-colors inline-flex items-center justify-center gap-2">
              Start a Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="px-8 py-3.5 border border-gray-200 rounded-xl text-[#111] font-semibold text-sm hover:border-gray-400 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
