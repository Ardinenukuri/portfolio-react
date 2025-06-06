import React from 'react';
import personalInfo from '../data/personalInfo.json';
import skills from '../data/skills.json';
import '../assets/styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.about.intro}</p>
            <p>{personalInfo.about.background}</p>
            <p>{personalInfo.about.unique}</p>
          </div>
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-container">
              {skills.skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h4>{skillCategory.category}</h4>
                  <ul className="skill-list">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;