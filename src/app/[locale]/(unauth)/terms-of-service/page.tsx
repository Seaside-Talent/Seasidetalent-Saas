import React from 'react';

import { DemoBanner } from '@/templates/DemoBanner';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export default function TermsOfServicePage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-seaside-100 bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-center text-3xl font-bold text-seaside-900">Seaside Talent Terms of Service</h1>
          <p className="mb-6 text-center text-sm text-seaside-600">Effective Date: July 19, 2025</p>
          <section className="prose max-w-none">
            <p>These Terms of Service (the "Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Seaside Talent LLC ("Seaside Talent," "we," "our," or "us"). These Terms govern your access to and use of our website, job board, Applicant Tracking System (ATS), compliance tools, onboarding support, and all related services, features, content, applications, and products provided by Seaside Talent (collectively, the "Services").</p>
            <p><strong>BY ACCESSING OR USING ANY PART OF THE SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS AND OUR PRIVACY POLICY, WHICH IS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICES.</strong></p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong>Acceptance of Terms</strong>
                <p>Your access to and use of the Services signifies your unqualified acceptance of these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such an entity to these Terms, in which case the terms "you" or "your" shall refer to such entity. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Services.</p>
              </li>
              <li>
                <strong>Service Description</strong>
                <ul className="list-disc pl-6">
                  <li>A healthcare-focused job board for posting and finding employment opportunities.</li>
                  <li>Tools for credential verification, license tracking, and compliance management.</li>
                  <li>Candidate screening support and infrastructure for pre-employment compliance.</li>
                  <li>Optional onboarding support and workforce management tools for Employers.</li>
                  <li>Recruitment-as-a-Service (RaaS) partnerships, as further detailed in our product descriptions.</li>
                </ul>
                <p>
                  <strong>Disclaimer Regarding Employment:</strong>
                  {' '}
                  Seaside Talent is a service provider facilitating connections; we do not guarantee job placement for Job Seekers nor guarantee candidate selection for Employers. We are not an employer, recruiter, employment agency (except where explicitly acting as RaaS under a separate agreement), or party to any employment contracts or agreements entered into between Job Seekers and Employers. All employment relationships are solely between the Job Seeker and the Employer.
                </p>
              </li>
              <li>
                <strong>User Eligibility & Responsibilities</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Accuracy of Information:</strong>
                    {' '}
                    Providing and maintaining accurate, complete, and current personal and professional information, including credentials, licenses, and employment history.
                  </li>
                  <li>
                    <strong>Account Security:</strong>
                    {' '}
                    Maintaining the strict confidentiality of your account credentials (username, password, etc.) and being solely responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use or security breach.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong>
                    {' '}
                    Complying with all applicable local, state, federal, and international laws, regulations, and industry standards, including but not limited to those pertaining to healthcare, labor, employment, anti-discrimination, data privacy (e.g., HIPAA), and professional credentialing.
                  </li>
                  <li>
                    <strong>Lawful Use:</strong>
                    {' '}
                    Using the Services only for lawful, authorized, and intended purposes.
                  </li>
                  <li>
                    <strong>Professional Conduct:</strong>
                    {' '}
                    Ensuring all interactions and communications on the platform are professional, respectful, and free from discrimination, harassment, or unlawful content.
                  </li>
                  <li>
                    <strong>Employer-Specific Responsibilities:</strong>
                    {' '}
                    Employers are solely responsible for all aspects of their hiring decisions, employment offers, employment contracts, and ongoing compliance with all applicable labor laws, employment regulations, and healthcare-specific compliance requirements related to their workforce. Seaside Talent provides tools and support, but does not assume direct legal responsibility for an Employer's ultimate compliance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Prohibited Activities</strong>
                <ul className="list-disc pl-6">
                  <li>Posting, transmitting, or otherwise making available any false, inaccurate, misleading, fraudulent, or deceptive information, including job opportunities, professional qualifications, or licensing status.</li>
                  <li>Misrepresenting your identity, affiliations, or qualifications.</li>
                  <li>Engaging in any conduct that is unlawful, unethical, discriminatory, harassing, threatening, or otherwise objectionable.</li>
                  <li>Accessing or attempting to access any data, accounts, or areas of the Services for which you do not have explicit authorization.</li>
                  <li>Interfering with, disrupting, or negatively impacting the security, integrity, or performance of the Services or the data contained therein.</li>
                  <li>Using any automated system or software (e.g., robots, spiders, scrapers, data miners) to access, extract, copy, monitor, or obtain data from the Services without our express prior written consent.</li>
                  <li>Attempting to decipher, decompile, disassemble, or reverse engineer any of the software or code used in providing the Services.</li>
                  <li>Introducing any viruses, worms, malware, or other malicious code.</li>
                  <li>Violating any applicable local, state, federal, or international laws, regulations, or third-party rights (including intellectual property, privacy, or publicity rights).</li>
                </ul>
              </li>
              <li>
                <strong>Intellectual Property Rights</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Seaside Talent Property:</strong>
                    {' '}
                    All content, software, technology, designs, trademarks, service marks, logos, and other intellectual property provided through or embodied in the Services are the exclusive property of Seaside Talent LLC or its licensors and are protected by applicable copyright, trademark, patent, trade secret, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your intended purposes only, in accordance with these Terms.
                  </li>
                  <li>
                    <strong>User Content:</strong>
                    {' '}
                    You retain ownership of any content (e.g., resumes, job postings, profile information, documents) that you submit, upload, post, or display on or through the Services ("User Content"). However, by submitting User Content, you grant Seaside Talent a non-exclusive, royalty-free, fully paid, worldwide, perpetual, irrevocable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform, and publicly display such User Content (in whole or in part) in connection with the operation, improvement, promotion, and provision of the Services. This license also extends to any third-party service providers acting on our behalf. You represent and warrant that you have all necessary rights to grant this license.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Disclaimers and Limitation of Liability</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Disclaimer of Warranties:</strong>
                    {' '}
                    THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. SEASIDE TALENT DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE MAKE NO GUARANTEES REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, QUALITY, SUITABILITY, OR AVAILABILITY OF ANY USER-SUBMITTED INFORMATION, JOB LISTINGS, OR EMPLOYMENT OPPORTUNITIES.
                  </li>
                  <li>
                    <strong>Limitation of Liability:</strong>
                    {' '}
                    TO THE FULLEST EXTENT PERMITTED BY LAW, SEASIDE TALENT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100) OR THE AMOUNT YOU HAVE PAID TO US IN THE PAST TWELVE (12) MONTHS.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Termination</strong>
                <p>We reserve the right to suspend or terminate your access to or use of the Services, in whole or in part, at our sole discretion, immediately and without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms, violate any applicable laws, or if your conduct or use of the Services poses a risk to Seaside Talent, other users, or third parties. Upon termination for any reason, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, intellectual property ownership, warranty disclaimers, indemnity, and limitations of liability.</p>
              </li>
              <li>
                <strong>Modifications to Terms</strong>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.</p>
              </li>
              <li>
                <strong>Governing Law</strong>
                <p>These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.</p>
              </li>
              <li>
                <strong>Dispute Resolution</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Informal Resolution:</strong>
                    {' '}
                    You agree to attempt to resolve any dispute, claim, or controversy arising out of or relating to these Terms or the Services through informal negotiation with us before initiating any legal proceeding.
                  </li>
                  <li>
                    <strong>Arbitration:</strong>
                    {' '}
                    If we cannot resolve a dispute informally, you agree to resolve any remaining disputes through binding arbitration conducted by the American Arbitration Association in Boston, Massachusetts.
                  </li>
                  <li>
                    <strong>Class Action Waiver:</strong>
                    {' '}
                    You agree that any arbitration or legal proceeding will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Indemnification</strong>
                <p>You agree to defend, indemnify, and hold harmless Seaside Talent, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>
              </li>
              <li>
                <strong>Miscellaneous</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Entire Agreement:</strong>
                    {' '}
                    These Terms and our Privacy Policy constitute the entire agreement between you and Seaside Talent.
                  </li>
                  <li>
                    <strong>Severability:</strong>
                    {' '}
                    If any provision of these Terms is held to be invalid, the remaining provisions shall remain in full force and effect.
                  </li>
                  <li>
                    <strong>Waiver:</strong>
                    {' '}
                    No waiver of any term shall be deemed a further waiver of any other term.
                  </li>
                  <li>
                    <strong>Assignment:</strong>
                    {' '}
                    You may not assign your rights under these Terms without our prior written consent. We may assign our rights at any time.
                  </li>
                  <li>
                    <strong>Electronic Communications:</strong>
                    {' '}
                    By using the Services, you consent to receive communications electronically.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Contact Us</strong>
                <p>If you have questions or concerns about these Terms of Service, please contact:</p>
                <address className="not-italic">
                  Seaside Talent LLC
                  <br />
                  Attention: Chief People Officer
                  <br />
                  Address: 867 Boylston Street, 5th Floor #1960, Boston MA 02116
                  <br />
                  Email:
                  {' '}
                  <a href="mailto:legal@seasidetalent.com" className="text-seaside-600 underline">legal@seasidetalent.com</a>
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
