import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "APVIA Ltd Privacy Policy - Learn how we collect, use, protect, and handle your personal data in accordance with GDPR and Sierra Leone Data Protection Act.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-base text-white/70">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#052e16] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#052e16]">Effective Date: 10 September 2026</p>
              <p className="text-xs text-gray-400">Document Ref: APVIA-PP-001</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section number="1" title="Introduction">
              <p>
                African Projects Ventures Investments and Advancement Limited (&quot;APVIA Ltd&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you visit our website at <strong>www.apvia-sl.com</strong> or interact with our services.
              </p>
              <p>
                This policy is designed to comply with the General Data Protection Regulation (EU GDPR), the Sierra Leone Data Protection Act 2023, and other applicable international data protection standards.
              </p>
              <p>
                By using our website or providing us with your personal data, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described herein, please do not use our website or provide us with your personal information.
              </p>
            </Section>

            <Section number="2" title="Data Controller">
              <p>The data controller responsible for your personal data is:</p>
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-5 my-4">
                <p className="font-semibold text-[#052e16]">African Projects Ventures Investments and Advancement Limited</p>
                <p className="text-sm text-gray-600 mt-1">91 Fort Street, Freetown, Sierra Leone</p>
                <p className="text-sm text-gray-600">Email: <a href="mailto:info@apvia-sl.com" className="text-[#14532d] underline">info@apvia-sl.com</a></p>
                <p className="text-sm text-gray-600">Phone: 232 73 88 66 22</p>
              </div>
            </Section>

            <Section number="3" title="Information We Collect">
              <p>We may collect and process the following categories of personal data:</p>
              <h4 className="font-semibold text-[#052e16] mt-4 mb-2">3.1 Information You Provide Directly</h4>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title, and postal address when you fill out contact forms, subscribe to newsletters, or correspond with us.</li>
                <li><strong>Business Information:</strong> Details about your organisation, investment interests, or business requirements when you engage our advisory or investment services.</li>
                <li><strong>Recruitment Data:</strong> CVs, cover letters, employment history, qualifications, and references when you apply for positions with us.</li>
                <li><strong>Feedback and Communications:</strong> Any information you voluntarily provide when contacting us, filing complaints, or participating in surveys.</li>
              </ul>
              <h4 className="font-semibold text-[#052e16] mt-4 mb-2">3.2 Information Collected Automatically</h4>
              <ul>
                <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, device type, screen resolution, and language preferences.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, navigation paths, referring URLs, click patterns, and date/time of visits.</li>
                <li><strong>Cookie Data:</strong> Information collected through cookies and similar technologies as described in our Cookie Policy.</li>
              </ul>
            </Section>

            <Section number="4" title="How We Use Your Information">
              <p>We process your personal data for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our website, investment advisory services, project management, and business facilitation services.</li>
                <li><strong>Communication:</strong> To respond to your enquiries, send you requested information, and maintain ongoing business correspondence.</li>
                <li><strong>Marketing:</strong> To send you newsletters, reports, and information about investment opportunities and services that may interest you (with your consent where required).</li>
                <li><strong>Recruitment:</strong> To process job applications and manage the recruitment process.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and enforceable governmental requests.</li>
                <li><strong>Security:</strong> To protect our website, systems, and data from unauthorised access, fraud, and other malicious activities.</li>
                <li><strong>Analytics:</strong> To analyse website usage, monitor performance, and improve user experience through aggregated and anonymised data.</li>
                <li><strong>Business Operations:</strong> To manage our business relationships, maintain records, and conduct internal administrative purposes.</li>
              </ul>
            </Section>

            <Section number="5" title="Legal Basis for Processing">
              <p>We process your personal data under one or more of the following legal bases:</p>
              <ul>
                <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose.</li>
                <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
                <li><strong>Legal Obligation:</strong> Where processing is necessary for compliance with a legal obligation to which we are subject.</li>
                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests (or those of a third party), provided your rights and interests do not override those interests.</li>
              </ul>
            </Section>

            <Section number="6" title="Cookies and Tracking Technologies">
              <p>
                Our website uses cookies and similar tracking technologies to distinguish you from other users, improve your browsing experience, and analyse site traffic. Cookies are small text files placed on your device when you visit our website.
              </p>
              <p>We use the following categories of cookies:</p>
              <ul>
                <li><strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for the purpose of displaying relevant advertisements.</li>
              </ul>
              <p>
                You can manage your cookie preferences through our Cookie Consent banner displayed when you first visit our website, or by adjusting your browser settings.
              </p>
            </Section>

            <Section number="7" title="Data Sharing and Disclosure">
              <p>We may share your personal data with the following categories of recipients:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party companies that provide services on our behalf, including hosting, analytics, email delivery, and IT support.</li>
                <li><strong>Professional Advisers:</strong> Lawyers, accountants, auditors, and insurers who provide professional services to our business.</li>
                <li><strong>Government Authorities:</strong> Regulatory bodies, law enforcement agencies, and courts when required by law or to protect our legal rights.</li>
                <li><strong>Business Partners:</strong> Trusted partners with whom we collaborate on projects and investment opportunities, subject to appropriate data protection agreements.</li>
                <li><strong>Successors:</strong> In the event of a merger, acquisition, or sale of all or part of our assets, your personal data may be transferred as part of the transaction.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal data to third parties for their marketing purposes without your explicit consent.
              </p>
            </Section>

            <Section number="8" title="International Data Transfers">
              <p>
                Your personal data may be transferred to and processed in countries outside Sierra Leone or the European Economic Area (EEA). When we transfer data internationally, we ensure appropriate safeguards are in place, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions for countries with equivalent data protection standards</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Appropriate contractual provisions under the Sierra Leone Data Protection Act 2023</li>
              </ul>
            </Section>

            <Section number="9" title="Data Retention">
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
              <p>To determine the appropriate retention period, we consider:</p>
              <ul>
                <li>The amount, nature, and sensitivity of the personal data</li>
                <li>The potential risk of harm from unauthorised use or disclosure</li>
                <li>The purposes for which we process the data</li>
                <li>Applicable legal, regulatory, and contractual requirements</li>
              </ul>
              <p>
                Generally, we retain contact and business correspondence data for up to 5 years after the last interaction, and recruitment data for up to 2 years after the recruitment decision.
              </p>
            </Section>

            <Section number="10" title="Your Rights">
              <p>Under applicable data protection laws, you have the following rights:</p>
              <div className="grid sm:grid-cols-2 gap-3 my-4">
                <RightCard icon="M15 12a3 3 0 11-6 0 3 3 0 016 0z" title="Right of Access" desc="Request a copy of the personal data we hold about you." />
                <RightCard icon="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" title="Right to Rectification" desc="Request correction of inaccurate or incomplete data." />
                <RightCard icon="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" title="Right to Erasure" desc="Request deletion of your personal data in certain circumstances." />
                <RightCard icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" title="Right to Restrict Processing" desc="Request restriction of processing of your personal data." />
                <RightCard icon="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" title="Right to Data Portability" desc="Request transfer of your data in a structured, machine-readable format." />
                <RightCard icon="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728A9 9 0 015.636 5.636" title="Right to Object" desc="Object to processing based on legitimate interests or direct marketing." />
              </div>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@apvia-sl.com" className="text-[#14532d] underline font-medium">info@apvia-sl.com</a>.
                We will respond to your request within 30 days.
              </p>
            </Section>

            <Section number="11" title="Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response and breach notification procedures</li>
                <li>Regular backups and disaster recovery planning</li>
              </ul>
              <p>
                While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </Section>

            <Section number="12" title="Children&apos;s Privacy">
              <p>
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without verification of parental consent, we will take steps to delete that information promptly.
              </p>
            </Section>

            <Section number="13" title="Third-Party Links">
              <p>
                Our website may contain links to third-party websites, plugins, or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policy of every site you visit.
              </p>
            </Section>

            <Section number="14" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Effective Date&quot; at the top of this page.
              </p>
              <p>
                We encourage you to review this policy periodically to stay informed about how we protect your data.
              </p>
            </Section>

            <Section number="15" title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact us:
              </p>
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 my-4">
                <p className="font-semibold text-[#052e16] mb-3">Data Protection Enquiries</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:info@apvia-sl.com" className="text-[#14532d] underline">info@apvia-sl.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    232 73 88 66 22
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    91 Fort Street, Freetown, Sierra Leone
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="gold-line-long mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Have Questions About Your Data?</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">Our team is ready to assist with any privacy-related enquiries.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:info@apvia-sl.com" className="btn-primary-white">Contact Us</a>
            <Link href="/terms" className="btn-outline-white">Terms of Use</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-lg bg-[#052e16] text-[#fbbf24] text-sm font-bold flex items-center justify-center shrink-0">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[#052e16]">{title}</h2>
      </div>
      <div className="pl-0 sm:pl-11 text-gray-600 text-sm sm:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function RightCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-[#f8f9fa] border border-gray-200 rounded-xl p-4">
      <div className="w-8 h-8 rounded-lg bg-[#052e16] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-[#052e16] mb-0.5">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
