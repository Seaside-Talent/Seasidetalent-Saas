import React from 'react';

import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-2xl border border-seaside-100 bg-seaside-50 p-8 shadow-sm">
          <h1 className="mb-4 text-center text-4xl font-bold text-seaside-900">About Seaside Talent</h1>
          <p className="mb-6 text-center text-lg text-seaside-700">
            Seaside Talent is dedicated to transforming healthcare hiring. Built by healthcare professionals for healthcare teams, our platform is designed to solve real-world compliance, credentialing, and staffing challenges with modern technology and a human touch.
          </p>
          <div className="my-8">
            <h2 className="mb-2 text-2xl font-semibold text-seaside-800">Our Mission</h2>
            <p className="text-seaside-700">
              To connect healthcare organizations with qualified, credentialed professionals—faster, easier, and with full compliance. We believe in empowering both employers and job seekers to build better teams and better care environments.
            </p>
          </div>
          <div className="my-8">
            <h2 className="mb-2 text-2xl font-semibold text-seaside-800">Our Values</h2>
            <ul className="list-disc space-y-2 pl-6 text-seaside-700">
              <li>Compliance & Trust: We prioritize safety, privacy, and regulatory excellence.</li>
              <li>Innovation: We use technology to simplify and improve the hiring process.</li>
              <li>Empowerment: We support both organizations and professionals in their growth.</li>
              <li>Community: We foster a supportive, inclusive healthcare community.</li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            <a href="/contact" className="inline-block rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-seaside-700">Contact Us</a>
          </div>
        </div>
      </main>
    </>
  );
}
