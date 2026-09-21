"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sectors = [
  {
    id: "transport-infrastructure",
    name: "Transport & Infrastructure",
    tagline: "Connecting Sierra Leone to the World",
    image: "/flagship/infrastructure/president-foundation.jpg",
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
        image: null,
        description: "A 7–8km bridge spanning the Sierra Leone River estuary, directly linking Freetown to Lungi International Airport. The bridge eliminates the current 3-hour road trip or boat journey, transforming Sierra Leone's connectivity. Acrow will finance, construct, and operate the bridge under a 30–35 year Design-Build-Operate-Transfer (DBOT) concession before transferring ownership to the Government.",
        highlights: ["7–8km over Sierra Leone River estuary", "30–35 year concession period", "Hundreds of millions in U.S. exports", "Link to Freetown International Airport"],
        investment: "Structured DBOT concession — toll revenue + government guarantees",
        fullDetails: "The Lungi Bridge is Sierra Leone's single largest infrastructure project. Under the BOOT model, Acrow Corporation of America will finance, construct, own and operate the bridge for a defined period before transferring ownership to the Government. The bridge will feature four traffic lanes and space for a future railway line. Current travel between Freetown and Lungi Airport requires a ferry, water taxi, or a 3-hour road detour — the bridge will reduce this to a 10-minute drive. The project has bipartisan support and was confirmed by U.S. Ambassador-designate Daniel Travis before the U.S. Senate Foreign Relations Committee in August 2026.",
      },
      {
        name: "Queen Elizabeth II Quay Expansion",
        value: "$270M+",
        status: "Phase 2 Ongoing",
        statusColor: "green",
        developer: "Government of Sierra Leone + Partners",
        image: null,
        description: "Major expansion of Sierra Leone's primary deep-water port in Freetown, increasing capacity to handle growing trade volumes. The modernisation includes new container terminals, cargo handling equipment, and improved customs infrastructure to position Freetown as a regional logistics hub.",
        highlights: ["New container terminals", "Modern cargo handling equipment", "Improved customs infrastructure", "Regional logistics hub positioning"],
        investment: "Port concession opportunities — cargo handling, warehousing, logistics",
        fullDetails: "The Queen Elizabeth II Quay is Sierra Leone's primary deep-water port, handling the vast majority of the country's international trade. The expansion project includes installation of new cranes, expansion of berthing facilities, and modernization of cargo handling systems. Parliament has ratified a Concession Agreement with Gento Group for design, financing, construction and operation. The upgraded port will accommodate larger vessels and significantly increase throughput capacity, positioning Freetown as a transshipment hub for the West African region.",
      },
      {
        name: "Kent Dry Port",
        value: "Private Investment",
        status: "Under Construction",
        statusColor: "green",
        developer: "Gento Group",
        image: null,
        description: "A new dry port facility at Kent to reduce cargo congestion at the Queen Elizabeth II Quay in Freetown. Already employing 600+ Sierra Leoneans, the facility will provide additional cargo handling space as trade volumes increase, with the government and private sector collaborating on this transformative logistics project.",
        highlights: ["600+ workers already employed", "Reducing port congestion", "Government-private sector collaboration", "Major economic opportunity"],
        investment: "Dry port operations — cargo handling, logistics services",
        fullDetails: "The Kent Dry Port is a strategic logistics facility designed to decongest the main port at Queen Elizabeth II Quay. Chief Minister Dr. David Moinina Sengeh and Minister of Transport inspected the facility in July 2026, describing it as a major step towards transforming Sierra Leone's port and logistics landscape. Gento Group CEO Mohamed Gento Kamara confirmed that the company's operations are already providing employment opportunities, with more than 600 workers engaged, most of whom are Sierra Leoneans.",
      },
      {
        name: "Makeni Highway Dual Carriageway",
        value: "TBD",
        status: "Announced — July 2026",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        image: null,
        description: "A new dual carriageway connecting Makeni to Masiaka, announced by President Bio in July 2026 as part of the Government's infrastructure development agenda. The project will improve connectivity between the Northern Province and the capital Freetown.",
        highlights: ["Northern Province connectivity", "Dual carriageway standard", "Part of national road network", "Government-funded"],
        investment: "Road construction and maintenance concession opportunities",
        fullDetails: "The Makeni Highway Dual Carriageway is a flagship road project connecting Makeni, the third largest city in Sierra Leone, to Masiaka on the Freetown highway. The project was announced by President Bio during his July 2026 infrastructure tour. The dual carriageway will significantly reduce travel time between the Northern Province and Freetown, boosting trade, commerce, and economic development across the northern corridor.",
      },
      {
        name: "Freetown CBD Regeneration",
        value: "Zurich-Funded",
        status: "Phase 1 Ongoing",
        statusColor: "green",
        developer: "Freetown City Council + Zurich Partnership",
        image: null,
        description: "A comprehensive urban regeneration programme in Freetown's Central Business District, including installation of 196 solar-powered streetlights across 11 streets, pedestrian infrastructure upgrades, and modern urban design. The project is transforming Freetown into a safer, more attractive city for business and tourism.",
        highlights: ["196 solar streetlights installed", "11 streets upgraded", "Pedestrian infrastructure", "Solar-powered sustainable design"],
        investment: "Urban infrastructure — solar lighting, pedestrian zones",
        fullDetails: "The Freetown CBD Regeneration is a partnership between Freetown City Council and the City of Zurich, Switzerland. Phase 1 includes the installation of 196 solar-powered streetlights across 11 major streets in the Central Business District, pedestrian walkway upgrades, road resurfacing, and urban beautification. The project demonstrates Freetown's commitment to sustainable urban development and has attracted international recognition for its innovative approach to city planning.",
      },
      {
        name: "Cross-Border Highway (Liberia–Sierra Leone)",
        value: "$85M",
        status: "Launched — 2026",
        statusColor: "green",
        developer: "Liberian Government + Partners",
        image: null,
        description: "An $85 million highway project linking Liberia to Sierra Leone, launched by Liberian President Joseph Boakai. The project strengthens regional connectivity and trade links between the two Mano River Union countries, opening new corridors for commerce and economic integration.",
        highlights: ["$85M investment", "Liberia–Sierra Leone link", "Regional trade integration", "Mano River Union connectivity"],
        investment: "Regional trade corridor — logistics and cross-border commerce",
        fullDetails: "The Cross-Border Highway is an $85 million infrastructure project connecting Liberia and Sierra Leone, launched by Liberian President Joseph Boakai in July 2026. The highway strengthens regional connectivity under the Mano River Union framework, facilitating trade, commerce, and people-to-people links between the two countries. The project is expected to boost cross-border trade, reduce transport costs, and create jobs in border communities.",
      },
    ],
  },
  {
    id: "energy-power",
    name: "Energy & Power",
    tagline: "Powering Sierra Leone's Green Future",
    image: "/flagship/energy/nant-power-plant.jpg",
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
        image: "/flagship/energy/nant-aerial-view.jpg",
        description: "A 108MW combined-cycle gas turbine power plant — Sierra Leone's largest thermal generation facility. The turbine arrived in April 2026, with grid connection expected by late 2026. The plant is funded by the U.S. International Development Finance Corporation (DFC) and will significantly boost Sierra Leone's electricity generation capacity.",
        highlights: ["108MW combined-cycle gas turbine", "Largest thermal plant in Sierra Leone", "U.S. DFC funded", "Turbine arrived April 2026"],
        investment: "Power Purchase Agreement (PPA) — guaranteed revenue stream",
        fullDetails: "The Nant Power Plant is Sierra Leone's largest thermal generation project, featuring a state-of-the-art 108MW combined-cycle gas turbine. The turbine, manufactured in the United States, arrived in Freetown in April 2026 and is being transported to the construction site. The plant is funded by the U.S. International Development Finance Corporation (DFC) under a Build-Own-Operate-Transfer model. Once operational in 2027, it will more than double Sierra Leone's current generation capacity and provide reliable baseload power to the national grid. The project represents one of the largest U.S. infrastructure investments in West Africa.",
      },
      {
        name: "Newton & Lungi Solar Power Plants",
        value: "$65M",
        status: "Commissioned — June 2026",
        statusColor: "green",
        developer: "World Bank RESPITE Project",
        image: "/flagship/energy/nant-turbine-transport.jpg",
        description: "Sierra Leone's largest-ever renewable energy addition — a 30MW solar plant with 15MWh battery storage in Newton and a 10MW solar plant with 6MWh battery storage in Lungi. Commissioned by President Bio in June 2026 under the World Bank's Regional Emergency Solar Power Intervention (RESPITE) project.",
        highlights: ["40MW combined solar capacity", "21MWh battery storage", "Commissioned June 2026", "World Bank RESPITE funded"],
        investment: "Solar PPA opportunities — corporate and utility buyers",
        fullDetails: "President Julius Maada Bio officially commissioned the Newton and Lungi solar power projects on June 10, 2026, declaring them 'the largest single addition to renewable energy generation capacity in Sierra Leone's history.' The 30MW Newton plant features Sungrow solar PV technology with a 15MWh Battery Energy Storage System, while the 10MW Lungi plant includes a 6MWh BESS. Both facilities are connected to the national grid — Newton via the 161kV transmission line and Lungi via the 33kV distribution line. The $65 million project was funded by the World Bank under the RESPITE programme, which supports four West African countries.",
      },
      {
        name: "Mission 300 Energy Compact",
        value: "$2.2B",
        status: "Endorsed — September 2025",
        statusColor: "green",
        developer: "World Bank + African Development Bank",
        image: null,
        description: "A landmark $2.2 billion energy compact endorsed by the World Bank and AfDB to transform Sierra Leone's electricity access from 36% to 78% by 2030. The compact covers grid expansion, renewable energy deployment, and institutional reforms to achieve universal electricity access.",
        highlights: ["36% → 78% electricity access", "$2.2B committed", "World Bank + AfDB backed", "Target: 2030"],
        investment: "Energy sector reforms — grid expansion, renewable deployment",
        fullDetails: "The Mission 300 Energy Compact is a groundbreaking $2.2 billion initiative endorsed by the World Bank and African Development Bank in September 2025. The compact aims to increase Sierra Leone's electricity access from 36% to 78% by 2030, covering grid expansion, renewable energy deployment, transmission and distribution upgrades, and institutional reforms. It is part of the broader Mission 300 initiative across Sub-Saharan Africa, aiming to provide electricity to 300 million people by 2030.",
      },
      {
        name: "Bumbuna II Hydro Expansion",
        value: "$76M",
        status: "Financing Secured",
        statusColor: "blue",
        developer: "OPEC Fund + BADEA",
        image: "/flagship/energy/bumbuna-dam.jpg",
        description: "A $76 million expansion of the Bumbuna Hydroelectric Dam, adding 60MW of generation capacity to Sierra Leone's existing hydro infrastructure. Funded by the OPEC Fund and the Arab Bank for Economic Development in Africa (BADEA), the project will provide clean, reliable baseload power.",
        highlights: ["60MW additional capacity", "$76M from OPEC + BADEA", "Clean baseload power", "Existing dam expansion"],
        investment: "Hydro expansion — long-term PPA revenue",
        fullDetails: "The Bumbuna II Hydro Expansion is a $76 million project to add 60MW of generation capacity to the existing Bumbuna Hydroelectric Dam in the Northern Province. The project is financed by the OPEC Fund for International Development and the Arab Bank for Economic Development in Africa (BADEA). The dam currently provides a significant portion of Sierra Leone's electricity, and the expansion will nearly double its output, providing clean, reliable baseload power to the national grid.",
      },
      {
        name: "SOGREA Solar Minigrids",
        value: "€34M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "EU + UNOPS",
        image: null,
        description: "A €34 million programme deploying solar minigrids across 60 rural communities in Sierra Leone, providing clean electricity to 25,000 households. The project is transforming rural livelihoods by enabling businesses, schools, and health centres to access reliable power for the first time.",
        highlights: ["60 rural communities", "25,000 households connected", "€34M EU/UNOPS funded", "Rural transformation"],
        investment: "Rural electrification — minigrid concession opportunities",
        fullDetails: "The SOGREA Solar Minigrids programme is a €34 million initiative funded by the European Union and implemented by UNOPS. The programme deploys solar minigrids across 60 rural communities in Sierra Leone, providing clean electricity to approximately 25,000 households. The minigrids enable businesses, schools, and health centres to access reliable power for the first time, transforming rural livelihoods and creating economic opportunities.",
      },
      {
        name: "MCC Energy Compact",
        value: "$500M+",
        status: "Design Phase",
        statusColor: "blue",
        developer: "Millennium Challenge Corporation (U.S.)",
        image: null,
        description: "A major U.S. MCC-funded energy compact focused on transmission and distribution infrastructure. The compact will modernise Sierra Leone's power grid, reduce technical losses, and expand access to reliable electricity across the country.",
        highlights: ["Transmission & distribution focus", "Grid modernisation", "Loss reduction", "U.S. MCC funded"],
        investment: "Grid infrastructure — smart metering, distribution concession",
        fullDetails: "The MCC Energy Compact is a major U.S. Millennium Challenge Corporation initiative focused on modernising Sierra Leone's power transmission and distribution infrastructure. The compact will invest in grid upgrades, smart metering systems, loss reduction technologies, and distribution network expansion. The project aims to reduce technical and commercial losses, improve power reliability, and expand electricity access to underserved areas.",
      },
    ],
  },
  {
    id: "agriculture-food",
    name: "Agriculture & Food Security",
    tagline: "Feed Salone — From Importer to Exporter",
    image: "/flagship/agriculture/tractor-ploughing.jpg",
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
        image: null,
        description: "A $75 million Special Agro-Processing Zone in Kambia and Port Loko districts, designed to aggregate, process, and export agricultural commodities. The SAPZ will create a cluster of agro-processing businesses, cold chain facilities, and export infrastructure to add value to Sierra Leone's agricultural production.",
        highlights: ["$75M AfDB investment", "Kambia & Port Loko districts", "Agro-processing cluster", "Export infrastructure"],
        investment: "Agro-processing — value addition, cold chain, export logistics",
        fullDetails: "The Special Agro-Processing Zone (SAPZ) is a $75 million flagship project funded by the African Development Bank. Located in Kambia and Port Loko districts, the SAPZ will create a cluster of agro-processing businesses, cold chain storage facilities, and export infrastructure. The zone will aggregate produce from smallholder farmers, process it into value-added products, and export to regional and international markets. The project is a key component of the Feed Salone programme.",
      },
      {
        name: "Livestock & Livelihood Development",
        value: "$105M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "IFAD + Government Partners",
        image: null,
        description: "A $105 million programme reaching 62,000 households across 11 districts, providing livestock assets, veterinary services, and market access. The programme is transforming rural livelihoods by enabling families to build productive assets through livestock rearing.",
        highlights: ["62,000 households", "11 districts covered", "$105M IFAD funded", "Livestock & market access"],
        investment: "Livestock value chain — dairy, meat processing, leather",
        fullDetails: "The Livestock and Livelihood Development Programme is a $105 million initiative funded by the International Fund for Agricultural Development (IFAD). The programme reaches 62,000 households across 11 districts, providing livestock assets (cattle, goats, sheep, poultry), veterinary services, feed supply, and market access. The programme transforms rural livelihoods by enabling families to build productive assets through livestock rearing, with a focus on women and youth.",
      },
      {
        name: "World Bank SAVIG Project",
        value: "$40M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "World Bank",
        image: null,
        description: "A $40 million project supporting rice, maize, onion, and cocoa production through improved seeds, irrigation, and market linkages. The project is helping smallholder farmers increase productivity and connect to formal markets.",
        highlights: ["$40M World Bank", "Rice, maize, onion, cocoa", "Improved seeds & irrigation", "Market linkages"],
        investment: "Seed systems, irrigation infrastructure, commodity trading",
        fullDetails: "The SAVIG (Sierra Leone Agricultural Value Chain) Project is a $40 million World Bank initiative supporting rice, maize, onion, and cocoa production. The project provides improved seeds, irrigation infrastructure, post-harvest handling facilities, and market linkages for smallholder farmers. It also supports agricultural finance, extension services, and private sector engagement in the value chain.",
      },
      {
        name: "Tormabum–Gbondapi Irrigation Scheme",
        value: "5,000 ha",
        status: "Nearing Completion",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        image: null,
        description: "A large-scale irrigation scheme covering 5,000 hectares in the Northern Province, designed to enable year-round farming and reduce dependence on rainfall. The project includes canal systems, water management infrastructure, and farmer training.",
        highlights: ["5,000 hectares irrigated", "Year-round farming", "Northern Province", "Water management infrastructure"],
        investment: "Irrigation infrastructure — commercial farming opportunities",
        fullDetails: "The Tormabum–Gbondapi Irrigation Scheme is a large-scale agricultural infrastructure project covering 5,000 hectares in the Northern Province. The scheme includes canal systems, water management infrastructure, pumping stations, and farmer training facilities. Once complete, it will enable year-round farming, reducing dependence on seasonal rainfall and significantly increasing agricultural productivity in the region.",
      },
      {
        name: "National Seed Infrastructure",
        value: "National",
        status: "Operational — 2025",
        statusColor: "green",
        developer: "SLARI + Partners",
        image: null,
        description: "Sierra Leone has released 30+ new seed varieties (rice, cassava, maize) and opened a National Seed Testing Laboratory at Mile 91 in October 2025. The seed system infrastructure enables certified seed production and distribution, critical for agricultural productivity gains.",
        highlights: ["30+ new seed varieties", "National Seed Lab at Mile 91", "Rice, cassava, maize", "Certified seed production"],
        investment: "Seed production & distribution — commercial seed companies",
        fullDetails: "Sierra Leone's national seed infrastructure includes the Sierra Leone Agricultural Research Institute (SLARI), which has released over 30 new seed varieties for rice, cassava, and maize. A National Seed Testing Laboratory was opened at Mile 91 in October 2025, enabling certified seed production and quality assurance. The seed system is critical for agricultural productivity gains under the Feed Salone programme.",
      },
      {
        name: "World Bank FSRP",
        value: "$50M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "World Bank",
        image: null,
        description: "A $50 million Food Systems Resilience Programme strengthening Sierra Leone's food systems against climate shocks, improving storage and distribution, and building market infrastructure to ensure food security.",
        highlights: ["$50M World Bank", "Climate resilience", "Storage & distribution", "Market infrastructure"],
        investment: "Food systems — storage, logistics, market infrastructure",
        fullDetails: "The Food Systems Resilience Programme (FSRP) is a $50 million World Bank initiative strengthening Sierra Leone's food systems against climate shocks. The programme investments in storage facilities, cold chain infrastructure, market infrastructure, and early warning systems. It aims to reduce post-harvest losses, improve food distribution, and build resilience against climate-related disruptions to food supply.",
      },
    ],
  },
  {
    id: "mining-blue-economy",
    name: "Mining & Blue Economy",
    tagline: "Harnessing Sierra Leone's Natural Wealth",
    image: "/flagship/infrastructure/president-foundation.jpg",
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
        image: null,
        description: "A $55 million China-aided industrial fishing port at Black Johnson, designed to process 20,000 tonnes of fish annually. The port features a 500m breakwater, a 300,000 sq.m basin, and modern processing facilities. Construction officially commenced on 29 April 2026 by President Bio.",
        highlights: ["20,000 tonnes/year processing", "500m breakwater", "300,000 sq.m basin", "Construction started April 2026"],
        investment: "Fish processing — value addition, cold chain, export",
        fullDetails: "The Julius Maada Bio Industrial Fishing Port is Sierra Leone's first industrial fishing harbour, located at Black Johnson in the Western Area Rural District. The $55 million project is funded by China Aid and implemented by CRCC Harbour & Channel Engineering Bureau Group. Key infrastructure includes a 500-meter breakwater, a 160-meter approach causeway, a harbour basin covering approximately 300,000 square metres, a fishing port office building, a modern fish trading market, and essential utilities. President Bio turned the sod on April 23, 2026, describing it as 'Sierra Leone taking its rightful place in the global ocean economy.'",
      },
      {
        name: "Marampa Mines Expansion",
        value: "$200M+",
        status: "Operational",
        statusColor: "green",
        developer: "Sierra Leone Mining",
        image: null,
        description: "The Marampa iron ore mine has paid $3.7 million in Community Development Agreements and is expanding production to 3.75 million tonnes per year. The mine has spent $7 million on local procurement and created significant employment in the Port Loko District.",
        highlights: ["3.75M tonnes/year capacity", "$3.7M CDA paid", "$7M local procurement", "Operational & expanding"],
        investment: "Iron ore production — commodity-backed returns",
        fullDetails: "The Marampa Mines iron ore operation in Port Loko District is one of Sierra Leone's largest mining operations. The mine has paid $3.7 million in Community Development Agreements (CDAs) to local communities and spent $7 million on local procurement. Production is expanding to 3.75 million tonnes per year, with significant investment in processing infrastructure and community development programmes.",
      },
      {
        name: "Magnetite Processing Plant",
        value: "$230M",
        status: "Foundation Stone Laid — 2025",
        statusColor: "blue",
        developer: "Leone Rock Metal Group",
        image: null,
        description: "A $230 million magnetite processing plant in Tonkolili District with capacity to process 12 million tonnes per annum (MTPA). The foundation stone was laid in September 2025, marking a major milestone in Sierra Leone's mineral processing value chain.",
        highlights: ["12 MTPA processing capacity", "$230M investment", "Tonkolili District", "Foundation stone laid 2025"],
        investment: "Mineral processing — value addition, export",
        fullDetails: "The Magnetite Processing Plant is a $230 million investment by Leone Rock Metal Group in Tonkolili District. The facility will have capacity to process 12 million tonnes per annum (MTPA) of magnetite ore. The foundation stone was laid in September 2025, marking a major milestone in Sierra Leone's mineral processing value chain. The plant will create hundreds of jobs and generate significant export revenue.",
      },
      {
        name: "Blue Economy Strategic Framework",
        value: "National",
        status: "Implementation Phase",
        statusColor: "green",
        developer: "Government of Sierra Leone",
        image: null,
        description: "A national strategic framework for developing Sierra Leone's Blue Economy — the sustainable use of ocean resources for economic growth, improved livelihoods, and ecosystem health. The framework covers fisheries, aquaculture, marine transport, coastal tourism, and seabed mining.",
        highlights: ["570km coastline", "Fisheries & aquaculture", "Marine transport", "Coastal tourism"],
        investment: "Blue economy — fisheries, aquaculture, marine services",
        fullDetails: "Sierra Leone's Blue Economy Strategic Framework is a comprehensive national plan for sustainably utilising the country's ocean and marine resources. With 570km of coastline and an estimated sustainable fish stock of 450,000 metric tons annually, Sierra Leone has enormous potential in fisheries, aquaculture, marine transport, coastal tourism, and seabed mining. The framework establishes governance structures, investment incentives, and environmental safeguards for blue economy development.",
      },
      {
        name: "Community Development Agreements",
        value: "$3.7M+",
        status: "Ongoing",
        statusColor: "green",
        developer: "Mining Companies + Communities",
        image: null,
        description: "Mining companies in Sierra Leone are required to allocate 1% of revenue to Community Development Agreements (CDAs). Marampa Mines alone has paid $3.7M, with funds directed to education, health, and infrastructure in mining-affected communities.",
        highlights: ["1% CDA revenue share", "$3.7M+ from Marampa alone", "Education & health investment", "Infrastructure development"],
        investment: "Community development — CSR and impact investing",
        fullDetails: "Under Sierra Leone's Mines and Minerals Act, mining companies are required to allocate 1% of their annual revenue to Community Development Agreements (CDAs) in affected communities. Marampa Mines has paid over $3.7 million in CDAs, with funds directed to education, health, water, and infrastructure projects in Port Loko District communities. The CDA framework ensures that mining benefits are shared with local populations.",
      },
    ],
  },
  {
    id: "tourism-hospitality",
    name: "Tourism & Hospitality",
    tagline: "Discover Sierra Leone — Africa's Best Kept Secret",
    image: "/flagship/energy/nant-turbine-port.jpg",
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
        image: null,
        description: "The first internationally branded airport hotel in Sierra Leone — a Hilton Garden Inn with 110 contemporary guest rooms, lobby café, restaurant, fitness centre, outdoor pool, and four meeting rooms. The signing marks Hilton's official entry into the Sierra Leone market.",
        highlights: ["110 guest rooms", "First intl airport hotel", "Hilton brand entry", "Meeting & conference facilities"],
        investment: "Hospitality — hotel management, F&B, conference services",
        fullDetails: "The Hilton Garden Inn Freetown Airport is the first internationally branded airport hotel in Sierra Leone, developed by FB Group in partnership with Hilton Worldwide. The hotel features 110 contemporary guest rooms, a lobby café, restaurant, fitness centre, outdoor pool, and four meeting rooms. The signing marks Hilton's official entry into the Sierra Leone market and signals international confidence in the country's tourism and business potential.",
      },
      {
        name: "Lungi City Status & Airport Corridor",
        value: "National",
        status: "Re-districting Proposal",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        image: null,
        description: "The Government is proposing to elevate Lungi to city status as part of a national re-districting initiative. This would grant Lungi its own city council and expanded governance structures, enabling more effective development planning for the rapidly growing airport corridor.",
        highlights: ["City status proposed", "Own city council", "Airport corridor development", "Decentralisation agenda"],
        investment: "Urban development — real estate, services, infrastructure",
        fullDetails: "The Government of Sierra Leone is proposing to elevate Lungi to city status as part of a national re-districting initiative. Minister of Local Government described Lungi as having 'tremendous potential' and noted that recent investments in the area — including the new airport, hotel development, energy infrastructure, and tourism projects — have transformed it into a major economic hub. City status would grant Lungi its own city council and expanded governance structures.",
      },
      {
        name: "International Conference Centre",
        value: "TBD",
        status: "Planned",
        statusColor: "yellow",
        developer: "Government of Sierra Leone",
        image: null,
        description: "A new international conference centre in the Lungi area, expected to become one of the largest in the region. The facility will support business tourism, international conferences, and events, complementing the new airport and hotel infrastructure.",
        highlights: ["One of the largest in region", "Business tourism", "International conferences", "Lungi area"],
        investment: "Conference & events infrastructure",
        fullDetails: "A new international conference centre is planned for the Lungi area, expected to become one of the largest in the West African region. The facility will support business tourism, international conferences, exhibitions, and events, complementing the new airport terminal, Hilton hotel, and other infrastructure developments in the area. The project is part of the Government's broader strategy to position Lungi as a regional business and tourism hub.",
      },
      {
        name: "Heritage Tourism Development",
        value: "FCC-Funded",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "Freetown City Council",
        image: null,
        description: "The Freetown Development Agenda prioritises heritage tourism — identifying and restoring 10 heritage sites, developing 'Discover Freetown' marketing campaigns, and creating tour programmes targeting the Mano River Union, diaspora, and African American markets.",
        highlights: ["10 heritage sites", "'Discover Freetown' campaign", "Diaspora tourism", "Creative arts integration"],
        investment: "Heritage tourism — tours, cultural experiences, creative economy",
        fullDetails: "Freetown City Council's heritage tourism programme identifies and restores 10 heritage sites across Freetown, including historical buildings, cultural landmarks, and natural attractions. The 'Discover Freetown' marketing campaign targets the Mano River Union countries, the Sierra Leonean diaspora, and African American markets. The programme also integrates creative arts, cultural festivals, and annual event calendars to promote Freetown as a destination city.",
      },
      {
        name: "Beach Resort Development",
        value: "Multiple",
        status: "Ongoing",
        statusColor: "green",
        developer: "Multiple Private Developers",
        image: null,
        description: "Freetown's Lumley Beach and Aberdeen areas are seeing rapid hotel and resort development, including Sierra Palms Resort, The Place at Tokeh, Radisson Blu Mammy Yoko, and multiple boutique hotels. The hospitality sector is expanding to meet growing demand.",
        highlights: ["Multiple resort developments", "Lumley Beach corridor", "International brands", "Growing tourist arrivals"],
        investment: "Resort development — beachfront properties, eco-tourism",
        fullDetails: "Freetown's Lumley Beach and Aberdeen areas are experiencing rapid hospitality development. Major properties include Sierra Palms Resort, The Place at Tokeh, Radisson Blu Mammy Yoko Hotel, Hotel Barmoi, Home Suites Boutique Hotel, and multiple new boutique hotels and resorts. The sector is expanding to meet growing demand from business and leisure tourists, with several new developments in the pipeline.",
      },
    ],
  },
  {
    id: "human-capital",
    name: "Youth & Human Capital",
    tagline: "Investing in Sierra Leone's Greatest Asset",
    image: "/flagship/human-capital/women-rice-field.jpg",
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
        image: null,
        description: "The Government's flagship programme to create 500,000 new jobs by 2030 through skills training, entrepreneurship support, agribusiness, and creative industries. With 120,000+ young people entering the labour force annually, YES is critical for harnessing Sierra Leone's demographic dividend.",
        highlights: ["500,000 jobs target by 2030", "120,000+ new entrants/year", "70%+ under 35", "Public + private sectors"],
        investment: "Skills development — TVET, apprenticeships, entrepreneurship",
        fullDetails: "The Youth Employment Scheme (YES) is the Government's flagship programme to create 500,000 new jobs by 2030. The scheme targets public and private sector employment through skills training, entrepreneurship support, agribusiness development, and creative industries. With 120,000+ young people entering the labour force annually and over 70% of the population under 35, YES is critical for harnessing Sierra Leone's demographic dividend.",
      },
      {
        name: "UniPod Sierra Leone",
        value: "UNDP",
        status: "Opening — July 2026",
        statusColor: "green",
        developer: "UNDP + Fourah Bay College",
        image: null,
        description: "A UNDP-funded innovation hub at Fourah Bay College, opening July 2026. UniPod provides young innovators with workspace, mentorship, funding, and connections to markets. It's part of UNDP's pan-African UniPod network supporting youth entrepreneurship.",
        highlights: ["UNDP innovation hub", "Fourah Bay College campus", "Opening July 2026", "Part of pan-African network"],
        investment: "Innovation & entrepreneurship — startup ecosystem",
        fullDetails: "UniPod Sierra Leone is a UNDP-funded innovation hub located at Fourah Bay College, opening in July 2026. UniPod provides young innovators with workspace, mentorship, seed funding, and connections to markets. It is part of UNDP's pan-African UniPod network, which supports youth entrepreneurship across the continent. The hub will focus on technology, agritech, fintech, and creative industries.",
      },
      {
        name: "AfDB Youth & Women Grant",
        value: "$20M",
        status: "Implementation Ongoing",
        statusColor: "green",
        developer: "African Development Bank",
        image: null,
        description: "A $20 million grant from the African Development Bank focused on climate-smart agriculture jobs for youth and women. The programme provides training, assets, and market access to young people in rural areas.",
        highlights: ["$20M AfDB grant", "Climate-smart agriculture", "Youth & women focus", "Rural employment"],
        investment: "Youth employment — climate-smart agriculture",
        fullDetails: "The AfDB Youth and Women Grant is a $20 million initiative focused on creating climate-smart agriculture jobs for youth and women in Sierra Leone. The programme provides skills training, agricultural assets (tools, seeds, livestock), and market access to young people in rural areas. It supports the Government's Youth Employment Scheme and Feed Salone programmes.",
      },
      {
        name: "MCC Skills & Training Programme",
        value: "MCC",
        status: "Design Phase",
        statusColor: "blue",
        developer: "Millennium Challenge Corporation",
        image: null,
        description: "Skills training and certification programmes under the MCC compact, targeting 228 youth in mechanical, construction, and electrical trades. The programme builds human capital to support infrastructure and energy projects.",
        highlights: ["228 youth certified", "Mechanical, construction, electrical", "MCC funded", "Infrastructure support"],
        investment: "Technical skills — workforce development",
        fullDetails: "The MCC Skills and Training Programme provides technical vocational education and training (TVET) for young Sierra Leoneans in mechanical, construction, and electrical trades. The programme has already certified 228 youth and aims to build the human capital needed to support Sierra Leone's growing infrastructure and energy sectors.",
      },
      {
        name: "AfDB $500M Strategy (2025–2030)",
        value: "$500M",
        status: "Approved — October 2025",
        statusColor: "green",
        developer: "African Development Bank",
        image: null,
        description: "A $500 million 5-year strategy for Sierra Leone covering infrastructure, agriculture, and human capital development. The strategy aligns with the National Development Plan and provides a framework for coordinated development finance.",
        highlights: ["$500M over 5 years", "Infrastructure + agriculture + human capital", "Aligned with MTNDP", "AfDB strategic partnership"],
        investment: "Development finance — infrastructure and agriculture",
        fullDetails: "The African Development Bank's $500 million 5-year strategy for Sierra Leone (2025–2030) covers infrastructure, agriculture, and human capital development. The strategy aligns with the Medium-Term National Development Plan and provides a framework for coordinated development finance. It includes investments in roads, energy, agricultural value chains, skills development, and institutional capacity building.",
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

function ProjectCard({ project }: { project: typeof sectors[0]["projects"][0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-white overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      {project.image && (
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white/80 text-xs font-medium">{project.developer}</span>
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#1a1a1a]">{project.name}</h3>
            {!project.image && <p className="text-gray-400 text-xs mt-1">{project.developer}</p>}
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
        <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Investment Opportunity</p>
          <p className="text-[#1a1a1a] text-sm font-medium">{project.investment}</p>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#052e16] hover:text-[#14532d] transition-colors border border-gray-200 rounded-lg hover:bg-[#f8f9fa]"
        >
          {expanded ? "Show Less" : "View Full Details"}
          <svg className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded Details */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-bold text-[#1a1a1a] mb-3">Full Project Details</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{project.fullDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FlagshipClient() {
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
              From a $1.5 billion bridge to 40MW solar plants — Sierra Leone is open for investment.
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
            {[
              { value: "30+", label: "Active Projects", sub: "Across all sectors" },
              { value: "$10B+", label: "Total Investment Value", sub: "Public & private capital" },
              { value: "5", label: "Priority Sectors", sub: "Infrastructure, Energy, Agriculture, Mining, Tourism" },
              { value: "2030", label: "Completion Target", sub: "Medium-Term National Development Plan" },
            ].map((stat) => (
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
            {/* Sector Header with Image */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-14">
              <div>
                <div className="gold-line mb-5" />
                <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">
                  Sector {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">{sector.name}</h2>
                <p className="text-gray-500 text-sm sm:text-base mb-4">{sector.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{sector.description}</p>
                <div className="inline-flex items-center gap-4 px-5 py-3 bg-[#052e16] rounded-xl">
                  <span className="text-white/70 text-sm font-medium">{sector.highlight.label}</span>
                  <span className="text-[#fbbf24] text-xl font-bold">{sector.highlight.value}</span>
                </div>
              </div>
              {sector.image && (
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <Image src={sector.image} alt={sector.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/30 to-transparent" />
                </div>
              )}
            </div>

            {/* Project Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {sector.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
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
              { name: "Transport & Infrastructure", value: "$2.5B+" },
              { name: "Energy & Power", value: "$3B+" },
              { name: "Agriculture & Food Security", value: "$500M+" },
              { name: "Mining & Blue Economy", value: "$800M+" },
              { name: "Tourism & Hospitality", value: "$500M+" },
              { name: "Youth & Human Capital", value: "$200M+" },
            ].map((s) => (
              <div key={s.name} className="card-white text-center p-5 sm:p-7">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{s.name}</p>
                <p className="text-xl sm:text-2xl font-bold text-[#052e16]">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Combined investment pipeline exceeds <span className="text-[#1a1a1a] font-semibold">$10 Billion</span> across all sectors
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
