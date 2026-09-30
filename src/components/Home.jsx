import { HiArrowRight, HiArrowDown } from "react-icons/hi";
import TypewriterIntro from "./TypewriterIntro";
import OrbitSphere from "./OrbitSphere";
export default function Home() {
  const scrollToSection = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
    target.focus({ preventScroll: true });
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };
  return (
    <section id="home" className="hero container">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>RAHUL BARAGUR</span>
          </p>
          <h1>
            Hi, I'm <span>Rahul</span>
          </h1>
          <TypewriterIntro />
          <p className="muted hero-description">
            Associate Product Manager at Ford Motor Company. Computer Science
            graduate from Michigan State University.
          </p>
          <div className="button-row">
            <a className="button primary" href="#portfolio" onClick={(event) => scrollToSection(event, "portfolio")}>
              View projects <HiArrowRight />
            </a>
            <a className="text-link" href="/resume.pdf" download>
              Download résumé <HiArrowDown />
            </a>
          </div>
        </div>
        <OrbitSphere />
      </div>
      <div className="hero-foot">
        <span>Rahul Baragur</span>
        <a href="#contact" onClick={(event) => scrollToSection(event, "contact")}>
          Contact me <HiArrowDown />
        </a>
      </div>
    </section>
  );
}
