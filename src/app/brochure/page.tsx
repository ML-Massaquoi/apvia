import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "APVIA Ltd — Executive Brochure 2026",
  description:
    "Download the APVIA Ltd Executive Brochure 2026. Your premier gateway to investment opportunities in Sierra Leone & West Africa. Investing Today · Building Africa's Future.",
  keywords: [
    "APVIA brochure",
    "APVIA executive brochure",
    "investment brochure Sierra Leone",
    "APVIA investment opportunities",
  ],
  openGraph: {
    title: "APVIA Ltd — Executive Brochure 2026",
    description:
      "Your premier gateway to investment opportunities in Sierra Leone & West Africa.",
    url: "https://apvia-sl.com/brochure",
    siteName: "APVIA Ltd",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://apvia-sl.com/brochure",
  },
};

const highlights = [
  {
    title: "$750M+",
    subtitle: "Facilitated Investment",
    description: "Mobilised into Sierra Leone & West Africa",
  },
  {
    title: "25,000+",
    subtitle: "Jobs Created",
    description: "Direct and indirect employment across sectors",
  },
  {
    title: "50+",
    subtitle: "Global Partners",
    description: "International investors & corporations",
  },
  {
    title: "$5B",
    subtitle: "Sierra Leone Rising",
    description: "Government flagship initiative",
  },
];

const sectors = [
  { name: "Infrastructure & Transport", detail: "Ports, airports, highways, bridges" },
  { name: "Energy & Power", detail: "Solar, hydro, mini-grids, grid expansion" },
  { name: "Agriculture & Feed Salone", detail: "Rice, sugar, palm oil, livestock" },
  { name: "Mining & Value Addition", detail: "Iron ore, diamonds, gold, critical minerals" },
  { name: "Tourism & Blue Economy", detail: "Beach resorts, eco-lodges, fisheries" },
  { name: "Water & Sanitation", detail: "Bulk water supply, urban sanitation" },
];

export default function BrochurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#052e16] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#fbbf24] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#14532d] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Executive Brochure <span className="text-[#fbbf24]">2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-2 font-medium">
            Your Premier Gateway to Investment Opportunities
          </p>
          <p className="text-[#fbbf24] font-semibold text-sm sm:text-base mb-8">
            in Sierra Leone &amp; West Africa
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-10">
            {companyData.fullName} ({companyData.name}) is Sierra Leone&rsquo;s premier
            investment facilitation and business development company — serving as the strategic
            bridge connecting global investors with the vast, untapped opportunities of Sierra Leone
            and West Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/APVIA-Executive-Brochure-2026-2030.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-white inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">
              Our Value &amp; Impact
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              What APVIA Ltd delivers — and the transformation we enable together
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="card-white p-5 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#052e16] mb-1">
                  {item.title}
                </div>
                <div className="text-sm font-semibold text-[#14532d] mb-1">
                  {item.subtitle}
                </div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Sectors */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">
              Sierra Leone Rising — $5 Billion Programme
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              APVIA Ltd is the designated private-sector partner for the Government of Sierra
              Leone&rsquo;s flagship investment initiative, spanning five critical sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sectors.map((sector, i) => (
              <div
                key={sector.name}
                className="bg-white card-white p-5 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#052e16] flex items-center justify-center shrink-0">
                    <span className="text-[#fbbf24] font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">{sector.name}</h3>
                    <p className="text-gray-500 text-sm">{sector.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">
              Why Invest in Sierra Leone?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              One of Africa&rsquo;s most compelling frontier markets — stable, reforming, and
              open for business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { stat: "8.6M", label: "Population", desc: "Young, dynamic, English-speaking workforce" },
              { stat: "5.5%", label: "GDP Growth", desc: "Projected 2026 growth, outpacing sub-Saharan average" },
              { stat: "19 yrs", label: "Median Age", desc: "One of Africa's youngest populations — a demographic dividend" },
              { stat: "400M+", label: "ECOWAS Market", desc: "Regional consumer base with free movement of goods & capital" },
            ].map((item) => (
              <div key={item.label} className="card-white p-5 sm:p-6">
                <div className="text-3xl font-bold text-[#052e16] mb-1">{item.stat}</div>
                <div className="font-semibold text-[#14532d] mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-white p-6 sm:p-8 text-center">
            <h3 className="font-bold text-[#1a1a1a] mb-2">
              African Continental Free Trade Area (AfCFTA)
            </h3>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Access the world&rsquo;s largest free-trade area: 54 nations · 1.4 billion people ·
              $3 trillion combined GDP. Sierra Leone&rsquo;s membership gives investors
              preferential access to this historic integrated market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-line-long mx-auto mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Partner With Us for Africa&rsquo;s Future
          </h2>
          <p className="text-[#fbbf24] font-semibold text-sm sm:text-base mb-8">
            &ldquo;Investing Today · Building Africa&rsquo;s Future&rdquo;
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-10">
            Contact us to schedule an introductory meeting with our leadership team, receive
            sector-specific investment opportunity profiles, or arrange an exploratory visit to
            Sierra Leone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary-white">
              Contact Us
            </a>
            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: {companyData.contact.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
