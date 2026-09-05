"use client";

import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const whyInvestVideos = [
  {
    src: "/videos/ore.mp4",
    title: "Rich Mineral Ore",
    desc: "Abundant deposits of diamonds, gold, rutile, and bauxite",
    modalTitle: "Sierra Leone Mineral Wealth",
    modalDescription: "Sierra Leone sits on one of Africa's richest mineral belts with an estimated $10 billion in untapped mineral wealth. The country is the 7th largest diamond producer globally and holds significant rutile deposits (world's largest), bauxite, iron ore, and gold reserves. Modern mining techniques and responsible extraction practices are unlocking new potential across 15+ active mining regions.",
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
    modalDescription: "Sierra Leone offers one of West Africa's most attractive investment climates with a GDP growth of 5.4%, tax incentives for foreign investors, and a strategic location along major shipping routes. The country ranks among the top reformers in the World Bank's Ease of Doing Business index, with streamlined company registration and protected property rights.",
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
    modalDescription: "Our flagship projects span critical infrastructure sectors that form the backbone of Sierra Leone's economic transformation. From port expansion and road networks to industrial parks and housing developments, these projects deliver long-term returns while shaping the nation's future. Each project is structured with clear milestones, risk mitigation, and community benefit frameworks.",
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

const mineralVideos = [
  {
    src: "/videos/flagship-1.mp4",
    title: "Mineral Extraction",
    desc: "Advanced mining operations and mineral processing",
    modalTitle: "Advanced Mining Operations",
    modalDescription: "Our mining operations employ cutting-edge extraction technology combined with rigorous environmental and social governance (ESG) standards. We implement traceable supply chains, community benefit sharing agreements, and land rehabilitation programs that exceed international safety standards while generating significant employment and revenue for host communities.",
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
    modalDescription: "The energy sector represents a $4.2 billion investment opportunity. Sierra Leone's National Energy Plan targets 1GW of new capacity by 2030, primarily through renewables. The country receives over 2,000 hours of sunshine annually, making it ideal for solar energy projects. Independent Power Producer (IPP) frameworks are now in place for international investors.",
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
    modalDescription: "Our sustainable mining operations combine world-class extraction technology with rigorous environmental and social governance (ESG) standards. We implement traceable supply chains, community benefit sharing agreements, and land rehabilitation programs. Our mines exceed international safety standards while generating significant employment and revenue for host communities.",
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
    modalDescription: "Sierra Leone's infrastructure deficit presents a $15 billion opportunity. The government has prioritized road construction, port expansion, water systems, and telecommunications. Our projects include the Freetown Port Modernization, Highway Corridor Development, and Industrial Park Construction, all structured as Public-Private Partnerships with guaranteed government backing.",
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

export default function HomepageVideoSections() {
  const [selectedVideo, setSelectedVideo] = useState<typeof whyInvestVideos[0] | null>(null);

  return (
    <>
      {/* Why Invest in Sierra Leone */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Why Invest in Sierra Leone</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Discover the natural resources and strategic advantages that make Sierra Leone a prime investment destination in West Africa</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyInvestVideos.map((video) => (
              <div
                key={video.src}
                onClick={() => setSelectedVideo(video)}
                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video bg-[#052e16]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/30 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white font-bold text-sm sm:text-base mb-1">{video.title}</p>
                    <p className="text-white/70 text-xs sm:text-sm">{video.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.modalTitle || ""}
        description={selectedVideo?.modalDescription || ""}
        videoSrc={selectedVideo?.src || ""}
        facts={selectedVideo?.facts || []}
      />

      {/* Vast Untapped Mineral Deposit */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">Vast Untapped Mineral Deposit</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">Sierra Leone is endowed with extraordinary natural wealth — from rich mineral ores to sustainable energy potential, creating unparalleled investment opportunities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mineralVideos.map((video) => (
              <MineralVideoCard key={video.src} video={video} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MineralVideoCard({ video }: { video: typeof mineralVideos[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative aspect-video bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <p className="text-white font-bold text-xs sm:text-sm mb-0.5">{video.title}</p>
            <p className="text-white/60 text-xs">{video.desc}</p>
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={video.modalTitle}
        description={video.modalDescription}
        videoSrc={video.src}
        facts={video.facts}
      />
    </>
  );
}
