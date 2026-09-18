import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flagship Projects | APVIA Ltd",
  description:
    "Aligning APVIA Ltd investment portfolio with Sierra Leone's Big Five Game Changers — President Bio's flagship national development projects in agriculture, energy, youth employment, infrastructure, and mining.",
  keywords: [
    "APVIA flagship projects",
    "Big Five Game Changers",
    "President Bio projects Sierra Leone",
    "Feed Salone",
    "Sierra Leone energy infrastructure",
    "Sierra Leone mining investment",
    "youth employment Sierra Leone",
    "Blue Economy Sierra Leone",
  ],
  openGraph: {
    title: "Flagship Projects | APVIA Ltd",
    description:
      "How APVIA Ltd aligns with Sierra Leone's Big Five Game Changers — flagship national development projects driving transformation.",
    url: "https://www.apvia-sl.com/flagship",
  },
};

const flagshipProjects = [
  {
    id: "feed-salone",
    tag: "Game Changer #1",
    title: "Feed Salone",
    subtitle: "Agricultural Transformation",
    color: "from-emerald-600 to-emerald-800",
    accent: "bg-emerald-100 text-emerald-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738.135l-1.545 1.09a.883.883 0 01-.643.048l-.195-.048a.886.886 0 01-.442-.357L8.4 10.8a.883.883 0 01-.048-.643l1.09-1.545a.89.89 0 00.135-.738l-.363-1.273a.827.827 0 01.21-.812l2.16-1.08a.414.414 0 00.107-.663l-2.16-1.08a.827.827 0 01-.21-.812l.363-1.273a.89.89 0 00-.135-.738L4.2 5.6a.883.883 0 01-.048-.643l1.09-1.545A.886.886 0 014.8 3.3l-.048-.195a.886.886 0 01.357-.442l1.545-1.09a.89.89 0 00.048-.643L5.062.865a.827.827 0 01-.21-.812l1.08-2.16a.414.414 0 00.107-.663L5.88.21A.827.827 0 016.69-.003l1.273.363a.89.89 0 00.738-.135l1.545-1.09a.883.883 0 01.643-.048l.195.048a.886.886 0 01.442.357l2.16 1.08a.883.883 0 00.643.048l1.545-1.09a.89.89 0 00.135-.738L18.962.865a.827.827 0 01.21-.812l2.16-1.08a.414.414 0 00-.107-.663L19.125.21A.827.827 0 0118.915-.602l-1.273.363a.89.89 0 00-.738.135l-1.545 1.09a.883.883 0 01-.643.048l-.195-.048a.886.886 0 01-.442-.357L13.1 0" />
      </svg>
    ),
    description:
      "The centrepiece of President Bio's Medium-Term National Development Plan 2024–2030, Feed Salone is a national movement to transform Sierra Leone from a food-importing to a food-producing nation.",
    highlights: [
      { label: "Food insecurity declined from", value: "28% → 13%", detail: "2023–2025 (WFP data)" },
      { label: "Agribusiness mobilised", value: "US$45M+", detail: "Agricultural credit, grants, and blended finance" },
      { label: "New seed varieties released", value: "30+", detail: "By SLARI for rice, cassava, and maize" },
      { label: "School feeding children", value: "270,000/day", detail: "40% locally sourced rice, up from 10%" },
    ],
    pillars: [
      "Mechanisation & Irrigation",
      "Seeds & Input Systems",
      "Aggregation, Processing & Marketing",
      "Agricultural Finance",
      "AgTech & Climate Smart Agriculture",
      "Empowering Women & Youth",
    ],
    investments: [
      "US$75M Special Agro-Processing Zone (SAPZ) in Kambia & Port Loko",
      "US$105M Livestock & Livelihood Development Project (62,000 households)",
      "US$40M World Bank SAVIG project for rice, maize, onion & cocoa value chains",
      "€10M European Investment Bank SME facility",
      "€7M UNCDF blended-finance facility for women & youth agribusinesses",
      "5,000-hectare Tormabum–Gbondapi irrigation system",
    ],
    apviaAlignment:
      "APVIA's agriculture and fisheries services directly support Feed Salone's vision — from mechanisation and agro-processing to supply chain logistics and export readiness.",
  },
  {
    id: "energy",
    tag: "Game Changer #2",
    title: "Energy & Solar Infrastructure",
    subtitle: "Powering Sierra Leone's Green Future",
    color: "from-amber-500 to-amber-700",
    accent: "bg-amber-100 text-amber-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      "Under the Big Five Game Changers, Sierra Leone is investing massively in clean energy — deploying solar minigrids, expanding hydroelectric capacity, and building a national power grid that reaches every community.",
    highlights: [
      { label: "SOGREA solar minigrid", value: "€34M", detail: "25,000 households, 60 communities" },
      { label: "Newton Solar Power Plant", value: "40 MW", detail: "Commissioned 2026, largest solar plant" },
      { label: "Nant Power Plant", value: "108 MW", detail: "Under construction, connecting to grid" },
      { label: "Bumbuna Hydro expansion", value: "60 MW", detail: "Doubling capacity to 100 MW" },
    ],
    pillars: [
      "Off-grid Solar Minigrids (SOGREA)",
      "Hydroelectric Expansion (Bumbuna Phase II)",
      "Grid Densification & Extension",
      "Clean Cooking & Energy Efficiency",
      "Green Hydrogen & Electric Mobility",
    ],
    investments: [
      "€34M SOGREA — EU/UNOPS solar minigrid initiative (5.2 MWp capacity)",
      "40MW Newton Solar Power Plant — operational 2026",
      "108MW Nant Power Plant — under construction",
      "US$76M Bumbuna II expansion (OPEC Fund + BADEA financing)",
      "10MW Lungi Solar Power Plant — nearing completion",
      "1MW Moyamba Solar Plant — pilot for district-level replication",
      "Energy Transition & Green Growth Plan targeting 100% electrification by 2040",
    ],
    apviaAlignment:
      "APVIA's construction, engineering, and equipment services are positioned to support Sierra Leone's energy infrastructure buildout — from solar installation to hydroelectric expansion and grid modernisation.",
  },
  {
    id: "youth",
    tag: "Game Changer #3",
    title: "Youth Employment Scheme",
    subtitle: "500,000 Pathways to Dignity by 2030",
    color: "from-blue-600 to-blue-800",
    accent: "bg-blue-100 text-blue-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description:
      "With over 70% of Sierra Leone's population under 35, the Youth Employment Scheme (YES) is the Government's bold response — creating 500,000 new jobs across public and private sectors by 2030.",
    highlights: [
      { label: "Target jobs by 2030", value: "500,000", detail: "Across public and private sectors" },
      { label: "Annual new entrants to labour force", value: "120,000+", detail: "Each year entering the job market" },
      { label: "Youth population under 35", value: "70%+", detail: "Sierra Leone's demographic dividend" },
      { label: "AfDB youth & women grant", value: "US$20M", detail: "For climate-smart agriculture jobs" },
    ],
    pillars: [
      "General Employment Promotion",
      "TVET & Digital Skills Bootcamps",
      "Youth Agribusiness & Rural Employment",
      "Creative Industries & Cultural Tourism",
      "Migration, Drug Abuse & Youth Protection",
    ],
    investments: [
      "500,000 new jobs target by 2030 under YES",
      "US$20M AfDB grant for youth & women in climate-smart agriculture",
      "Youth Employment Portal — national digital platform for jobs",
      "UniPod Sierra Leone — UNDP innovation hub at Fourah Bay College",
      "Skills training: 228 youth certified in mechanical, construction & electrical",
      "Fishing boats, tricycles and start-up grants for rural youth",
    ],
    apviaAlignment:
      "APVIA creates direct employment opportunities for Sierra Leonean youth through our construction, mining, and logistics operations — while our apprenticeship programmes build lasting skills for the workforce.",
  },
  {
    id: "infrastructure",
    tag: "Game Changer #4",
    title: "Infrastructure & Connectivity",
    subtitle: "Building the Backbone of a Modern Economy",
    color: "from-violet-600 to-violet-800",
    accent: "bg-violet-100 text-violet-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503-.503l-2.06-2.06a9.75 9.75 0 01-7.354 0L3.5 10.5" />
      </svg>
    ),
    description:
      "Infrastructure and connectivity is the engine of national transformation. Sierra Leone is building roads, bridges, digital systems, and transport networks to connect rural to urban, government to citizen, and the nation to the world.",
    highlights: [
      { label: "Lungi Bridge", value: "$1.15–1.5B", detail: "7km bridge linking Freetown to Airport (Acrow Corp.)" },
      { label: "Newton–Bo Road", value: "Completed", detail: "Major highway connecting regions" },
      { label: "Digital Transformation", value: "e-Government", detail: "Birth registration, taxes, licences online" },
      { label: "Agricultural bridges", value: "4 commissioned", detail: "Bonthe, Kenema, Kailahun, Karene" },
    ],
    pillars: [
      "Road & Transportation Infrastructure",
      "Digital Transformation & Innovation",
      "Energy Access & Sustainability",
      "Water, Sanitation & Hygiene (WASH)",
      "Land, Housing & Urban Development",
    ],
    investments: [
      "Lungi Bridge — US$1.15–1.5B, Acrow Corporation, 7–8km over Sierra Leone River",
      "US$40M World Bank SAVIG project for rural road connectivity",
      "65km Bendu Chaa–Bauya road under construction",
      "EU-funded Oil Palm Project road infrastructure in Pujehun",
      "e-Government portals for services and digital identity systems",
      "4 agricultural bridges commissioned across production districts",
    ],
    apviaAlignment:
      "APVIA's core services in construction, civil engineering, and logistics directly support Sierra Leone's infrastructure transformation — from road building to port development and digital connectivity projects.",
  },
  {
    id: "mining",
    tag: "Game Changer #5",
    title: "Mining & Blue Economy",
    subtitle: "Harnessing Sierra Leone's Natural Wealth",
    color: "from-rose-600 to-rose-800",
    accent: "bg-rose-100 text-rose-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description:
      "Sierra Leone sits on some of Africa's richest mineral deposits and has 570km of coastline. The Government is reforming mining governance and building the Blue Economy — the Julius Maada Bio Industrial Fishing Port is the centrepiece.",
    highlights: [
      { label: "Black Johnson Fishing Port", value: "$55M", detail: "China-aided, handles 20,000MT fish/year" },
      { label: "Marampa Mines expansion", value: "3.75M tonnes/yr", detail: "High-grade iron ore, $200M+ investment" },
      { label: "Magnetite Processing Plant", value: "$230M", detail: "12 MTPA capacity in Tonkolili" },
      { label: "Annual fish stock potential", value: "450,000MT", detail: "Sustainable marine resources" },
    ],
    pillars: [
      "Industrial Fishing Port & Blue Economy",
      "Responsible Mining & Community Benefit",
      "Mineral Processing & Value Addition",
      "Maritime Infrastructure & Governance",
      "Environmental Sustainability",
    ],
    investments: [
      "US$55M Julius Maada Bio Industrial Fishing Port at Black Johnson (China grant)",
      "500m breakwater, 300,000 sq.m basin, cold storage, processing facilities",
      "$200M+ Marampa Mines expansion — 3.75M tonnes/year iron ore capacity",
      "$230M Magnetite Processing Plant in Tonkolili (Leone Rock Metal Group)",
      "$3.7M Community Development Fund for mining-affected communities",
      "Blue Economy Strategic Framework & National Action Plan",
    ],
    apviaAlignment:
      "APVIA operates at the intersection of mining, maritime services, and import-export trade — directly aligned with Sierra Leone's mineral wealth strategy and Blue Economy ambitions.",
  },
];

export default function FlagshipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#052e16] to-[#14532d] text-white py-24">
        <div className="absolute inset-0 bg-[url('/Apvia_logo.jpeg')] bg-repeat bg-center opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
            <span className="text-[#fbbf24] text-sm font-semibold tracking-wider uppercase">
              Aligned with Sierra Leone's National Vision
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flagship Projects
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            President Julius Maada Bio's <strong className="text-white">Big Five Game Changers</strong> form the backbone of
            Sierra Leone's Medium-Term National Development Plan 2024–2030. At APVIA Ltd, we align our investment portfolio
            and service delivery with these flagship national projects — driving transformation through partnership, excellence,
            and integrity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Feed Salone", "Energy", "Youth Employment", "Infrastructure", "Mining & Blue Economy"].map((item) => (
              <a
                key={item}
                href={`#${item === "Feed Salone" ? "feed-salone" : item === "Energy" ? "energy" : item === "Youth Employment" ? "youth" : item === "Infrastructure" ? "infrastructure" : "mining"}`}
                className="px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm hover:bg-[#fbbf24]/20 hover:text-[#fbbf24] transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 space-y-24">
          {flagshipProjects.map((project, index) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shrink-0`}>
                  {project.icon}
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.accent} mb-2`}>
                    {project.tag}
                  </span>
                  <h2 className="text-3xl font-bold text-[#1a1a1a]">{project.title}</h2>
                  <p className="text-gray-500 text-lg mt-1">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-4xl">{project.description}</p>

              {/* Key Figures */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {project.highlights.map((h) => (
                  <div key={h.label} className="bg-[#f8f9fa] rounded-xl p-5 border border-gray-100">
                    <p className="text-gray-400 text-xs font-medium mb-1">{h.label}</p>
                    <p className="text-[#052e16] text-2xl font-bold">{h.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{h.detail}</p>
                  </div>
                ))}
              </div>

              {/* Pillars */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Strategic Pillars</h3>
                <div className="flex flex-wrap gap-2">
                  {project.pillars.map((p) => (
                    <span key={p} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Investments */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Investments & Milestones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.investments.map((inv) => (
                    <div key={inv} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#fbbf24] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {inv}
                    </div>
                  ))}
                </div>
              </div>

              {/* APVIA Alignment */}
              <div className="bg-gradient-to-r from-[#052e16] to-[#14532d] rounded-2xl p-6 md:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#fbbf24] font-semibold text-sm mb-1">How APVIA Aligns</p>
                    <p className="text-white/80 leading-relaxed">{project.apviaAlignment}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < flagshipProjects.length - 1 && (
                <div className="mt-24 border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Partner With Us</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            APVIA Ltd is positioned to support and co-invest in Sierra Leone&apos;s flagship development projects.
            Whether in agriculture, energy, mining, or infrastructure — we bring the expertise, partnerships, and
            commitment to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get In Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-[#1a1a1a] font-semibold text-sm hover:border-[#14532d]/30 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
