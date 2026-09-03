import Link from "next/link";
import Image from "next/image";
import { teamData } from "@/data/team";

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient-gold">Leadership</span>
            </h1>
            <p className="text-base text-white/70">A highly experienced and capable management team with diverse backgrounds</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* MD/CEO - Featured */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-5" />
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Executive Leadership</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Driving our vision of becoming the leading integrated multi-sectoral enterprise in West Africa</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] z-10" />
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[400px] md:min-h-[520px] overflow-hidden">
                    <Image
                      src={teamData[0].image}
                      alt={teamData[0].name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/20 to-transparent" />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center bg-white relative">
                    <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#fbbf24]/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-[#052e16]/5 text-[#14532d] text-xs font-medium mb-4 w-fit">
                      {teamData[0].department}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-1">{teamData[0].name}</h3>
                    <p className="text-[#d97706] font-semibold text-lg mb-5">{teamData[0].role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{teamData[0].bio}</p>
                    <div className="mb-6">
                      <h4 className="text-[#1a1a1a] font-semibold text-sm mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2.5">
                        {teamData[0].responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                            <div className="w-5 h-5 rounded-full bg-[#052e16]/5 flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-[#14532d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={`mailto:${teamData[0].email}`} className="inline-flex items-center gap-2 text-[#14532d] font-semibold text-sm hover:text-[#d97706] transition-colors w-fit group/link">
                      Get in Touch
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Senior Management Team</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Experienced professionals leading our core business functions</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.slice(1).map((member) => (
                <div key={member.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] z-10" />
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                      <p className="text-[#fbbf24] font-semibold text-sm">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="inline-flex px-3 py-1 rounded-full bg-[#052e16]/5 text-[#14532d] text-xs font-medium mb-3">
                      {member.department}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                    <ul className="space-y-2 mb-4">
                      {member.responsibilities.slice(0, 2).map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-500 text-xs">
                          <div className="w-4 h-4 rounded-full bg-[#052e16]/5 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-[#14532d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 text-[#14532d] font-semibold text-xs hover:text-[#d97706] transition-colors group/link">
                      Get in Touch
                      <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HR Philosophy */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">Our People Philosophy</h2>
            <p className="text-gray-500">Our people are our most valuable asset</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Talent Attraction", desc: "Attracting and retaining talented professionals who share our values." },
              { title: "Career Development", desc: "Investing in training and career development to build capacity." },
              { title: "Culture of Excellence", desc: "Fostering a culture of excellence, integrity, and teamwork." },
              { title: "Competitive Rewards", desc: "Offering competitive compensation and benefits." },
              { title: "Diversity & Inclusion", desc: "Promoting diversity and equal opportunity in our workforce." },
              { title: "Employee Empowerment", desc: "Empowering employees to contribute to the company's success." },
            ].map((item) => (
              <div key={item.title} className="card-white p-7">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-5">Join Our Team</h2>
          <p className="text-white/60 text-lg mb-8">We are always looking for talented professionals who share our commitment to excellence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary-white">Get in Touch</Link>
            <Link href="/about" className="btn-outline-white">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
