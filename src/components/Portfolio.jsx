import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Ahoy from '../assets/portfolio/Ahoy.jpg';
import LocoListen from '../assets/portfolio/LocoListen.jpg';

const projects = [
  {
    id: 1,
    title: 'Ecosnap',
    description:
      'Android app that uses Google Vision API to determine item recyclability from camera photos. Features Firebase backend, Google OAuth auth, and a global gamified leaderboard.',
    image: null,
    gradient: 'from-stone-600 to-stone-900',
    icon: '♻️',
    tags: ['Java', 'Firebase', 'Google OAuth', 'Vision API', 'Android'],
    demo: null,
    code: 'https://github.com/iamrb1',
    featured: true,
  },
  {
    id: 2,
    title: 'Compartmental Modeling System',
    description:
      'Graphical C++/Qt simulation system for creating compartment-based models with customizable differential-equation transfer dynamics, real-time graphing, and data export. Cross-platform.',
    image: null,
    gradient: 'from-zinc-600 to-zinc-900',
    icon: '📊',
    tags: ['C++', 'Qt', 'GUI', 'Simulation', 'Cross-platform'],
    demo: null,
    code: 'https://github.com/iamrb1',
    featured: true,
  },
  {
    id: 3,
    title: 'Ahoy',
    description:
      'Real-time messenger app with a modern UI built for seamless instant communication. Powered by Pusher for live messaging.',
    image: Ahoy,
    gradient: null,
    icon: null,
    tags: ['React', 'Node.js', 'Pusher', 'Tailwind CSS'],
    demo: 'https://messenger-three-beta.vercel.app/',
    code: 'https://github.com/iamrb1/Ahoy',
    featured: false,
  },
  {
    id: 4,
    title: 'LocoListen',
    description:
      'SpartaHack 8 project: a location-based music discovery app connecting people with local music culture in real time.',
    image: LocoListen,
    gradient: null,
    icon: null,
    tags: ['React', 'REST API', 'Hackathon'],
    demo: 'https://devpost.com/software/locolisten',
    code: 'https://github.com/iamrb1/LocoListen-Spartahack8',
    featured: false,
  },
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            My Work
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-14 h-1 bg-zinc-800 dark:bg-zinc-500 rounded-full mx-auto mb-5" />
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Here are a few projects I've created recently!.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-700 shadow-card hover:shadow-card-hover transition-all duration-500 group"
            >
              {/* Image / gradient header */}
              <div className="relative h-52 overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                    <span className="text-7xl opacity-30 select-none">{p.icon}</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-zinc-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-100 transition-colors"
                    >
                      <FaExternalLinkAlt size={11} /> Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-100 transition-colors"
                  >
                    <FaGithub size={13} /> Code
                  </a>
                </div>

                {p.featured && (
                  <div className="absolute top-4 left-4 bg-zinc-900/80 dark:bg-zinc-100/90 text-white dark:text-zinc-900 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-sm font-medium hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                  >
                    <FaGithub size={13} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/iamrb1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-zinc-800 dark:border-zinc-500 text-zinc-800 dark:text-zinc-300 px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
          >
            <FaGithub size={17} /> View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
