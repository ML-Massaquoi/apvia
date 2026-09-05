"use client";

import { useState } from "react";
import Link from "next/link";
import InsightModal from "@/components/InsightModal";

const serviceIcons: Record<string, string> = {
  building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  cube: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  truck: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  gem: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  anchor: "M12 2a3 3 0 00-3 3c0 1.08.36 2.08 1 2.83V9h4v-1.17c.64-.75 1-1.75 1-2.83a3 3 0 00-3-3zm0 14a3 3 0 003-3h-6a3 3 0 003 3zm-5 3h10",
  sprout: "M12 22V8m0 0c-2 0-6 2-6 6m6-6c2 0 6 2 6 6m-12 0c0 4 2 6 6 6m0 0c4 0 6-2 6-6",
  cog: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  handshake: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  briefcase: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
};

const servicesData = [
  {
    id: "construction",
    title: "Construction & Civil Engineering",
    description: "Comprehensive infrastructure development solutions across Sierra Leone and West Africa.",
    icon: "building",
    overview: "APVIA's Construction & Civil Engineering division delivers end-to-end infrastructure solutions from concept to completion. We combine local market expertise with international engineering standards to execute projects that transform communities and drive economic growth.",
    highlights: [
      { label: "Projects", value: "50+", desc: "Major infrastructure projects completed across West Africa" },
      { label: "Value", value: "$200M+", desc: "Total project portfolio value managed by the construction division" },
      { label: "Standards", value: "ISO 9001", desc: "Quality management certified to international standards" },
      { label: "Workforce", value: "1,200+", desc: "Skilled workers and professionals across all project sites" },
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "Safety", value: "Zero Harm", desc: "Zero lost-time incidents on construction sites" },
    ],
  },
  {
    id: "materials",
    title: "Construction Materials",
    description: "A comprehensive range of high-quality construction materials to support infrastructure projects.",
    icon: "cube",
    overview: "Our Construction Materials division provides a complete range of quality-assured building materials, from cement and aggregates to steel and finishing products. With strategic warehousing and logistics networks, we ensure timely delivery of materials to any project site in West Africa.",
    highlights: [
      { label: "SKUs", value: "500+", desc: "Different material products available in our inventory" },
      { label: "Warehouses", value: "5", desc: "Strategic warehouse locations across Sierra Leone" },
      { label: "Bulk Capacity", value: "10K tons", desc: "Monthly bulk material handling capacity" },
      { label: "Quality", value: "100%", desc: "Material testing and certification compliance" },
      { label: "Delivery", value: "<48 hrs", desc: "Average delivery time for standard orders" },
      { label: "Suppliers", value: "30+", desc: "Verified international and local material suppliers" },
    ],
  },
  {
    id: "trade",
    title: "Import & Export",
    description: "Facilitating global commerce connecting Sierra Leone and West African markets.",
    icon: "globe",
    overview: "APVIA's Import & Export division bridges Sierra Leone with global markets, managing end-to-end trade logistics from supplier identification to customs clearance. Our expertise in international trade regulations and our extensive network of partners ensure smooth, compliant, and cost-effective trade operations.",
    highlights: [
      { label: "Trade Routes", value: "25+", desc: "Active international trade routes across 4 continents" },
      { label: "Volume", value: "50K tons", desc: "Annual trade volume managed across all product categories" },
      { label: "Markets", value: "15+", desc: "Active import and export market destinations" },
      { label: "Compliance", value: "100%", desc: "Full regulatory compliance across all trade operations" },
      { label: "Growth", value: "22% YoY", desc: "Year-on-year trade volume growth rate" },
      { label: "Partners", value: "40+", desc: "Verified global trade partners and suppliers" },
    ],
  },
  {
    id: "procurement",
    title: "Procurement & Supply",
    description: "Comprehensive procurement and supply chain management services.",
    icon: "clipboard",
    overview: "Our Procurement & Supply division delivers efficient, transparent, and cost-effective procurement solutions. We leverage our extensive supplier network, deep market knowledge, and advanced procurement systems to help clients source goods and services at optimal value.",
    highlights: [
      { label: "Savings", value: "15-25%", desc: "Average cost savings through strategic sourcing" },
      { label: "Suppliers", value: "200+", desc: "Vetted and approved suppliers across all categories" },
      { label: "Categories", value: "50+", desc: "Procurement categories managed across all sectors" },
      { label: "Cycle Time", value: "-40%", desc: "Reduction in average procurement cycle time" },
      { label: "Transparency", value: "100%", desc: "Full audit trail and transparent procurement process" },
      { label: "Tenders", value: "100+/yr", desc: "Tender processes managed annually" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "End-to-end supply chain and transportation solutions across West Africa.",
    icon: "truck",
    overview: "APVIA's Logistics division provides comprehensive supply chain solutions from warehousing to last-mile delivery. Our modern fleet, strategic Freetown port location, and advanced tracking systems ensure efficient movement of goods across Sierra Leone and the broader West African region.",
    highlights: [
      { label: "Fleet", value: "80+", desc: "Modern vehicles including flatbeds, tankers, and container carriers" },
      { label: "Warehousing", value: "25K m²", desc: "Total warehousing space including bonded facilities" },
      { label: "Coverage", value: "95%", desc: "Geographic coverage across Sierra Leone's 16 districts" },
      { label: "Tracking", value: "Real-time", desc: "GPS-enabled fleet tracking and delivery monitoring" },
      { label: "Cross-Border", value: "5 Countries", desc: "Cross-border logistics operations across West Africa" },
      { label: "Uptime", value: "99%", desc: "Fleet availability and operational uptime" },
    ],
  },
  {
    id: "mining",
    title: "Mining & Equipment",
    description: "Comprehensive solutions for the mining sector with equipment supply and technical services.",
    icon: "gem",
    overview: "APVIA's Mining division provides end-to-end solutions from exploration support to mineral trading. We supply mining equipment, provide technical services, and support responsible mineral resource development across Sierra Leone's rich mineral belt.",
    highlights: [
      { label: "Minerals", value: "6+", desc: "Key minerals traded: diamonds, gold, rutile, bauxite, iron ore, coltan" },
      { label: "Equipment", value: "100+", desc: "Mining machines and equipment available for sale or lease" },
      { label: "Mines Supported", value: "15+", desc: "Active mining operations supported with equipment and services" },
      { label: "Revenue", value: "$165M", desc: "Annual mineral export revenue facilitated" },
      { label: "ESG", value: "AA Rating", desc: "Environmental, Social, and Governance compliance rating" },
      { label: "Training", value: "500+/yr", desc: "Mining operators trained and certified annually" },
    ],
  },
];

export default function HomepageServices() {
  const [selected, setSelected] = useState<typeof servicesData[0] | null>(null);

  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Comprehensive solutions across eleven core business verticals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelected(service)}
                className="card-white p-5 sm:p-6 lg:p-8 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={serviceIcons[service.icon] || serviceIcons.building} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                  View Details
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-14">
            <Link href="/services" className="btn-primary text-sm sm:text-base">View All Services</Link>
          </div>
        </div>
      </section>

      <InsightModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
        overview={selected?.overview || ""}
        highlights={selected?.highlights || []}
        cta="Discuss This Service"
      />
    </>
  );
}
