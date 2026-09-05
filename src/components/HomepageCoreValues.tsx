"use client";

import { useState } from "react";
import Link from "next/link";
import InsightModal from "@/components/InsightModal";

const coreValuesData = [
  {
    title: "Integrity",
    description: "Conducting all business with honesty, transparency, and accountability. Upholding the highest ethical standards in every interaction.",
    icon: "shield",
    modalOverview: "Integrity is the cornerstone of everything we do at APVIA Ltd. We believe that sustainable business success is built on a foundation of trust, transparency, and unwavering ethical standards. Our commitment to integrity extends across every partnership, transaction, and stakeholder relationship.",
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
    description: "Pursuing quality and continuous improvement in all endeavors. Delivering services that meet or exceed international standards.",
    icon: "star",
    modalOverview: "Excellence drives our pursuit of the highest quality in every project, service, and interaction. We continuously invest in technology, training, and process improvement to ensure our deliverables consistently exceed international standards and client expectations.",
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
    description: "Balancing economic objectives with environmental stewardship and social responsibility. Investing in projects that deliver long-term benefits.",
    icon: "leaf",
    modalOverview: "Sustainability is embedded in our business strategy. We balance economic growth with environmental stewardship and social responsibility, ensuring our projects create lasting value for communities, ecosystems, and future generations while delivering strong returns for investors.",
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
    description: "Building strong, mutually beneficial partnerships. Respecting diversity and fostering inclusive teamwork to achieve shared goals.",
    icon: "users",
    modalOverview: "Our collaborative approach leverages the strengths of diverse partners, communities, and stakeholders to achieve outcomes greater than any single entity could accomplish. We actively seek partnerships that bring complementary expertise and shared values to our projects.",
    highlights: [
      { label: "Partners", value: "25+", desc: "Strategic partnerships with international and local organizations" },
      { label: "Joint Ventures", value: "12", desc: "Active joint venture projects across West Africa" },
      { label: "Communities", value: "50+", desc: "Community partnerships for local development and employment" },
      { label: "Govt Relations", value: "3 Govts", desc: "Formal partnerships with national governments" },
      { label: "Academic", value: "8", desc: "University and research institution collaborations" },
      { label: "Industry Groups", value: "6", desc: "Active membership in industry associations and chambers" },
    ],
  },
  {
    title: "Safety",
    description: "Prioritizing the health, safety, and well-being of all employees, contractors, and stakeholders. Maintaining zero-harm objectives.",
    icon: "heart",
    modalOverview: "Safety is non-negotiable at APVIA Ltd. We maintain a zero-harm philosophy across all operations, investing in comprehensive safety systems, training, and equipment to protect every person who works with or near our projects.",
    highlights: [
      { label: "Safety Record", value: "Zero Harm", desc: "Zero lost-time incidents across all operations for consecutive years" },
      { label: "Training Hours", value: "10,000+", desc: "Annual safety training hours delivered to employees and contractors" },
      { label: "Safety Audits", value: "Monthly", desc: "Comprehensive safety audits conducted across all project sites" },
      { label: "PPE Coverage", value: "100%", desc: "Full personal protective equipment coverage for all personnel" },
      { label: "Emergency Drills", value: "Quarterly", desc: "Regular emergency response drills and scenario training" },
      { label: "Incident Reports", value: "<5/yr", desc: "Near-miss reports actively tracked and resolved within 48 hours" },
    ],
  },
  {
    title: "Reliability",
    description: "Honoring commitments and delivering on promises. Building trust through consistent, dependable performance.",
    icon: "check",
    modalOverview: "Reliability is the measure of our trustworthiness. We deliver on our promises consistently, meeting deadlines, budgets, and quality expectations. Our track record of dependable performance has earned us the trust of governments, development agencies, and international partners.",
    highlights: [
      { label: "Contract Honor", value: "100%", desc: "Full compliance with all contractual obligations and timelines" },
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "On-Budget", value: "96%", desc: "Projects completed within approved budget parameters" },
      { label: "Repeat Clients", value: "85%", desc: "Client retention rate demonstrating trust and satisfaction" },
      { label: "Uptime", value: "99.5%", desc: "Equipment and operational availability across all sites" },
      { label: "Response Time", value: "<4 hrs", desc: "Average emergency response time for critical issues" },
    ],
  },
];

const iconPaths: Record<string, string> = {
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  leaf: "M12 21a8 8 0 008-8c0-3.75-2.95-7.56-6.5-9.48a1.5 1.5 0 00-2 0C8.95 11.44 6 15.25 6 19a8 8 0 006 2z M12 21v-6",
  users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
};

export default function HomepageCoreValues() {
  const [selected, setSelected] = useState<typeof coreValuesData[0] | null>(null);

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">The principles that guide every decision and action at APVIA Ltd</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValuesData.map((value) => (
              <div
                key={value.title}
                onClick={() => setSelected(value)}
                className="card-white p-6 sm:p-8 text-center cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#052e16] flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[value.icon] || iconPaths.star} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm mb-3">{value.description}</p>
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
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `Our Value: ${selected.title}` : ""}
        overview={selected?.modalOverview || ""}
        highlights={selected?.highlights || []}
        chart={selected?.chart}
        cta="Partner With Us"
      />
    </>
  );
}
