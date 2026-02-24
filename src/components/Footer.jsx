import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const navLinks = [
  { label: 'Home',       to: 'home' },
  { label: 'About',      to: 'about' },
  { label: 'Experience', to: 'workexperience' },
  { label: 'Projects',   to: 'portfolio' },
  { label: 'Skills',     to: 'experience' },
  { label: 'Contact',    to: 'contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* About section */}
          <div>
            <span className="font-heading font-bold text-2xl">
              <span className="text-zinc-800 dark:text-zinc-200">Rahul</span>
              <span className="text-zinc-400 dark:text-zinc-600">.</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed max-w-xs text-zinc-600 dark:text-zinc-500">
              Software Engineer at Ford Motor Company and recent graduate from Michigan State University.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { href: 'https://github.com/iamrb1', icon: <FaGithub size={14} /> },
                { href: 'https://www.linkedin.com/in/rahul-baragur-5b27bb266', icon: <FaLinkedin size={14} /> },
                { href: 'mailto:baragurrahul@gmail.com', icon: <HiOutlineMail size={15} /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="w-9 h-9 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm uppercase tracking-wide mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 text-sm cursor-pointer transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm uppercase tracking-wide mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:baragurrahul@gmail.com"
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 text-sm transition-colors"
              >
                <HiOutlineMail size={14} /> baragurrahul@gmail.com
              </a>
              <a
                href="https://github.com/iamrb1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 text-sm transition-colors"
              >
                <FaGithub size={12} /> github.com/iamrb1
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-500 dark:text-zinc-600 text-sm">
            © {year} Rahul Baragur.
          </p>
          <p className="text-zinc-500 dark:text-zinc-600 text-sm">
            Built with{' '}
            <span className="text-zinc-700 dark:text-zinc-400 font-medium">React</span>{' '}
            &{' '}
            <span className="text-zinc-700 dark:text-zinc-400 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
