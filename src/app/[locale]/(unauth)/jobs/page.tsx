'use client';

import React, { useState } from 'react';

import { Navbar } from '@/templates/Navbar';

const mockJobs = [
  {
    id: 1,
    title: 'Product Designer',
    company: 'Gojek',
    logo: '🟩',
    tags: ['Full-time', 'Urgently hiring'],
    type: 'Full-time',
    location: 'Marina East, Singapore',
    posted: '5 mins ago',
    description: 'You will be creating content for a wide range of local and international clients. This role is suited to Bali based creatives looking to work in-house.',
    details: 'As a Product Designer at Gojek, you will collaborate with cross-functional teams to design and deliver user-centric solutions. You will be responsible for the end-to-end design process, from research to prototyping and final handoff.',
    salary: '$2,500 – $5,000',
    remote: false,
  },
  {
    id: 2,
    title: 'Copywriting Specialist',
    company: 'Odama Studio',
    logo: '🟧',
    tags: ['Freelance'],
    type: 'Freelance',
    location: 'Paris, France',
    posted: '3 days ago',
    description: 'Collaborate with the marketing team to optimize conversion. Develop inspiring, persuasive, and convincing copy for a wide array of writing needs.',
    details: 'As a Copywriting Specialist, you will work closely with our marketing and product teams to craft compelling copy for campaigns, product launches, and more.',
    salary: '$1,600 – $1,800',
    remote: true,
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Twitter',
    logo: '🟦',
    tags: ['Full-time'],
    type: 'Full-time',
    location: 'Málaga, Spain',
    posted: '2 days ago',
    description: 'Responsible for designing, planning, and testing of any projects/products. Building effective and reusable modules that will enhance user experience in each project/product.',
    details: 'Join Twitter as a Full Stack Developer and help us build scalable, high-performance web applications. You will work with a talented team of engineers and designers.',
    salary: '$1,700 – $2,000',
    remote: false,
  },
];

const jobTypes = ['Full-time', 'Freelance', 'Internship', 'Volunteer'];

export default function JobsPage() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch
      = job.title.toLowerCase().includes(search.toLowerCase())
        || job.company.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = selectedType.length === 0 || selectedType.includes(job.type);
    return matchesSearch && matchesLocation && matchesType;
  });

  function toggleType(type: string) {
    setSelectedType(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type],
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-seaside-200 via-seaside-100 to-seaside-50 py-24">
        {/* Search & Filters */}
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-2 md:flex-row">
          {/* Sidebar Filters */}
          <aside className={`mb-4 w-full rounded-2xl border border-seaside-100 bg-white/80 p-4 shadow md:mb-0 md:w-64 ${showFilters ? '' : 'hidden md:block'}`}>
            <div className="mb-4 flex items-center justify-between md:hidden">
              <span className="font-semibold text-seaside-800">Filter</span>
              <button type="button" onClick={() => setShowFilters(false)} className="text-seaside-600">Close</button>
            </div>
            <div className="mb-4">
              <label htmlFor="job-type" className="mb-2 block text-xs font-semibold">Job type</label>
              {jobTypes.map(type => (
                <div key={type} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedType.includes(type)}
                    onChange={() => toggleType(type)}
                    className="mr-2"
                    id={`type-${type}`}
                  />
                  <label htmlFor={`type-${type}`} className="text-sm">{type}</label>
                </div>
              ))}
            </div>
            {/* Add more filters as needed */}
          </aside>
          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                className="flex-1 rounded-md border border-seaside-200 p-2"
                placeholder="Search job title or keyword"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <input
                type="text"
                className="flex-1 rounded-md border border-seaside-200 p-2"
                placeholder="Country or timezone"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
              <button type="button" className="rounded-md bg-seaside-600 px-6 py-2 font-semibold text-white shadow hover:bg-seaside-700">Find jobs</button>
              <button type="button" className="rounded-md border border-seaside-200 px-4 py-2 text-seaside-600 md:hidden" onClick={() => setShowFilters(true)}>Filters</button>
            </div>
            {/* Job Results */}
            <div className="mb-4 text-sm text-seaside-700">
              {filteredJobs.length}
              {' '}
              Job
              {filteredJobs.length !== 1 ? 's' : ''}
              {' '}
              results
            </div>
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <div
                  key={job.id}
                  className="flex cursor-pointer flex-col items-start gap-4 rounded-2xl border border-seaside-100 bg-white/90 p-4 shadow transition hover:shadow-lg sm:flex-row sm:items-center"
                  onClick={() => setSelectedJob(job)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedJob(job);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{job.logo}</span>
                    <div>
                      <div className="text-lg font-bold text-seaside-800">{job.title}</div>
                      <div className="text-sm text-seaside-600">{job.company}</div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="inline-block rounded bg-seaside-100 px-2 py-0.5 text-xs font-semibold text-seaside-700">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex-1 sm:mt-0">
                    <div className="mb-1 text-sm text-seaside-700">{job.description}</div>
                    <div className="flex flex-wrap gap-4 text-xs text-seaside-500">
                      <span>
                        Location:
                        {job.location}
                      </span>
                      <span>
                        Salary:
                        {job.salary}
                      </span>
                      <span>
                        Posted:
                        {job.posted}
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <button
                      type="button"
                      className="rounded-md bg-seaside-600 px-4 py-2 font-semibold text-white shadow hover:bg-seaside-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
              <button type="button" className="absolute right-2 top-2 text-seaside-600" onClick={() => setSelectedJob(null)}>✕</button>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{selectedJob.logo}</span>
                <div>
                  <div className="text-lg font-bold text-seaside-800">{selectedJob.title}</div>
                  <div className="text-sm text-seaside-600">{selectedJob.company}</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedJob.tags.map(tag => (
                      <span key={tag} className="inline-block rounded bg-seaside-100 px-2 py-0.5 text-xs font-semibold text-seaside-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-2 text-sm text-seaside-700">{selectedJob.details}</div>
              <div className="mb-4 flex flex-wrap gap-4 text-xs text-seaside-500">
                <span>
                  Location:
                  {selectedJob.location}
                </span>
                <span>
                  Salary:
                  {selectedJob.salary}
                </span>
                <span>
                  Posted:
                  {selectedJob.posted}
                </span>
              </div>
              <button type="button" className="w-full rounded-md bg-seaside-600 px-6 py-3 font-semibold text-white shadow hover:bg-seaside-700">Apply Now</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
