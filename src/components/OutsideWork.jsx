import { useEffect, useRef, useState } from "react";
import {
  HiOutlinePause,
  HiOutlinePlay,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi";
import { photography, outsideProjects } from "../data/outsideWork";
import SectionHeading from "./SectionHeading";
import useAnimationActivity from "../hooks/useAnimationActivity";
function Photography() {
  const ref = useRef(null);
  const { running, reduced } = useAnimationActivity(ref);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || !running || photography.length < 2) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % photography.length),
      3600,
    );
    return () => clearInterval(timer);
  }, [paused, running]);
  const step = (direction) => {
    setPaused(true);
    setIndex((i) => (i + direction + photography.length) % photography.length);
  };
  return (
    <article className="photography-card" ref={ref}>
      <div className="photography-copy">
        <p className="eyebrow">PHOTO COLLECTION</p>
        <h3>Photography</h3>
        <p>A selection of my photos.</p>
        <div className="photo-controls">
          <button
            className="icon-button"
            aria-label="Previous photograph"
            onClick={() => step(-1)}
          >
            <HiArrowLeft />
          </button>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(photography.length).padStart(2, "0")}
          </span>
          <button
            className="icon-button"
            aria-label="Next photograph"
            onClick={() => step(1)}
          >
            <HiArrowRight />
          </button>
          <button
            className="icon-button"
            disabled={reduced}
            aria-label={paused ? "Play photo rotation" : "Pause photo rotation"}
            onClick={() => setPaused(!paused)}
          >
            {paused || reduced ? <HiOutlinePlay /> : <HiOutlinePause />}
          </button>
        </div>
      </div>
      <div className="photo-stack" aria-label="Photography collection">
        {photography.map((photo, i) => {
          const position =
            (i - index + photography.length) % photography.length;
          return (
            <figure
              key={photo.src}
              className={`photo-note ${position === 0 ? "is-front" : ""}`}
              style={{
                "--position": position,
                "--angle": `${position === 0 ? -5 : position === 1 ? 7 : -12}deg`,
                zIndex: photography.length - position,
              }}
              aria-hidden={position !== 0}
            >
              <span className="note-tape" />
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                {photo.caption}
                <span>0{i + 1}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </article>
  );
}
export default function OutsideWork() {
  return (
    <section id="outside-work" className="section outside-section">
      <div className="container">
        <SectionHeading number="04" title="Outside Work">
          Personal projects and photography
        </SectionHeading>
        <div className="outside-intro" data-reveal>
          <h2>Personal projects</h2>
          <p>Car modifications, hardware builds, and photography.</p>
        </div>
        <div className="outside-grid">
          {outsideProjects.map((p) => (
            <article key={p.id} className="outside-project" data-reveal>
              <div className="outside-image">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="draft-label">Placeholder image</span>
              </div>
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <details>
                <summary>{p.detailsLabel}</summary>
                <dl>
                  {p.details.map(([label, text]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{text}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </article>
          ))}
        </div>
        <Photography />
      </div>
    </section>
  );
}
