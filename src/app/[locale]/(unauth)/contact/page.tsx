import React from 'react';

import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export default function ContactPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <div className="mb-24 flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-seaside-200 via-seaside-100 to-seaside-50 px-2">
        <div className="my-8 text-center">
          <h1 className="bg-gradient-to-r from-seaside-600 via-seaside-400 to-seaside-600 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-md sm:text-4xl md:text-5xl">
            Your Trusted Source for Healthcare Talent
          </h1>
        </div>
        <main className="w-full max-w-2xl shrink-0">
          <div className="mb-24 rounded-3xl border border-seaside-100 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
            <Section title="Get in Touch">
              <p className="mb-6 text-center text-lg text-seaside-700">
                We're here to help with sales inquiries, security questions, compliance support, and technical assistance.
              </p>
              <div className="my-8">
                <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-seaside-800">
                  <span role="img" aria-label="help">🤝</span>
                  How Can We Help You?
                </h2>
                <p className="mb-4 text-seaside-700">Choose the right team for your inquiry. We're here to support your healthcare hiring needs.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span role="img" aria-label="sales" className="mt-1">💼</span>
                    <div>
                      <strong>Sales Inquiries:</strong>
                      <span> Interested in our platform? </span>
                      <a className="text-seaside-600 underline" href="mailto:sales@seasidetalent.com">sales@seasidetalent.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span role="img" aria-label="security" className="mt-1">🔒</span>
                    <div>
                      <strong>Security & Compliance:</strong>
                      <span> Questions about HIPAA compliance, security, or audit readiness? </span>
                      <a className="text-seaside-600 underline" href="mailto:compliance@seasidetalent.com">compliance@seasidetalent.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span role="img" aria-label="compliance" className="mt-1">📄</span>
                    <div>
                      <strong>Compliance Support:</strong>
                      <span> Need help with credential verification, license filtering, or audit documentation? </span>
                      <a className="text-seaside-600 underline" href="mailto:compliance@seasidetalent.com">compliance@seasidetalent.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span role="img" aria-label="support" className="mt-1">🛠️</span>
                    <div>
                      <strong>Technical Support:</strong>
                      <span> Having issues with the platform? </span>
                      <a className="text-seaside-600 underline" href="mailto:support@seasidetalent.com">support@seasidetalent.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span role="img" aria-label="general" className="mt-1">📬</span>
                    <div>
                      <strong>General Inquiries:</strong>
                      <a className="text-seaside-600 underline" href="mailto:hello@seasidetalent.com">hello@seasidetalent.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              <hr className="my-8 border-seaside-200" />
              <div className="my-8">
                <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-seaside-800">
                  <span role="img" aria-label="message">✉️</span>
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <input className="w-1/2 rounded-md border border-seaside-200 p-2" placeholder="First Name *" required />
                    <input className="w-1/2 rounded-md border border-seaside-200 p-2" placeholder="Last Name *" required />
                  </div>
                  <input className="w-full rounded-md border border-seaside-200 p-2" type="email" placeholder="Email Address *" required />
                  <input className="w-full rounded-md border border-seaside-200 p-2" placeholder="Phone Number" />
                  <input className="w-full rounded-md border border-seaside-200 p-2" placeholder="Organization" />
                  <select className="w-full rounded-md border border-seaside-200 p-2" required>
                    <option value="">Type of Inquiry *</option>
                    <option value="sales">Sales</option>
                    <option value="compliance">Compliance</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <textarea className="w-full rounded-md border border-seaside-200 p-2" rows={4} placeholder="Message *" required />
                  <button type="submit" className="mt-2 w-full rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-seaside-700">Send Message</button>
                </form>
              </div>
              <hr className="my-8 border-seaside-200" />
              <div className="mt-10 text-center text-seaside-700">
                <h3 className="mb-2 text-lg font-semibold text-seaside-800">Seaside Talent</h3>
                <div>Location: Boston, Massachusetts</div>
                <div>Phone: (617) 555-0123</div>
                <div>
                  Email:
                  <a className="ml-1 text-seaside-600 underline" href="mailto:hello@seasidetalent.com">hello@seasidetalent.com</a>
                </div>
              </div>
            </Section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
