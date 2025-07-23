import React from 'react';

import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

export default function ContactPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <Section title="Get in Touch">
          <p className="mb-6 text-center text-lg text-seaside-700">
            We're here to help with sales inquiries, security questions, compliance support, and technical assistance.
          </p>
          <div className="my-8">
            <h2 className="mb-2 text-xl font-semibold text-seaside-800">How Can We Help You?</h2>
            <p className="mb-4 text-seaside-700">Choose the right team for your inquiry. We're here to support your healthcare hiring needs.</p>
            <ul className="space-y-4">
              <li>
                <strong>Sales Inquiries:</strong>
                <span> Interested in our platform? </span>
                <a className="text-seaside-600 underline" href="mailto:sales@seasidetalent.com">sales@seasidetalent.com</a>
              </li>
              <li>
                <strong>Security & Compliance:</strong>
                <span> Questions about HIPAA compliance, security, or audit readiness? </span>
                <a className="text-seaside-600 underline" href="mailto:compliance@seasidetalent.com">compliance@seasidetalent.com</a>
              </li>
              <li>
                <strong>Compliance Support:</strong>
                <span> Need help with credential verification, license filtering, or audit documentation? </span>
                <a className="text-seaside-600 underline" href="mailto:compliance@seasidetalent.com">compliance@seasidetalent.com</a>
              </li>
              <li>
                <strong>Technical Support:</strong>
                <span> Having issues with the platform? </span>
                <a className="text-seaside-600 underline" href="mailto:support@seasidetalent.com">support@seasidetalent.com</a>
              </li>
              <li>
                <strong>General Inquiries:</strong>
                <a className="text-seaside-600 underline" href="mailto:hello@seasidetalent.com">hello@seasidetalent.com</a>
              </li>
            </ul>
          </div>
          <div className="my-8">
            <h2 className="mb-2 text-xl font-semibold text-seaside-800">Send Us a Message</h2>
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
          <div className="mt-10 text-center text-seaside-700">
            <h3 className="mb-2 text-lg font-semibold text-seaside-800">About Seaside Talent</h3>
            <div>Location: Boston, Massachusetts</div>
            <div>Phone: (617) 555-0123</div>
            <div>
              Email:
              <a className="text-seaside-600 underline" href="mailto:hello@seasidetalent.com">hello@seasidetalent.com</a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
