import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Place from "./components/Place";
import SocialsLinks from "./components/SocialsLinks";
import Footer from "./components/Footer"
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Rahul Baragur"
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Place />
      <Footer />

      <SocialsLinks />
    </div>
  );
}

export default App;
