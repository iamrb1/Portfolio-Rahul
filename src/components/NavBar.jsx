import { useState } from "react";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { useDarkMode } from "../DarkModeContext";
export const navigation = [
  ["about", "About"],
  ["workexperience", "Experience"],
  ["portfolio", "Projects"],
  ["outside-work", "Outside Work"],
  ["contact", "Contact"],
];
export default function NavBar() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const navigate = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    setOpen(false);
    setSelected(id);
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
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark" aria-label="Rahul Baragur home">
          rb<span>.</span>
        </a>
        <div
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={selected === id ? "nav-selected" : ""}
              onClick={(event) => navigate(event, id)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <span key={String(dark)} className="theme-icon">
              {dark ? <HiOutlineSun /> : <HiOutlineMoon />}
            </span>
          </button>
          <button
            className="icon-button menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
