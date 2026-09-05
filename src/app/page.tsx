import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import HeroVideoSlideshow from "@/components/HeroVideoSlideshow";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "APVIA Ltd",
    alternateName: "African Projects Ventures Investments and Advancement Limited",
    url: "https://www.apvia-sl.com",
    logo: "https://www.apvia-sl.com/Apvia_logo.jpeg",
    description:
      "A diversified multi-sectoral holding company headquartered in Freetown, Sierra Leone, driving sustainable economic development across West Africa.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "91 Fort Street",
      addressLocality: "Freetown",
      addressCountry: "Sierra Leone",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+232-76-92-32-39",
      contactType: "customer service",
      email: "info@apvia-sl.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/apvia-ltd",
      "https://www.facebook.com/apvialtd",
      "https://www.instagram.com/apvialtd",
    ],
    areaServed: {
      "@type": "Country",
      name: "Sierra Leone",
    },
    knowsAbout: [
      "Investment in Sierra Leone",
      "Sierra Leone mining",
      "Sierra Leone agriculture",
      "Sierra Leone construction",
      "West Africa trade",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "APVIA Ltd",
    url: "https://www.apvia-sl.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.apvia-sl.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "APVIA Ltd",
    image: "https://www.apvia-sl.com/Apvia_logo.jpeg",
    url: "https://www.apvia-sl.com",
    telephone: "+232-76-92-32-39",
    address: {
      "@type": "PostalAddress",
      streetAddress: "91 Fort Street",
      addressLocality: "Freetown",
      addressCountry: "Sierra Leone",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4841,
      longitude: -13.2317,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

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

      {/* Stats */}
      <section className="py-10 sm:py-12 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "11+", label: "Business Divisions" },
              { number: "5+", label: "West African Markets" },
              { number: "30+", label: "Years Experience" },
              { number: "24/7", label: "Operational Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-1">{stat.number}</div>
                <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div className="card-white p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">Our Vision</h2>
              </div>
              <p className="text-[#14532d] font-semibold text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">&ldquo;{companyData.vision}&rdquo;</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4 sm:mb-6">{companyData.visionDescription}</p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-sm hover:text-[#d97706] transition-colors">
                Read More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-white p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">Our Mission</h2>
              </div>
              <p className="text-[#14532d] font-semibold text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">&ldquo;{companyData.mission}&rdquo;</p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {companyData.missionActions.slice(0, 3).map((action, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-sm hover:text-[#d97706] transition-colors">
                Read More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
