import React from 'react';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

export default function CompaniesPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <Section title="For Employers & Companies">
          <p className="mb-6 text-center text-lg text-seaside-700">
            Seaside Talent partners with healthcare organizations to deliver credentialed, compliant, and ready-to-work professionals. Our platform is built for the unique needs of healthcare employers—making hiring faster, safer, and more efficient.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-seaside-700">
            <li>Credential-aware matching and compliance-first workflows</li>
            <li>Scalable solutions for small practices to large agencies</li>
            <li>Transparent, audit-ready processes</li>
            <li>Dedicated support for your hiring goals</li>
          </ul>
        </Section>
        <div className="mt-12">
          <CTABanner
            title="Ready to Hire Top Healthcare Talent?"
            description="Join leading healthcare organizations using Seaside Talent to build stronger teams."
            buttons={(
              <a
                className="inline-block rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-seaside-700"
                href="/sign-up"
              >
                Start Hiring Now
              </a>
            )}
          />
        </div>
      </main>
    </>
  );
}
