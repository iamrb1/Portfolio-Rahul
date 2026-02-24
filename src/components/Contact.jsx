import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

/* Contact info object*/
const contactInfo = [
  {
    icon: <HiOutlineMail size={17} />,
    label: 'Email',
    value: 'baragurrahul@gmail.com',
    href: 'mailto:baragurrahul@gmail.com',
  },
  {
    icon: <FaLinkedin size={15} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul',
    href: 'https://www.linkedin.com/in/rahul-baragur-5b27bb266',
  },
  {
    icon: <FaGithub size={15} />,
    label: 'GitHub',
    value: 'github.com/iamrb1',
    href: 'https://github.com/iamrb1',
  },
  {
    icon: <HiOutlineLocationMarker size={17} />,
    label: 'Location',
    value: 'Dearborn, MI',
    href: null,
  },
];

const Contact = () => {
  return (
    <div name="contact" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-14 h-1 bg-zinc-800 dark:bg-zinc-500 rounded-full mx-auto mb-5" />
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Reach out to me! I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-8 h-full flex flex-col border border-zinc-200 dark:border-zinc-700">
              <h3 className="font-heading font-bold text-2xl mb-2 text-zinc-900 dark:text-zinc-100">Let's talk!</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                Send me a message and let's chat about it.
              </p>

              <div className="space-y-5 flex-1">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-zinc-200 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-zinc-500 dark:text-zinc-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-8 flex items-center justify-center gap-2 bg-zinc-200 dark:bg-white/10 hover:bg-zinc-300 dark:hover:bg-white/20 text-zinc-800 dark:text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors border border-zinc-300 dark:border-white/10"
              >
                <BsFillPersonLinesFill size={14} /> Download Resume
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-card p-8 h-full">
              <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-7">
                Send a message
              </h3>
              <form
                action="https://getform.io/f/cb77754d-16c6-41fd-bc3c-e181ca29d548"
                method="POST"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 rounded-xl text-zinc-700 dark:text-zinc-200 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 rounded-xl text-zinc-700 dark:text-zinc-200 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={7}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 rounded-xl text-zinc-700 dark:text-zinc-200 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3.5 rounded-xl font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors shadow"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
