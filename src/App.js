import React, { useEffect } from 'react';
import { DarkModeProvider } from './DarkModeContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Rahul Baragur';
  }, []);

  return (
    <DarkModeProvider>
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
