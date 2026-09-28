import { useEffect } from "react";

export default function useScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = [...document.querySelectorAll("[data-reveal]")];
    const timelines = [...document.querySelectorAll("[data-timeline]")];
    const images = [...document.querySelectorAll("[data-parallax]")];
    let frame = null;
    const last = new WeakMap();
    const update = () => {
      frame = null;
      const height = window.innerHeight;
      // Complete every geometry read before writing styles, avoiding repeated
      // synchronous style/layout recalculation during a single scroll frame.
      const revealValues = reveals.map((el) => {
        if (media.matches) return 1;
        const translation = (1 - (last.get(el) ?? 1)) * 22;
        const top = el.getBoundingClientRect().top - translation;
        return Math.max(
          0,
          Math.min(1, (height * 0.96 - top) / (height * 0.25)),
        );
      });
      const timelineValues = timelines.map((el) => {
        if (media.matches) return 1;
        const rect = el.getBoundingClientRect();
        return Math.max(
          0,
          Math.min(1, (height * 0.65 - rect.top) / Math.max(1, rect.height)),
        );
      });
      const imageValues = images.map((el) => {
        if (media.matches) return 0;
        const rect = el.parentElement.getBoundingClientRect();
        return Math.max(
          -18,
          Math.min(18, (height / 2 - rect.top - rect.height / 2) * 0.035),
        );
      });
      reveals.forEach((el, i) => {
        if (last.get(el) !== revealValues[i]) {
          el.style.setProperty("--reveal", revealValues[i]);
          last.set(el, revealValues[i]);
        }
      });
      timelines.forEach((el, i) => {
        if (last.get(el) !== timelineValues[i]) {
          el.style.setProperty("--progress", timelineValues[i]);
          last.set(el, timelineValues[i]);
        }
      });
      images.forEach((el, i) => {
        if (last.get(el) !== imageValues[i]) {
          el.style.transform = `translateY(${imageValues[i]}px) scale(1.08)`;
          last.set(el, imageValues[i]);
        }
      });
    };
    const schedule = () => {
      if (frame === null && !document.hidden)
        frame = requestAnimationFrame(update);
    };
    const onScroll = () => {
      if (!media.matches) schedule();
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = null;
      } else schedule();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("toggle", schedule, true);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("toggle", schedule, true);
      media.removeEventListener("change", schedule);
    };
  }, []);
}
