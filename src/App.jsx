import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;