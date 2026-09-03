import Link from "next/link";
import { policiesData } from "@/data/policies";

export const metadata = {
  title: "Policies - APVIA Ltd",
  description: "Our corporate policies on quality, health & safety, environmental, data protection, equality, modern slavery, and complaints.",
};

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient-gold">Policies</span>
            </h1>
            <p className="text-base text-white/70">Committed to the highest standards of governance, compliance, and ethical practices</p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {policiesData.map((policy) => (
              <Link
                key={policy.id}
                href={`/policies/${policy.id}`}
                className="card-white p-8 hover:shadow-lg transition-all hover:-translate-y-1 block group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#052e16] flex items-center justify-center mb-5">
                  <PolicyIcon id={policy.id} />
                </div>
                <p className="text-gray-400 text-xs font-medium mb-2">Ref: {policy.documentRef}</p>
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#14532d] transition-colors">{policy.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{policy.content.statement}</p>
                <span className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-sm group-hover:text-[#d97706] transition-colors">
                  Read Policy
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-5">Questions About Our Policies?</h2>
          <p className="text-white/60 text-lg mb-8">If you have any questions about our policies, please do not hesitate to contact us.</p>
          <Link href="/contact" className="btn-primary-white">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

function PolicyIcon({ id }: { id: string }) {
  const icons: Record<string, string> = {
    quality: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    "health-safety": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    environmental: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    "data-protection": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    "equality-diversity": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    "modern-slavery": "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    complaint: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    "anti-bribery": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  };
  return (
    <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[id] || icons.quality} />
    </svg>
  );
}
