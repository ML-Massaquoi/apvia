import type { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "APVIA Ltd — Executive Brochure 2026",
  description:
    "View the APVIA Ltd Executive Brochure 2026 online. Your premier gateway to investment opportunities in Sierra Leone & West Africa. Investing Today · Building Africa's Future.",
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

export default function BrochurePage() {
  return (
    <>
      {/* Compact Hero */}
      <section className="relative bg-[#052e16] pt-24 pb-10 sm:pt-28 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#fbbf24] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#14532d] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-line mx-auto mb-5" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Executive Brochure <span className="text-[#fbbf24]">2026</span>
          </h1>
          <p className="text-[#fbbf24] font-semibold text-sm sm:text-base mb-2">
            Investing Today · Building Africa&apos;s Future
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Your premier gateway to investment opportunities in Sierra Leone &amp; West Africa
          </p>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="bg-[#f8f9fa] pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-t-xl border border-b-0 border-gray-200 px-4 sm:px-6 py-3">
            <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
              Scroll to view the full brochure below
            </p>
            <div className="flex items-center gap-5 sm:gap-6">
              <a
                href="/APVIA-Executive-Brochure-2026-2030.pdf"
                download
                className="btn-primary text-[13px] py-2 px-4 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <div className="w-px h-6 bg-gray-300" />
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#25D366] hover:text-[#1da851] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="bg-white border border-gray-200 rounded-b-xl overflow-hidden shadow-lg">
            <iframe
              src="/APVIA-Executive-Brochure-2026-2030.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
              className="w-full h-[75vh] sm:h-[85vh] lg:h-[90vh]"
              title="APVIA Ltd Executive Brochure 2026"
            />
          </div>

          {/* Fallback link for browsers that block iframes */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Having trouble viewing?{" "}
              <a
                href="/APVIA-Executive-Brochure-2026-2030.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14532d] font-semibold underline hover:text-[#d97706] transition-colors"
              >
                Open the brochure in a new tab
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#052e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-line-long mx-auto mb-8" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Partner With Us for Africa&apos;s Future
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-8">
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
