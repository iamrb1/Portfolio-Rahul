import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useDarkMode } from '../DarkModeContext';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, to: 'home',          label: 'Home' },
    { id: 2, to: 'about',         label: 'About' },
    { id: 3, to: 'workexperience',label: 'Experience' },
    { id: 4, to: 'portfolio',     label: 'Projects' },
    { id: 5, to: 'experience',    label: 'Skills' },
    { id: 6, to: 'contact',       label: 'Contact' },
  ];

  const scrolledLight = 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100';
  const scrolledDark  = 'dark:bg-zinc-950/95 dark:border-zinc-800';
  const linkScrolled  = 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100';
  const linkTop       = 'text-zinc-700 hover:text-zinc-900 dark:text-white/80 dark:hover:text-white';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? `${scrolledLight} ${scrolledDark}` : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer select-none">
            <span className="font-heading font-bold text-2xl">
              <span className={scrolled
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-900 dark:text-white'
              }>
                Rahul Baragur
              </span>
              <span className={scrolled
                ? 'text-zinc-400 dark:text-zinc-500'
                : 'text-zinc-400 dark:text-white/50'
              }>.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ id, to, label }) => (
              <Link
                key={id}
                to={to}
                smooth
                duration={500}
                offset={-80}
                className={`text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  scrolled ? linkScrolled : linkTop
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-xl transition-all duration-200 ${
                scrolled
                  ? 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                scrolled
                  ? 'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300'
                  : 'bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-700 dark:bg-white/15 dark:border-white/30 dark:hover:bg-white/25'
              }`}
            >
              Resume
            </a>
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
                  : 'text-zinc-600 hover:bg-zinc-100/60 dark:text-white/80 dark:hover:bg-white/10'
              }`}
            >
              {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
            <button
              onClick={() => setNav(!nav)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                  : 'text-zinc-700 hover:bg-zinc-100/60 dark:text-white dark:hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          nav ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 px-4 py-3 space-y-1">
          {links.map(({ id, to, label }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setNav(false)}
              className="block px-4 py-3 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 font-medium text-sm cursor-pointer transition-all"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 pb-1 px-2">
            <a
              href="/resume.pdf"
              download
              className="block w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-3 rounded-xl text-sm font-semibold text-center hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
