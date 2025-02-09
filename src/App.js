import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import "./App.css";
import SVERI from './assets/sveri-logo.png';
import Vidnyan from './assets/vidnyan-logo.png';
import Shivaji from './assets/shivaji-logo.png';
import JavaCert from './assets/java-cert-logo.png';
import AICert from './assets/ai-cert-logo.png';
import EdunetLogo from './assets/edunet-logo.png';
import NumetryLogo from './assets/numetry-logo.png';
import MyImage from './assets/my-image.png';
import StarsEffect from './StarsEffect'; // Import the StarsEffect component
import Swal from 'sweetalert2'; // Import SweetAlert2

const skills = [
  { category: "Programming", skills: [{ name: "Java", percentage: 90 }, { name: "Python", percentage: 85 }, { name: "PHP", percentage: 80 }, { name: "C#", percentage: 75 }], color: "🟢" },
  { category: "Web Development", skills: [{ name: "Node.js", percentage: 85 }, { name: "React", percentage: 80 }, { name: "Angular", percentage: 75 }, { name: "Flask", percentage: 70 }, { name: "ASP.NET", percentage: 65 }], color: "🟠" },
  { category: "Databases", skills: [{ name: "MySQL", percentage: 90 }, { name: "MongoDB", percentage: 85 }], color: "🔵" },
  { category: "Cloud & AI", skills: [{ name: "Generative AI", percentage: 80 }, { name: "Cloud Computing", percentage: 75 }, { name: "Machine Learning", percentage: 70 }], color: "🟣" },
  { category: "Version Control & OS", skills: [{ name: "Git", percentage: 90 }, { name: "GitHub", percentage: 85 }, { name: "Linux", percentage: 80 }], color: "🟡" },
  { category: "Tools", skills: [{ name: "Android Studio", percentage: 75 }, { name: "Eclipse", percentage: 70 }, { name: "IntelliJ IDEA", percentage: 65 }], color: "🟠" }
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f0765e18-75d9-4216-b371-2696c7736bfe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message has been successfully delivered to Harshal Khadatare!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Done',
        text: 'Your message has been successfully delivered to Harshal Khadatare!',
      });
    }
  };

  return (
    <>
      <div className="container">
        <StarsEffect /> {/* Add the StarsEffect component */}
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">Harshal.dev</div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero reveal fade-in">
          <div className="hero-content">
            <h1>Harshal Khadatare</h1>
            <p>Cloud Engineer | Full Stack Developer</p>
            <div className="social-buttons">
              <a href="https://github.com/Harshroo45" className="social-button" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/harshal-khadatare-9882ab23a/" className="social-button" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/hrshh17_?igsh=MndqdTd1ZXJlam8z" className="social-button" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://leetcode.com/u/Harshhh_45/" className="social-button" target="_blank" rel="noopener noreferrer">
                <FaCode />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={MyImage} alt="Harshal Khadatare" />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="content reveal fade-in">
          <h2>Experience</h2>
          <div className="experience-grid">
            <div className="experience-box">
              <img src={EdunetLogo} alt="Edunet Foundation Logo" className="experience-logo" />
              <h3>Software Developer Intern
              </h3>
              <p>Numetry Technologies, Pune | 2025 - Present (6 - Month)</p>
              <p>
                I  am currently working as a Software Developer Intern at Numetry Technologies, Pune, gaining experience in full-stack development and cloud solutions. I work with Java, Python, Flutter, Node.js, React, Angular, and Firebase to develop and optimize applications. This internship is helping me enhance my problem-solving skills, industry knowledge, and real-world project experience.
              </p>
              <a href="https://numetry.in/" className="experience-link" target="_blank" rel="noopener noreferrer">Visit Company</a>
            </div>
            <div className="experience-box">
              <img src={NumetryLogo} alt="Numetry Technologies Logo" className="experience-logo" />
              <h3>Software Developer Intern</h3>
              <p>Edunet Foundation | 2024 - 2025 (1 - Month)</p>
              <p>
              I worked as a Software Developer Intern at Edunet Foundation, where I developed a "Chatbot using natural language processing" using Python and Flask. This project enhanced my skills in natural language processing, backend development, and AI-driven chatbots. I successfully completed the project, gaining valuable hands-on experience in building intelligent systems.
              </p>
              <a href="https://edunetfoundation.org/" className="experience-link" target="_blank" rel="noopener noreferrer">Visit Company</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="content reveal fade-in">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            {skills.map((skillCategory, index) => (
              <div key={skillCategory.category} className="skill-category" data-category={skillCategory.category.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}>
                <h3 className="category-title">{skillCategory.category}</h3>
                {skillCategory.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ '--progress': `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="content reveal fade-in">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Chatbot using NLP</h3>
              <p>Tools: Jupyter Notebook, MySQL</p>
              <p>Built a machine learning-based chatbot using NLP. Used pre-trained models for better accuracy.</p>
              <p>Libraries: NLTK, SpaCy, OpenAI API, TensorFlow, NumPy, Flask, Streamlit</p>
              <a href="https://github.com/Harshroo45" className="project-button">GitHub</a>
            </div>
            <div className="project-card">
              <h3>Farmer-Customer Marketplace</h3>
              <p>Tools: VS Code, MySQL Workbench</p>
              <p>Developed a Flask-based web application for farmers to sell products directly to customers.</p>
              <p>Technologies: Python, Flask, Flask-SQL Alchemy, Git, MySQL</p>
              <a href="https://github.com/Harshroo45/Customer-and-Farmer-Marketplace-using-Flask-Python" className="project-button">GitHub</a>
            </div>
            <div className="project-card">
              <h3>City Space Parking</h3>
              <p>Tools: VS Code, Git, MySQL</p>
              <p>Developed a Java-based web application for real-time parking availability and reservation.</p>
              <p>Technologies: Java, Spring Boot, MySQL, JDBC</p>
              <a href="https://github.com/Harshroo45" className="project-button">GitHub</a>
            </div>
            <div className="project-card">
              <h3>Post Office Management System</h3>
              <p>Tools: Visual Studio 2022, MySQL Workbench</p>
              <p>Developed a system using C# for real-time tracking and appointment booking.</p>
              <p>Technologies: C#, .NET, SQL Server</p>
              <a href="https://github.com/Harshroo45/Post-Office-Management-System" className="project-button">GitHub</a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="content reveal fade-in">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-box">
              <img src={SVERI} alt="SVERI Logo" className="education-logo" />
              <h3>SVERI's College of Engineering, Pandharpur</h3>
              <p>MCA</p>
              <p>GPA: 9.07 | 2023 - 2025</p>
              <p><a href="https://coe.sveri.ac.in/" className="education-link" target="_blank" rel="noopener noreferrer">Visit College</a></p>
            </div>
            <div className="education-box">
              <img src={Vidnyan} alt="Vidnyan Logo" className="education-logo" />
              <h3>Vidnyan Mahavidyalay, Sangola</h3>
              <p>Bachelor of Computer Science (BCS)</p>
              <p>GPA: 8.86 | 2020 - 2023</p>
              <p><a href="https://vmssangola.org/" className="education-link" target="_blank" rel="noopener noreferrer">Visit College</a></p>
            </div>
            <div className="education-box">
              <img src={Shivaji} alt="Shivaji Logo" className="education-logo" />
              <h3>Shri Shivaji Vidyalaya and Jr. College, Mahud BK</h3>
              <p>12th (HSC) | PCM</p>
              <p>63% | 2020</p>
              <p><a href="https://schools.org.in/solapur/27300906413/s-shivaji-vidhyalay-mahud-bk.html" className="education-link" target="_blank" rel="noopener noreferrer">Visit College</a></p>
            </div>
            <div className="education-box">
              <img src={Shivaji} alt="Shivaji Logo" className="education-logo" />
              <h3>Shri Shivaji Vidyalaya and Jr. College, Mahud BK</h3>
              <p>10th (SSC)</p>
              <p>74% | 2018</p>
              <p><a href="https://schools.org.in/solapur/27300906413/s-shivaji-vidhyalay-mahud-bk.html" className="education-link" target="_blank" rel="noopener noreferrer">Visit College</a></p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="content reveal fade-in">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-box">
              <img src={JavaCert} alt="Java Certification Logo" className="certification-logo" />
              <h3>Java Certification Course</h3>
              <p>Fourise Software Solutions, Pune | 2024</p>
              <p>
                Skilled in Object-Oriented Programming (OOP), data structures, and multithreading to
                create scalable Java applications.
              </p>
            </div>
            <div className="certification-box">
              <img src={AICert} alt="AI Certification Logo" className="certification-logo" />
              <h3>Career Essentials in Generative AI</h3>
              <p>Microsoft & LinkedIn | 2024</p>
              <p>
                Learned techniques in AI and machine learning to apply generative models to real-world
                problems.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="footer reveal fade-in">
          <h2>Contact</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name"  required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="tiny-button pulse">Send</button>
          </form>
          
          <p className="copyright">
            &copy; 2025 Harshal Khadatare. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;