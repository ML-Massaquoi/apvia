"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { teamData } from "@/data/team";
import InsightModal from "@/components/InsightModal";

const philosophyData = [
  {
    title: "Talent Attraction",
    desc: "Attracting and retaining talented professionals who share our values.",
    overview: "APVIA Ltd actively recruits top talent from Sierra Leone, West Africa, and the international diaspora. We seek professionals who share our values of integrity, excellence, and collaboration, offering them a platform to make a meaningful impact on Africa's development.",
    highlights: [
      { label: "Applications", value: "500+/yr", desc: "Annual job applications received across all positions" },
      { label: "Acceptance", value: "8%", desc: "Selective acceptance rate ensuring top talent" },
      { label: "Diaspora", value: "30%", desc: "New hires from the African international diaspora" },
      { label: "Referrals", value: "40%", desc: "Positions filled through employee referrals" },
      { label: "Campus", value: "5 Univs", desc: "University recruitment partnerships" },
      { label: "Retention", value: "85%", desc: "First-year employee retention rate" },
    ],
  },
  {
    title: "Career Development",
    desc: "Investing in training and career development to build capacity.",
    overview: "We invest heavily in our people through comprehensive training programs, mentorship, and clear career progression paths. Every employee has access to professional development opportunities that build both technical skills and leadership capabilities.",
    highlights: [
      { label: "Training Hours", value: "40+/yr", desc: "Average training hours per employee annually" },
      { label: "Budget", value: "$500K", desc: "Annual training and development budget" },
      { label: "Programs", value: "20+", desc: "Structured training and development programs" },
      { label: "Mentorship", value: "1:3", desc: "Mentor to mentee ratio in leadership program" },
      { label: "Promotions", value: "25%", desc: "Internal promotion rate across all levels" },
      { label: "Certifications", value: "100+", desc: "Professional certifications sponsored annually" },
    ],
  },
  {
    title: "Culture of Excellence",
    desc: "Fostering a culture of excellence, integrity, and teamwork.",
    overview: "Our culture is built on the belief that excellence is a habit, not an act. We foster an environment where integrity guides every decision, teamwork amplifies individual strengths, and continuous improvement drives organizational performance.",
    highlights: [
      { label: "Engagement", value: "82%", desc: "Employee engagement score from annual survey" },
      { label: "Values Score", value: "4.7/5", desc: "Employee rating of company culture and values" },
      { label: "Recognition", value: "Monthly", desc: "Employee recognition and awards program" },
      { label: "Events", value: "12+/yr", desc: "Team building and cultural events annually" },
      { label: "Satisfaction", value: "90%", desc: "Employee satisfaction rate in latest survey" },
      { label: "Open Door", value: "Always", desc: "Open-door management policy at all levels" },
    ],
  },
  {
    title: "Competitive Rewards",
    desc: "Offering competitive compensation and benefits.",
    overview: "APVIA offers compensation packages that are competitive with international standards while reflecting local market conditions. We believe in rewarding performance and providing benefits that support employee well-being and family security.",
    highlights: [
      { label: "Salary", value: "Top 25%", desc: "Compensation benchmarked to top quartile of market" },
      { label: "Benefits", value: "Comprehensive", desc: "Health, life, and disability insurance for all employees" },
      { label: "Bonus", value: "Performance", desc: "Annual performance-based bonus program" },
      { label: "Housing", value: "Assisted", desc: "Housing assistance for relocating employees" },
      { label: "Leave", value: "Generous", desc: "Annual leave, parental leave, and study leave" },
      { label: "Retirement", value: "Pension", desc: "Contributory pension scheme for all employees" },
    ],
  },
  {
    title: "Diversity & Inclusion",
    desc: "Promoting diversity and equal opportunity in our workforce.",
    overview: "We are committed to building a diverse and inclusive workforce that reflects the communities we serve. We promote equal opportunity regardless of gender, ethnicity, religion, or background, recognizing that diversity drives innovation and better decision-making.",
    highlights: [
      { label: "Women", value: "35%", desc: "Female representation across all organizational levels" },
      { label: "Youth", value: "40%", desc: "Employees under 35 years of age" },
      { label: "Ethnicity", value: "Diverse", desc: "Representation from all major ethnic groups" },
      { label: "Disability", value: "Inclusive", desc: "Workplace accessibility and inclusion programs" },
      { label: "Policy", value: "Zero Tolerance", desc: "Zero tolerance for discrimination or harassment" },
      { label: "Training", value: "Annual", desc: "Diversity and inclusion training for all staff" },
    ],
  },
  {
    title: "Employee Empowerment",
    desc: "Empowering employees to contribute to the company's success.",
    overview: "We empower our employees by giving them the autonomy, resources, and authority to make decisions and drive innovation. Our flat organizational structure encourages initiative, and our innovation programs reward creative problem-solving.",
    highlights: [
      { label: "Innovation", value: "100+/yr", desc: "Employee-generated improvement ideas annually" },
      { label: "Implemented", value: "40%", desc: "Employee ideas implemented in operations" },
      { label: "Autonomy", value: "High", desc: "Decision-making authority at all organizational levels" },
      { label: "Resources", value: "Full", desc: "Access to tools, technology, and training needed" },
      { label: "Feedback", value: "Continuous", desc: "Regular feedback loops and performance reviews" },
      { label: "Ownership", value: "ESOP", desc: "Employee stock option program for senior staff" },
    ],
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(null);
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<typeof philosophyData[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Executive Leadership</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Driving our vision of becoming the leading integrated multi-sectoral enterprise in West Africa</p>
          </div>

          {/* Top 3 Leaders */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {teamData.slice(0, 3).map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] z-10" />
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#052e16]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                    <p className="text-[#fbbf24] font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{member.bio}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                    View Profile
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamData.slice(3).map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] z-10" />
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#052e16]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                    <p className="text-[#fbbf24] font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{member.bio}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#14532d] font-semibold text-xs group-hover:text-[#d97706] transition-colors">
                    View Profile
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Philosophy */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">Our People Philosophy</h2>
            <p className="text-gray-500 text-sm sm:text-base">Our people are our most valuable asset</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {philosophyData.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelectedPhilosophy(item)}
                className="card-white p-5 sm:p-7 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
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
        isOpen={!!selectedPhilosophy}
        onClose={() => setSelectedPhilosophy(null)}
        title={selectedPhilosophy?.title || ""}
        overview={selectedPhilosophy?.overview || ""}
        highlights={selectedPhilosophy?.highlights || []}
        cta="Join Our Team"
      />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Join Our Team</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">We are always looking for talented professionals who share our commitment to excellence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary-white">Get in Touch</Link>
            <Link href="/about" className="btn-outline-white">Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] rounded-t-2xl" />

            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-64 sm:h-[28rem] overflow-hidden bg-[#052e16]">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052e16] via-[#052e16]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex px-3 py-1 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] text-xs font-medium mb-3 backdrop-blur-sm">
                  {selectedMember.department}
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">{selectedMember.name}</h2>
                <p className="text-[#fbbf24] font-semibold text-lg">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#14532d]" /> About
                </h3>
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#14532d]" /> Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {selectedMember.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#052e16]/5 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#14532d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#052e16] text-white rounded-lg font-semibold text-sm hover:bg-[#14532d] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
                <span className="text-gray-400 text-sm">{selectedMember.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
