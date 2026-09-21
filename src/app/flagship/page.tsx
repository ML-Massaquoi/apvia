import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flagship Projects — Sierra Leone Investment Portfolio | APVIA Ltd",
  description:
    "Explore Sierra Leone's $10B+ development portfolio — 30+ flagship projects across infrastructure, energy, agriculture, mining, and tourism. APVIA Ltd connects investors with West Africa's most dynamic economy.",
  keywords: [
    "Sierra Leone investment opportunities",
    "Lungi Bridge project",
    "Sierra Leone infrastructure projects 2026",
    "Sierra Leone energy investment",
    "Feed Salone agriculture",
    "Marampa mines Sierra Leone",
    "Black Johnson fishing port",
    "Sierra Leone mining investment",
    "West Africa development projects",
    "APVIA flagship projects",
  ],
  openGraph: {
    title: "Flagship Projects — Sierra Leone Investment Portfolio | APVIA Ltd",
    description:
      "Sierra Leone's $10B+ development portfolio: 30+ flagship projects across infrastructure, energy, agriculture, mining & tourism. APVIA Ltd — your gateway to West Africa.",
    url: "https://www.apvia-sl.com/flagship",
  },
};

const totalInvestmentValue = "$10B+";

const overviewStats = [
  { value: "30+", label: "Active Projects", sub: "Across all sectors" },
  { value: totalInvestmentValue, label: "Total Investment Value", sub: "Public & private capital" },
  { value: "5", label: "Priority Sectors", sub: "Infrastructure, Energy, Agriculture, Mining, Tourism" },
  { value: "2030", label: "Completion Target", sub: "Medium-Term National Development Plan" },
];

const sectors = [
  {
    id: "transport-infrastructure",
    name: "Transport & Infrastructure",
    tagline: "Connecting Sierra Leone to the World",
    description:
      "Sierra Leone is undertaking its most ambitious infrastructure programme in history — building a $1.5 billion bridge to its international airport, expanding its deep-water port, dualising major highways, and developing dry port facilities to position the country as West Africa's premier logistics hub.",
    highlight: { label: "Combined Value", value: "$2.5B+" },
    projects: [
      {
        name: "Freetown–Lungi Bridge",
        value: "$1.15–1.5B",
        status: "MoU Signed — Design Phase",
        statusColor: "blue",
        developer: "Acrow Corporation of America",
        description: "A 7–8km bridge spanning the Sierra Leone River estuary, directly linking Freetown to Lungi International Airport. The bridge eliminates the current 3-hour road trip or boat journey, transforming Sierra Leone's connectivity. Acrow will finance, construct, and operate the bridge under a 30–35 year Design-Build-Operate-Transfer (DBOT) concession before transferring ownership to the Government.",
        highlights: ["7–8km over Sierra Leone River estuary", "30–35 year concession period", "Hundreds of millions in U.S. exports", "Link to Freetown International Airport"],
        investment: "Structured DBOT concession — toll revenue + government guarantees",
      },
      {
        name: "Queen Elizabeth II Quay Expansion",
        value: "$270M+",
        status: "Phase 2 Ongoing",
        statusColor: "green",
        developer: "Government of Sierra Leone + Partners",
        description: "Major expansion of Sierra Leone's primary deep-water port in Freetown, increasing capacity to handle growing trade volumes. The modernisation includes new container terminals, cargo handling equipment, and improved customs infrastructure to position Freetown as a regional logistics hub.",
        highlights: ["New container terminals", "Modern cargo handling equipment", "Improved customs infrastructure", "Regional logistics hub positioning"],
        investment: "Port concession opportunities — cargo handling, warehousing, logistics",
      },
      {
        name: "Kent Dry Port",
        value: "Private Investment",
        status: "Under Construction",
        statusColor: "green",
        developer: "Gento Group",
        description: "A new dry port facility at Kent to reduce cargo congestion at the Queen Elizabeth II Quay in Freetown. Already employing 600+ Sierra Leoneans, the facility will provide additional cargo handling space as trade volumes increase, with the government and private sector collaborating on this transformative logistics project.",
        highlights: ["600+ workers already employed", "Reducing port congestion", "Government-private sector collaboration", "Major economic opportunity"],
        investment: "Dry port operations — cargo handling, logistics services",
      },
      {
        name: "Makeni Highway Dual Carriageway",
        value: "TBD",
        status: "Announced — July 2026",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        description: "A new dual carriageway connecting Makeni to Masiaka, announced by President Bio in July 2026 as part of the Government's infrastructure development agenda. The project will improve connectivity between the Northern Province and the capital Freetown.",
        highlights: ["Northern Province connectivity", "Dual carriageway standard", "Part of national road network", "Government-funded"],
        investment: "Road construction and maintenance concession opportunities",
      },
      {
        name: "Freetown CBD Regeneration",
        value: "Zurich-Funded",
        status: "Phase 1 Ongoing",
        statusColor: "green",
        developer: "Freetown City Council + Zurich Partnership",
        description: "A comprehensive urban regeneration programme in Freetown's Central Business District, including installation of 196 solar-powered streetlights across 11 streets, pedestrian infrastructure upgrades, and modern urban design. The project is transforming Freetown into a safer, more attractive city for business and tourism.",
        highlights: ["196 solar streetlights installed", "11 streets upgraded", "Pedestrian infrastructure", "Solar-powered sustainable design"],
        investment: "Urban infrastructure — solar lighting, pedestrian zones",
      },
      {
        name: "Cross-Border Highway (Liberia–Sierra Leone)",
        value: "$85M",
        status: "Launched — 2026",
        statusColor: "green",
        developer: "Liberian Government + Partners",
        description: "An $85 million highway project linking Liberia to Sierra Leone, launched by Liberian President Joseph Boakai. The project strengthens regional connectivity and trade links between the two Mano River Union countries, opening new corridors for commerce and economic integration.",
        highlights: ["$85M investment", "Liberia–Sierra Leone link", "Regional trade integration", "Mano River Union connectivity"],
        investment: "Regional trade corridor — logistics and cross-border commerce",
      },
    ],
  },
  {
    id: "energy-power",
    name: "Energy & Power",
    tagline: "Powering Sierra Leone's Green Future",
    description:
      "Sierra Leone is investing massively in clean energy — deploying solar minigrids, expanding hydroelectric capacity, and building a national power grid. The goal: 100% electrification by 2040 through renewables and grid expansion. The Mission 300 Energy Compact targets 78% electricity access by 2030, with $2.2B committed.",
    highlight: { label: "Combined Value", value: "$3B+" },
    projects: [
      {
        name: "Nant Power Plant",
        value: "$200M+",
        status: "Under Construction — 2027 Operational",
        statusColor: "blue",
        developer: "Nant Energy + U.S. DFC",
        description: "A 108MW combined-cycle gas turbine power plant — Sierra Leone's largest thermal generation facility. The turbine arrived in April 2026, with grid connection expected by late 2026. The plant is funded by the U.S. International Development Finance Corporation (DFC) and will significantly boost Sierra Leone's electricity generation capacity.",
        highlights: ["108MW combined-cycle gas turbine", "Largest thermal plant in Sierra Leone", "U.S. DFC funded", "Turbine arrived April 2026"],
        investment: "Power Purchase Agreement (PPA) — guaranteed revenue stream",
      },
      {
        name: "Mission 300 Energy Compact",
        value: "$2.2B",
        status: "Endorsed — September 2025",
        statusColor: "green",
        developer: "World Bank + African Development Bank",
        description: "A landmark $2.2 billion energy compact endorsed by the World Bank and AfDB to transform Sierra Leone's electricity access from 36% to 78% by 2030. The compact covers grid expansion, renewable energy deployment, and institutional reforms to achieve universal electricity access.",
        highlights: ["36% → 78% electricity access", "$2.2B committed", "World Bank + AfDB backed", "Target: 2030"],
        investment: "Energy sector reforms — grid expansion, renewable deployment",
      },
      {
        name: "Newton Solar Power Plant",
        value: "Private",
        status: "Operational — 2026",
        statusColor: "green",
        developer: "Independent Power Producer",
        description: "Sierra Leone's largest solar power plant at 40MW capacity, now operational since 2026. The plant demonstrates the viability of utility-scale solar in West Africa and serves as a model for future renewable energy projects across the region.",
        highlights: ["40MW capacity", "Largest solar plant in Sierra Leone", "Operational 2026", "Utility-scale solar model"],
        investment: "Solar PPA opportunities — corporate and utility buyers",
      },
      {
        name: "Bumbuna II Hydro Expansion",
        value: "$76M",
        status: "Financing Secured",
        statusColor: "blue",
        developer: "OPEC Fund + BADEA",
        description: "A $76 million expansion of the Bumbuna Hydroelectric Dam, adding 60MW of generation capacity to Sierra Leone's existing hydro infrastructure. Funded by the OPEC Fund and the Arab Bank for Economic Development in Africa (BADEA), the project will provide clean, reliable baseload power.",
        highlights: ["60MW additional capacity", "$76M from OPEC + BADEA", "Clean baseload power", "Existing dam expansion"],
        investment: "Hydro expansion — long-term PPA revenue",
      },
      {
        name: "SOGREA Solar Minigrids",
        value: "€34M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "EU + UNOPS",
        description: "A €34 million programme deploying solar minigrids across 60 rural communities in Sierra Leone, providing clean electricity to 25,000 households. The project is transforming rural livelihoods by enabling businesses, schools, and health centres to access reliable power for the first time.",
        highlights: ["60 rural communities", "25,000 households connected", "€34M EU/UNOPS funded", "Rural transformation"],
        investment: "Rural electrification — minigrid concession opportunities",
      },
      {
        name: "Lungi Solar Plant",
        value: "Private",
        status: "Nearing Completion",
        statusColor: "yellow",
        developer: "Independent Developer",
        description: "A 10MW solar power plant under construction near Lungi International Airport, designed to provide reliable electricity to the airport corridor and surrounding communities. The plant will support the growing hospitality and logistics sectors in the Lungi area.",
        highlights: ["10MW capacity", "Airport corridor power", "Supporting hospitality sector", "Near completion"],
        investment: "Airport zone solar — commercial and industrial offtake",
      },
      {
        name: "MCC Energy Compact",
        value: "$500M+",
        status: "Design Phase",
        statusColor: "blue",
        developer: "Millennium Challenge Corporation (U.S.)",
        description: "A major U.S. MCC-funded energy compact focused on transmission and distribution infrastructure. The compact will modernise Sierra Leone's power grid, reduce technical losses, and expand access to reliable electricity across the country.",
        highlights: ["Transmission & distribution focus", "Grid modernisation", "Loss reduction", "U.S. MCC funded"],
        investment: "Grid infrastructure — smart metering, distribution concession",
      },
    ],
  },
  {
    id: "agriculture-food",
    name: "Agriculture & Food Security",
    tagline: "Feed Salone — From Importer to Exporter",
    description:
      "Feed Salone is the centrepiece of President Bio's Medium-Term National Development Plan 2024–2030. The programme transforms Sierra Leone from a food-importing to a food-producing nation through mechanisation, irrigation, seed innovation, and agro-processing. Food insecurity has already declined from 28% to 13% between 2023–2025.",
    highlight: { label: "Combined Value", value: "$500M+" },
    projects: [
      {
        name: "Special Agro-Processing Zone (SAPZ)",
        value: "$75M",
        status: "Under Development",
        statusColor: "green",
        developer: "AfDB + Government of Sierra Leone",
        description: "A $75 million Special Agro-Processing Zone in Kambia and Port Loko districts, designed to aggregate, process, and export agricultural commodities. The SAPZ will create a cluster of agro-processing businesses, cold chain facilities, and export infrastructure to add value to Sierra Leone's agricultural production.",
        highlights: ["$75M AfDB investment", "Kambia & Port Loko districts", "Agro-processing cluster", "Export infrastructure"],
        investment: "Agro-processing — value addition, cold chain, export logistics",
      },
      {
        name: "Livestock & Livelihood Development",
        value: "$105M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "IFAD + Government Partners",
        description: "A $105 million programme reaching 62,000 households across 11 districts, providing livestock assets, veterinary services, and market access. The programme is transforming rural livelihoods by enabling families to build productive assets through livestock rearing.",
        highlights: ["62,000 households", "11 districts covered", "$105M IFAD funded", "Livestock & market access"],
        investment: "Livestock value chain — dairy, meat processing, leather",
      },
      {
        name: "World Bank SAVIG Project",
        value: "$40M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "World Bank",
        description: "A $40 million project supporting rice, maize, onion, and cocoa production through improved seeds, irrigation, and market linkages. The project is helping smallholder farmers increase productivity and connect to formal markets.",
        highlights: ["$40M World Bank", "Rice, maize, onion, cocoa", "Improved seeds & irrigation", "Market linkages"],
        investment: "Seed systems, irrigation infrastructure, commodity trading",
      },
      {
        name: "Tormabum–Gbondapi Irrigation Scheme",
        value: "5,000 ha",
        status: "Nearing Completion",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        description: "A large-scale irrigation scheme covering 5,000 hectares in the Northern Province, designed to enable year-round farming and reduce dependence on rainfall. The project includes canal systems, water management infrastructure, and farmer training.",
        highlights: ["5,000 hectares irrigated", "Year-round farming", "Northern Province", "Water management infrastructure"],
        investment: "Irrigation infrastructure — commercial farming opportunities",
      },
      {
        name: "National Seed Infrastructure",
        value: "National",
        status: "Operational — 2025",
        statusColor: "green",
        developer: "SLARI + Partners",
        description: "Sierra Leone has released 30+ new seed varieties (rice, cassava, maize) and opened a National Seed Testing Laboratory at Mile 91 in October 2025. The seed system infrastructure enables certified seed production and distribution, critical for agricultural productivity gains.",
        highlights: ["30+ new seed varieties", "National Seed Lab at Mile 91", "Rice, cassava, maize", "Certified seed production"],
        investment: "Seed production & distribution — commercial seed companies",
      },
      {
        name: "World Bank FSRP",
        value: "$50M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "World Bank",
        description: "A $50 million Food Systems Resilience Programme strengthening Sierra Leone's food systems against climate shocks, improving storage and distribution, and building market infrastructure to ensure food security.",
        highlights: ["$50M World Bank", "Climate resilience", "Storage & distribution", "Market infrastructure"],
        investment: "Food systems — storage, logistics, market infrastructure",
      },
    ],
  },
  {
    id: "mining-blue-economy",
    name: "Mining & Blue Economy",
    tagline: "Harnessing Sierra Leone's Natural Wealth",
    description:
      "Sierra Leone sits on some of Africa's richest mineral deposits and has 570km of coastline. The Government is reforming mining governance and building the Blue Economy. The Julius Maada Bio Industrial Fishing Port is the centrepiece — a $55 million China-aided facility that will process 20,000 tonnes of fish annually.",
    highlight: { label: "Combined Value", value: "$800M+" },
    projects: [
      {
        name: "Julius Maada Bio Industrial Fishing Port",
        value: "$55M",
        status: "Construction Started — April 2026",
        statusColor: "green",
        developer: "Government of Sierra Leone + China",
        description: "A $55 million China-aided industrial fishing port at Black Johnson, designed to process 20,000 tonnes of fish annually. The port features a 500m breakwater, a 300,000 sq.m basin, and modern processing facilities. Construction officially commenced on 29 April 2026 by President Bio.",
        highlights: ["20,000 tonnes/year processing", "500m breakwater", "300,000 sq.m basin", "Construction started April 2026"],
        investment: "Fish processing — value addition, cold chain, export",
      },
      {
        name: "Marampa Mines Expansion",
        value: "$200M+",
        status: "Operational",
        statusColor: "green",
        developer: "Sierra Leone Mining",
        description: "The Marampa iron ore mine has paid $3.7 million in Community Development Agreements and is expanding production to 3.75 million tonnes per year. The mine has spent $7 million on local procurement and created significant employment in the Port Loko District.",
        highlights: ["3.75M tonnes/year capacity", "$3.7M CDA paid", "$7M local procurement", "Operational & expanding"],
        investment: "Iron ore production — commodity-backed returns",
      },
      {
        name: "Magnetite Processing Plant",
        value: "$230M",
        status: "Foundation Stone Laid — 2025",
        statusColor: "blue",
        developer: "Leone Rock Metal Group",
        description: "A $230 million magnetite processing plant in Tonkolili District with capacity to process 12 million tonnes per annum (MTPA). The foundation stone was laid in September 2025, marking a major milestone in Sierra Leone's mineral processing value chain.",
        highlights: ["12 MTPA processing capacity", "$230M investment", "Tonkolili District", "Foundation stone laid 2025"],
        investment: "Mineral processing — value addition, export",
      },
      {
        name: "Blue Economy Strategic Framework",
        value: "National",
        status: "Implementation Phase",
        statusColor: "green",
        developer: "Government of Sierra Leone",
        description: "A national strategic framework for developing Sierra Leone's Blue Economy — the sustainable use of ocean resources for economic growth, improved livelihoods, and ecosystem health. The framework covers fisheries, aquaculture, marine transport, coastal tourism, and seabed mining.",
        highlights: ["570km coastline", "Fisheries & aquaculture", "Marine transport", "Coastal tourism"],
        investment: "Blue economy — fisheries, aquaculture, marine services",
      },
      {
        name: "Community Development Agreements",
        value: "$3.7M+",
        status: "Ongoing",
        statusColor: "green",
        developer: "Mining Companies + Communities",
        description: "Mining companies in Sierra Leone are required to allocate 1% of revenue to Community Development Agreements (CDAs). Marampa Mines alone has paid $3.7M, with funds directed to education, health, and infrastructure in mining-affected communities.",
        highlights: ["1% CDA revenue share", "$3.7M+ from Marampa alone", "Education & health investment", "Infrastructure development"],
        investment: "Community development — CSR and impact investing",
      },
    ],
  },
  {
    id: "tourism-hospitality",
    name: "Tourism & Hospitality",
    tagline: "Discover Sierra Leone — Africa's Best Kept Secret",
    description:
      "Sierra Leone is positioning itself as West Africa's premier tourism destination, with pristine beaches, rich history, and vibrant culture. The Government is investing in hotels, resorts, and tourism infrastructure. Hilton's entry with a five-star airport hotel marks a turning point for international tourism.",
    highlight: { label: "Combined Value", value: "$500M+" },
    projects: [
      {
        name: "Hilton Garden Inn Freetown Airport",
        value: "Private",
        status: "Opening — 2026",
        statusColor: "green",
        developer: "FB Group + Hilton Worldwide",
        description: "The first internationally branded airport hotel in Sierra Leone — a Hilton Garden Inn with 110 contemporary guest rooms, lobby café, restaurant, fitness centre, outdoor pool, and four meeting rooms. The signing marks Hilton's official entry into the Sierra Leone market and signals international confidence in the country's tourism potential.",
        highlights: ["110 guest rooms", "First intl airport hotel", "Hilton brand entry", "Meeting & conference facilities"],
        investment: "Hospitality — hotel management, F&B, conference services",
      },
      {
        name: "Lungi City Status & Airport Corridor",
        value: "National",
        status: "Re-districting Proposal",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        description: "The Government is proposing to elevate Lungi to city status as part of a national re-districting initiative. This would grant Lungi its own city council and expanded governance structures, enabling more effective development planning for the rapidly growing airport corridor.",
        highlights: ["City status proposed", "Own city council", "Airport corridor development", "Decentralisation agenda"],
        investment: "Urban development — real estate, services, infrastructure",
      },
      {
        name: "International Conference Centre",
        value: "TBD",
        status: "Planned",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        description: "A new international conference centre in the Lungi area, expected to become one of the largest in the region. The facility will support business tourism, international conferences, and events, complementing the new airport and hotel infrastructure.",
        highlights: ["One of the largest in region", "Business tourism", "International conferences", "Lungi area"],
        investment: "Conference & events infrastructure",
      },
      {
        name: "Heritage Tourism Development",
        value: "FCC-Funded",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "Freetown City Council",
        description: "The Freetown Development Agenda prioritises heritage tourism — identifying and restoring 10 heritage sites, developing 'Discover Freetown' marketing campaigns, and creating tour programmes targeting the Mano River Union, diaspora, and African American markets.",
        highlights: ["10 heritage sites", "'Discover Freetown' campaign", "Diaspora tourism", "Creative arts integration"],
        investment: "Heritage tourism — tours, cultural experiences, creative economy",
      },
      {
        name: "Beach Resort Development",
        value: "Multiple",
        status: "Ongoing",
        statusColor: "green",
        developer: "Multiple Private Developers",
        description: "Freetown's Lumley Beach and Aberdeen areas are seeing rapid hotel and resort development, including Sierra Palms Resort, The Place at Tokeh, Radisson Blu Mammy Yoko, and multiple boutique hotels. The hospitality sector is expanding to meet growing demand from business and leisure tourists.",
        highlights: ["Multiple resort developments", "Lumley Beach corridor", "International brands", "Growing tourist arrivals"],
        investment: "Resort development — beachfront properties, eco-tourism",
      },
    ],
  },
  {
    id: "human-capital",
    name: "Youth & Human Capital",
    tagline: "Investing in Sierra Leone's Greatest Asset",
    description:
      "With over 70% of the population under 35, Sierra Leone has one of Africa's youngest populations. The Government's Youth Employment Scheme targets 500,000 new jobs by 2030, supported by UNDP innovation hubs, skills programmes, and digital transformation initiatives.",
    highlight: { label: "Combined Value", value: "$200M+" },
    projects: [
      {
        name: "Youth Employment Scheme (YES)",
        value: "National",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "Government of Sierra Leone",
        description: "The Government's flagship programme to create 500,000 new jobs by 2030 through skills training, entrepreneurship support, agribusiness, and creative industries. With 120,000+ young people entering the labour force annually, YES is critical for harnessing Sierra Leone's demographic dividend.",
        highlights: ["500,000 jobs target by 2030", "120,000+ new entrants/year", "70%+ under 35", "Public + private sectors"],
        investment: "Skills development — TVET, apprenticeships, entrepreneurship",
      },
      {
        name: "UniPod Sierra Leone",
        value: "UNDP",
        status: "Opening — July 2026",
        statusColor: "green",
        developer: "UNDP + Fourah Bay College",
        description: "A UNDP-funded innovation hub at Fourah Bay College, opening July 2026. UniPod provides young innovators with workspace, mentorship, funding, and connections to markets. It's part of UNDP's pan-African UniPod network supporting youth entrepreneurship.",
        highlights: ["UNDP innovation hub", "Fourah Bay College campus", "Opening July 2026", "Part of pan-African network"],
        investment: "Innovation & entrepreneurship — startup ecosystem",
      },
      {
        name: "AfDB Youth & Women Grant",
        value: "$20M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "African Development Bank",
        description: "A $20 million grant from the African Development Bank focused on climate-smart agriculture jobs for youth and women. The programme provides training, assets, and market access to young people in rural areas.",
        highlights: ["$20M AfDB grant", "Climate-smart agriculture", "Youth & women focus", "Rural employment"],
        investment: "Youth employment — climate-smart agriculture",
      },
      {
        name: "MCC Skills & Training Programme",
        value: "MCC",
        status: "Design Phase",
        statusColor: "blue",
        developer: "Millennium Challenge Corporation",
        description: "Skills training and certification programmes under the MCC compact, targeting 228 youth in mechanical, construction, and electrical trades. The programme builds human capital to support infrastructure and energy projects.",
        highlights: ["228 youth certified", "Mechanical, construction, electrical", "MCC funded", "Infrastructure support"],
        investment: "Technical skills — workforce development",
      },
      {
        name: "AfDB $500M Strategy (2025–2030)",
        value: "$500M",
        status: "Approved — October 2025",
        statusColor: "green",
        developer: "African Development Bank",
        description: "A $500 million 5-year strategy for Sierra Leone covering infrastructure, agriculture, and human capital development. The strategy aligns with the National Development Plan and provides a framework for coordinated development finance.",
        highlights: ["$500M over 5 years", "Infrastructure + agriculture + human capital", "Aligned with MTNDP", "AfDB strategic partnership"],
        investment: "Development finance — infrastructure and agriculture",
      },
    ],
  },
];

function StatusBadge({ status, color }: { status: string; color: string }) {
  const colors: Record<string, string> = {
    green: "bg-green-50 text-green-700 border-green-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    yellow: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${colors[color] || colors.green}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${color === "green" ? "bg-green-500" : color === "blue" ? "bg-blue-500" : "bg-amber-500"}`} />
      {status}
    </span>
  );
}

export default function FlagshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              Sierra Leone&apos;s <span className="text-gradient-gold">$10B+</span> Development Portfolio
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
              30+ flagship projects transforming West Africa&apos;s most dynamic economy.
              From a $1.5 billion bridge to 108MW power plants — Sierra Leone is open for investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary">
                Explore Investment Opportunities
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#sectors" className="btn-outline text-white border-white/30 hover:bg-white/10">
                Browse Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Investment at a Glance</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Sierra Leone&apos;s Medium-Term National Development Plan 2024–2030 is the most ambitious development programme in the nation&apos;s history.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="card-white p-5 sm:p-7 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#052e16]">{stat.value}</p>
                <p className="text-[#1a1a1a] font-semibold text-sm mt-2">{stat.label}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Navigation */}
      <section id="sectors" className="py-8 bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {sectors.map((sector) => (
              <a
                key={sector.id}
                href={`#${sector.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-[#052e16] hover:text-[#052e16] transition-colors"
              >
                {sector.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, idx) => (
        <section key={sector.id} id={sector.id} className={`scroll-mt-20 py-16 sm:py-24 ${idx % 2 === 1 ? "bg-[#f8f9fa]" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Sector Header */}
            <div className="text-center mb-10 sm:mb-14">
              <div className="gold-line mx-auto mb-5" />
              <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">
                Sector {String(idx + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">{sector.name}</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">{sector.tagline}</p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-10 sm:mb-12 max-w-4xl mx-auto text-center">
              {sector.description}
            </p>

            {/* Sector Highlight */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#052e16] rounded-xl">
                <span className="text-white/70 text-sm font-medium">{sector.highlight.label}</span>
                <span className="text-[#fbbf24] text-xl font-bold">{sector.highlight.value}</span>
              </div>
            </div>

            {/* Project Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {sector.projects.map((project) => (
                <div key={project.name} className="card-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a1a]">{project.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">{project.developer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#052e16]">{project.value}</span>
                    </div>
                  </div>

                  <StatusBadge status={project.status} color={project.statusColor} />

                  <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-4">{project.description}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-500 text-xs">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Investment Opportunity */}
                  <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Investment Opportunity</p>
                    <p className="text-[#1a1a1a] text-sm font-medium">{project.investment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Investment Landscape Summary */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Investment Landscape</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Combined development portfolio across all sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Transport & Infrastructure", value: "$2.5B+", color: "text-[#052e16]" },
              { name: "Energy & Power", value: "$3B+", color: "text-[#052e16]" },
              { name: "Agriculture & Food Security", value: "$500M+", color: "text-[#052e16]" },
              { name: "Mining & Blue Economy", value: "$800M+", color: "text-[#052e16]" },
              { name: "Tourism & Hospitality", value: "$500M+", color: "text-[#052e16]" },
              { name: "Youth & Human Capital", value: "$200M+", color: "text-[#052e16]" },
            ].map((s) => (
              <div key={s.name} className="card-white text-center p-5 sm:p-7">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{s.name}</p>
                <p className={`text-xl sm:text-2xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Combined investment pipeline exceeds <span className="text-[#1a1a1a] font-semibold">{totalInvestmentValue}</span> across all sectors
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest in Sierra Leone */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Why Invest in Sierra Leone</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Strategic advantages for international investors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Strategic Location", desc: "West Africa's gateway — 570km coastline, deep-water port, international airport with direct flights to Europe and Middle East." },
              { title: "Policy Stability", desc: "MTNDP 2024–2030 provides a clear, government-backed development framework with legal protections for investors." },
              { title: "Resource Wealth", desc: "World-class deposits of iron ore, gold, rutile, diamonds, and bauxite. Rich fisheries and agricultural potential." },
              { title: "Demographic Dividend", desc: "70% of 8.6 million people under 35 — a young, energetic workforce ready for skills development and employment." },
              { title: "Development Partners", desc: "World Bank, AfDB, MCC, EU, UNDP, IFAD — major international institutions backing Sierra Leone's development." },
              { title: "APVIA Partnership", desc: "Local expertise, regulatory navigation, project structuring, and operational delivery — your trusted partner on the ground." },
            ].map((item) => (
              <div key={item.title} className="card-white p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0 mb-4">
                  <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Partner with APVIA Ltd</h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            We connect international investors with Sierra Leone&apos;s most impactful projects. From project structuring to operational delivery — APVIA is your trusted gateway to West Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/about" className="btn-outline text-white border-white/30 hover:bg-white/10">About APVIA</Link>
          </div>
        </div>
      </section>
    </>
  );
}
