import React from 'react';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

const steps = [
  {
    number: '01',
    title: 'Create Your Free Profile',
    description: [
      'Add your credentials and specialties',
      'Upload your resume and licenses',
      'Set your job preferences',
      'Get verified for faster hiring',
    ],
    time: '5 minutes',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Browse & Apply',
    description: [
      'AI-matched jobs for your skills',
      'One-click applications',
      'Transparent job details',
      'Save jobs for later',
    ],
    time: 'Anytime',
    icon: '🔎',
  },
  {
    number: '03',
    title: 'Interview & Connect',
    description: [
      'Direct chat with employers',
      'Interview scheduling tools',
      'Get feedback and updates',
      'Support from Seaside team',
    ],
    time: '1-3 days',
    icon: '💬',
  },
  {
    number: '04',
    title: 'Get Hired & Onboard',
    description: [
      'Credential verification support',
      'Easy document uploads',
      'Compliance made simple',
      'Start your new role with confidence',
    ],
    time: '1 week',
    icon: '🎉',
  },
];

const features = [
  {
    title: 'Credential-Matched Jobs',
    desc: 'See only jobs you qualify for—no wasted time.',
    icon: '✅',
  },
  {
    title: 'Compliance Support',
    desc: 'We help you stay compliant with licenses, background checks, and more.',
    icon: '🛡️',
  },
  {
    title: 'Career Growth',
    desc: 'Access exclusive roles and career resources for healthcare professionals.',
    icon: '📈',
  },
  {
    title: 'People-First Process',
    desc: 'Transparent, respectful, and supportive hiring every step of the way.',
    icon: '🤝',
  },
  {
    title: 'Trusted Employers',
    desc: 'Work with vetted healthcare organizations who value your expertise.',
    icon: '🏥',
  },
  {
    title: 'Fast Offers',
    desc: 'Get hired quickly with pre-verified credentials and direct connections.',
    icon: '⚡',
  },
];

const testimonials = [
  {
    quote: 'Seaside Talent made my job search so much easier. I found a great nursing position in just a week!',
    name: 'Jessica Lee',
    title: 'Registered Nurse',
    org: 'Boston Medical Center',
  },
  {
    quote: 'The compliance support was a lifesaver. I uploaded my documents once and was ready for multiple jobs.',
    name: 'Carlos Martinez',
    title: 'Medical Assistant',
    org: 'Healthcare Partners',
  },
  {
    quote: 'I appreciated the transparency and direct communication. I always knew where I stood in the process.',
    name: 'Priya Patel',
    title: 'Physical Therapist',
    org: 'Community Health Clinic',
  },
];

export default function JobSeekersPage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <div className="w-full bg-gradient-to-br from-seaside-200 via-seaside-100 to-seaside-50 pb-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl pb-8 pt-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-seaside-600 via-seaside-400 to-seaside-600 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg md:text-5xl">
            Find Your Next Healthcare Opportunity
          </h1>
          <p className="mb-4 text-lg text-seaside-700">
            Discover jobs, get credentialed, and grow your career with Seaside Talent.
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
        <Section title="Why Job Seekers Choose Seaside">
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
        <Section title="Success Stories from Healthcare Professionals">
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="flex flex-col items-center rounded-2xl border border-seaside-100 bg-seaside-50 p-6 text-center shadow">
                <div className="mb-4 italic text-seaside-700">
                  {'\''}
                  <br />
                  {t.quote}
                  <br />
                  {'\''}
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
        {/* CTA Banner */}
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
      </div>
    </>
  );
}
