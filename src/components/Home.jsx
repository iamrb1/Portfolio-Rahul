import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';
import HeroImage from '../assets/heroImage.png';

/* Card objects */
const ORBIT_CARDS = [
  {
    id: 0,
    emoji: '🏢',
    title: 'Software Engineer',
    sub: 'Ford Motor Company',
    initAngle: 160,   
  },
  {
    id: 1,
    emoji: '🎓',
    title: 'CS Graduate 2025',
    sub: 'Michigan State Univ.',
    initAngle: -45,   
  },
  {
    id: 2,
    emoji: '🚙',
    title: 'Software Engineer Intern',
    sub: 'Acsia Technologies',
    initAngle: 30,    
  },
];

/* Helpers */
const toRad = (deg) => (deg * Math.PI) / 180;

const Home = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Developer', 'Problem Solver', 'Learner'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 45,
    delaySpeed: 2000,
  });

  /* Refs */
  const circleRef  = useRef(null);   
  const dragging   = useRef(-1);     

  /* State */
  const [angles,      setAngles]      = useState(ORBIT_CARDS.map((c) => c.initAngle));
  const [orbitRadius, setOrbitRadius] = useState(200);
  const [isDragging,  setIsDragging]  = useState(false);
  const [hasDragged,  setHasDragged]  = useState(false);

  /* Compute orbit radius from actual rendered circle size */
  const updateRadius = useCallback(() => {
    if (circleRef.current) {
      const { width } = circleRef.current.getBoundingClientRect();
      setOrbitRadius(width / 2 + 60);
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  /* Get angle from circle center to pointer */
  const angleFromCenter = useCallback((clientX, clientY) => {
    if (!circleRef.current) return 0;
    const rect = circleRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
  }, []);

  /* Pointer event handlers attached to window while dragging */
  useEffect(() => {
    const onMove = (e) => {
      if (dragging.current === -1) return;
      const clientX = e.clientX ?? (e.touches?.[0]?.clientX);
      const clientY = e.clientY ?? (e.touches?.[0]?.clientY);
      if (clientX == null) return;
      const angle = angleFromCenter(clientX, clientY);
      setAngles((prev) => {
        const next = [...prev];
        next[dragging.current] = angle;
        return next;
      });
    };

    const onUp = () => {
      dragging.current = -1;
      setIsDragging(false);
    };

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('touchmove',  onMove, { passive: true });
    window.addEventListener('mouseup',    onUp);
    window.addEventListener('touchend',   onUp);
    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('touchmove',  onMove);
      window.removeEventListener('mouseup',    onUp);
      window.removeEventListener('touchend',   onUp);
    };
  }, [angleFromCenter]);

  const onCardPointerDown = (idx) => (e) => {
    e.preventDefault();
    dragging.current = idx;
    setIsDragging(true);
    setHasDragged(true);
  };

  /* Position style for a card at a given angle + radius */
  const cardStyle = (angle) => {
    const rad = toRad(angle);
    const x   = orbitRadius * Math.cos(rad);
    const y   = orbitRadius * Math.sin(rad);
    return {
      position: 'absolute',
      left: '50%',
      top:  '50%',
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      cursor: isDragging ? 'grabbing' : 'grab',
      userSelect: 'none',
      touchAction: 'none',
      zIndex: 20,
      transition: isDragging ? 'none' : 'transform 0.05s',
    };
  };

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-white dark:bg-zinc-950 flex items-center pt-16 relative"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-zinc-200/30 dark:bg-zinc-700/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column*/}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-100 backdrop-blur-sm text-zinc-800 px-4 py-2 rounded-full text-sm font-medium mb-7 border border-zinc-200">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Software Engineer @ Ford Motor Company
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-white leading-tight mb-5">
              Hi, I'm{' '}
              <span className="text-zinc-700 dark:text-zinc-200">Rahul</span>
            </h1>

            {/* Typewriter */}
            <h2 className="font-heading text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-7 font-medium">
              A passionate{' '}
              <span className="block sm:inline min-h-[1.75rem] sm:min-h-0 text-zinc-800 dark:text-zinc-200 font-semibold">
                {text}
                <Cursor cursorStyle="|" cursorColor="#a1a1aa" />
              </span>
            </h2>

            {/* Bio */}
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              CS graduate from{' '}
              <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Michigan State University</span>{' '}
               that is currently building and exploring full-stack web, embedded systems, and mobile development applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="workexperience"
                smooth duration={500} offset={-80}
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 rounded-full font-semibold cursor-pointer hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                View Experience <HiArrowRight size={16} />
              </Link>
              <Link
                to="contact"
                smooth duration={500} offset={-80}
                className="border-2 border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white px-7 py-3.5 rounded-full font-semibold cursor-pointer hover:border-zinc-500 dark:hover:border-white/50 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 dark:text-zinc-600 text-sm">Find me on</span>
              {[
                { href: 'https://github.com/iamrb1', icon: <FaGithub size={17} /> },
                { href: 'https://www.linkedin.com/in/rahul-baragur-5b27bb266', icon: <FaLinkedin size={17} /> },
                { href: 'mailto:baragurrahul@gmail.com', icon: <HiOutlineMail size={18} /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="w-10 h-10 bg-zinc-100 dark:bg-white/8 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/15 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right column circle */}
          <div className="hidden md:flex order-1 lg:order-2 justify-center lg:justify-end py-16 lg:py-20 px-16 lg:px-24">
            {/* Orbit dashed ring  */}
            <div className="relative" style={{ width: 'fit-content' }}>

              {/* Dashed orbit path */}
              <div
                className="absolute left-1/2 top-1/2 pointer-events-none text-zinc-400 dark:text-white"
                style={{
                  width:  orbitRadius * 2,
                  height: orbitRadius * 2,
                  transform: `translate(-50%, -50%)`,
                  zIndex: 5,
                }}
              >
                <svg width="100%" height="100%" className="opacity-20">
                  <circle
                    cx="50%" cy="50%"
                    r="49%"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="5 8"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Glow blob */}
              <div className="absolute inset-0 bg-zinc-300/40 dark:bg-zinc-600/25 rounded-full blur-3xl scale-125 pointer-events-none" />

              {/* Photo circle */}
              <div
                ref={circleRef}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-white/10 shadow-2xl"
              >
                <img
                  src={HeroImage}
                  alt="Rahul Baragur"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>

              {/* Drag hint tooltip */}
              <div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-zinc-500 text-xs pointer-events-none select-none transition-opacity duration-500 ${hasDragged ? 'opacity-0' : 'opacity-100'}`}
              >
                drag the cards ✦
              </div>

              {/* Orbiting cards */}
              {ORBIT_CARDS.map((card, i) => (
                <div
                  key={card.id}
                  style={cardStyle(angles[i])}
                  onMouseDown={onCardPointerDown(i)}
                  onTouchStart={onCardPointerDown(i)}
                  className="orbit-hint bg-white dark:bg-zinc-800 rounded-2xl shadow-xl px-3 py-2.5 md:px-4 md:py-3 flex items-center gap-2.5 select-none whitespace-nowrap border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-[box-shadow,opacity] duration-200 hover:shadow-2xl"
                  title="Drag me!"
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center text-base md:text-lg flex-shrink-0">
                    {card.emoji}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-zinc-800 dark:text-zinc-100 text-xs md:text-sm leading-tight">
                      {card.title}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[10px] md:text-xs">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-20 pt-10 border-t border-zinc-200 dark:border-white/8">
          {[
            { number: '1+',  label: 'Year of Experience' },
            { number: '6+',  label: 'Systems Designed' },
            { number: '12+', label: 'Technologies' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white mb-1">
                {stat.number}
              </p>
              <p className="text-zinc-500 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
