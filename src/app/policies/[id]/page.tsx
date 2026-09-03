import Link from "next/link";
import { notFound } from "next/navigation";
import { policiesData } from "@/data/policies";

export function generateStaticParams() {
  return policiesData.map((policy) => ({ id: policy.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const policy = policiesData.find((p) => p.id === id);
  if (!policy) return { title: "Policy Not Found" };
  return { title: `${policy.title} - APVIA Ltd` };
}

export default async function PolicyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const policy = policiesData.find((p) => p.id === id);
  if (!policy) notFound();

  const otherPolicies = policiesData.filter((p) => p.id !== id);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-5" />
            <p className="text-[#fbbf24] text-sm font-medium mb-3">Ref: {policy.documentRef}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{policy.title}</h1>
            <Link href="/policies" className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mt-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All Policies
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          {/* Statement */}
          <div className="mb-10 p-6 bg-[#052e16]/5 border border-[#052e16]/10 rounded-xl">
            <h3 className="text-[#1a1a1a] font-semibold mb-3 text-sm uppercase tracking-wider">Policy Statement</h3>
            <p className="text-gray-600 leading-relaxed italic">&ldquo;{policy.content.statement}&rdquo;</p>
          </div>

          {policy.content.commitments && (
            <Section title="Our Commitments" items={policy.content.commitments} />
          )}

          {policy.content.objectives && (
            <Section title="Aims and Objectives" items={policy.content.objectives} />
          )}

          {policy.content.principles && (
            <Section
              title={policy.id === "data-protection" ? "Data Protection Principles" : "Core Principles"}
              items={policy.content.principles}
            />
          )}

          {policy.content.practices && (
            <Section title="Quality Practices" items={policy.content.practices} />
          )}

          {policy.content.responsibilities && (
            <Section title="Responsibilities" items={policy.content.responsibilities} />
          )}

          {policy.content.systems && (
            <Section title="Safety Management Systems" items={policy.content.systems} />
          )}

          {policy.content.protectedCharacteristics && (
            <div className="mb-10">
              <h3 className="text-[#1a1a1a] font-bold text-xl mb-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#14532d]" /> Protected Characteristics
              </h3>
              <div className="flex flex-wrap gap-3">
                {policy.content.protectedCharacteristics.map((item: string, i: number) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-[#052e16]/5 text-[#14532d] text-sm font-medium">{item}</span>
                ))}
              </div>
            </div>
          )}

          {policy.content.rights && (
            <Section title="Data Subject Rights" items={policy.content.rights} />
          )}

          {policy.content.risks && (
            <Section title="Key Risk Areas" items={policy.content.risks} icon="warning" />
          )}

          {policy.content.channels && (
            <Section title="Complaint Channels" items={policy.content.channels} />
          )}

          {policy.content.process && (
            <div className="mb-10">
              <h3 className="text-[#1a1a1a] font-bold text-xl mb-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#14532d]" /> Complaint Process
              </h3>
              <div className="space-y-4">
                {policy.content.process.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-[#052e16] flex items-center justify-center shrink-0">
                      <span className="text-[#fbbf24] text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Policies */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Other Policies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPolicies.map((p) => (
              <Link key={p.id} href={`/policies/${p.id}`} className="card-white p-7 hover:shadow-lg transition-all hover:-translate-y-1 block">
                <p className="text-gray-400 text-xs font-medium mb-2">Ref: {p.documentRef}</p>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.content.statement}</p>
                <span className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-sm mt-4 hover:text-[#d97706] transition-colors">
                  Read Policy <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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
          <h2 className="text-3xl font-bold text-white mb-5">Questions About This Policy?</h2>
          <p className="text-white/60 text-lg mb-8">If you have any questions, please do not hesitate to contact us.</p>
          <Link href="/contact" className="btn-primary-white">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

function Section({ title, items, icon }: { title: string; items: string[]; icon?: string }) {
  return (
    <div className="mb-10">
      <h3 className="text-[#1a1a1a] font-bold text-xl mb-4 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#14532d]" /> {title}
      </h3>
      <ul className="space-y-3 ml-1">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
            {icon === "warning" ? (
              <svg className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            ) : (
              <svg className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            )}
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
