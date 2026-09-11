import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "APVIA Ltd Terms of Use - Legal terms governing your use of our website, services, and any information presented.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-gradient-gold">Use</span>
            </h1>
            <p className="text-base text-white/70">
              Legal terms and conditions governing your use of our website and services
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
              <p className="text-xs text-gray-400">Document Ref: APVIA-TOS-001</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section number="1" title="Acceptance of Terms">
              <p>
                By accessing or using the website at <strong>www.apvia-sl.com</strong> (&quot;Website&quot;) operated by African Projects Ventures Investments and Advancement Limited (&quot;APVIA Ltd&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be bound by these Terms of Use (&quot;Terms&quot;).
              </p>
              <p>
                If you do not agree to these Terms, you must immediately discontinue use of this Website. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of the Website constitutes acceptance of any modifications.
              </p>
            </Section>

            <Section number="2" title="About APVIA Ltd">
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-5 my-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  African Projects Ventures Investments and Advancement Limited is a diversified multi-sectoral holding company headquartered in Freetown, Sierra Leone, driving sustainable economic development across West Africa. Our core sectors include mining, agriculture, construction, logistics, and trade facilitation.
                </p>
              </div>
            </Section>

            <Section number="3" title="Permitted Use">
              <p>You are granted a limited, non-exclusive, revocable licence to access and use this Website for lawful purposes in accordance with these Terms. You may not:</p>
              <ul>
                <li>Use the Website for any unlawful or fraudulent purpose</li>
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website without express written permission</li>
                <li>Use automated systems, bots, scrapers, or data mining tools to access or collect data from the Website</li>
                <li>Attempt to gain unauthorised access to any portion of the Website, other accounts, or connected systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Website or related servers</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              </ul>
            </Section>

            <Section number="4" title="Intellectual Property">
              <p>
                All content on this Website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, software, and the overall design and arrangement, is the property of APVIA Ltd or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                The APVIA name, logo, and all related product and service names, designs, and slogans are trademarks of APVIA Ltd. You may not use such marks without our prior written permission.
              </p>
              <p>
                You may view and download a single copy of the material on this Website for your personal, non-commercial use, provided you maintain all copyright and other proprietary notices. Any other use requires our express written consent.
              </p>
            </Section>

            <Section number="5" title="Investment Disclaimer">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-amber-800 mb-1">Important Notice</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      The information presented on this Website, including any information about investment opportunities, financial projections, or business prospects, is provided for general informational purposes only. It does not constitute financial, investment, legal, or professional advice. You should not rely on any information on this Website as the basis for making any financial or investment decision.
                    </p>
                  </div>
                </div>
              </div>
              <ul>
                <li>Past performance is not indicative of future results. All investments carry risk, including the potential loss of principal.</li>
                <li>Any projections, estimates, or forecasts are forward-looking statements subject to significant uncertainty and actual outcomes may differ materially.</li>
                <li>You should consult your own legal, financial, tax, and other professional advisers before making any investment or business decision.</li>
                <li>APVIA Ltd does not warrant or guarantee the accuracy, completeness, or timeliness of any information presented on this Website.</li>
              </ul>
            </Section>

            <Section number="6" title="No Professional Relationship">
              <p>
                Your use of this Website or communication with us through the Website does not create a professional, advisory, fiduciary, or client relationship between you and APVIA Ltd. No such relationship shall be established without a written, signed agreement explicitly setting forth the terms of engagement.
              </p>
            </Section>

            <Section number="7" title="Third-Party Links and Content">
              <p>
                This Website may contain links to third-party websites, resources, or content that are not owned or controlled by APVIA Ltd. We have no control over and assume no responsibility for:
              </p>
              <ul>
                <li>The content, privacy policies, or practices of any third-party websites</li>
                <li>Any products or services offered by third parties</li>
                <li>Any loss or damage caused by your reliance on third-party content</li>
              </ul>
              <p>
                Inclusion of any third-party link does not imply endorsement or recommendation by APVIA Ltd. You access third-party links at your own risk.
              </p>
            </Section>

            <Section number="8" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, APVIA Ltd, its directors, officers, employees, agents, and affiliates shall not be liable for any:
              </p>
              <ul>
                <li><strong>Indirect, incidental, special, consequential, or punitive damages</strong> arising out of or relating to your use of or inability to use this Website</li>
                <li><strong>Loss of profits, data, business opportunities, or goodwill</strong> whether direct or indirect</li>
                <li><strong>Damages resulting from any errors, omissions, or inaccuracies</strong> in the Website content</li>
                <li><strong>Damages arising from unauthorised access</strong> to or alteration of your data or transmissions</li>
              </ul>
              <p>
                In no event shall our total aggregate liability exceed the amount you paid to us, if any, in the twelve (12) months prior to the claim, or USD 100, whichever is greater.
              </p>
            </Section>

            <Section number="9" title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless APVIA Ltd and its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:
              </p>
              <ul>
                <li>Your use of the Website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party right, including intellectual property, privacy, or proprietary rights</li>
                <li>Any content you submit, post, or transmit through the Website</li>
              </ul>
            </Section>

            <Section number="10" title="Confidentiality">
              <p>
                Any non-public information obtained through this Website, including business strategies, financial data, investment plans, and operational details, is confidential and proprietary to APVIA Ltd. You agree not to disclose, reproduce, or distribute such information without our prior written consent.
              </p>
            </Section>

            <Section number="11" title="Privacy">
              <p>
                Your use of this Website is also governed by our{" "}
                <Link href="/privacy" className="text-[#14532d] underline font-medium hover:text-[#d97706] transition-colors">
                  Privacy Policy
                </Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal data.
              </p>
            </Section>

            <Section number="12" title="Governing Law and Jurisdiction">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Sierra Leone. Any dispute arising out of or in connection with these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Sierra Leone.
              </p>
              <p>
                Notwithstanding the foregoing, we reserve the right to seek injunctive or other equitable relief in any court of competent jurisdiction to protect our intellectual property rights and confidential information.
              </p>
            </Section>

            <Section number="13" title="Severability">
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </Section>

            <Section number="14" title="Entire Agreement">
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published on this Website, constitute the entire agreement between you and APVIA Ltd regarding your use of the Website and supersede all prior or contemporaneous communications and proposals.
              </p>
            </Section>

            <Section number="15" title="Contact Us">
              <p>
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 my-4">
                <p className="font-semibold text-[#052e16] mb-3">Legal &amp; Compliance Enquiries</p>
                <p className="text-sm text-gray-600 mb-2">Vincent Davies — HR &amp; Administrative Manager</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#14532d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:compliance@apvia-sl.com" className="text-[#14532d] underline">compliance@apvia-sl.com</a>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Need Legal Clarification?</h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">Contact our team for any questions about these terms or our services.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:info@apvia-sl.com" className="btn-primary-white">Contact Us</a>
            <Link href="/privacy" className="btn-outline-white">Privacy Policy</Link>
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
