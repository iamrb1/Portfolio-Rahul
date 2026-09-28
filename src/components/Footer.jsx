import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const stars = Array.from({ length: 48 }, (_, i) => ({
  angle: `${i * 137.508}deg`,
  distance: `${5 + (i % 9) * 2}vmin`,
  delay: `${(i % 7) * 18}ms`,
}));

export default function Footer() {
  const [warping, setWarping] = useState(false);
  const frame = useRef(null);
  const active = useRef(false);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const backToTop = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (active.current) return;
    const home = document.getElementById("home");
    const finish = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.history.replaceState(null, "", "#home");
      if (home) {
        const previous = home.getAttribute("tabindex");
        home.setAttribute("tabindex", "-1");
        home.focus({ preventScroll: true });
        if (previous === null) home.removeAttribute("tabindex");
        else home.setAttribute("tabindex", previous);
      }
      active.current = false;
      setWarping(false);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    active.current = true;
    setWarping(true);
    const initialY = window.scrollY;
    const start = performance.now();
    const travel = (now) => {
      const progress = Math.min((now - start) / 850, 1);
      const movement = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({ top: initialY * (1 - movement), behavior: "instant" });
      if (progress < 1) frame.current = requestAnimationFrame(travel);
      else finish();
    };
    frame.current = requestAnimationFrame(travel);
  };

  return (
    <footer className="container footer">
      <a className="wordmark" href="#home">
        rb<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Rahul Baragur</p>
      <a href="#home" onClick={backToTop}>Back to top</a>
      {warping && createPortal(
        <div className="warp-flight" aria-hidden="true">
          {stars.map((star, i) => (
            <span key={i} className="warp-ray" style={{
              "--angle": star.angle,
              "--distance": star.distance,
              "--delay": star.delay,
            }}><i /></span>
          ))}
        </div>,
        document.body,
      )}
    </footer>
  );
}
