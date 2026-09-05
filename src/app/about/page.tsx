"use client";

import { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import InsightModal from "@/components/InsightModal";
import VideoModal from "@/components/VideoModal";

const investmentShowcase = [
  {
    src: "/videos/flagship-3.mp4",
    title: "Mineral Wealth & Resources",
    desc: "Rich mineral deposits including diamonds, gold, rutile, and bauxite",
    modalTitle: "Sierra Leone's Mineral Wealth",
    modalDescription: "Sierra Leone sits on one of Africa's richest mineral belts with an estimated $10 billion in untapped mineral wealth. The country is the 7th largest diamond producer globally and holds the world's largest rutile deposits. Our mining operations leverage modern extraction technology while maintaining the highest ESG standards.",
    facts: [
      { label: "Mineral Value", value: "$10B+" },
      { label: "Diamond Rank", value: "#7 Global" },
      { label: "Rutile", value: "#1 World" },
      { label: "Active Mines", value: "15+" },
      { label: "Export Revenue", value: "$165M/yr" },
      { label: "ESG Rating", value: "AA" },
    ],
  },
  {
    src: "/videos/flagship-4.mp4",
    title: "Pristine Natural Landscape",
    desc: "Abundant natural resources and beautiful landscapes",
    modalTitle: "Natural Resources & Tourism Potential",
    modalDescription: "Beyond minerals, Sierra Leone boasts pristine beaches, tropical forests, and rich biodiversity. The country's natural beauty presents opportunities in eco-tourism, sustainable forestry, and carbon credit programs. Our environmental initiatives protect these assets while creating economic value.",
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
    modalDescription: "Sierra Leone is one of West Africa's fastest-growing economies with a GDP growth rate of 5.4%. The government has implemented significant business reforms, offering tax incentives, 100% profit repatriation, and streamlined company registration. The country's strategic location provides access to regional markets of over 400 million consumers.",
    facts: [
      { label: "GDP Growth", value: "5.4%" },
      { label: "FDI Growth", value: "18% YoY" },
      { label: "Tax Holiday", value: "10 yrs" },
      { label: "Repatriation", value: "100%" },
      { label: "Registration", value: "48 hrs" },
      { label: "ECOWAS Access", value: "400M+" },
    ],
  },
];

const coreValuesData = [
  {
    title: "Integrity",
    description: "Conducting all business with honesty, transparency, and accountability. Upholding the highest ethical standards in every interaction.",
    modalOverview: "Integrity is the cornerstone of everything we do at APVIA Ltd. We believe that sustainable business success is built on a foundation of trust, transparency, and unwavering ethical standards. Our commitment to integrity extends across every partnership, transaction, and stakeholder relationship.",
    highlights: [
      { label: "Compliance", value: "100%", desc: "Full compliance with all regulatory and legal requirements" },
      { label: "Audit Rating", value: "A+", desc: "Independent audit rating with zero material findings" },
      { label: "Whistleblower", value: "24/7", desc: "Anonymous reporting channel with 48-hour response" },
      { label: "Training", value: "100%", desc: "All employees complete annual ethics training" },
      { label: "Governance", value: "ISO 37001", desc: "Anti-bribery management system certified" },
      { label: "Transparency", value: "Annual", desc: "Public sustainability report with full disclosure" },
    ],
  },
  {
    title: "Excellence",
    description: "Pursuing quality and continuous improvement in all endeavors. Delivering services that meet or exceed international standards.",
    modalOverview: "Excellence drives our pursuit of the highest quality in every project, service, and interaction. We continuously invest in technology, training, and process improvement to ensure our deliverables consistently exceed international standards and client expectations.",
    highlights: [
      { label: "ISO Certs", value: "5", desc: "ISO 9001, 14001, 45001, 27001, and 37001 certified" },
      { label: "Project Delivery", value: "98%", desc: "On-time and within-budget delivery rate" },
      { label: "Client NPS", value: "82", desc: "Net Promoter Score above industry average" },
      { label: "Quality Score", value: "4.8/5", desc: "Average quality rating from assessments" },
      { label: "Error Rate", value: "<0.5%", desc: "Defect rate across all processes" },
      { label: "Improvement", value: "15% YoY", desc: "Year-on-year efficiency improvement" },
    ],
  },
  {
    title: "Sustainability",
    description: "Balancing economic objectives with environmental stewardship and social responsibility.",
    modalOverview: "Sustainability is embedded in our business strategy. We balance economic growth with environmental stewardship and social responsibility, ensuring our projects create lasting value for communities, ecosystems, and future generations.",
    highlights: [
      { label: "Carbon Target", value: "-30%", desc: "30% carbon reduction by 2030" },
      { label: "Renewable", value: "60%", desc: "Operations powered by renewable energy" },
      { label: "Community Fund", value: "3% Rev", desc: "Revenue allocated to community programs" },
      { label: "Jobs Created", value: "5,000+", desc: "Direct and indirect employment created" },
      { label: "Land Rehab", value: "100%", desc: "Full land rehabilitation commitment" },
      { label: "ESG Rating", value: "AA", desc: "MSCI ESG rating reflecting best practices" },
    ],
  },
  {
    title: "Collaboration",
    description: "Building strong, mutually beneficial partnerships. Respecting diversity and fostering inclusive teamwork.",
    modalOverview: "Our collaborative approach leverages the strengths of diverse partners, communities, and stakeholders to achieve outcomes greater than any single entity could accomplish.",
    highlights: [
      { label: "Partners", value: "25+", desc: "Strategic partnerships with international organizations" },
      { label: "Joint Ventures", value: "12", desc: "Active JV projects across West Africa" },
      { label: "Communities", value: "50+", desc: "Community partnerships for development" },
      { label: "Govt Relations", value: "3 Govts", desc: "Formal government partnerships" },
      { label: "Academic", value: "8", desc: "University collaborations" },
      { label: "Industry Groups", value: "6", desc: "Active industry association memberships" },
    ],
  },
  {
    title: "Safety",
    description: "Prioritizing health, safety, and well-being of all employees, contractors, and stakeholders.",
    modalOverview: "Safety is non-negotiable at APVIA Ltd. We maintain a zero-harm philosophy across all operations, investing in comprehensive safety systems, training, and equipment.",
    highlights: [
      { label: "Safety Record", value: "Zero Harm", desc: "Zero lost-time incidents for consecutive years" },
      { label: "Training Hours", value: "10,000+", desc: "Annual safety training hours delivered" },
      { label: "Safety Audits", value: "Monthly", desc: "Comprehensive audits across all sites" },
      { label: "PPE Coverage", value: "100%", desc: "Full PPE for all personnel" },
      { label: "Emergency Drills", value: "Quarterly", desc: "Regular emergency response training" },
      { label: "Incident Reports", value: "<5/yr", desc: "Near-miss reports resolved within 48 hours" },
    ],
  },
  {
    title: "Reliability",
    description: "Honoring commitments and delivering on promises. Building trust through consistent performance.",
    modalOverview: "Reliability is the measure of our trustworthiness. We deliver on our promises consistently, meeting deadlines, budgets, and quality expectations.",
    highlights: [
      { label: "Contract Honor", value: "100%", desc: "Full compliance with all obligations" },
      { label: "On-Time", value: "98%", desc: "Projects delivered on or ahead of schedule" },
      { label: "On-Budget", value: "96%", desc: "Projects within approved budget" },
      { label: "Repeat Clients", value: "85%", desc: "Client retention rate" },
      { label: "Uptime", value: "99.5%", desc: "Equipment availability" },
      { label: "Response Time", value: "<4 hrs", desc: "Emergency response time" },
    ],
  },
];

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
  },
];

const governancePrinciples = [
  { title: "Transparency", desc: "Open and honest communication with all stakeholders" },
  { title: "Accountability", desc: "Clear lines of responsibility and performance metrics" },
  { title: "Fairness", desc: "Equitable treatment of all shareholders and stakeholders" },
  { title: "Responsibility", desc: "Ethical and legal obligations upheld at all times" },
  { title: "Independence", desc: "Objective decision-making free from conflicts of interest" },
];

export default function AboutPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof investmentShowcase[0] | null>(null);
  const [selectedValue, setSelectedValue] = useState<typeof coreValuesData[0] | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<typeof governanceData[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-gradient-gold">APVIA Ltd</span>
            </h1>
            <p className="text-base text-white/70">{companyData.fullName}</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Company Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                {companyData.fullName} ({companyData.name}) is a diversified multi-sectoral holding company headquartered in Freetown, Sierra Leone. Established to drive sustainable economic development across West Africa, the company operates across eleven core business verticals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                {companyData.name} positions itself as a strategic partner for governments, international development agencies, multinational corporations, and local enterprises seeking reliable, integrated solutions for complex projects in emerging African markets.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                With deep roots in Sierra Leone and expanding regional reach, the company combines local market intelligence with international standards of excellence, delivering end-to-end solutions that create lasting value for stakeholders, host communities, and the broader economy.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Legal Identity", value: "Private Limited Liability Company" },
                { label: "Jurisdiction", value: "Republic of Sierra Leone" },
                { label: "Headquarters", value: "Freetown, Sierra Leone" },
                { label: "Trading Name", value: companyData.name },
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

      {/* Investment Showcase */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Sierra Leone: A Land of Opportunity</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">Explore the natural wealth and untapped potential that position Sierra Leone as West Africa&apos;s next investment frontier</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {investmentShowcase.map((video) => (
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
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">The principles that define our organizational culture and guide every decision</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValuesData.map((value) => (
              <div
                key={value.title}
                onClick={() => setSelectedValue(value)}
                className="card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
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
        cta="Partner With Us"
      />

      {/* Core Purpose */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-5">Core Purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {companyData.fullName} exists to drive meaningful change across West Africa through strategic investment, project development, and integrated service delivery.
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
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Strategic Growth Phases</h3>
              <div className="space-y-6">
                {[
                  { phase: "1", title: "Foundation", desc: "Establishment of core business entities, leadership team, and strategic partnerships." },
                  { phase: "2", title: "Expansion & Diversification", desc: "Expansion into a fully diversified portfolio with investment in operational capabilities." },
                  { phase: "3", title: "Consolidation & Leadership", desc: "Consolidation of market position and recognition as a trusted partner for major projects." },
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
      <section className="py-16 sm:py-24 bg-white">
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
                className="card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
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
            cta="Learn More About Governance"
          />

          <div className="mt-8 sm:mt-10 card-white p-5 sm:p-7">
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

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Partner With Us</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">Discover how APVIA Ltd can help you achieve your business objectives across West Africa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/services" className="btn-primary-white">Our Services</Link>
            <Link href="/contact" className="btn-outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
