import React from 'react';

import { DemoBanner } from '@/templates/DemoBanner';
import { Navbar } from '@/templates/Navbar';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <div className="w-full bg-gradient-to-br from-seaside-200 via-seaside-100 to-seaside-50 pb-24">
        <div className="mx-auto max-w-3xl pb-8 pt-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-seaside-600 via-seaside-400 to-seaside-600 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg md:text-5xl">
            About Seaside Talent
          </h1>
          <p className="mb-4 text-lg text-seaside-700">
            Transforming healthcare hiring with technology, compliance, and a human touch.
          </p>
        </div>
        <main className="mx-auto max-w-2xl px-4">
          <div className="rounded-3xl border border-seaside-100 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
            <p className="mb-6 text-center text-lg text-seaside-700">
              Seaside Talent is dedicated to transforming healthcare hiring. Built by healthcare professionals for healthcare teams, our platform is designed to solve real-world compliance, credentialing, and staffing challenges with modern technology and a human touch.
            </p>
            <div className="my-8">
              <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-seaside-800">
                <span role="img" aria-label="mission">🌊</span>
                Our Mission
              </h2>
              <p className="text-seaside-700">
                To connect healthcare organizations with qualified, credentialed professionals—faster, easier, and with full compliance. We believe in empowering both employers and job seekers to build better teams and better care environments.
              </p>
            </div>
            <div className="my-8">
              <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-seaside-800">
                <span role="img" aria-label="values">💙</span>
                Our Values
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-seaside-700">
                <li>
                  <span role="img" aria-label="shield">🛡️</span>
                  <strong>Compliance & Trust:</strong>
                  We prioritize safety, privacy, and regulatory excellence.
                </li>
                <li>
                  <span role="img" aria-label="bulb">💡</span>
                  <strong>Innovation:</strong>
                  We use technology to simplify and improve the hiring process.
                </li>
                <li>
                  <span role="img" aria-label="rocket">🚀</span>
                  <strong>Empowerment:</strong>
                  We support both organizations and professionals in their growth.
                </li>
                <li>
                  <span role="img" aria-label="community">🤝</span>
                  <strong>Community:</strong>
                  We foster a supportive, inclusive healthcare community.
                </li>
              </ul>
            </div>
            <div className="mt-10 text-center">
              <a href="/contact" className="inline-block rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-seaside-700">Contact Us</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
