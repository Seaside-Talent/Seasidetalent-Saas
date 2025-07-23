import React from 'react';

import { DemoBanner } from '@/templates/DemoBanner';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export default function PrivacyPolicyPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-seaside-100 bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-center text-3xl font-bold text-seaside-900">Seaside Talent Privacy Policy</h1>
          <p className="mb-6 text-center text-sm text-seaside-600">Effective Date: July 19, 2025</p>
          <section className="prose max-w-none">
            <p>
              <strong>
                Seaside Talent LLC (“Seaside Talent,” “we,” “our,” or “us”) is deeply committed to protecting your privacy and safeguarding your personal information. This Privacy Policy details how we collect, use, share, retain, and protect data concerning individuals who use our website, job board, Applicant Tracking System (ATS), onboarding, and licensing/compliance tools (collectively, the “Services”).
              </strong>
            </p>
            <p>
              <strong>
                By using our Services, you agree to the collection and use of your information in accordance with this policy.
              </strong>
            </p>
            <p>
              <strong>
                Our Commitment to Compliance:
              </strong>
              We operate in full compliance with applicable federal laws, including the Health Insurance Portability and Accountability Act (HIPAA), and Massachusetts-specific privacy requirements, such as those governing Criminal Offender Record Information (CORI).
            </p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong>Information We Collect</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Information You Provide (Job Seekers):</strong>
                    <ul className="list-disc pl-6">
                      <li>Contact & Identifying Information: Name, email address, phone number, physical address/location.</li>
                      <li>Professional Profile Information: Employment history, education, certifications/licenses (self-attested or verified), work preferences.</li>
                      <li>Uploaded Documents: Resumes, licenses, government-issued identification (e.g., for I-9 verification purposes).</li>
                      <li>Application-Specific Data: Data submitted with job applications.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information You Provide (Employers):</strong>
                    <ul className="list-disc pl-6">
                      <li>Company & Organizational Details: Name, industry, address, EIN.</li>
                      <li>Administrator Data: Name, contact info, login credentials.</li>
                      <li>Job Postings & Interaction Logs.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information Collected Automatically:</strong>
                    <ul className="list-disc pl-6">
                      <li>Device & Network Info: IP, device type, OS, browser.</li>
                      <li>Usage Data: Page visits, clicks, search queries.</li>
                      <li>Location Data: General IP-based or mobile-based.</li>
                      <li>Tracking Tech: Cookies, web beacons, pixels.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Legal Bases for Processing & How We Use Your Information</strong>
                <ul className="list-disc pl-6">
                  <li>Performance of a Contract</li>
                  <li>Your Consent</li>
                  <li>Legitimate Interests</li>
                  <li>Legal Compliance</li>
                </ul>
                <p><strong>Uses include:</strong></p>
                <ul className="list-disc pl-6">
                  <li>Providing and managing Services</li>
                  <li>Communications and notifications</li>
                  <li>Improving Services</li>
                  <li>Security and fraud prevention</li>
                  <li>Personalization and legal compliance</li>
                </ul>
              </li>
              <li>
                <strong>Cookies and Tracking Technologies</strong>
                <p>We use cookies (Clerk: leverages cookies in a secure, privacy-compliant manner to facilitate seamless user authentication across domains and subdomains.). We do not track your online presence otherwise.</p>
              </li>
              <li>
                <strong>How We Share and Disclose Your Information</strong>
                <ul className="list-disc pl-6">
                  <li>With your consent or direction</li>
                  <li>With employers (when applying)</li>
                  <li>With service providers (bound by confidentiality)</li>
                  <li>With affiliates</li>
                  <li>For legal reasons or to protect our rights</li>
                </ul>
              </li>
              <li>
                <strong>Data Retention</strong>
                <ul className="list-disc pl-6">
                  <li>For as long as necessary to fulfill the purposes for which it was collected, or to meet legal, accounting, audit, and compliance obligations.</li>
                  <li>Typical Retention: Up to seven (7) years for job applications and onboarding records, or longer if required by specific state or federal laws.</li>
                  <li>License Data: Maintained for the duration of its relevance to your professional profile or until you request its deletion, subject to ongoing legal or regulatory requirements.</li>
                  <li>Account Data: Generally retained as long as your account remains active.</li>
                  <li>Deletion Requests: While you may request data deletion, certain information may be retained for specific periods due to legal obligations, dispute resolution, or to enforce our agreements.</li>
                  <li>Anonymized Data: Data that has been anonymized or aggregated may be retained indefinitely for analytics and service improvement purposes.</li>
                </ul>
              </li>
              <li>
                <strong>Your Privacy Rights and Choices</strong>
                <ul className="list-disc pl-6">
                  <li>Access and correct your data</li>
                  <li>Request deletion (subject to exceptions)</li>
                  <li>Restrict processing or request data portability</li>
                  <li>Withdraw consent</li>
                  <li>Object to processing</li>
                  <li>File complaints</li>
                  <li>
                    Contact:
                    <a href="mailto:privacy@seasidetalent.com" className="text-seaside-600 underline">
                      privacy@seasidetalent.com
                    </a>
                    or use your account settings.
                  </li>
                </ul>
              </li>
              <li>
                <strong>HIPAA Compliance and Security Measures</strong>
                <ul className="list-disc pl-6">
                  <li>Administrative Safeguards: Risk assessments, training, policies</li>
                  <li>Technical Safeguards: Encryption, access controls, audit logs</li>
                  <li>Physical Safeguards: Secure hosting and device policies</li>
                  <li>A dedicated Privacy Officer oversees compliance and incident response.</li>
                </ul>
              </li>
              <li>
                <strong>CORI and Background Checks</strong>
                <p>Background checks (including CORI) are only done with informed consent. All data is managed in compliance with Massachusetts law and handled securely.</p>
              </li>
              <li>
                <strong>Third-Party Websites and Services</strong>
                <p>This policy does not cover third-party sites we link to. We encourage reviewing their privacy practices.</p>
              </li>
              <li>
                <strong>Children’s Privacy</strong>
                <p>Our Services are not intended for users under 16. We do not knowingly collect data from minors and will delete it if discovered.</p>
              </li>
              <li>
                <strong>Changes to This Privacy Policy</strong>
                <p>We may update this policy. Changes will be posted with a new Effective Date. Continued use of Services means you accept the changes.</p>
              </li>
              <li>
                <strong>Contact Us</strong>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please do not hesitate to contact our Privacy Officer:</p>
                <address className="not-italic">
                  Seaside Talent LLC
                  <br />
                  Attention: Privacy Officer
                  <br />
                  Address: 867 Boylston Street, 5th Floor #1960, Boston, MA 02116
                  <br />
                  Email:
                  <a href="mailto:privacy@seasidetalent.com" className="text-seaside-600 underline">
                    privacy@seasidetalent.com
                  </a>
                </address>
              </li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
