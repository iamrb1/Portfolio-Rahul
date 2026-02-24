import React from 'react';
import { HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi';

/* Description Cards */
const highlights = [
  {
    icon: <HiAcademicCap size={22} />,
    title: 'Education',
    description:
      'Computer Science graduate @ Michigan State University. Involved within MSU AI Club, Kappa Sigma, and Spartahack.',
    bg: 'bg-zinc-50 dark:bg-zinc-700/40',
    iconBg: 'bg-white dark:bg-zinc-700',
    border: 'border-zinc-200 dark:border-zinc-600',
    icon_color: 'text-zinc-700 dark:text-zinc-300',
  },
  {
    icon: <HiCode size={22} />,
    title: 'Development',
    description:
      'Embedded Systems, full-stack web, and mobile applications. Currently learning and developing within the Android Auto ecosystem.',
    bg: 'bg-zinc-50 dark:bg-zinc-700/40',
    iconBg: 'bg-white dark:bg-zinc-700',
    border: 'border-zinc-200 dark:border-zinc-600',
    icon_color: 'text-zinc-700 dark:text-zinc-300',
  },
  {
    icon: <HiLightBulb size={22} />,
    title: 'Passion',
    description:
      'Excited to learn and specialize within different SWE fields while navigating through an AI-focused future. Currently in a rotational program where I learn 24/7!',
    bg: 'bg-zinc-50 dark:bg-zinc-700/40',
    iconBg: 'bg-white dark:bg-zinc-700',
    border: 'border-zinc-200 dark:border-zinc-600',
    icon_color: 'text-zinc-700 dark:text-zinc-300',
  },
];

const About = () => {
  return (
    <div name="about" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            Who I Am
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-14 h-1 bg-zinc-800 dark:bg-zinc-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Story */}
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-5">
              Since I was a kid I've been all about building, whether it be Lego sets, Minecraft redstone creations,
              or even pillow forts. My first real dive into programming happened at age{' '}
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">8</span> with a{' '}
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Lego NXT robot</span>.
              I decided to leverage that spark and build real projects through code.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
              I graduated from{' '}
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Michigan State University</span>{' '}
              in 2025 in Computer Science. Today I'm
              a <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Software Engineer at Ford Motor Company</span>,
              rotating and learning through various teams within the organization.
            </p>

            {/* Tiles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '📍', label: 'Based in',   value: 'Dearborn, MI' },
                { emoji: '🏢', label: 'Employer',   value: 'Ford Motor Company' },
                { emoji: '🎓', label: 'Degree',     value: 'B.S. Computer Science' },
                { emoji: '📊', label: 'GPA',        value: '3.85 / 4.0' },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-stone-50 dark:bg-zinc-800 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-700"
                >
                  <span className="text-xl">{f.emoji}</span>
                  <div>
                    <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">{f.label}</p>
                    <p className="text-zinc-800 dark:text-zinc-200 text-sm font-semibold">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards tailwind css*/}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 p-6 rounded-2xl border ${item.bg} ${item.border} hover:shadow-md dark:hover:shadow-zinc-900 transition-all duration-300`}
              >
                <div className={`flex-shrink-0 w-11 h-11 ${item.iconBg} rounded-xl flex items-center justify-center shadow-sm ${item.icon_color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
