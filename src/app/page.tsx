import type { Metadata } from "next";
import Link from "next/link";
import HeroVideoSlideshow from "@/components/HeroVideoSlideshow";
import HomepageVisionMission from "@/components/HomepageVisionMission";
import HomepageVideoSections from "@/components/HomepageVideoSections";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import InvestorCharts from "@/components/InvestorCharts";
import HomepageCoreValues from "@/components/HomepageCoreValues";
import HomepageServices from "@/components/HomepageServices";
import HomepageLeadership from "@/components/HomepageLeadership";

export const metadata: Metadata = {
  title: "Invest in Sierra Leone | APVIA Ltd - Leading Investment Company",
  description:
    "Invest in Sierra Leone with APVIA Ltd. Discover profitable investment opportunities in mining, agriculture, construction, and trade. 30+ years experience in West Africa. Start investing today.",
  keywords: [
    "invest in Sierra Leone",
    "Sierra Leone investment opportunities",
    "Sierra Leone mining investment",
    "Sierra Leone agriculture investment",
    "West Africa investment opportunities",
    "Sierra Leone business investment",
  ],
  openGraph: {
    title: "Invest in Sierra Leone | APVIA Ltd",
    description:
      "Discover profitable investment opportunities in Sierra Leone's mining, agriculture, construction, and trade sectors.",
    url: "https://www.apvia-sl.com",
  },
};

export default function HomePage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Investment and Business Development",
    provider: {
      "@type": "Organization",
      name: "APVIA Ltd",
    },
    areaServed: {
      "@type": "Country",
      name: "Sierra Leone",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "APVIA Investment Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mining Investment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agriculture Investment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction and Engineering" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistics and Supply Chain" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Import and Export Trade" } },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to invest in Sierra Leone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To invest in Sierra Leone, partner with APVIA Ltd — a leading investment company based in Freetown. We offer opportunities in mining, agriculture, construction, logistics, and trade. Contact us at info@apvia-sl.com or +232 73 88 66 22 to discuss investment opportunities.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best investment opportunities in Sierra Leone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top investment opportunities in Sierra Leone include iron ore and mineral mining, rice and cocoa agriculture, infrastructure construction, solar energy projects, and fisheries. Sierra Leone offers high returns with a young workforce, rich natural resources, and government incentives for foreign investors.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sierra Leone safe for foreign investment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sierra Leone is open for foreign investment. The government offers legal protections through the Medium-Term National Development Plan 2024-2030, tax incentives, and investor-friendly policies. Major international institutions like the World Bank, AfDB, and MCC are actively funding projects in the country.",
        },
      },
      {
        "@type": "Question",
        name: "What sectors can I invest in Sierra Leone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key investment sectors in Sierra Leone include mining (iron ore, gold, diamonds, rutile), agriculture (rice, cocoa, palm oil), construction and infrastructure, energy (solar, hydroelectric), logistics and port operations, fisheries and blue economy, and tourism and hospitality.",
        },
      },
      {
        "@type": "Question",
        name: "Who is APVIA Ltd?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "APVIA Ltd (African Projects Ventures Investments and Advancement Limited) is a Sierra Leone-based investment company headquartered in Freetown. We specialize in connecting international investors with high-impact projects across West Africa in mining, agriculture, construction, logistics, and trade.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <HeroVideoSlideshow />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">West Africa&apos;s Premier Multi-Sectoral Enterprise</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              Invest in Sierra Leone
              <span className="block text-gradient-gold mt-2 sm:mt-3">Build Africa&apos;s Future</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              APVIA Ltd - Your trusted partner for investment in Sierra Leone. We offer comprehensive investment opportunities across mining, agriculture, construction, and trade sectors in West Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary-white text-sm sm:text-base w-full sm:w-auto">Start Investing Today</Link>
              <Link href="/services" className="btn-outline-white text-sm sm:text-base w-full sm:w-auto">Explore Opportunities</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#fbbf24] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <HomepageVisionMission />

      {/* Video Sections - Why Invest + Mineral Deposit */}
      <HomepageVideoSections />

      {/* Investment Opportunities */}
      <InvestmentOpportunities />

      {/* Investor Charts */}
      <InvestorCharts />

      {/* Core Values */}
      <HomepageCoreValues />

      {/* Services Preview */}
      <HomepageServices />

      {/* Leadership Preview */}
      <HomepageLeadership />

      {/* FAQ Section - SEO for "invest in sierra leone" */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Common questions about investing in Sierra Leone
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How to invest in Sierra Leone?", a: "Partner with APVIA Ltd — a leading investment company based in Freetown, Sierra Leone. We offer opportunities in mining, agriculture, construction, logistics, and trade. Contact us at info@apvia-sl.com or +232 73 88 66 22 to discuss investment opportunities tailored to your goals." },
              { q: "What are the best investment opportunities in Sierra Leone?", a: "Top investment opportunities include iron ore and mineral mining, rice and cocoa agriculture, infrastructure construction, solar energy projects, and fisheries. Sierra Leone offers high returns with a young workforce, rich natural resources, and government incentives for foreign investors." },
              { q: "Is Sierra Leone safe for foreign investment?", a: "Yes. Sierra Leone is open for foreign investment with legal protections under the Medium-Term National Development Plan 2024–2030, tax incentives, and investor-friendly policies. Major institutions like the World Bank, AfDB, and MCC are actively funding projects in the country." },
              { q: "What sectors can I invest in Sierra Leone?", a: "Key sectors include mining (iron ore, gold, diamonds, rutile), agriculture (rice, cocoa, palm oil), construction and infrastructure, energy (solar, hydroelectric), logistics and port operations, fisheries and blue economy, and tourism and hospitality." },
              { q: "Who is APVIA Ltd?", a: "APVIA Ltd (African Projects Ventures Investments and Advancement Limited) is a Sierra Leone-based investment company headquartered in Freetown. We specialize in connecting international investors with high-impact projects across West Africa in mining, agriculture, construction, logistics, and trade." },
            ].map((faq) => (
              <details key={faq.q} className="card-white group" open>
                <summary className="cursor-pointer p-6 sm:p-8 flex items-center justify-between gap-4 list-none">
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a]">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 -mt-2">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-line-long mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">Ready to Invest in Sierra Leone?</h2>
          <p className="text-white/60 text-sm sm:text-lg mb-6 sm:mb-8">Whether you&apos;re looking for mining, agriculture, construction, or trade opportunities, APVIA Ltd is your trusted partner for investment in Sierra Leone and West Africa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary-white text-sm sm:text-base w-full sm:w-auto">Start Investing Today</Link>
            <Link href="/services" className="btn-outline-white text-sm sm:text-base w-full sm:w-auto">Explore Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  );
}
