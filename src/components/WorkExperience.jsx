import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    company: 'Ford Motor Company',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'Sep 2025 – Present',
    location: 'Dearborn, Michigan',
    current: true,
    tech: ['Python', 'C++', 'Java', 'Android Studio', 'APIs', 'JIRA'],
    bullets: [
      'Contributing to the design and development of Infotainment application prototypes on the Digital Product Lab team.',
      'Engineered two automation scripts in Python to automate test cases for the Battery Energy Control Module, covering the full lifecycle from concept design to production integration.',
    ],
  },
  {
    id: 2,
    company: 'Ford Motor Company',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Jun 2024 – Aug 2024',
    location: 'Dearborn, Michigan',
    current: false,
    tech: ['Java', 'Groovy', 'C', 'AUTOSAR', 'CI/CD', 'Agile', 'JIRA'],
    bullets: [
      'Developed a full-stack internal tool within an Agile framework to automate ECU run-time environment generation, saving over 70% of manual processes.',
      'Implemented 2 production-ready Battery Electric Control Module communication features using C and AUTOSAR architecture, integrated within a CI/CD pipeline managed through JIRA.',
      'Spearheaded migration from BTC to Simulink Test, implementing over 100 end-to-end test cases to ensure high code quality and reliability.',
    ],
  },
  {
    id: 3,
    company: 'Acsia',
    role: 'Software Engineering / Product Management Intern',
    type: 'Internship',
    period: 'May 2023 – Aug 2023',
    location: 'Bangalore, India',
    current: false,
    tech: ['C', 'AUTOSAR', 'Polarion', 'APIs', 'ISO 26262'],
    bullets: [
      'Developed over 400 system, software and electrical requirements for a multi-million dollar automotive project.',
      'Collaborated with the Functional Safety team to analyze diagnostic trouble codes distributed by the ECU via CAN.',
      'Streamlined work protocols by managing meeting minutes and bug trackers under Agile and ASPICE/ISO 26262, achieving deadlines 50% faster.',
    ],
  },
];

const WorkExperience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div name="workexperience" className="py-24 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            Career
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-14 h-1 bg-zinc-800 dark:bg-zinc-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-700 hidden md:block" />

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="flex gap-6 md:gap-10" onMouseEnter={() => setHoveredId(job.id)} onMouseLeave={() => setHoveredId(null)}>

                {/* Timeline node */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-7">
                  <div
                    className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-200 ${
                      hoveredId === job.id
                        ? 'bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100'
                        : 'bg-white dark:bg-zinc-950 border-zinc-400 dark:border-zinc-600'
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-card hover:shadow-card-hover transition-all duration-300 p-7">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 font-semibold text-base">
                        {job.company}
                      </p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">{job.period}</p>
                      <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-0.5">
                        {job.location} · {job.type}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                    {job.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
