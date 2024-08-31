import React, { useState } from 'react';
import '../styles/About.scss';  // Corrected path
import Skills from './Skills';
import Education from './Education';

const About = () => {
  const [currentSection, setCurrentSection] = useState('intro');

  const renderSection = () => {
    switch (currentSection) {
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      default:
        return (
          <div className="about-intro">
            <h1>About Me</h1>
            <p>I'm a passionate developer with experience in various web technologies. I love creating dynamic and responsive websites.</p>
          </div>
        );
    }
  };

  return (
    <div className="about">
      <nav className="about-nav">
        <button onClick={() => setCurrentSection('intro')}>Introduction</button>
        <button onClick={() => setCurrentSection('skills')}>Skills</button>
        <button onClick={() => setCurrentSection('education')}>Education</button>
      </nav>
      <div className="about-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default About;
