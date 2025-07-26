import React from 'react';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

const steps = [
  {
    number: '01',
    title: 'Create Your Company Profile',
    description: [
      'Add company details and specialties',
      'Set compliance requirements',
      'Configure credential preferences',
      'Upload company branding',
    ],
    time: '5 minutes',
    icon: '🏢',
  },
  {
    number: '02',
    title: 'Post Your First Job',
    description: [
      'AI-enhanced job descriptions',
      'Automatic compliance checks',
      'Smart salary recommendations',
      'One-click posting to multiple boards',
    ],
    time: '3 minutes',
    icon: '📝',
  },
  {
    number: '03',
    title: 'Review & Connect',
    description: [
      'Pre-screened candidate pool',
      'AI-powered matching',
      'Direct messaging system',
      'Interview scheduling tools',
    ],
    time: '24 hours',
    icon: '🔍',
  },
  {
    number: '04',
    title: 'Hire & Onboard',
    description: [
      'Automated background checks',
      'Credential verification',
      'Document management',
      'Compliance reporting',
    ],
    time: '2-3 days',
    icon: '🎉',
  },
];

const features = [
  {
    title: '2x Faster Hiring',
    desc: 'Fill positions in half the time with pre-credentialed candidates',
    icon: '⚡',
  },
  {
    title: 'Built-in Compliance',
    desc: 'HIPAA-compliant with automated license verification and audit trails',
    icon: '🛡️',
  },
  {
    title: 'Cost Effective',
    desc: 'Pay only for what you use - no long-term contracts or hidden fees',
    icon: '💸',
  },
  {
    title: 'AI-Powered Matching',
    desc: 'Smart algorithms surface the best-fit candidates for your roles',
    icon: '🤖',
  },
  {
    title: 'Quality Candidates',
    desc: 'Access to verified healthcare professionals with complete credentials',
    icon: '✅',
  },
  {
    title: 'Scalable Solution',
    desc: 'Grow from 1 to 1000+ hires with the same powerful platform',
    icon: '📈',
  },
];

const testimonials = [
  {
    quote: 'Seaside Talent transformed our hiring process. We filled critical nursing positions 3x faster while maintaining our high standards.',
    name: 'Sarah Johnson',
    title: 'Director of Nursing',
    org: 'Boston Medical Center',
  },
  {
    quote: 'The compliance features are game-changing. We\'re audit-ready year-round and our credentialing process is now automated.',
    name: 'Michael Chen',
    title: 'HR Director',
    org: 'Healthcare Partners',
  },
  {
    quote: 'The AI matching is incredible. We\'re connecting with candidates who are actually qualified and interested in our roles.',
    name: 'Dr. Emily Rodriguez',
    title: 'Medical Director',
    org: 'Community Health Clinic',
  },
];

export default function CompaniesPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <div className="w-full bg-gradient-to-br from-seaside-200 via-seaside-100 to-seaside-50 pb-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl pb-8 pt-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-seaside-600 via-seaside-400 to-seaside-600 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg md:text-5xl">
            Empowering Healthcare Employers
          </h1>
          <p className="mb-4 text-lg text-seaside-700">
            Get from job posting to hired candidate in 4 simple steps
          </p>
        </div>
        {/* How It Works Stepper */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-4">
          {steps.map(step => (
            <div key={step.number} className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-white/80 p-6 text-center shadow-lg backdrop-blur-md">
              <div className="mb-2 text-3xl">{step.icon}</div>
              <div className="mb-1 text-2xl font-bold text-seaside-600">{step.number}</div>
              <div className="mb-2 font-semibold text-seaside-800">{step.title}</div>
              <ul className="mb-2 list-disc pl-4 text-left text-sm text-seaside-700">
                {step.description.map(desc => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              <div className="mt-auto text-xs text-seaside-500">{step.time}</div>
            </div>
          ))}
        </div>
        {/* Why Choose Seaside */}
        <Section title="Why Healthcare Organizations Choose Seaside">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map(f => (
              <div key={f.title} className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-white/80 p-6 text-center shadow backdrop-blur-md">
                <div className="mb-2 text-3xl">{f.icon}</div>
                <div className="mb-1 font-bold text-seaside-800">{f.title}</div>
                <div className="text-sm text-seaside-700">{f.desc}</div>
              </div>
            ))}
          </div>
        </Section>
        {/* Testimonials */}
        <Section title="Trusted by Healthcare Leaders">
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-seaside-50 p-6 text-center shadow">
                <div className="mb-4 italic text-seaside-700">
                  '
                  {t.quote}
                  '
                </div>
                <div className="font-semibold text-seaside-800">{t.name}</div>
                <div className="text-sm text-seaside-600">
                  {t.title}
                  {', '}
                  {t.org}
                </div>
              </div>
            ))}
          </div>
        </Section>
        {/* Pricing Section */}
        <Section title="Simple, Transparent Pricing">
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Free Access (Basic Employers) */}
            <div className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-white/80 p-6 text-center shadow backdrop-blur-md">
              <div className="mb-1 text-xl font-bold text-seaside-800">Free Access</div>
              <div className="mb-2 text-2xl font-bold text-seaside-600">Free</div>
              <div className="mb-2 text-sm text-seaside-700">Perfect for basic employers and unlimited job postings</div>
              <ul className="mb-4 list-disc pl-4 text-left text-sm text-seaside-700">
                <li>Unlimited job postings</li>
                <li>Self-attested license info from applicants</li>
                <li>In-app messaging with candidates</li>
                <li>Receive qualified applications (credential filters apply)</li>
                <li>"Verified by Seaside" badge visible (cannot filter or access results)</li>
              </ul>
              <div className="mb-2 text-xs text-seaside-500">Limitations: No resume database, advanced search, or compliance/onboarding integrations</div>
              <a className="mt-auto inline-block rounded-md bg-seaside-600 px-6 py-2 font-semibold text-white shadow transition-colors hover:bg-seaside-700" href="/sign-up">Start Free</a>
            </div>
            {/* Subscription Employers */}
            <div className="flex scale-105 flex-col items-center rounded-2xl border-2 border-seaside-600 bg-white/90 p-6 text-center shadow-lg backdrop-blur-md">
              <div className="mb-1 text-xl font-bold text-seaside-800">
                Subscription Employers
                <span className="ml-2 rounded bg-seaside-600 px-2 py-0.5 text-xs text-white">
                  Most Popular
                </span>
              </div>
              <div className="mb-2 text-2xl font-bold text-seaside-600">$99/month</div>
              <div className="mb-2 text-sm text-seaside-700">Ideal for proactive employers, recruiters, or small agencies</div>
              <ul className="mb-4 list-disc pl-4 text-left text-sm text-seaside-700">
                <li>Everything in Free Access</li>
                <li>Searchable resume database (passive candidates)</li>
                <li>Filter for "Verified by Seaside" candidates</li>
                <li>"Verified Employer Badge" included</li>
                <li>License, state, and schedule filters</li>
                <li>"Ping-to-apply" messaging</li>
              </ul>
              <div className="mb-2 text-xs text-seaside-500">Limitations: No onboarding, document handling, or direct access to verification results</div>
              <a className="mt-auto inline-block rounded-md bg-seaside-600 px-6 py-2 font-semibold text-white shadow transition-colors hover:bg-seaside-700" href="/sign-up">Start Free Trial</a>
            </div>
            {/* Premium Employers */}
            <div className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-white/80 p-6 text-center shadow backdrop-blur-md">
              <div className="mb-1 text-xl font-bold text-seaside-800">Premium Employers</div>
              <div className="mb-2 text-2xl font-bold text-seaside-600">$249/month</div>
              <div className="mb-2 text-sm text-seaside-700">Ultimate solution for maximum visibility and compliance access</div>
              <ul className="mb-4 list-disc pl-4 text-left text-sm text-seaside-700">
                <li>Everything in Subscription Employers</li>
                <li>3 Sponsored Roles included</li>
                <li>Direct access to candidate verification summaries</li>
                <li>Custom employer landing page</li>
                <li>Branded company profile with logo, mission, and open roles</li>
                <li>Early access to new features</li>
              </ul>
              <a className="mt-auto inline-block rounded-md bg-seaside-600 px-6 py-2 font-semibold text-white shadow transition-colors hover:bg-seaside-700" href="/contact">Contact Sales</a>
            </div>
          </div>
          {/* Add-Ons Banner */}
          <div className="mt-10 rounded-2xl border border-seaside-100 bg-gradient-to-r from-seaside-100 via-seaside-50 to-seaside-200 p-6 text-center shadow">
            <div className="mb-2 text-lg font-bold text-seaside-800">Seaside Add-Ons (Available to All Tiers)</div>
            <ul className="mb-2 flex flex-wrap justify-center gap-6 text-sm text-seaside-700">
              <li>
                <strong>Seaside Credits:</strong>
                {' '}
                100 for $100, 500 for $425 (15% off), 1000 for $800 (20% off)
              </li>
              <li>
                <strong>Sponsored Listing:</strong>
                {' '}
                3.33 credits/day – Boost job visibility
              </li>
              <li>
                <strong>Employer Verification Badge:</strong>
                {' '}
                10 credits/month – Build trust
              </li>
              <li>
                <strong>Campaigns:</strong>
                {' '}
                50 credits/each – Blast your open role to targeted job seekers
              </li>
            </ul>
          </div>
        </Section>
        {/* CTA Banner */}
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
      </div>
    </>
  );
}
