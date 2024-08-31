import React, { useState, useEffect } from 'react';
import '../styles/Skills.scss';

const frontendSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React"
];

const backendSkills = [
  "Node.js",
  "MongoDB"
];

const Skills = () => {
  const [currentFrontendSkillIndex, setCurrentFrontendSkillIndex] = useState(0);
  const [currentBackendSkillIndex, setCurrentBackendSkillIndex] = useState(0);

  useEffect(() => {
    const frontendInterval = setInterval(() => {
      setCurrentFrontendSkillIndex(prevIndex => (prevIndex + 1) % frontendSkills.length);
    }, 2000); // Change skill every 2 seconds

    const backendInterval = setInterval(() => {
      setCurrentBackendSkillIndex(prevIndex => (prevIndex + 1) % backendSkills.length);
    }, 2000); // Change skill every 2 seconds

    return () => {
      clearInterval(frontendInterval);
      clearInterval(backendInterval);
    };
  }, []);

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-section">
        <h2>Frontend</h2>
        <div className="skills-content">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill ${index === currentFrontendSkillIndex ? 'visible' : ''}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-section">
        <h2>Backend</h2>
        <div className="skills-content">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill ${index === currentBackendSkillIndex ? 'visible' : ''}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
