import React, { useEffect } from "react";
import { DarkModeProvider } from "./DarkModeContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OutsideWork from "./components/OutsideWork";
import useScrollMotion from "./hooks/useScrollMotion";

function App() {
  useScrollMotion();
  useEffect(() => {
    document.title = "Rahul Baragur";
  }, []);

  return (
    <DarkModeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Home />
        <About />
        <WorkExperience />
        <Portfolio />
        <OutsideWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
