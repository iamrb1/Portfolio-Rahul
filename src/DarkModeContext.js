import { createContext, useContext, useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

export const DarkModeContext = createContext({ dark: false, toggle: () => {} });
export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      return stored !== null
        ? stored === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const busy = useRef(false);
  const fallbackTimer = useRef(null);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("darkMode", String(dark));
    } catch {}
  }, [dark]);
  useEffect(() => () => clearTimeout(fallbackTimer.current), []);

  const toggle = () => {
    if (busy.current) return;
    const root = document.documentElement;
    const next = !dark;
    const apply = () => {
      root.classList.toggle("dark", next);
      flushSync(() => setDark(next));
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }
    busy.current = true;
    root.dataset.themeTurn = next ? "dark" : "light";
    const finish = () => {
      busy.current = false;
      delete root.dataset.themeTurn;
    };
    if (document.startViewTransition) {
      try {
        const transition = document.startViewTransition(apply);
        transition.ready.catch(() => {});
        transition.finished.then(finish, finish);
        return;
      } catch {
        /* Use the lightweight fallback if snapshots are unavailable. */
      }
    }
    root.classList.add("theme-fade");
    apply();
    fallbackTimer.current = setTimeout(() => {
      root.classList.remove("theme-fade");
      finish();
    }, 260);
  };
  return (
    <DarkModeContext.Provider value={{ dark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export const useDarkMode = () => useContext(DarkModeContext);
