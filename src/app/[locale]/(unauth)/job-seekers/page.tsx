import React from 'react';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

export default function JobSeekersPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <Section title="For Job Seekers">
          <p className="mb-6 text-center text-lg text-seaside-700">
            Seaside Talent is dedicated to helping healthcare professionals find meaningful, credentialed roles. We support you with compliance, transparency, and a people-first approach—so you can focus on your career, not the paperwork.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-seaside-700">
            <li>Find jobs that match your credentials and specialty</li>
            <li>Get support with compliance and onboarding</li>
            <li>Transparent, people-first hiring process</li>
            <li>Grow your career with trusted healthcare employers</li>
          </ul>
        </Section>
        <div className="mt-12">
          <CTABanner
            title="Ready for Your Next Healthcare Role?"
            description="Join thousands of healthcare professionals using Seaside Talent to find their next opportunity."
            buttons={(
              <a
                className="inline-block rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-seaside-700"
                href="/jobs"
              >
                Browse Healthcare Jobs
              </a>
            )}
          />
        </div>
      </main>
    </>
  );
}
