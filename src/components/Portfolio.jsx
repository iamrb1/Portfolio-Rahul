import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
export default function Portfolio() {
  return (
    <section id="portfolio" className="section container">
      <SectionHeading number="03" title="Selected projects">
        A few projects I’ve worked on
      </SectionHeading>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="project" key={p.id} data-reveal>
            <div className={`project-visual project-visual-${i}`}>
              {p.video ? (
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={p.poster}
                  aria-label={`${p.title} demonstration`}
                  width="1440"
                  height="900"
                >
                  <source src={p.video} type="video/mp4" />
                  <a href={p.video}>Watch the project video</a>
                </video>
              ) : p.image ? (
                <img
                  data-parallax
                  src={p.image}
                  alt={`${p.title} interface`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="project-typographic" aria-hidden="true">
                  <span>
                    {i === 0
                      ? "RECOGNIZE. RETHINK. RECYCLE."
                      : "MODEL / SIMULATE / UNDERSTAND"}
                  </span>
                  <strong>{i === 0 ? "Ecosnap" : "Systems in motion."}</strong>
                  <div className="diagram-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                  <small>
                    {i === 0 ? "ANDROID + COMPUTER VISION" : "C++ + QT"}
                  </small>
                </div>
              )}
            </div>
            <div className="project-title">
              <span className="eyebrow">0{i + 1}</span>
              <h3>{p.title}</h3>
            </div>
            <p className="muted">{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  View project <HiArrowUpRight />
                </a>
              )}
              <a href={p.code} target="_blank" rel="noreferrer">
                {p.code === "https://github.com/iamrb1"
                  ? "GitHub profile"
                  : "Source code"}{" "}
                <HiArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
