


// import React, { useEffect, useState } from 'react';
// import '../styles/Home.scss';

// const Home = () => {
//   const [visibleFrontendSkills, setVisibleFrontendSkills] = useState([]);
//   const [visibleBackendSkills, setVisibleBackendSkills] = useState([]);
//   const frontendSkills = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React'];
//   const backendSkills = ['Node.js', 'MongoDB'];

//   let interval = null;

//   const displaySkills = () => {
//     setVisibleFrontendSkills([]);
//     setVisibleBackendSkills([]);

//     let currentFrontendSkillIndex = 0;
//     let currentBackendSkillIndex = 0;
//     const displayInterval = 170; // 1 second interval for each skill

//     clearInterval(interval);

//     interval = setInterval(() => {
//       if (currentFrontendSkillIndex < frontendSkills.length) {
//         setVisibleFrontendSkills((prevSkills) => [...prevSkills, frontendSkills[currentFrontendSkillIndex]]);
//         currentFrontendSkillIndex += 1;
//       } else if (currentBackendSkillIndex < backendSkills.length) {
//         setVisibleBackendSkills((prevSkills) => [...prevSkills, backendSkills[currentBackendSkillIndex]]);
//         currentBackendSkillIndex += 1;
//       } else {
//         clearInterval(interval);
//       }
//     }, displayInterval);
//   };

//   useEffect(() => {
//     document.documentElement.style.setProperty('--background-image-url', `url(${process.env.PUBLIC_URL}/images/background.jpg)`);
//   }, []);

//   useEffect(() => {
//     const aboutSection = document.getElementById('about');

//     const handleScroll = () => {
//       if (aboutSection && window.scrollY + window.innerHeight > aboutSection.offsetTop) {
//         displaySkills();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(interval);
//     };
//   }, []);

//   const handleAboutClick = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//       displaySkills();
//     }
//   };

//   return (
//     <div className="home">
//       <section className="video-background">
//         <video autoPlay loop muted className="background-video">
//           <source src={`${process.env.PUBLIC_URL}/images/video.mp4`} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="content">
//           <section className="welcome">
//             <h1>Welcome to My Portfolio</h1>
//             <p>Discover my projects, skills, and how to contact me below.</p>
//             <img src={`${process.env.PUBLIC_URL}/images/my-profile.jpg`} alt="Profile" className="profile-image" />
//           </section>
//           <button onClick={handleAboutClick}>Go to About</button>
//         </div>
//       </section>

//       <section className="about" id="about">
//         <h1>About Me</h1>
//         <p>I am a passionate full-stack developer with experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I specialize in creating responsive, interactive web applications and have a keen eye for detail and design. Feel free to reach out for collaboration or job opportunities.</p>

//         <div className="skills">
//           <h2>Skills</h2>
//           <div className="skills-section">
//             <h3>Frontend</h3>
//             <div className="skills-content">
//               {frontendSkills.map((skill, index) => (
//                 <div key={index} className={`skill ${visibleFrontendSkills.includes(skill) ? 'show' : ''}`}>
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="skills-section">
//             <h3>Backend</h3>
//             <div className="skills-content">
//               {backendSkills.map((skill, index) => (
//                 <div key={index} className={`skill ${visibleBackendSkills.includes(skill) ? 'show' : ''}`}>
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="projects" id="projects">
//         <h1>My Projects</h1>
//         <div className="projects-container">
//           <div className="project">
//             <img src="project1-image-url" alt="Project 1" />
//             <h3>Project 1 Title</h3>
//             <p>Short description of Project 1.</p>
//             <a href="project1-link" target="_blank" rel="noopener noreferrer">View Project</a>
//           </div>
//           <div className="project">
//             <img src="project2-image-url" alt="Project 2" />
//             <h3>Project 2 Title</h3>
//             <p>Short description of Project 2.</p>
//             <a href="project2-link" target="_blank" rel="noopener noreferrer">View Project</a>
//           </div>
//           <div className="project">
//             <img src="project3-image-url" alt="Project 3" />
//             <h3>Project 3 Title</h3>
//             <p>Short description of Project 3.</p>
//             <a href="project3-link" target="_blank" rel="noopener noreferrer">View Project</a>
//           </div>
//         </div>
//       </div>

//       <section className="contact" id="contact">
//         <h1>Contact Me</h1>
//         <p>If you have any questions, comments, or just want to connect, feel free to reach out to me using the form below or contact me directly using the information provided.</p>

//         <form>
//           <label>
//             Name:
//             <input type="text" name="name" required />
//           </label>
//           <label>
//             Email:
//             <input type="email" name="email" required />
//           </label>
//           <label>
//             Message:
//             <textarea name="message" required />
//           </label>
//           <button type="submit">Send Message</button>
//         </form>
        
//         <div className="contact-details">
//           <h2>Contact Details</h2>
//           <p><strong>Name:</strong> John Doe</p>
//           <p><strong>Email:</strong> john.doe@example.com</p>
//           <p><strong>Phone:</strong> (123) 456-7890</p>

//           <h2>Social Media</h2>
//           <ul>
//             <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//             <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
//             <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
//             <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Website</a></li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import '../styles/Home.scss';

const skillsData = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'MongoDB', level: '65%' }
];

const Home = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const frontendSkills = [
    { name: 'HTML', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'SCSS', proficiency: 80 },
    { name: 'JavaScript', proficiency: 75 },
    { name: 'React', proficiency: 70 }
  ];
  const backendSkills = [
    { name: 'Node.js', proficiency: 65 },
    { name: 'MongoDB', proficiency: 60 }
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--background-image-url', `url(${process.env.PUBLIC_URL}/images/background.jpg)`);

    const aboutSection = document.getElementById('about');
    const handleScroll = () => {
      if (aboutSection && window.scrollY + window.innerHeight > aboutSection.offsetTop) {
        displaySkills();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (interval) clearInterval(interval);
    };
  }, []);

  let interval = null;

  const displaySkills = () => {
    setVisibleSkills([]);

    let currentSkillIndex = 0;
    const displayInterval = 1000; // 1 second interval for each skill

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      if (currentSkillIndex < frontendSkills.length + backendSkills.length) {
        const allSkills = [...frontendSkills, ...backendSkills];
        setVisibleSkills((prevSkills) => [...prevSkills, allSkills[currentSkillIndex]]);
        currentSkillIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, displayInterval);
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      displaySkills();
    }
  };

  return (
    <div className="home">
      <section className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={`${process.env.PUBLIC_URL}/images/video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <section className="welcome">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, skills, and how to contact me below.</p>
            <img src={`${process.env.PUBLIC_URL}/images/my-profile.jpg`} alt="Profile" className="profile-image" />
          </section>
          <button onClick={handleAboutClick}>Go to About</button>
        </div>
      </section>

      <section className="about" id="about">
        <h1>About Me</h1>
        <p>I am a passionate full-stack developer with experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I specialize in creating responsive, interactive web applications and have a keen eye for detail and design. Feel free to reach out for collaboration or job opportunities.</p>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-section">
            <h3>Frontend</h3>
            <div className="skills-content">
              {frontendSkills.map((skill, index) => (
                <div key={index} className={`skill ${visibleSkills.some(s => s.name === skill.name) ? 'show' : ''}`}>
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-section">
            <h3>Backend</h3>
            <div className="skills-content">
              {backendSkills.map((skill, index) => (
                <div key={index} className={`skill ${visibleSkills.some(s => s.name === skill.name) ? 'show' : ''}`}>
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="projects" id="projects">
        <h1>My Projects</h1>
        <div className="projects-container">
          <div className="project">
            <img src="project1-image-url" alt="Project 1" />
            <h3>Project 1 Title</h3>
            <p>Short description of Project 1.</p>
            <a href="project1-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <img src="project2-image-url" alt="Project 2" />
            <h3>Project 2 Title</h3>
            <p>Short description of Project 2.</p>
            <a href="project2-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <img src="project3-image-url" alt="Project 3" />
            <h3>Project 3 Title</h3>
            <p>Short description of Project 3.</p>
            <a href="project3-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div> */}
      <section className="projects" id="projects">
  <h1>My Projects</h1>
  <div className="projects-container">
    
    <div className="project">
      <h3>Responsive Restaurant Website</h3>
      <p><strong>Technologies:</strong> HTML, CSS</p>
      <p>Developed a responsive restaurant website ensuring a seamless user experience across devices.</p>
      <a href="https://restaurant-website-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    <div className="project">
      <h3>Responsive Portfolio Website</h3>
      <p><strong>Technologies:</strong> HTML, SCSS, React.js</p>
      <p>Developed a fully responsive portfolio website to showcase my skills, projects, and contact information. The site features a modern design with video backgrounds, interactive skill bars, and smooth animations, providing an engaging and user-friendly experience.</p>
      <a href="https://portfolio-website-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    <div className="project">
      <h3>Automated Form Filling System for Fertilizer Inspectors</h3>
      <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Node.js, MongoDB</p>
      <p>Developed a website for automated form filling to reduce repetitive data entry and minimize errors associated with manual data input.</p>
      <a href="https://form-filling-system-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    <div className="project">
      <h3>Snake Game</h3>
      <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
      <p>Created a classic Snake Game using HTML, CSS, and JavaScript. Features include scoring, random food placement, keyboard-controlled movement, collision detection, and a pause option.</p>
      <a href="https://snake-game-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

  </div>
</section>


      <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <p>If you have any questions, comments, or just want to connect, feel free to reach out to me using the form below or contact me directly using the information provided.</p>

        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> POOJA V</p>
          <p><strong>Email:</strong> poojavelusamy03@gmail.com</p>
          <p><strong>Phone:</strong> 9344005427</p>

          <h2>Social Media</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/pooja-v-86610b284/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            {/* <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li> */}
            <li><a href="https://github.com/Yuvapooja" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            {/* <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Website</a></li> */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;

