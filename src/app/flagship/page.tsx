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
      { name: "World Bank SAVIG Project", value: "$40M", location: "Rice, maize, onion, cocoa" },
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
    investorReturn: { range: "18–24%", horizon: "5-year investment horizon", market: "$2.1B agricultural GDP", guarantee: "Policy-backed MTNDP 2024–2030", exports: "Cocoa, Rice, Cashew → EU & ECOWAS" },
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
    investorReturn: { range: "20–30%", horizon: "PPA guaranteed revenue", market: "85% electrification gap (only 15% today)", guarantee: "100% universal access target by 2040", exports: "Carbon credits from clean energy" },
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
    investorReturn: { range: "15–22%", horizon: "Social + financial returns", market: "3.2% annual workforce growth", guarantee: "4.5x job multiplier effect", exports: "SDG 8 aligned — decent work & growth" },
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
    investorReturn: { range: "25–40%", horizon: "Commodity-backed returns", market: "Iron, Gold, Rutile — world-class deposits", guarantee: "$60M+/yr fish export revenue", exports: "1% CDA revenue share guaranteed" },
  },
];

export default function FlagshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Flagship <span className="text-gradient-gold">Projects</span>
            </h1>
            <p className="text-base text-white/70">Aligned with President Bio&apos;s Big Five Game Changers</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">National Development Plan 2024–2030</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              President Julius Maada Bio&apos;s flagship projects are transforming Sierra Leone.
              APVIA Ltd aligns its investment portfolio and service delivery with these priorities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "$1.2B+", label: "Total Flagship Investment" },
              { value: "5", label: "Game Changer Sectors" },
              { value: "7+", label: "Development Partners" },
              { value: "2030", label: "Target Completion" },
            ].map((stat) => (
              <div key={stat.label} className="card-white p-5 sm:p-7 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#052e16]">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, idx) => (
        <section key={project.id} id={project.id} className={`scroll-mt-20 py-16 sm:py-24 ${idx % 2 === 1 ? "bg-[#f8f9fa]" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <div className="gold-line mx-auto mb-5" />
              <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">Game Changer {project.num}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">{project.title}</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">{project.tagline}</p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-10 sm:mb-14 max-w-4xl mx-auto text-center">{project.description}</p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
              {project.stats.map((s) => (
                <div key={s.label} className="card-white p-5 sm:p-7">
                  <p className="text-2xl sm:text-3xl font-bold text-[#052e16]">{s.value}</p>
                  <p className="text-[#1a1a1a] font-semibold text-sm mt-2">{s.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Two Column: APVIA Role + Investor Returns */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
              {/* APVIA Role */}
              <div className="card-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">How APVIA Delivers</h3>
                </div>
                <ul className="space-y-3">
                  {project.apviaRole.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investor Returns */}
              <div className="card-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">Investor Returns</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Projected ROI", value: project.investorReturn.range, detail: project.investorReturn.horizon },
                    { label: "Market Opportunity", value: project.investorReturn.market, detail: "" },
                    { label: "Government Backing", value: project.investorReturn.guarantee, detail: "" },
                    { label: "Revenue Stream", value: project.investorReturn.exports, detail: "" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-[#f8f9fa] border border-gray-200 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-[#14532d] mt-2 shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-[#1a1a1a] font-semibold text-sm">{item.value}</p>
                        {item.detail && <p className="text-gray-400 text-xs mt-0.5">{item.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment Pipeline */}
            <div className="card-white overflow-hidden mb-8">
              <div className="px-6 sm:px-8 py-5 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#1a1a1a]">Investment Pipeline</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-[#f8f9fa]">
                      <th className="text-left py-3 px-6 sm:px-8 text-gray-400 font-medium">Project</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                      <th className="text-left py-3 px-6 sm:px-8 text-gray-400 font-medium">Location / Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.investments.map((inv, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-[#f8f9fa]/50 transition-colors">
                        <td className="py-4 px-6 sm:px-8 font-medium text-[#1a1a1a]">{inv.name}</td>
                        <td className="py-4 px-4 font-bold text-[#052e16]">{inv.value}</td>
                        <td className="py-4 px-6 sm:px-8 text-gray-500">{inv.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pillars */}
            <div className="flex flex-wrap gap-2">
              {project.pillars.map((p) => (
                <span key={p} className="px-4 py-2 bg-[#f8f9fa] border border-gray-200 text-gray-500 text-sm rounded-lg">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Summary */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Investment Landscape</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Combined flagship investment pipeline across all five Game Changer sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: "Feed Salone", value: "$267M+" },
              { name: "Energy", value: "$350M+" },
              { name: "Youth Employment", value: "$520M+" },
              { name: "Infrastructure", value: "$1.6B+" },
              { name: "Mining & Blue Economy", value: "$540M+" },
            ].map((s) => (
              <div key={s.name} className="card-white text-center p-5 sm:p-7">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{s.name}</p>
                <p className="text-xl sm:text-2xl font-bold text-[#052e16]">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Combined investment pipeline exceeds <span className="text-[#1a1a1a] font-semibold">$3.2 Billion</span> across all sectors
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Invest in Sierra Leone&apos;s Future</h2>
          <p className="text-gray-500 text-base sm:text-lg mb-8">APVIA Ltd is your gateway to co-investing in President Bio&apos;s flagship national projects. We provide project structuring, local expertise, and operational delivery across all five Game Changer sectors.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline">View Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
