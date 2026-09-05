// CENTRAL CONTENT DATA — Single source of truth for all website content
// Every component imports from this file to ensure consistency

// ─── INVESTMENT SECTORS ───────────────────────────────────────────────
// Used by: InvestmentOpportunities, HomepageServices (overlap), services/page.tsx
export const investmentSectors = [
  {
    id: "mining",
    title: "Mining & Minerals",
    shortDesc: "Invest in Sierra Leone's rich mineral resources including diamonds, gold, rutile, and bauxite.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    modalTitle: "Mining & Minerals Investment Opportunity",
    overview:
      "Sierra Leone sits on one of Africa's richest mineral belts with an estimated $10 billion in untapped mineral wealth. The country is the world's largest rutile producer and 7th largest diamond producer, with significant bauxite, iron ore, and gold deposits. Modern mining techniques and responsible extraction are unlocking new potential across 15+ active mining regions. Our mining operations follow strict ESG standards with traceable supply chains and community benefit programs.",
    highlights: [
      { label: "Total Value", value: "$10B+", desc: "Estimated untapped mineral wealth across Sierra Leone's mineral belt" },
      { label: "Diamond Rank", value: "#7 Global", desc: "7th largest diamond producer in the world with alluvial and kimberlite deposits" },
      { label: "Rutile", value: "#1 World", desc: "World's largest rutile deposits — critical for titanium production and aerospace" },
      { label: "Export Revenue", value: "$165M/yr", desc: "Current annual mineral export revenue with 18% year-on-year growth" },
      { label: "Active Mines", value: "15+", desc: "Operational mining sites with international partnerships and modern equipment" },
      { label: "Growth", value: "18% YoY", desc: "Year-on-year export growth driven by new discoveries and expanded operations" },
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
    id: "agriculture",
    title: "Agriculture & Farming",
    shortDesc: "Sustainable agriculture investments in cocoa, coffee, palm oil, and rice farming.",
    icon: "M12 22V8m0 0c-2 0-6 2-6 6m6-6c2 0 6 2 6 6m-12 0c0 4 2 6 6 6m0 0c4 0 6-2 6-6",
    modalTitle: "Agriculture & Farming Investment Opportunity",
    overview:
      "Sierra Leone has 5.4 million hectares of arable land, of which only 15% is currently cultivated. The agricultural sector employs 60% of the workforce and contributes 23% to GDP. High-demand exports include cocoa, coffee, palm oil, and cashew nuts. The government offers tax holidays, duty-free import of farm machinery, and free land allocation for agricultural investments. Our farming operations integrate modern techniques with traditional knowledge for maximum yield.",
    highlights: [
      { label: "Arable Land", value: "5.4M ha", desc: "Total arable land with only 15% currently cultivated — massive expansion potential" },
      { label: "GDP Share", value: "23%", desc: "Agriculture's contribution to national GDP, with plans to increase to 30% by 2030" },
      { label: "Workforce", value: "60%", desc: "Percentage of population employed in agriculture — ready and available labor" },
      { label: "Cocoa Output", value: "85K tons", desc: "Annual cocoa production, Sierra Leone is a premium origin for fine flavor cocoa" },
      { label: "Export Growth", value: "22% YoY", desc: "Year-on-year growth in agricultural exports driven by global demand" },
      { label: "Tax Holiday", value: "10 yrs", desc: "Government tax holiday for agricultural investments with duty-free machinery import" },
    ],
    chart: {
      type: "pie" as const,
      title: "Agricultural Export Composition",
      data: [
        { name: "Cocoa", value: 32, color: "#052e16" },
        { name: "Rice", value: 25, color: "#14532d" },
        { name: "Palm Oil", value: 18, color: "#d97706" },
        { name: "Cashew", value: 15, color: "#166534" },
        { name: "Other Crops", value: 10, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    shortDesc: "Infrastructure development projects including roads, buildings, and utilities.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    modalTitle: "Construction & Infrastructure Investment Opportunity",
    overview:
      "Sierra Leone's infrastructure deficit represents a $15 billion opportunity. The government has prioritized road construction (12,000km network), port expansion at Freetown, water systems, and telecommunications under the National Infrastructure Plan. Public-Private Partnership frameworks with sovereign guarantees make infrastructure investments secure and profitable. Our projects include the Freetown Port Modernization, Highway Corridor Development, and Industrial Park Construction.",
    highlights: [
      { label: "Market Gap", value: "$15B", desc: "Estimated infrastructure investment gap creating massive opportunities" },
      { label: "PPP Projects", value: "8 Active", desc: "Government-backed Public-Private Partnership projects open for investment" },
      { label: "Road Network", value: "12,000 km", desc: "National road network being expanded and modernized with international funding" },
      { label: "Port Capacity", value: "3x Growth", desc: "Freetown Port expansion tripling cargo handling capacity by 2027" },
      { label: "Govt Guarantee", value: "Sovereign", desc: "Sovereign-backed guarantees ensuring secure returns on infrastructure investments" },
      { label: "Job Creation", value: "50K+", desc: "Estimated jobs to be created across all infrastructure projects by 2030" },
    ],
    chart: {
      type: "bar" as const,
      title: "Infrastructure Investment Pipeline ($B)",
      data: [
        { name: "Roads", value: 4.2, color: "#052e16" },
        { name: "Ports", value: 3.1, color: "#14532d" },
        { name: "Buildings", value: 2.8, color: "#d97706" },
        { name: "Water", value: 2.3, color: "#166534" },
        { name: "Energy", value: 2.6, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "trade",
    title: "Import & Export Trade",
    shortDesc: "Facilitate international trade connecting Sierra Leone with global markets.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    modalTitle: "Import & Export Trade Opportunity",
    overview:
      "Sierra Leone's strategic West African location provides access to over 400 million consumers in the ECOWAS region. The country offers 100% repatriation of profits, duty-free access to ECOWAS markets, and preferential trade agreements with the EU (Everything But Arms initiative). Key exports include minerals, agricultural products, and fisheries. Our trade division manages end-to-end supply chains from sourcing to international shipping.",
    highlights: [
      { label: "ECOWAS Reach", value: "400M+", desc: "Total consumer market accessible through ECOWAS free trade agreements" },
      { label: "Profit Repatriation", value: "100%", desc: "Full repatriation of profits, dividends, and capital — no restrictions" },
      { label: "EU Access", value: "Duty-Free", desc: "Preferential EU market access under Everything But Arms initiative" },
      { label: "Trade Growth", value: "15% YoY", desc: "Year-on-year growth in total trade volume driven by export diversification" },
      { label: "Port Throughput", value: "2M tons", desc: "Annual cargo throughput at Freetown deep-water port with expansion underway" },
      { label: "Trade Partners", value: "45+", desc: "Active trade partnerships across Africa, Europe, Asia, and the Americas" },
    ],
    chart: {
      type: "pie" as const,
      title: "Trade Volume by Region",
      data: [
        { name: "ECOWAS", value: 35, color: "#052e16" },
        { name: "EU", value: 28, color: "#14532d" },
        { name: "Asia", value: 22, color: "#d97706" },
        { name: "Americas", value: 10, color: "#166534" },
        { name: "Other", value: 5, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "realestate",
    title: "Real Estate & Property",
    shortDesc: "Commercial and residential real estate development in Freetown and growing urban centers.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    modalTitle: "Real Estate & Property Investment Opportunity",
    overview:
      "Freetown's real estate market has seen 25% annual price appreciation driven by urbanization, a growing middle class, and limited supply. Commercial office vacancy rates are below 5%, and residential rental yields average 12-18% annually. The government has designated Special Economic Zones with tax incentives for real estate developers. Our portfolio includes commercial complexes, residential estates, and mixed-use developments.",
    highlights: [
      { label: "Price Growth", value: "25% YoY", desc: "Annual property price appreciation in Freetown driven by demand-supply gap" },
      { label: "Rental Yield", value: "12-18%", desc: "Average annual rental yields for well-located commercial and residential properties" },
      { label: "Vacancy Rate", value: "<5%", desc: "Commercial office vacancy rate indicating severe supply shortage" },
      { label: "Urbanization", value: "4.2% pa", desc: "Annual urbanization rate driving continuous demand for housing and offices" },
      { label: "SEZ Benefits", value: "Tax-Free", desc: "Special Economic Zone incentives including tax holidays and duty exemptions" },
      { label: "ROI Period", value: "4-6 yrs", desc: "Average payback period for real estate investments in prime locations" },
    ],
    chart: {
      type: "bar" as const,
      title: "Freetown Property Price Growth (% YoY)",
      data: [
        { name: "2020", value: 18, color: "#14532d" },
        { name: "2021", value: 20, color: "#14532d" },
        { name: "2022", value: 22, color: "#052e16" },
        { name: "2023", value: 24, color: "#052e16" },
        { name: "2024", value: 25, color: "#d97706" },
      ],
    },
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    shortDesc: "Renewable energy and utility infrastructure investments.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    modalTitle: "Energy & Utilities Investment Opportunity",
    overview:
      "Sierra Leone's energy sector represents a $4.2 billion investment opportunity with a current electrification rate of just 26%. The National Energy Plan targets 1GW of new capacity by 2030, primarily through renewables. With over 2,000 hours of sunshine annually and abundant river systems for hydropower, the country is ideal for clean energy investments. IPP frameworks with guaranteed off-take agreements are now in place.",
    highlights: [
      { label: "Market Size", value: "$4.2B", desc: "Total investment opportunity in Sierra Leone's energy sector through 2030" },
      { label: "Target Capacity", value: "1 GW", desc: "New power generation capacity to be added by 2030 under the National Energy Plan" },
      { label: "Electrification", value: "26%", desc: "Current electrification rate with massive room for expansion and impact" },
      { label: "Solar Hours", value: "2,000+/yr", desc: "Annual sunshine hours making Sierra Leone ideal for solar energy projects" },
      { label: "Mini-Grids", value: "200+", desc: "Identified mini-grid sites for off-grid and mini-grid power solutions" },
      { label: "IPP Licenses", value: "12 Issued", desc: "Independent Power Producer licenses issued with guaranteed off-take agreements" },
    ],
    chart: {
      type: "pie" as const,
      title: "Target Energy Mix by 2030",
      data: [
        { name: "Solar", value: 38, color: "#d97706" },
        { name: "Hydro", value: 28, color: "#052e16" },
        { name: "Mini-Grids", value: 18, color: "#14532d" },
        { name: "Thermal", value: 10, color: "#166534" },
        { name: "Wind", value: 6, color: "#fbbf24" },
      ],
    },
  },
];

// ─── SERVICES ──────────────────────────────────────────────────────────
// Used by: HomepageServices, services/page.tsx (imported from here)
// Replaces the separate servicesData in src/data/services.ts
export const servicesContent = [
  {
    id: "construction",
    title: "Construction & Civil Engineering",
    description:
      "Comprehensive infrastructure development solutions across Sierra Leone and West Africa, combining technical expertise, local knowledge, and international quality standards.",
    icon: "building",
    services: [
      "Roads and Highways construction, rehabilitation, and maintenance",
      "Buildings and Structures including commercial, residential, government facilities",
      "Water Infrastructure including supply systems, dams, treatment plants",
      "Sanitation and Waste Management infrastructure",
      "Energy Infrastructure including power plants, renewable energy facilities",
      "Ports and Airports development",
      "Bridges and Culverts design and construction",
      "Site Preparation and Earthworks",
      "End-to-end Project Management",
    ],
    capabilities: [
      "Modern construction equipment and technology",
      "Experienced engineering and technical workforce",
      "Partnerships with international engineering firms",
      "Compliance with international standards (BS, ISO, ASTM)",
      "Design-build and EPC contract capability",
    ],
    overview:
      "APVIA's Construction & Civil Engineering division delivers end-to-end infrastructure solutions from concept to completion. We combine local market expertise with international engineering standards to execute projects that transform communities and drive economic growth. From roads and bridges to commercial buildings and water systems, our team manages every aspect of the construction lifecycle.",
    highlights: [
      { label: "Projects", value: "50+", desc: "Major infrastructure projects completed across West Africa" },
      { label: "Value", value: "$200M+", desc: "Total project portfolio value managed by the construction division" },
      { label: "Standards", value: "ISO 9001", desc: "Quality management certified to international standards" },
      { label: "Workforce", value: "1,200+", desc: "Skilled workers and professionals across all project sites" },
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "Safety", value: "Zero Harm", desc: "Zero lost-time incidents on construction sites" },
    ],
    chart: {
      type: "pie" as const,
      title: "Project Portfolio by Type",
      data: [
        { name: "Roads & Highways", value: 30, color: "#052e16" },
        { name: "Buildings", value: 25, color: "#14532d" },
        { name: "Water Systems", value: 20, color: "#d97706" },
        { name: "Energy", value: 15, color: "#166534" },
        { name: "Ports & Bridges", value: 10, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "materials",
    title: "Construction Materials & Supplies",
    description:
      "A comprehensive range of high-quality construction materials to support infrastructure projects across the region with strategic inventories and quality assurance.",
    icon: "cube",
    services: [
      "Cement and Cementitious Products",
      "Aggregates including crushed stone, sand, gravel",
      "Steel and Reinforcement including rebar, structural steel",
      "Concrete Products including ready-mix, precast elements",
      "Roofing Materials including metal sheets, tiles, membranes",
      "Electrical and Plumbing supplies",
      "Finishing Materials including tiles, paints, doors, windows",
      "Road Construction Materials including bitumen, asphalt",
      "Formwork and Scaffolding systems",
    ],
    capabilities: [
      "Quality assurance through rigorous testing and certification",
      "Strategic warehousing and inventory management",
      "Bulk supply capabilities for large projects",
      "Timely delivery through integrated logistics network",
      "Technical support and material selection guidance",
    ],
    overview:
      "Our Construction Materials division provides a complete range of quality-assured building materials, from cement and aggregates to steel and finishing products. With strategic warehousing and logistics networks across Sierra Leone, we ensure timely delivery of materials to any project site in West Africa. All materials undergo rigorous quality testing and certification.",
    highlights: [
      { label: "SKUs", value: "500+", desc: "Different material products available in our inventory" },
      { label: "Warehouses", value: "5", desc: "Strategic warehouse locations across Sierra Leone" },
      { label: "Bulk Capacity", value: "10K tons", desc: "Monthly bulk material handling capacity" },
      { label: "Quality", value: "100%", desc: "Material testing and certification compliance" },
      { label: "Delivery", value: "<48 hrs", desc: "Average delivery time for standard orders" },
      { label: "Suppliers", value: "30+", desc: "Verified international and local material suppliers" },
    ],
    chart: {
      type: "bar" as const,
      title: "Inventory by Category (SKUs)",
      data: [
        { name: "Cement", value: 120, color: "#052e16" },
        { name: "Steel", value: 95, color: "#14532d" },
        { name: "Aggregates", value: 85, color: "#d97706" },
        { name: "Finishing", value: 110, color: "#166534" },
        { name: "Roofing", value: 90, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "trade",
    title: "Import & Export",
    description:
      "Facilitating global commerce connecting Sierra Leone and West African markets with suppliers and buyers worldwide through expertise in international trade regulations.",
    icon: "globe",
    services: [
      "Capital Equipment importation",
      "Consumer Goods importation",
      "Raw Materials importation",
      "Technology Products importation",
      "Medical Supplies importation",
      "Vehicles and Transportation importation",
      "Minerals and Ores export",
      "Agricultural Commodities export",
      "Fisheries Products export",
      "Timber and Wood Products export",
    ],
    capabilities: [
      "Market research and intelligence",
      "Supplier and buyer identification and vetting",
      "Trade documentation and compliance",
      "Customs clearance and brokerage",
      "Trade finance facilitation",
      "Risk management and insurance",
      "Quality inspection and certification coordination",
    ],
    overview:
      "APVIA's Import & Export division bridges Sierra Leone with global markets, managing end-to-end trade logistics from supplier identification to customs clearance. Our expertise in international trade regulations and our extensive network of partners ensure smooth, compliant, and cost-effective trade operations across 25+ trade routes spanning 4 continents.",
    highlights: [
      { label: "Trade Routes", value: "25+", desc: "Active international trade routes across 4 continents" },
      { label: "Volume", value: "50K tons", desc: "Annual trade volume managed across all product categories" },
      { label: "Markets", value: "15+", desc: "Active import and export market destinations" },
      { label: "Compliance", value: "100%", desc: "Full regulatory compliance across all trade operations" },
      { label: "Growth", value: "22% YoY", desc: "Year-on-year trade volume growth rate" },
      { label: "Partners", value: "40+", desc: "Verified global trade partners and suppliers" },
    ],
    chart: {
      type: "pie" as const,
      title: "Import vs Export Volume",
      data: [
        { name: "Imports", value: 55, color: "#052e16" },
        { name: "Exports", value: 45, color: "#d97706" },
      ],
    },
  },
  {
    id: "procurement",
    title: "Procurement & Supply Services",
    description:
      "Comprehensive procurement and supply chain management services helping clients source goods and services efficiently, transparently, and cost-effectively.",
    icon: "clipboard",
    services: [
      "Strategic Sourcing and supplier evaluation",
      "Tender Management end-to-end",
      "Category Management across key categories",
      "Emergency Procurement rapid response",
      "Local Content Procurement facilitation",
      "Vendor Management and development programs",
    ],
    capabilities: [
      "Demand planning and forecasting",
      "Inventory optimization and management",
      "Warehouse management and operations",
      "Distribution network design and management",
      "Supply chain technology implementation",
      "Performance measurement and continuous improvement",
    ],
    overview:
      "Our Procurement & Supply division delivers efficient, transparent, and cost-effective procurement solutions. We leverage our extensive supplier network, deep market knowledge, and advanced procurement systems to help clients source goods and services at optimal value, achieving average cost savings of 15-25% through strategic sourcing.",
    highlights: [
      { label: "Savings", value: "15-25%", desc: "Average cost savings through strategic sourcing" },
      { label: "Suppliers", value: "200+", desc: "Vetted and approved suppliers across all categories" },
      { label: "Categories", value: "50+", desc: "Procurement categories managed across all sectors" },
      { label: "Cycle Time", value: "-40%", desc: "Reduction in average procurement cycle time" },
      { label: "Transparency", value: "100%", desc: "Full audit trail and transparent procurement process" },
      { label: "Tenders", value: "100+/yr", desc: "Tender processes managed annually" },
    ],
    chart: {
      type: "bar" as const,
      title: "Cost Savings by Category (%)",
      data: [
        { name: "Materials", value: 22, color: "#052e16" },
        { name: "Services", value: 18, color: "#14532d" },
        { name: "Equipment", value: 25, color: "#d97706" },
        { name: "Logistics", value: 15, color: "#166534" },
        { name: "Labour", value: 20, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "logistics",
    title: "Logistics, Transportation & Supply Chain",
    description:
      "End-to-end supply chain and transportation solutions ensuring efficient movement of goods across Sierra Leone and throughout the West African region.",
    icon: "truck",
    services: [
      "Road Freight with modern vehicle fleet",
      "Heavy Haulage for oversized cargo",
      "Last-Mile Delivery to remote locations",
      "Fleet Management solutions",
      "Modern Warehousing facilities",
      "Bonded Warehousing for imported goods",
      "Port and Terminal Services",
      "Cold Chain Logistics for perishable goods",
      "Project Logistics for large-scale operations",
    ],
    capabilities: [
      "Strategic location in Freetown port city",
      "Modern fleet including flatbeds, tankers, container carriers",
      "Comprehensive inventory tracking systems",
      "Cross-border logistics and regional distribution",
      "Risk management and cargo insurance services",
    ],
    overview:
      "APVIA's Logistics division provides comprehensive supply chain solutions from warehousing to last-mile delivery. Our modern fleet of 80+ vehicles, strategic Freetown port location, and real-time GPS tracking systems ensure efficient movement of goods across Sierra Leone's 16 districts and the broader West African region.",
    highlights: [
      { label: "Fleet", value: "80+", desc: "Modern vehicles including flatbeds, tankers, and container carriers" },
      { label: "Warehousing", value: "25K m²", desc: "Total warehousing space including bonded facilities" },
      { label: "Coverage", value: "95%", desc: "Geographic coverage across Sierra Leone's 16 districts" },
      { label: "Tracking", value: "Real-time", desc: "GPS-enabled fleet tracking and delivery monitoring" },
      { label: "Cross-Border", value: "5 Countries", desc: "Cross-border logistics operations across West Africa" },
      { label: "Uptime", value: "99%", desc: "Fleet availability and operational uptime" },
    ],
    chart: {
      type: "pie" as const,
      title: "Fleet Composition",
      data: [
        { name: "Flatbeds", value: 30, color: "#052e16" },
        { name: "Container Carriers", value: 25, color: "#14532d" },
        { name: "Tankers", value: 20, color: "#d97706" },
        { name: "Heavy Haulage", value: 15, color: "#166534" },
        { name: "Cold Chain", value: 10, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "mining",
    title: "Mining, Mining Machinery & Equipment",
    description:
      "Comprehensive solutions for the mining sector combining equipment supply, technical services, and industry expertise to support responsible mineral resource development.",
    icon: "gem",
    services: [
      "Mining Operations Support for all scales",
      "Exploration Support logistics and equipment",
      "Mineral Trading including iron ore, bauxite, rutile, gold, diamonds",
      "Mining Consultancy and feasibility studies",
      "Environmental Management for mining operations",
      "Surface and Underground Mining Equipment supply",
      "Processing Equipment supply",
      "Equipment Rental and Leasing",
    ],
    capabilities: [
      "Equipment maintenance and repair services",
      "Operator training and certification",
      "Technical support and field service",
      "Equipment financing facilitation",
      "Used equipment sourcing and refurbishment",
    ],
    overview:
      "APVIA's Mining division provides end-to-end solutions from exploration support to mineral trading. We supply mining equipment, provide technical services, and support responsible mineral resource development across Sierra Leone's rich mineral belt. Our operations employ cutting-edge extraction technology combined with rigorous ESG standards.",
    highlights: [
      { label: "Minerals", value: "6+", desc: "Key minerals traded: diamonds, gold, rutile, bauxite, iron ore, coltan" },
      { label: "Equipment", value: "100+", desc: "Mining machines and equipment available for sale or lease" },
      { label: "Mines Supported", value: "15+", desc: "Active mining operations supported with equipment and services" },
      { label: "Revenue", value: "$165M", desc: "Annual mineral export revenue facilitated" },
      { label: "ESG", value: "AA Rating", desc: "Environmental, Social, and Governance compliance rating" },
      { label: "Training", value: "500+/yr", desc: "Mining operators trained and certified annually" },
    ],
    chart: {
      type: "pie" as const,
      title: "Mineral Revenue by Type",
      data: [
        { name: "Diamonds", value: 32, color: "#052e16" },
        { name: "Rutile", value: 26, color: "#14532d" },
        { name: "Gold", value: 20, color: "#d97706" },
        { name: "Bauxite", value: 14, color: "#166534" },
        { name: "Iron Ore", value: 8, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "maritime",
    title: "Maritime Services",
    description:
      "Leveraging Sierra Leone's strategic coastal location and Freetown's natural deep-water harbor to provide comprehensive maritime services.",
    icon: "anchor",
    services: [
      "Port Agency Services for shipping lines",
      "Ship Chandlering supply of provisions and stores",
      "Cargo Handling and terminal operations",
      "Customs Brokerage for seaborne cargo",
      "Freight Forwarding FCL and LCL shipments",
      "Vessel Services including crew changes and medical assistance",
      "Offshore Logistics support",
      "Marine Surveying and consultancy",
      "Fisheries and Marine Support",
    ],
    capabilities: [
      "Stevedoring and cargo handling expertise",
      "Container stuffing and unstuffing",
      "Cargo consolidation and deconsolidation",
      "Maritime security coordination",
      "Harbor and dredging support services",
    ],
    overview:
      "Leveraging Freetown's natural deep-water harbor — one of the largest in the world — APVIA's Maritime Services division provides comprehensive port agency, cargo handling, and vessel services. Our strategic coastal location enables efficient regional distribution and international trade facilitation.",
    highlights: [
      { label: "Harbor", value: "Deep-Water", desc: "World-class natural deep-water port access" },
      { label: "Cargo Volume", value: "2M tons", desc: "Annual cargo throughput at Freetown port" },
      { label: "Ship Calls", value: "500+/yr", desc: "Vessel port calls managed annually" },
      { label: "Services", value: "Full Range", desc: "Port agency, chandlering, cargo handling, and freight forwarding" },
      { label: "Response", value: "24/7", desc: "Round-the-clock port operations and vessel support" },
      { label: "Clients", value: "30+", desc: "International shipping lines and cargo owners served" },
    ],
    chart: {
      type: "bar" as const,
      title: "Cargo Throughput Growth (M tons)",
      data: [
        { name: "2020", value: 1.2, color: "#14532d" },
        { name: "2021", value: 1.4, color: "#14532d" },
        { name: "2022", value: 1.6, color: "#052e16" },
        { name: "2023", value: 1.8, color: "#052e16" },
        { name: "2024", value: 2.0, color: "#d97706" },
      ],
    },
  },
  {
    id: "agriculture",
    title: "Agriculture, Agro-Processing, Fisheries & Aquaculture",
    description:
      "Developing Sierra Leone's agricultural potential, promoting food security, and creating value-added opportunities in agriculture and fisheries.",
    icon: "sprout",
    services: [
      "Commercial Farming for key crops",
      "Out-grower Schemes for smallholder farmers",
      "Agro-Inputs Supply including seeds, fertilizers, machinery",
      "Irrigation Development systems",
      "Agricultural Extension Services",
      "Agro-Processing facilities and value addition",
      "Commercial Fisheries operations",
      "Aquaculture Development including tilapia, catfish",
      "Fish Processing and Cold Storage",
    ],
    capabilities: [
      "International food safety and quality standards",
      "Packaging and Branding for domestic and export markets",
      "Export Marketing for fish and seafood products",
      "Technical Support for artisanal fishing communities",
      "Sustainable agriculture practices",
    ],
    overview:
      "APVIA's Agriculture division develops Sierra Leone's vast agricultural potential — 5.4 million hectares of arable land with only 15% cultivated. We integrate modern farming techniques with traditional knowledge across commercial farming, agro-processing, and aquaculture operations, promoting food security and creating value-added opportunities for export markets.",
    highlights: [
      { label: "Arable Land", value: "5.4M ha", desc: "Total arable land with only 15% currently cultivated" },
      { label: "Crops", value: "Cocoa, Rice", desc: "Primary crops including premium fine-flavor cocoa and staple rice" },
      { label: "Employment", value: "60%", desc: "Agriculture's share of national workforce" },
      { label: "GDP", value: "23%", desc: "Agriculture's contribution to national GDP" },
      { label: "Export Growth", value: "22% YoY", desc: "Year-on-year agricultural export growth" },
      { label: "Partners", value: "200+", desc: "Smallholder farmers in out-grower schemes" },
    ],
    chart: {
      type: "pie" as const,
      title: "Crop Export Mix",
      data: [
        { name: "Cocoa", value: 35, color: "#052e16" },
        { name: "Rice", value: 25, color: "#14532d" },
        { name: "Fish & Seafood", value: 20, color: "#d97706" },
        { name: "Palm Oil", value: 12, color: "#166534" },
        { name: "Other", value: 8, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "machinery",
    title: "Machinery Supplies",
    description:
      "A comprehensive range of industrial and commercial machinery across multiple sectors, serving as a trusted partner for businesses seeking reliable equipment.",
    icon: "cog",
    services: [
      "Construction Machinery including excavators, bulldozers, loaders",
      "Agricultural Machinery including tractors, harvesters, irrigation",
      "Industrial Machinery including manufacturing equipment, generators",
      "Material Handling Equipment including forklifts, cranes",
      "Power Generation Equipment including diesel and solar solutions",
      "Transportation Equipment including trucks, buses, specialized vehicles",
    ],
    capabilities: [
      "New and used machinery sales",
      "Machinery rental and leasing",
      "Spare parts supply",
      "Maintenance and repair services",
      "Operator training",
      "Technical consultancy and equipment selection",
      "Financing facilitation",
    ],
    overview:
      "APVIA's Machinery Supplies division provides a comprehensive range of industrial and commercial machinery across construction, agriculture, manufacturing, and power generation sectors. From new and used equipment sales to rental, maintenance, and operator training, we serve as a trusted one-stop partner for all machinery needs.",
    highlights: [
      { label: "Categories", value: "6", desc: "Major machinery categories covering all sectors" },
      { label: "Equipment", value: "500+", desc: "Different machinery types available in our catalog" },
      { label: "Brands", value: "15+", desc: "International machinery brands represented" },
      { label: "Rental", value: "Available", desc: "Flexible rental and leasing options for all equipment" },
      { label: "Maintenance", value: "Full Service", desc: "Comprehensive maintenance and repair services" },
      { label: "Training", value: "Included", desc: "Operator training included with equipment supply" },
    ],
    chart: {
      type: "bar" as const,
      title: "Equipment Available by Sector",
      data: [
        { name: "Construction", value: 180, color: "#052e16" },
        { name: "Agriculture", value: 120, color: "#14532d" },
        { name: "Industrial", value: 95, color: "#d97706" },
        { name: "Transport", value: 65, color: "#166534" },
        { name: "Power Gen", value: 40, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "partnerships",
    title: "Joint Ventures, Partnerships & Strategic Alliances",
    description:
      "Actively developing and managing strategic partnerships that leverage complementary strengths to pursue larger opportunities and deliver enhanced value.",
    icon: "handshake",
    services: [
      "Joint Venture Development and management",
      "Equity Joint Ventures co-investment",
      "Strategic Alliances long-term collaborations",
      "Public-Private Partnerships (PPPs)",
      "Consortium Arrangements for large projects",
      "Technology Partnerships for transfer and capacity building",
      "Distribution Partnerships for market access",
    ],
    capabilities: [
      "Opportunity identification and evaluation",
      "Partner selection and vetting",
      "Equitable joint venture structuring",
      "Governance framework establishment",
      "Active management and oversight of JV operations",
    ],
    overview:
      "APVIA actively develops and manages strategic partnerships that leverage complementary strengths to pursue larger opportunities. From equity joint ventures and PPPs to technology partnerships and distribution alliances, we structure and manage collaborations that create value for all stakeholders across West Africa.",
    highlights: [
      { label: "Active JVs", value: "12", desc: "Joint venture projects currently in operation" },
      { label: "Partners", value: "25+", desc: "International and local strategic partners" },
      { label: "Sectors", value: "8", desc: "Different sectors with active partnership arrangements" },
      { label: "Value", value: "$100M+", desc: "Total value of partnership portfolio" },
      { label: "Success Rate", value: "90%", desc: "Partnerships meeting or exceeding performance targets" },
      { label: "New JVs", value: "5/yr", desc: "Average new partnership formations per year" },
    ],
    chart: {
      type: "pie" as const,
      title: "Partnerships by Sector",
      data: [
        { name: "Mining", value: 28, color: "#052e16" },
        { name: "Construction", value: 22, color: "#14532d" },
        { name: "Trade", value: 20, color: "#d97706" },
        { name: "Energy", value: 18, color: "#166534" },
        { name: "Other", value: 12, color: "#fbbf24" },
      ],
    },
  },
  {
    id: "consultancy",
    title: "Business & Diplomatic Consultancy",
    description:
      "Specialized consultancy services leveraging deep understanding of the West African business environment, government relations, and international networks.",
    icon: "briefcase",
    services: [
      "Market Entry Strategy for West African markets",
      "Investment Advisory and due diligence",
      "Regulatory Compliance guidance",
      "Government Relations facilitation",
      "Business Development support",
      "Risk Assessment and Management",
      "Diplomatic Liaison and protocol services",
      "Trade Promotion support",
      "Policy Advocacy representation",
      "Cultural and Cross-Cultural Advisory",
    ],
    capabilities: [
      "Local Content Development strategies",
      "Corporate Social Responsibility program design",
      "Sustainability Consulting (ESG practices)",
      "Conflict Sensitivity advisory",
      "International relations and diplomatic networks",
    ],
    overview:
      "APVIA's Business & Diplomatic Consultancy leverages deep understanding of the West African business environment, government relations, and international networks. From market entry strategy and investment advisory to government relations and diplomatic liaison, we help clients navigate the complexities of doing business in Sierra Leone and the broader region.",
    highlights: [
      { label: "Markets", value: "5+", desc: "West African markets covered by our consultancy practice" },
      { label: "Clients", value: "50+", desc: "International organizations and corporations advised" },
      { label: "Government", value: "3 Govts", desc: "Formal advisory relationships with national governments" },
      { label: "Sectors", value: "All", desc: "Cross-sectoral consultancy covering all 11 business verticals" },
      { label: "Network", value: "500+", desc: "Professional contacts across government, industry, and academia" },
      { label: "Experience", value: "30+ yrs", desc: "Combined consultancy experience across the leadership team" },
    ],
    chart: {
      type: "bar" as const,
      title: "Client Satisfaction Score",
      data: [
        { name: "2020", value: 85, color: "#14532d" },
        { name: "2021", value: 88, color: "#14532d" },
        { name: "2022", value: 91, color: "#052e16" },
        { name: "2023", value: 94, color: "#052e16" },
        { name: "2024", value: 96, color: "#d97706" },
      ],
    },
  },
];

// ─── CORE VALUES ────────────────────────────────────────────────────────
// Used by: HomepageCoreValues, about/page.tsx
export const coreValuesContent = [
  {
    title: "Integrity",
    description:
      "Conducting all business with honesty, transparency, and accountability. Upholding the highest ethical standards in every interaction.",
    icon: "shield",
    modalOverview:
      "Integrity is the cornerstone of everything we do at APVIA Ltd. We believe that sustainable business success is built on a foundation of trust, transparency, and unwavering ethical standards. Our commitment to integrity extends across every partnership, transaction, and stakeholder relationship.",
    highlights: [
      { label: "Compliance", value: "100%", desc: "Full compliance with all regulatory and legal requirements across all markets" },
      { label: "Audit Rating", value: "A+", desc: "Independent audit rating with zero material findings in the last 3 years" },
      { label: "Whistleblower", value: "24/7", desc: "Anonymous reporting channel with 48-hour response guarantee" },
      { label: "Training", value: "100%", desc: "All employees complete annual ethics training and certification" },
      { label: "Governance", value: "ISO 37001", desc: "Anti-bribery management system certified to international standards" },
      { label: "Transparency", value: "Annual", desc: "Public annual sustainability report with full financial disclosure" },
    ],
    chart: {
      type: "pie" as const,
      title: "Ethics Compliance Breakdown",
      data: [
        { name: "Full Compliance", value: 92, color: "#052e16" },
        { name: "Minor Issues", value: 6, color: "#d97706" },
        { name: "Under Review", value: 2, color: "#dc2626" },
      ],
    },
  },
  {
    title: "Excellence",
    description:
      "Pursuing quality and continuous improvement in all endeavors. Delivering services that meet or exceed international standards.",
    icon: "star",
    modalOverview:
      "Excellence drives our pursuit of the highest quality in every project, service, and interaction. We continuously invest in technology, training, and process improvement to ensure our deliverables consistently exceed international standards and client expectations.",
    highlights: [
      { label: "ISO Certs", value: "5", desc: "ISO 9001, 14001, 45001, 27001, and 37001 certified operations" },
      { label: "Project Delivery", value: "98%", desc: "On-time and within-budget project delivery rate across all divisions" },
      { label: "Client NPS", value: "82", desc: "Net Promoter Score well above industry average of 45" },
      { label: "Quality Score", value: "4.8/5", desc: "Average quality rating from independent project assessments" },
      { label: "Error Rate", value: "<0.5%", desc: "Defect rate across all operational processes" },
      { label: "Improvement", value: "15% YoY", desc: "Year-on-year improvement in operational efficiency metrics" },
    ],
    chart: {
      type: "bar" as const,
      title: "Quality Performance Trend",
      data: [
        { name: "2020", value: 88, color: "#14532d" },
        { name: "2021", value: 91, color: "#14532d" },
        { name: "2022", value: 94, color: "#14532d" },
        { name: "2023", value: 96, color: "#052e16" },
        { name: "2024", value: 98, color: "#052e16" },
      ],
    },
  },
  {
    title: "Sustainability",
    description:
      "Balancing economic objectives with environmental stewardship and social responsibility. Investing in projects that deliver long-term benefits.",
    icon: "leaf",
    modalOverview:
      "Sustainability is embedded in our business strategy. We balance economic growth with environmental stewardship and social responsibility, ensuring our projects create lasting value for communities, ecosystems, and future generations while delivering strong returns for investors.",
    highlights: [
      { label: "Carbon Target", value: "-30%", desc: "Committed to 30% carbon emission reduction by 2030 across all operations" },
      { label: "Renewable Energy", value: "60%", desc: "Percentage of operations powered by renewable energy sources" },
      { label: "Community Fund", value: "3% Rev", desc: "3% of annual revenue allocated to community development programs" },
      { label: "Jobs Created", value: "5,000+", desc: "Direct and indirect employment created through sustainable projects" },
      { label: "Land Rehab", value: "100%", desc: "Full land rehabilitation commitment for all mining and construction sites" },
      { label: "ESG Rating", value: "AA", desc: "MSCI ESG rating reflecting strong sustainability practices" },
    ],
    chart: {
      type: "pie" as const,
      title: "Revenue Allocation to Sustainability",
      data: [
        { name: "Operations", value: 55, color: "#052e16" },
        { name: "Community Fund", value: 15, color: "#d97706" },
        { name: "Environmental", value: 12, color: "#166534" },
        { name: "Social Programs", value: 10, color: "#14532d" },
        { name: "Reinvestment", value: 8, color: "#fbbf24" },
      ],
    },
  },
  {
    title: "Collaboration",
    description:
      "Building strong, mutually beneficial partnerships. Respecting diversity and fostering inclusive teamwork to achieve shared goals.",
    icon: "users",
    modalOverview:
      "Our collaborative approach leverages the strengths of diverse partners, communities, and stakeholders to achieve outcomes greater than any single entity could accomplish. We actively seek partnerships that bring complementary expertise and shared values to our projects.",
    highlights: [
      { label: "Partners", value: "25+", desc: "Strategic partnerships with international and local organizations" },
      { label: "Joint Ventures", value: "12", desc: "Active joint venture projects across West Africa" },
      { label: "Communities", value: "50+", desc: "Community partnerships for local development and employment" },
      { label: "Govt Relations", value: "3 Govts", desc: "Formal partnerships with national governments" },
      { label: "Academic", value: "8", desc: "University and research institution collaborations" },
      { label: "Industry Groups", value: "6", desc: "Active membership in industry associations and chambers" },
    ],
    chart: {
      type: "bar" as const,
      title: "Partnership Growth (5-Year)",
      data: [
        { name: "2020", value: 12, color: "#14532d" },
        { name: "2021", value: 16, color: "#14532d" },
        { name: "2022", value: 20, color: "#052e16" },
        { name: "2023", value: 23, color: "#052e16" },
        { name: "2024", value: 28, color: "#d97706" },
      ],
    },
  },
  {
    title: "Safety",
    description:
      "Prioritizing the health, safety, and well-being of all employees, contractors, and stakeholders. Maintaining zero-harm objectives.",
    icon: "heart",
    modalOverview:
      "Safety is non-negotiable at APVIA Ltd. We maintain a zero-harm philosophy across all operations, investing in comprehensive safety systems, training, and equipment to protect every person who works with or near our projects.",
    highlights: [
      { label: "Safety Record", value: "Zero Harm", desc: "Zero lost-time incidents across all operations for consecutive years" },
      { label: "Training Hours", value: "10,000+", desc: "Annual safety training hours delivered to employees and contractors" },
      { label: "Safety Audits", value: "Monthly", desc: "Comprehensive safety audits conducted across all project sites" },
      { label: "PPE Coverage", value: "100%", desc: "Full personal protective equipment coverage for all personnel" },
      { label: "Emergency Drills", value: "Quarterly", desc: "Regular emergency response drills and scenario training" },
      { label: "Incident Reports", value: "<5/yr", desc: "Near-miss reports actively tracked and resolved within 48 hours" },
    ],
    chart: {
      type: "pie" as const,
      title: "Safety Training by Type",
      data: [
        { name: "On-Site Drills", value: 35, color: "#052e16" },
        { name: "Classroom", value: 25, color: "#14532d" },
        { name: "E-Learning", value: 20, color: "#d97706" },
        { name: "Certification", value: 15, color: "#166534" },
        { name: "Emergency", value: 5, color: "#fbbf24" },
      ],
    },
  },
  {
    title: "Reliability",
    description:
      "Honoring commitments and delivering on promises. Building trust through consistent, dependable performance.",
    icon: "check",
    modalOverview:
      "Reliability is the measure of our trustworthiness. We deliver on our promises consistently, meeting deadlines, budgets, and quality expectations. Our track record of dependable performance has earned us the trust of governments, development agencies, and international partners.",
    highlights: [
      { label: "Contract Honor", value: "100%", desc: "Full compliance with all contractual obligations and timelines" },
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "On-Budget", value: "96%", desc: "Projects completed within approved budget parameters" },
      { label: "Repeat Clients", value: "85%", desc: "Client retention rate demonstrating trust and satisfaction" },
      { label: "Uptime", value: "99.5%", desc: "Equipment and operational availability across all sites" },
      { label: "Response Time", value: "<4 hrs", desc: "Average emergency response time for critical issues" },
    ],
    chart: {
      type: "bar" as const,
      title: "On-Time Delivery Rate (%)",
      data: [
        { name: "2020", value: 92, color: "#14532d" },
        { name: "2021", value: 94, color: "#14532d" },
        { name: "2022", value: 96, color: "#052e16" },
        { name: "2023", value: 97, color: "#052e16" },
        { name: "2024", value: 98, color: "#d97706" },
      ],
    },
  },
];

// ─── VIDEO CONTENT ──────────────────────────────────────────────────────
// Used by: HomepageVideoSections, about/page.tsx
export const whyInvestVideos = [
  {
    src: "/videos/ore.mp4",
    title: "Rich Mineral Ore",
    desc: "Abundant deposits of diamonds, gold, rutile, and bauxite",
    modalTitle: "Sierra Leone Mineral Wealth",
    modalDescription:
      "Sierra Leone sits on one of Africa's richest mineral belts with an estimated $10 billion in untapped mineral wealth. The country is the 7th largest diamond producer globally and holds significant rutile deposits (world's largest), bauxite, iron ore, and gold reserves. Modern mining techniques and responsible extraction practices are unlocking new potential across 15+ active mining regions.",
    facts: [
      { label: "Mineral Value", value: "$10B+" },
      { label: "Diamond Rank", value: "#7 Global" },
      { label: "Rutile Reserves", value: "#1 World" },
      { label: "Active Mines", value: "15+" },
      { label: "Export Revenue", value: "$165M/yr" },
      { label: "New Discoveries", value: "8 (2024)" },
    ],
  },
  {
    src: "/videos/flagship-x.mp4",
    title: "Investment Landscape",
    desc: "Growing economy with favorable investment policies",
    modalTitle: "Sierra Leone Investment Landscape",
    modalDescription:
      "Sierra Leone offers one of West Africa's most attractive investment climates with a GDP growth of 5.4%, tax incentives for foreign investors, and a strategic location along major shipping routes. The country ranks among the top reformers in the World Bank's Ease of Doing Business index, with streamlined company registration and protected property rights.",
    facts: [
      { label: "GDP Growth", value: "5.4%" },
      { label: "FDI Inflow Growth", value: "18% YoY" },
      { label: "Corporate Tax", value: "30%" },
      { label: "Mining Royalty", value: "5-15%" },
      { label: "Registration Time", value: "48 hrs" },
      { label: "Repatriation", value: "100%" },
    ],
  },
  {
    src: "/videos/video-flagship.mp4",
    title: "Flagship Projects",
    desc: "World-class developments across West Africa",
    modalTitle: "Flagship Development Projects",
    modalDescription:
      "Our flagship projects span critical infrastructure sectors that form the backbone of Sierra Leone's economic transformation. From port expansion and road networks to industrial parks and housing developments, these projects deliver long-term returns while shaping the nation's future. Each project is structured with clear milestones, risk mitigation, and community benefit frameworks.",
    facts: [
      { label: "Project Value", value: "$250M+" },
      { label: "Jobs Created", value: "5,000+" },
      { label: "ROI Projection", value: "15-22%" },
      { label: "Timeline", value: "3-7 yrs" },
      { label: "Communities", value: "50+" },
      { label: "Partners", value: "12 Intl" },
    ],
  },
];

export const mineralVideos = [
  {
    src: "/videos/flagship-1.mp4",
    title: "Mineral Extraction",
    desc: "Advanced mining operations and mineral processing",
    modalTitle: "Advanced Mining Operations",
    modalDescription:
      "Our mining operations employ cutting-edge extraction technology combined with rigorous environmental and social governance (ESG) standards. We implement traceable supply chains, community benefit sharing agreements, and land rehabilitation programs that exceed international safety standards while generating significant employment and revenue for host communities.",
    facts: [
      { label: "ESG Rating", value: "AA" },
      { label: "Local Employment", value: "85%" },
      { label: "Rehabilitation", value: "100%" },
      { label: "Safety Record", value: "Zero Harm" },
      { label: "Community Fund", value: "3% Revenue" },
      { label: "Certifications", value: "5 Intl" },
    ],
  },
  {
    src: "/videos/energy.mp4",
    title: "Energy & Power",
    desc: "Sustainable energy solutions driving national growth",
    modalTitle: "National Energy Transformation",
    modalDescription:
      "The energy sector represents a $4.2 billion investment opportunity. Sierra Leone's National Energy Plan targets 1GW of new capacity by 2030, primarily through renewables. The country receives over 2,000 hours of sunshine annually, making it ideal for solar energy projects. Independent Power Producer (IPP) frameworks are now in place for international investors.",
    facts: [
      { label: "Target Capacity", value: "1 GW" },
      { label: "Sunshine Hours", value: "2,000+/yr" },
      { label: "Solar Irradiance", value: "5.5 kWh/m²" },
      { label: "Market Size", value: "$4.2B" },
      { label: "Mini-Grid Sites", value: "200+" },
      { label: "IPP Licenses", value: "12 Issued" },
    ],
  },
  {
    src: "/videos/flagship-3.mp4",
    title: "Sustainable Mining",
    desc: "Responsible mineral extraction and community development",
    modalTitle: "Responsible Mining Operations",
    modalDescription:
      "Our sustainable mining operations combine world-class extraction technology with rigorous environmental and social governance (ESG) standards. We implement traceable supply chains, community benefit sharing agreements, and land rehabilitation programs. Our mines exceed international safety standards while generating significant employment and revenue for host communities.",
    facts: [
      { label: "ESG Rating", value: "AA" },
      { label: "Local Employment", value: "85%" },
      { label: "Rehabilitation", value: "100%" },
      { label: "Safety Record", value: "Zero Harm" },
      { label: "Community Fund", value: "3% Revenue" },
      { label: "Certifications", value: "5 Intl" },
    ],
  },
  {
    src: "/videos/flagship-4.mp4",
    title: "Infrastructure Development",
    desc: "Building world-class infrastructure across Sierra Leone",
    modalTitle: "Infrastructure Investment Opportunities",
    modalDescription:
      "Sierra Leone's infrastructure deficit presents a $15 billion opportunity. The government has prioritized road construction, port expansion, water systems, and telecommunications. Our projects include the Freetown Port Modernization, Highway Corridor Development, and Industrial Park Construction, all structured as Public-Private Partnerships with guaranteed government backing.",
    facts: [
      { label: "Market Gap", value: "$15B" },
      { label: "PPP Projects", value: "8 Active" },
      { label: "Road Network", value: "12,000 km" },
      { label: "Port Capacity", value: "3x Growth" },
      { label: "Govt Guarantee", value: "Sovereign" },
      { label: "Completion", value: "2027-2030" },
    ],
  },
];

// About page investment showcase — same videos, same descriptions
export const aboutInvestmentShowcase = [
  {
    src: "/videos/flagship-3.mp4",
    title: "Mineral Wealth & Resources",
    desc: "Rich mineral deposits including diamonds, gold, rutile, and bauxite",
    modalTitle: "Sierra Leone's Mineral Wealth",
    modalDescription: whyInvestVideos[0].modalDescription, // Same as homepage "Rich Mineral Ore"
    facts: whyInvestVideos[0].facts,
  },
  {
    src: "/videos/flagship-4.mp4",
    title: "Pristine Natural Landscape",
    desc: "Abundant natural resources and beautiful landscapes",
    modalTitle: "Natural Resources & Tourism Potential",
    modalDescription:
      "Beyond minerals, Sierra Leone boasts pristine beaches, tropical forests, and rich biodiversity. The country's natural beauty presents opportunities in eco-tourism, sustainable forestry, and carbon credit programs. Our environmental initiatives protect these assets while creating economic value.",
    facts: [
      { label: "Forest Cover", value: "37%", desc: "Tropical forest coverage with sustainable management programs" },
      { label: "Beaches", value: "400 km", desc: "Pristine coastline ideal for tourism development" },
      { label: "Biodiversity", value: "High", desc: "Rich flora and fauna with conservation partnerships" },
      { label: "Carbon Credits", value: "Active", desc: "REDD+ carbon credit programs generating revenue" },
      { label: "Eco-Tourism", value: "Growing", desc: "Emerging eco-tourism sector with international interest" },
      { label: "Sustainability", value: "Core", desc: "Environmental sustainability embedded in all operations" },
    ],
  },
  {
    src: "/videos/flagship-x.mp4",
    title: "Emerging Market Potential",
    desc: "Fast-growing economy with favorable investment climate",
    modalTitle: "Emerging Market Opportunity",
    modalDescription: whyInvestVideos[1].modalDescription, // Same as homepage "Investment Landscape"
    facts: whyInvestVideos[1].facts,
  },
];
