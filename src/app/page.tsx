import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import HeroVideoSlideshow from "@/components/HeroVideoSlideshow";
import HomepageVideoSections from "@/components/HomepageVideoSections";

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

      {/* Investment Highlights */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Investment Opportunities in Sierra Leone</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Explore diverse investment sectors with high growth potential in Sierra Leone and West Africa</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "Mining & Minerals", desc: "Invest in Sierra Leone's rich mineral resources including diamonds, gold, rutile, and bauxite.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { title: "Agriculture & Farming", desc: "Sustainable agriculture investments in cocoa, coffee, palm oil, and rice farming.", icon: "M12 22V8m0 0c-2 0-6 2-6 6m6-6c2 0 6 2 6 6m-12 0c0 4 2 6 6 6m0 0c4 0 6-2 6-6" },
              { title: "Construction & Infrastructure", desc: "Infrastructure development projects including roads, buildings, and utilities.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Import & Export Trade", desc: "Facilitate international trade connecting Sierra Leone with global markets.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Real Estate & Property", desc: "Commercial and residential real estate development in Freetown and growing urban centers.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { title: "Energy & Utilities", desc: "Renewable energy and utility infrastructure investments.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((item) => (
              <div key={item.title} className="card-white p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">The principles that guide every decision and action at APVIA Ltd</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {companyData.coreValues.map((value) => (
              <div key={value.title} className="card-white p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#052e16] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <ValueIcon name={value.icon} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Comprehensive solutions across eleven core business verticals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div key={service.id} className="card-white p-5 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center mb-3 sm:mb-4">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">{service.description}</p>
                <Link href={`/services#${service.id}`} className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-xs sm:text-sm hover:text-[#d97706] transition-colors">
                  Learn More <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-14">
            <Link href="/services" className="btn-primary text-sm sm:text-base">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="max-w-lg">
              <div className="gold-line mb-4 sm:mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 sm:mb-5">
                Leadership That <span className="text-gradient-gold">Drives Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">APVIA Ltd is led by a highly experienced and capable management team with diverse backgrounds in business, engineering, finance, law, diplomacy, and international development.</p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Our leadership combines local market intelligence with international standards of excellence, delivering end-to-end solutions that create lasting value for stakeholders.</p>
              <Link href="/team" className="btn-primary text-sm sm:text-base">Meet Our Team</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { role: "Managing Director", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { role: "Operations", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                { role: "Finance", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { role: "Strategy", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              ].map((item) => (
                <div key={item.role} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#052e16] flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">{item.role}</p>
                </div>
              ))}
            </div>
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

function ValueIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    leaf: "M12 21a8 8 0 008-8c0-3.75-2.95-7.56-6.5-9.48a1.5 1.5 0 00-2 0C8.95 11.44 6 15.25 6 19a8 8 0 006 2z M12 21v-6",
    users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  };
  return (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[name] || icons.star} />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
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
  return (
    <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[name] || icons.building} />
    </svg>
  );
}
