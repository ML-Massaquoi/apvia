"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesContent, investmentSectors } from "@/data/content";
import InsightModal from "@/components/InsightModal";

const whyChooseData = [
  {
    title: "Integrated Solutions",
    desc: "Single-source convenience across multiple complementary sectors.",
    overview: "APVIA's integrated business model eliminates the complexity of managing multiple vendors. Our 11 business verticals work synergistically to deliver comprehensive solutions — from construction and materials supply to logistics and procurement — all under one roof.",
    highlights: [
      { label: "Verticals", value: "11", desc: "Integrated business divisions working synergistically" },
      { label: "Cost Savings", value: "20-30%", desc: "Average savings through integrated service delivery" },
      { label: "Efficiency", value: "40%", desc: "Faster project completion through coordinated services" },
      { label: "Single Point", value: "Yes", desc: "One partner for all project needs and requirements" },
      { label: "Risk Reduction", value: "60%", desc: "Reduced risk through unified project management" },
      { label: "Quality", value: "Consistent", desc: "Uniform quality standards across all service lines" },
    ],
  },
  {
    title: "Local Market Knowledge",
    desc: "Deep understanding of the West African business environment.",
    overview: "With 30+ years of experience in Sierra Leone and West Africa, APVIA possesses unparalleled local market intelligence. We understand the regulatory landscape, cultural dynamics, and business practices that are essential for successful operations in the region.",
    highlights: [
      { label: "Experience", value: "30+ yrs", desc: "Deep local market experience across multiple sectors" },
      { label: "Regulations", value: "Expert", desc: "Comprehensive understanding of local regulatory frameworks" },
      { label: "Network", value: "500+", desc: "Strong network of local partners, suppliers, and contacts" },
      { label: "Cultural", value: "Native", desc: "Inherent understanding of local cultural dynamics" },
      { label: "Languages", value: "5+", desc: "Multilingual team covering English, Krio, and local languages" },
      { label: "Government", value: "Strong", desc: "Established relationships with government agencies" },
    ],
  },
  {
    title: "International Standards",
    desc: "Adherence to international quality, safety, and environmental standards.",
    overview: "APVIA maintains the highest international standards across all operations. Our ISO certifications, ESG compliance, and commitment to global best practices ensure that every project meets or exceeds international benchmarks for quality, safety, and environmental responsibility.",
    highlights: [
      { label: "ISO Certs", value: "5", desc: "ISO 9001, 14001, 45001, 27001, and 37001 certified" },
      { label: "ESG Rating", value: "AA", desc: "MSCI ESG rating reflecting strong sustainability practices" },
      { label: "Safety", value: "Zero Harm", desc: "Zero lost-time incidents across all operations" },
      { label: "Quality", value: "4.8/5", desc: "Average quality rating from independent assessments" },
      { label: "Compliance", value: "100%", desc: "Full regulatory compliance across all markets" },
      { label: "Audits", value: "Annual", desc: "Independent third-party audits and certifications" },
    ],
  },
  {
    title: "Strategic Location",
    desc: "Headquartered in Freetown with access to a natural deep-water harbor.",
    overview: "Freetown's natural deep-water harbor is one of the largest in the world, providing APVIA with a strategic logistics advantage. Our location enables efficient import/export operations, maritime services, and regional distribution across West Africa's 400+ million consumer market.",
    highlights: [
      { label: "Harbor", value: "Deep-Water", desc: "World-class natural deep-water port access" },
      { label: "ECOWAS", value: "400M+", desc: "Access to 15 West African markets through ECOWAS" },
      { label: "Shipping", value: "Global", desc: "Direct shipping routes to Europe, Americas, and Asia" },
      { label: "Logistics", value: "Hub", desc: "Regional logistics hub for West African distribution" },
      { label: "Time Zone", value: "GMT", desc: "Compatible time zone for European and African business" },
      { label: "Air Links", value: "Direct", desc: "Direct flights to major European and African cities" },
    ],
  },
  {
    title: "Financial Strength",
    desc: "Diversified revenue streams and proven track record of project delivery.",
    overview: "APVIA's diversified portfolio across 11 business verticals provides financial resilience and stability. Our proven track record of successful project delivery, combined with strong investor relationships and prudent financial management, ensures sustainable growth and reliable returns.",
    highlights: [
      { label: "Revenue", value: "$50M+", desc: "Annual revenue across all business divisions" },
      { label: "Growth", value: "35% YoY", desc: "Consistent year-on-year revenue growth" },
      { label: "Portfolio", value: "Diversified", desc: "Revenue streams across 11 business verticals" },
      { label: "Track Record", value: "98%", desc: "On-time, on-budget project delivery rate" },
      { label: "Investors", value: "15+", desc: "Active investor relationships and partnerships" },
      { label: "Credit", value: "Strong", desc: "Strong credit rating and financial standing" },
    ],
  },
  {
    title: "Ethical Practices",
    desc: "Strong corporate governance and commitment to sustainability.",
    overview: "Ethics and sustainability are at the core of APVIA's business philosophy. Our robust corporate governance framework, transparent reporting, and commitment to environmental and social responsibility ensure that we create value for all stakeholders while protecting the interests of future generations.",
    highlights: [
      { label: "Governance", value: "Board", desc: "Independent board oversight with 60% independent directors" },
      { label: "Transparency", value: "Annual", desc: "Public annual sustainability and financial reports" },
      { label: "Ethics Training", value: "100%", desc: "All employees complete annual ethics certification" },
      { label: "Community", value: "3% Rev", desc: "Revenue allocated to community development programs" },
      { label: "Environmental", value: "Carbon Neutral", desc: "Targeting carbon neutrality by 2035" },
      { label: "Whistleblower", value: "24/7", desc: "Anonymous reporting with guaranteed investigation" },
    ],
  },
];

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

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedWhy, setSelectedWhy] = useState<typeof whyChooseData[0] | null>(null);
  const [selectedService, setSelectedService] = useState<typeof servicesContent[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-base text-white/70">Comprehensive solutions across eleven core business verticals</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Our integrated business model enables us to offer seamless, single-source solutions</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {servicesContent.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={serviceIcons[service.icon] || serviceIcons.building} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-[#14532d] font-semibold text-sm group-hover:text-[#d97706] transition-colors">
                  <span>View Details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      {activeService && (
        <section className="py-16 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {servicesContent.filter((s) => s.id === activeService).map((service) => (
              <div key={service.id}>
                <div className="text-center mb-10 sm:mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-[#052e16] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={serviceIcons[service.icon] || serviceIcons.building} />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">{service.title}</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">{service.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="card-white p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#14532d]" /> Core Services
                    </h3>
                    <ul className="space-y-2.5">
                      {service.services.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-white p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#14532d]" /> Key Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => setActiveService(null)} className="btn-primary">Close Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Why Choose APVIA Ltd</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseData.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelectedWhy(item)}
                className="card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                  Learn More
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightModal
        isOpen={!!selectedWhy}
        onClose={() => setSelectedWhy(null)}
        title={selectedWhy?.title || ""}
        overview={selectedWhy?.overview || ""}
        highlights={selectedWhy?.highlights || []}
        cta="Discuss With Us"
      />

      <InsightModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        overview={selectedService?.description || ""}
        highlights={[
          { label: "Services", value: `${selectedService?.services.length || 0}`, desc: "Core service offerings in this division" },
          { label: "Capabilities", value: `${selectedService?.capabilities.length || 0}`, desc: "Key capabilities and competencies" },
          { label: "Quality", value: "ISO Certified", desc: "All services delivered to international standards" },
          { label: "Support", value: "24/7", desc: "Round-the-clock operational support" },
          { label: "Delivery", value: "On-Time", desc: "98% on-time delivery rate across all services" },
          { label: "Coverage", value: "Regional", desc: "Service delivery across Sierra Leone and West Africa" },
        ]}
        cta="Discuss This Service"
      />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Ready to Start Your Project?</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">Contact us today to discuss how APVIA Ltd can deliver integrated solutions for your next project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary-white">Contact Us</Link>
            <Link href="/team" className="btn-outline-white">Meet Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
