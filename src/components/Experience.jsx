import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import cplusplus from '../assets/c++.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import nextjs from '../assets/nextjs.png';

const categories = [
  {
    label: 'Languages & Frameworks',
    skills: [
      { name: 'Python',      src: python,      level: 90 },
      { name: 'C / C++',     src: cplusplus,   level: 82 },
      { name: 'JavaScript',  src: javascript,  level: 85 },
      { name: 'React',       src: reactImage,  level: 83 },
      { name: 'Node.js',     src: node,        level: 72 },
      { name: 'Next.js',     src: nextjs,      level: 68 },
    ],
  },
  {
    label: 'Web & Tools',
    skills: [
      { name: 'HTML5',       src: html,        level: 95 },
      { name: 'CSS3',        src: css,         level: 90 },
      { name: 'Tailwind CSS',src: tailwind,    level: 88 },
      { name: 'GitHub',      src: github,      level: 93 },
    ],
  },
];

const extras = [
  'Java', 'Groovy', 'SQL', 'TypeScript',
  'AUTOSAR', 'Android Studio', 'Firebase',
  'Flask', 'Pandas', 'NumPy', 'REST APIs', 'CI/CD',
];

const Experience = () => {
  return (
    <div name="experience" className="py-24 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            My Toolkit
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-14 h-1 bg-zinc-800 dark:bg-zinc-500 rounded-full mx-auto mb-5" />
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Languages and tools I use to build everything from web apps to automotive embedded software.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-3xl p-8"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 dark:bg-zinc-400" />
                <h3 className="font-heading font-bold text-lg text-zinc-800 dark:text-zinc-200">
                  {cat.label}
                </h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img src={skill.src} alt={skill.name} className="w-5 h-5 object-contain" />
                        <span className="font-medium text-zinc-700 dark:text-zinc-300 text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-zinc-800 dark:bg-zinc-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lower skill section*/}
        <div className="text-center">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {extras.map((skill, i) => (
              <span
                key={i}
                className="bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-zinc-500 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
