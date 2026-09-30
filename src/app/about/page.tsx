"use client";

import { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { coreValuesContent, aboutInvestmentShowcase } from "@/data/content";
import InsightModal from "@/components/InsightModal";
import VideoModal from "@/components/VideoModal";

const governanceData = [
  {
    title: "Board of Directors",
    description: "The highest governing body responsible for strategic direction, oversight, and fiduciary duties.",
    items: ["Strategic direction and oversight", "Compliance with legal requirements", "Risk management oversight", "Ethical conduct governance"],
    modalOverview: "The Board of Directors provides the highest level of governance at APVIA Ltd. Composed of experienced professionals with diverse expertise, the Board ensures that the company operates in the best interests of all stakeholders while pursuing its strategic objectives.",
    highlights: [
      { label: "Board Size", value: "7", desc: "Independent and executive directors with diverse expertise" },
      { label: "Meetings", value: "Quarterly", desc: "Regular board meetings with comprehensive agendas" },
      { label: "Committees", value: "3", desc: "Audit, Risk, and Nomination committees" },
      { label: "Independence", value: "60%", desc: "Independent non-executive directors on the board" },
      { label: "Attendance", value: "95%", desc: "Board meeting attendance rate" },
      { label: "Governance Code", value: "Compliant", desc: "Full compliance with corporate governance code" },
    ],
    chart: {
      type: "pie" as const,
      title: "Board Composition",
      data: [
        { name: "Independent", value: 60, color: "#052e16" },
        { name: "Executive", value: 25, color: "#14532d" },
        { name: "Non-Exec", value: 15, color: "#d97706" },
      ],
    },
  },
  {
    title: "Executive Management",
    description: "Responsible for day-to-day operations and implementation of board-approved strategies.",
    items: ["Operational strategy execution", "Performance management", "Divisional coordination", "Stakeholder relations"],
    modalOverview: "The Executive Management team translates the Board's strategic vision into operational reality. With deep expertise across all business verticals, the team ensures efficient execution, performance optimization, and stakeholder value creation.",
    highlights: [
      { label: "Team Size", value: "12", desc: "Senior executives across all business divisions" },
      { label: "Experience", value: "20+ yrs", desc: "Average senior leadership experience" },
      { label: "Divisions", value: "11", desc: "Business verticals under executive oversight" },
      { label: "Performance", value: "98%", desc: "Annual performance target achievement rate" },
      { label: "Retention", value: "90%", desc: "Executive team retention rate" },
      { label: "Strategy", value: "5 Year", desc: "Strategic plan with annual reviews" },
    ],
    chart: {
      type: "bar" as const,
      title: "Performance by Division (%)",
      data: [
        { name: "Mining", value: 98, color: "#052e16" },
        { name: "Construction", value: 96, color: "#14532d" },
        { name: "Trade", value: 95, color: "#d97706" },
        { name: "Energy", value: 94, color: "#166534" },
        { name: "Services", value: 97, color: "#fbbf24" },
      ],
    },
  },
  {
    title: "Advisory Council",
    description: "Comprises distinguished individuals from government, diplomacy, industry, and academia.",
    items: ["Market trend guidance", "Policy matter advisory", "International relations support", "Business development counsel"],
    modalOverview: "The Advisory Council brings together distinguished leaders from government, diplomacy, industry, and academia. Their guidance helps APVIA navigate complex regulatory environments, identify strategic opportunities, and maintain strong relationships with key stakeholders.",
    highlights: [
      { label: "Members", value: "8", desc: "Distinguished advisors from diverse backgrounds" },
      { label: "Government", value: "3", desc: "Former and current government officials" },
      { label: "Diplomatic", value: "2", desc: "Former ambassadors and diplomatic advisors" },
      { label: "Industry", value: "2", desc: "Industry leaders and business experts" },
      { label: "Academic", value: "1", desc: "University professor and research advisor" },
      { label: "Meetings", value: "Bi-Annual", desc: "Regular advisory council meetings" },
    ],
    chart: {
      type: "pie" as const,
      title: "Advisory Council Composition",
      data: [
        { name: "Government", value: 38, color: "#052e16" },
        { name: "Diplomatic", value: 25, color: "#14532d" },
        { name: "Industry", value: 25, color: "#d97706" },
        { name: "Academic", value: 12, color: "#fbbf24" },
      ],
    },
  },
];

const governancePrinciples = [
  { title: "Transparency", desc: "Open and honest communication with all stakeholders" },
  { title: "Accountability", desc: "Clear lines of responsibility and performance metrics" },
  { title: "Fairness", desc: "Equitable treatment of all shareholders and stakeholders" },
  { title: "Responsibility", desc: "Ethical and legal obligations upheld at all times" },
  { title: "Independence", desc: "Objective decision-making free from conflicts of interest" },
];

const investmentReasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    title: "High-Growth Market",
    desc: "Sierra Leone is one of the world's fastest-growing economies with vast untapped natural resources and a reforming business environment.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    title: "Diversified Portfolio",
    desc: "We operate across 11 business verticals — mining, agriculture, construction, energy, trade, logistics, and more — reducing risk and maximising returns.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "End-to-End Capability",
    desc: "From feasibility studies and investment structuring to construction management and trade execution — we handle the full project lifecycle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
    title: "Regional Reach",
    desc: "Active operations across 5+ West African countries with a network of government, institutional, and community relationships.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: "Experienced Leadership",
    desc: "30+ years of combined leadership experience across international finance, project management, and African market development.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "ESG & Impact",
    desc: "Every project is evaluated against environmental, social, and governance criteria — delivering returns alongside sustainable development impact.",
  },
];

const coreSectors = [
  {
    title: "Mining & Minerals",
    desc: "Exploring, developing, and managing high-value mineral and resource opportunities including iron ore, gold, diamonds, rutile, and bauxite.",
    image: "/flagship/brochure/mining-trucks.jpg",
  },
  {
    title: "Agriculture & Food",
    desc: "Investing in sustainable modern farming practices, supply chains, and large-scale agribusiness initiatives — rice, cocoa, palm oil, livestock.",
    image: "/flagship/brochure/rice-harvest.jpg",
  },
  {
    title: "Construction & Engineering",
    desc: "Planning and supporting essential infrastructure development — roads, bridges, buildings, industrial facilities, and real estate projects.",
    image: "/flagship/brochure/bridge-construction.jpg",
  },
  {
    title: "Energy & Power",
    desc: "Solar, hydroelectric, and thermal power generation and distribution — powering West Africa's industrial growth.",
    image: "/flagship/brochure/solar-farm.jpg",
  },
  {
    title: "Logistics & Maritime",
    desc: "Port operations, warehousing, freight forwarding, and supply chain management across the region.",
    image: "/flagship/brochure/port-sunset.jpg",
  },
  {
    title: "Trade & Commerce",
    desc: "Facilitating cross-border commercial exchange, commodity trading, procurement, and international trade facilitation.",
    image: "/flagship/brochure/container-port.jpg",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Discover & Assess",
    desc: "We begin by understanding your investment objectives, risk appetite, and strategic goals. Our team conducts thorough market analysis and due diligence to identify opportunities that align with your criteria.",
    details: ["Market intelligence & analysis", "Risk assessment frameworks", "Regulatory landscape review", "Opportunity screening"],
  },
  {
    step: "02",
    title: "Structure & Design",
    desc: "Our team structures investment vehicles and project frameworks that optimize returns while managing risk. We design clear governance, reporting, and exit mechanisms from day one.",
    details: ["Investment structuring", "Financial modelling", "Legal & regulatory compliance", "Risk mitigation design"],
  },
  {
    step: "03",
    title: "Execute & Deliver",
    desc: "With plans in place, we mobilize resources, manage construction, and oversee operations. Our end-to-end capability means a single point of accountability from feasibility through to delivery.",
    details: ["Project management", "Construction oversight", "Supply chain coordination", "Quality assurance"],
  },
  {
    step: "04",
    title: "Monitor & Grow",
    desc: "Post-delivery, we provide ongoing operational support, performance monitoring, and growth strategies. Investors receive regular reporting and transparent communication at every stage.",
    details: ["Performance reporting", "Operational optimization", "Stakeholder management", "Growth strategy"],
  },
];

const sierraLeoneFacts = [
  { label: "GDP Growth", value: "5.4%", desc: "Among the fastest-growing economies in West Africa" },
  { label: "Population", value: "8.6M", desc: "Young, dynamic workforce with a median age of 19" },
  { label: "Arable Land", value: "5.4M ha", desc: "Only 15% cultivated — massive agricultural potential" },
  { label: "Mineral Wealth", value: "$10B+", desc: "Estimated untapped mineral resources" },
  { label: "FDI Reforms", value: "Since 2018", desc: "Major investment climate reforms and policy modernization" },
  { label: "Strategic Location", value: "West Africa", desc: "Gateway to ECOWAS market of 400M+ consumers" },
];

const esgPillars = [
  {
    title: "Environmental",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    items: [
      "Environmental impact assessments for all projects",
      "Carbon footprint monitoring and reduction targets",
      "Sustainable resource management practices",
      "Biodiversity protection and land rehabilitation",
    ],
  },
  {
    title: "Social",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    items: [
      "Local job creation and skills development",
      "Community investment and benefit-sharing programmes",
      "Health and safety standards exceeding local requirements",
      "Support for education, healthcare, and social infrastructure",
    ],
  },
  {
    title: "Governance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    items: [
      "Transparent financial reporting and audit processes",
      "Anti-corruption and anti-bribery policies",
      "Independent board oversight and committee structure",
      "Regular stakeholder engagement and consultation",
    ],
  },
];

const investorFaqs = [
  {
    q: "What types of investment opportunities does APVIA offer?",
    a: "APVIA structures and facilitates investments across six core sectors: mining & minerals, agriculture & food, construction & engineering, energy & power, logistics & maritime, and trade & commerce. Opportunities range from direct equity investments and joint ventures to project finance and concession arrangements.",
  },
  {
    q: "What is the minimum investment threshold?",
    a: "Investment thresholds vary by project and sector. Our flagship projects typically range from $5M to $500M+, but we also facilitate smaller entry points through structured investment vehicles. Contact our team to discuss opportunities that match your capital allocation.",
  },
  {
    q: "How does APVIA manage risk for investors?",
    a: "We employ multi-layered risk management: thorough due diligence and feasibility studies, political risk insurance through MIGA and ATI, structured exit mechanisms, local partnerships with government and communities, and continuous monitoring with transparent reporting.",
  },
  {
    q: "What regulatory framework governs investments in Sierra Leone?",
    a: "Sierra Leone has modernized its investment framework since 2018, including the Sierra Leone Investment and Export Promotion Act, revised mining regulations, and bilateral investment treaties with multiple countries. APVIA provides full regulatory compliance support throughout the investment lifecycle.",
  },
  {
    q: "How does APVIA ensure ESG compliance?",
    a: "Every project undergoes rigorous environmental and social impact assessments. We follow IFC Performance Standards, Equator Principles, and local regulations. Our ESG framework includes carbon monitoring, community benefit-sharing, biodiversity protection, and independent third-party audits.",
  },
  {
    q: "What reporting and transparency can investors expect?",
    a: "Investors receive quarterly performance reports, annual audited financial statements, real-time project dashboards for major developments, and direct access to senior management. Our governance structure includes independent board oversight and external audits.",
  },
  {
    q: "Does APVIA facilitate exit strategies?",
    a: "Yes. We design clear exit mechanisms during the structuring phase, including trade sales, IPO readiness, buyback arrangements, and secondary market transactions. Our team advises on optimal timing and execution to maximize returns.",
  },
];

export default function AboutPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof aboutInvestmentShowcase[0] | null>(null);
  const [selectedValue, setSelectedValue] = useState<typeof coreValuesContent[0] | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<typeof governanceData[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 bg-[#052e16] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/flagship/brochure/port-sunset.jpg" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#052e16]/90 via-[#052e16]/80 to-[#052e16]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <p className="text-[#fbbf24] text-sm font-semibold uppercase tracking-widest mb-4">Investment & Project Development</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building West Africa&apos;s <span className="text-gradient-gold">Future</span>
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              APVIA Ltd connects international investors with high-impact opportunities across Sierra Leone and West Africa. We identify, structure, and deliver projects that generate returns while driving sustainable economic development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary-white text-base px-8 py-3">Invest With Us</Link>
              <a href="/APVIA-Executive-Brochure-2026-2030.pdf" download className="btn-outline-white text-base px-8 py-3 inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                {companyData.fullName} ({companyData.name}) is a Sierra Leone-registered private limited liability company (Reg: {companyData.registrationNumber}) strategically focused on driving sustainable economic development and advancement across West Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                We serve as a <strong className="text-[#1a1a1a]">strategic partner for governments, international development agencies, multinational corporations, and local enterprises</strong> seeking reliable, integrated solutions for complex projects in emerging African markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Our mission is delivering integrated, end-to-end solutions for complex projects to foster economic growth in emerging West African markets. From large-scale infrastructure and mining operations to agricultural value chains and renewable energy, we handle the full project lifecycle.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/APVIA-Executive-Brochure-2026-2030.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#052e16] text-white rounded-lg text-sm font-medium hover:bg-[#14532d] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Executive Brochure
                </a>
                <a href="/APVIA-Company-Overview.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#052e16] text-[#052e16] rounded-lg text-sm font-medium hover:bg-[#052e16] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Company Overview
                </a>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Full Name", value: companyData.fullName },
                { label: "Registration No.", value: companyData.registrationNumber || "SL150926APVIA31897" },
                { label: "Headquarters", value: "91 Fort Street, Freetown, Sierra Leone" },
                { label: "Jurisdiction", value: "Republic of Sierra Leone" },
                { label: "Company Type", value: "Private Limited Liability Company" },
                { label: "Trading Name", value: companyData.name },
                { label: "Contact", value: companyData.businessProfile.contact.phone },
                { label: "Email", value: companyData.businessProfile.contact.email },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 sm:p-5 bg-[#f8f9fa] border border-gray-200 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#14532d] mt-2 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-[#1a1a1a] font-semibold text-sm sm:text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/flagship/brochure/port-sunset.jpg" alt="APVIA operations" className="w-full h-80 sm:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-sm font-medium">Our Journey</p>
                  <p className="text-white text-lg font-bold">From Vision to Impact</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#052e16] text-white rounded-xl p-4 shadow-lg hidden sm:block">
                <p className="text-[#fbbf24] text-2xl font-bold">30+</p>
                <p className="text-white/60 text-xs">Years Combined Experience</p>
              </div>
            </div>

            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                APVIA Ltd was born from a simple observation: West Africa holds extraordinary natural wealth and human potential, yet lacked the integrated investment and project delivery capability to unlock it at scale. Our founders — seasoned professionals with decades of experience across international finance, engineering, and African market development — set out to bridge that gap.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                From our headquarters in Freetown, Sierra Leone, we have built a diversified multi-sectoral holding company that combines deep local market knowledge with international standards of excellence. Today, APVIA operates across 11 business verticals in 5+ West African countries, with a portfolio of 50+ projects delivered and over 5,000 jobs created.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Our approach is different. We don&apos;t just identify opportunities — we structure, finance, build, and operate. From feasibility studies and investment structuring to construction management and trade execution, APVIA provides the full spectrum of services that international investors and development partners need to succeed in West Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#052e16] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-semibold text-sm">Proven Track Record</p>
                    <p className="text-gray-400 text-xs">50+ projects delivered</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#052e16] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-semibold text-sm">Regional Presence</p>
                    <p className="text-gray-400 text-xs">5+ West African countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 sm:py-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {companyData.businessProfile.keyStats.map((stat) => (
              <div key={stat.label} className="text-center p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-[#fbbf24] mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sierra Leone Opportunity */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Why Sierra Leone</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">A nation rich in resources, strategic location, and reforming business environment — positioned for transformative growth</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sierraLeoneFacts.map((fact) => (
              <div key={fact.label} className="card-white p-5 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl sm:text-3xl font-bold text-[#052e16]">{fact.value}</div>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-1">{fact.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/flagship" className="inline-flex items-center gap-2 text-[#052e16] font-semibold text-sm hover:text-[#d97706] transition-colors">
              View Investment Opportunities
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Invest With APVIA */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Why Invest With APVIA</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">We bridge the gap between international capital and African opportunity — here&apos;s why leading investors choose us</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {investmentReasons.map((reason) => (
              <div key={reason.title} className="bg-white card-white p-5 sm:p-7 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#052e16] flex items-center justify-center mb-4 group-hover:bg-[#14532d] transition-colors">
                  <div className="text-[#fbbf24]">{reason.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">A structured, transparent process designed to protect investor interests while maximizing returns</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {approachSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-[#052e16]/5 absolute -top-4 -left-2">{step.step}</div>
                <div className="relative pt-8">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-400 text-xs">
                        <div className="w-1 h-1 rounded-full bg-[#14532d]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Sectors */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Our Core Sectors</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Integrated capabilities across six core operational sectors driving West Africa&apos;s development</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreSectors.map((sector) => (
              <div key={sector.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/70 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{sector.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Showcase */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Sierra Leone: A Land of Opportunity</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">Explore the natural wealth and untapped potential that position Sierra Leone as West Africa&apos;s next investment frontier</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {aboutInvestmentShowcase.map((video) => (
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
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/80 via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{video.title}</p>
                    <p className="text-white/60 text-xs mt-1">{video.desc}</p>
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

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="card-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Our Vision</h3>
              </div>
              <p className="text-[#14532d] font-semibold leading-relaxed mb-3">&ldquo;{companyData.vision}&rdquo;</p>
              <p className="text-gray-600 leading-relaxed text-sm">{companyData.visionDescription}</p>
            </div>

            <div className="card-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Our Mission</h3>
              </div>
              <p className="text-[#14532d] font-semibold leading-relaxed mb-3">&ldquo;{companyData.mission}&rdquo;</p>
              <p className="text-gray-400 text-xs mb-2 font-medium">The company pursues its mission by:</p>
              <ul className="space-y-2">
                {companyData.missionActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">The principles that define our organizational culture and guide every decision</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValuesContent.map((value) => (
              <div
                key={value.title}
                onClick={() => setSelectedValue(value)}
                className="bg-white card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-3">{value.description}</p>
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
        isOpen={!!selectedValue}
        onClose={() => setSelectedValue(null)}
        title={selectedValue ? `Our Value: ${selectedValue.title}` : ""}
        overview={selectedValue?.modalOverview || ""}
        highlights={selectedValue?.highlights || []}
        chart={selectedValue?.chart}
        cta="Partner With Us"
      />

      {/* Sustainability & ESG */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Sustainability & ESG Commitment</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">We believe that responsible investment delivers superior long-term returns. Every project is evaluated against rigorous environmental, social, and governance criteria.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {esgPillars.map((pillar) => (
              <div key={pillar.title} className="card-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                    <div className="text-[#fbbf24]">{pillar.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Our Leadership</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                APVIA is led by a team of seasoned professionals with deep expertise across international finance, project management, engineering, and African market development. Our leadership combines 30+ years of combined experience with an unwavering commitment to excellence and integrity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                From the Board of Directors through Executive Management to our Advisory Council, every level of our governance structure is designed to protect investor interests, ensure accountability, and drive sustainable growth.
              </p>
              <Link href="/team" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#052e16] text-white rounded-lg text-sm font-medium hover:bg-[#14532d] transition-colors">
                Meet the Team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { role: "Board of Directors", count: "7 Members", desc: "Strategic oversight" },
                { role: "Executive Team", count: "12 Leaders", desc: "Operational excellence" },
                { role: "Advisory Council", count: "8 Advisors", desc: "Strategic guidance" },
                { role: "Specialists", count: "50+ Experts", desc: "Sector expertise" },
              ].map((item) => (
                <div key={item.role} className="card-white p-4 sm:p-5 text-center">
                  <p className="text-2xl font-bold text-[#052e16] mb-1">{item.count}</p>
                  <p className="text-[#1a1a1a] font-semibold text-sm mb-0.5">{item.role}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Growth Phases */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Strategic Growth Phases</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {companyData.fullName} exists to drive meaningful change across West Africa through strategic investment, project development, and integrated service delivery. Our three-phase growth strategy ensures sustainable expansion and value creation.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {companyData.corePurpose.map((purpose, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#052e16] flex items-center justify-center shrink-0">
                      <span className="text-[#fbbf24] text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-700 text-sm">{purpose}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Growth Roadmap</h3>
              <div className="space-y-6">
                {[
                  { phase: "1", title: "Foundation", desc: "Establishment of core business entities, leadership team, and strategic partnerships." },
                  { phase: "2", title: "Expansion & Diversification", desc: "Expansion into a fully diversified portfolio with investment in operational capabilities." },
                  { phase: "3", title: "Consolidation & Leadership", desc: "Consolidation of market position and recognition as a trusted partner for major projects across West Africa." },
                ].map((item) => (
                  <div key={item.phase} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#052e16] flex items-center justify-center shrink-0">
                        <span className="text-[#fbbf24] text-sm font-bold">{item.phase}</span>
                      </div>
                      <div className="w-px flex-1 bg-gray-200 mt-2" />
                    </div>
                    <div className="pb-6">
                      <h4 className="text-[#1a1a1a] font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Corporate Governance</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">A robust governance framework designed to ensure accountability, transparency, and effective decision-making</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {governanceData.map((body) => (
              <div
                key={body.title}
                onClick={() => setSelectedGovernance(body)}
                className="bg-white card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{body.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{body.description}</p>
                <ul className="space-y-2 mb-4">
                  {body.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                  View Details
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            ))}
          </div>

          <InsightModal
            isOpen={!!selectedGovernance}
            onClose={() => setSelectedGovernance(null)}
            title={selectedGovernance?.title || ""}
            overview={selectedGovernance?.modalOverview || ""}
            highlights={selectedGovernance?.highlights || []}
            chart={selectedGovernance?.chart}
            cta="Learn More About Governance"
          />

          <div className="mt-8 sm:mt-10 bg-white card-white p-5 sm:p-7">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-5 text-center">Governance Principles</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {governancePrinciples.map((principle) => (
                <div key={principle.title} className="text-center p-3 bg-[#f8f9fa] rounded-xl">
                  <h4 className="text-[#14532d] font-semibold text-sm mb-1">{principle.title}</h4>
                  <p className="text-gray-400 text-xs">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Investor FAQ</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Common questions from investors and development partners</p>
          </div>
          <div className="space-y-3">
            {investorFaqs.map((faq, i) => (
              <div key={i} className="card-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[#1a1a1a] font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Ready to Invest in West Africa?</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an institutional investor, development finance institution, or strategic partner, APVIA provides the local expertise, deal flow, and execution capability to make your investment count.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <Link href="/contact" className="btn-primary-white text-base px-8 py-3">Start a Conversation</Link>
            <a
              href="https://wa.me/447495491457"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link href="/flagship" className="btn-outline-white text-base px-8 py-3">View Investment Opportunities</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/40 text-sm">
            <a href="/APVIA-Executive-Brochure-2026-2030.pdf" download className="inline-flex items-center gap-2 hover:text-[#fbbf24] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Executive Brochure
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="/APVIA-Company-Overview.pdf" download className="inline-flex items-center gap-2 hover:text-[#fbbf24] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Company Overview
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
