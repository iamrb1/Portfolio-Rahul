import { useEffect, useRef, useState } from "react";
import useAnimationActivity from "../hooks/useAnimationActivity";
const words = ["Software Engineer", "Developer", "Problem Solver", "Learner"];
export default function TypewriterIntro() {
  const ref = useRef(null);
  const { running, reduced } = useAnimationActivity(ref);
  const [state, setState] = useState({ word: 0, length: 0, deleting: false });
  const word = words[state.word];
  useEffect(() => {
    if (!running) return;
    const complete = state.length === word.length && !state.deleting;
    const timer = setTimeout(
      () => {
        setState((previous) => {
          if (complete) return { ...previous, deleting: true };
          if (previous.deleting && previous.length === 0)
            return {
              word: (previous.word + 1) % words.length,
              length: 0,
              deleting: false,
            };
          return {
            ...previous,
            length: previous.length + (previous.deleting ? -1 : 1),
          };
        });
      },
      complete ? 2000 : state.deleting ? 45 : 70,
    );
    return () => clearTimeout(timer);
  }, [running, state, word]);
  return (
    <p
      ref={ref}
      className="hero-intro typewriter-line"
      aria-label={words.join(", ")}
    >
      <span aria-hidden="true">
        A passionate{" "}
        <span className="typewriter-text">
          {reduced ? words[0] : word.slice(0, state.length)}
          <span className={`typewriter-cursor ${running ? "is-running" : ""}`}>
            |
          </span>
        </span>
      </span>
    </p>
  );
}
