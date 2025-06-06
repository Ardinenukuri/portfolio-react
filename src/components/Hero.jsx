import React, { useEffect } from 'react';
import personalInfo from '../data/personalInfo.json';
import '../assets/styles/Hero.css';
import MartineImage from '../assets/images/Martine.jpg';

const Hero = () => {
  useEffect(() => {
    // Animation effect when component mounts
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('animate');
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <button 
            className="hero-button"
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </button>
        </div>
        <div className="hero-image">
          <img src={MartineImage} alt={personalInfo.name} />
        </div>
      </div>
    </section>
  );
};

export default Hero;