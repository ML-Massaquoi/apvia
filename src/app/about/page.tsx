import Link from "next/link";
import { companyData } from "@/data/company";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-8 text-center">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">Company Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {companyData.fullName} ({companyData.name}) is a diversified multi-sectoral holding company headquartered in Freetown, Sierra Leone. Established to drive sustainable economic development across West Africa, the company operates across eleven core business verticals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {companyData.name} positions itself as a strategic partner for governments, international development agencies, multinational corporations, and local enterprises seeking reliable, integrated solutions for complex projects in emerging African markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With deep roots in Sierra Leone and expanding regional reach, the company combines local market intelligence with international standards of excellence, delivering end-to-end solutions that create lasting value for stakeholders, host communities, and the broader economy.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Legal Identity", value: "Private Limited Liability Company" },
                { label: "Jurisdiction", value: "Republic of Sierra Leone" },
                { label: "Headquarters", value: "Freetown, Sierra Leone" },
                { label: "Trading Name", value: companyData.name },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 bg-[#f8f9fa] border border-gray-200 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#14532d] mt-2 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-[#1a1a1a] font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Showcase */}
      <section className="py-24 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-white mb-3">Sierra Leone: A Land of Opportunity</h2>
            <p className="text-white/60 max-w-xl mx-auto">Explore the natural wealth and untapped potential that position Sierra Leone as West Africa's next investment frontier</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/videos/video-1.mp4", title: "Mineral Wealth & Resources" },
              { src: "/videos/video-2.mp4", title: "Pristine Natural Landscape" },
              { src: "/videos/video-3.mp4", title: "Emerging Market Potential" },
            ].map((video) => (
              <div key={video.src} className="rounded-xl overflow-hidden shadow-lg group">
                <div className="relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1a1a1a]">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-white p-8">
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

            <div className="card-white p-8">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that define our organizational culture and guide every decision</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.coreValues.map((value) => (
              <div key={value.title} className="card-white p-7">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Purpose */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-5">Core Purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyData.fullName} exists to drive meaningful change across West Africa through strategic investment, project development, and integrated service delivery.
              </p>
              <ul className="space-y-4">
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

            <div className="card-white p-8">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Corporate Governance</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A robust governance framework designed to ensure accountability, transparency, and effective decision-making</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Board of Directors",
                description: "The highest governing body responsible for strategic direction, oversight, and fiduciary duties.",
                items: ["Strategic direction and oversight", "Compliance with legal requirements", "Risk management oversight", "Ethical conduct governance"],
              },
              {
                title: "Executive Management",
                description: "Responsible for day-to-day operations and implementation of board-approved strategies.",
                items: ["Operational strategy execution", "Performance management", "Divisional coordination", "Stakeholder relations"],
              },
              {
                title: "Advisory Council",
                description: "Comprises distinguished individuals from government, diplomacy, industry, and academia.",
                items: ["Market trend guidance", "Policy matter advisory", "International relations support", "Business development counsel"],
              },
            ].map((body) => (
              <div key={body.title} className="card-white p-7">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{body.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{body.description}</p>
                <ul className="space-y-2">
                  {body.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 card-white p-7">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-5 text-center">Governance Principles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Transparency", desc: "Open and honest communication" },
                { title: "Accountability", desc: "Clear lines of responsibility" },
                { title: "Fairness", desc: "Equitable treatment of all" },
                { title: "Responsibility", desc: "Ethical and legal obligations" },
                { title: "Independence", desc: "Objective decision-making" },
              ].map((principle) => (
                <div key={principle.title} className="text-center p-3">
                  <h4 className="text-[#14532d] font-semibold text-sm mb-1">{principle.title}</h4>
                  <p className="text-gray-400 text-xs">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-5">Partner With Us</h2>
          <p className="text-white/60 text-lg mb-8">Discover how APVIA Ltd can help you achieve your business objectives across West Africa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="btn-primary-white">Our Services</Link>
            <Link href="/contact" className="btn-outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
