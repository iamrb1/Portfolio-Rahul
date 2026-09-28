import { HiArrowRight } from "react-icons/hi";
export default function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="section section-tinted">
      <div className="container contact-grid">
        <div data-reveal>
          <p className="eyebrow">06 / GET IN TOUCH</p>
          <h2>Contact me</h2>
          <a className="contact-email" href="mailto:baragurrahul@gmail.com">
            baragurrahul@gmail.com <HiArrowRight />
          </a>
          <div className="project-links">
            <a
              href="https://github.com/iamrb1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-baragur-5b27bb266"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" download>
              Résumé
            </a>
          </div>
        </div>
        <form
          action="https://getform.io/f/cb77754d-16c6-41fd-bc3c-e181ca29d548"
          method="POST"
        >
          <div className="form-row">
            <label htmlFor="contact-name">
              Name
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </label>
            <label htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label htmlFor="contact-message">
            Message
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              required
              placeholder="Your message"
            />
          </label>
          <button className="button primary" type="submit">
            Send message <HiArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
}
