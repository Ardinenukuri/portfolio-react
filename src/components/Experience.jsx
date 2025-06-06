import React from 'react';
import experience from '../data/experience.json';
import '../assets/styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-section">
          <h3>Work Experience</h3>
          <div className="timeline">
            {experience.work.map((job) => (
              <div key={job.id} className="timeline-item">
                <div className="timeline-content">
                  <h4>{job.role} at {job.company}</h4>
                  <p className="timeline-period">{job.period}</p>
                  <p className="timeline-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="education-section">
          <h3>Education</h3>
          <div className="timeline">
            {experience.education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="timeline-period">{edu.institution} • {edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;