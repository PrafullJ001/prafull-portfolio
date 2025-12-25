import React, { useState, useEffect, useCallback } from 'react';
import './Main.css'; // Make sure this matches your file name (Main.css or main2.css)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCodeBranch, faLaptopCode, faDatabase, faServer, faWind } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ResumePDF from './Prafull_Jadhav_Viit.pdf'; 
//import { Link } from 'react-router-dom';

// 1. FIXED: Moved 'roles' outside the component so it doesn't get recreated on every render
const roles = ["Full Stack Developer", "MERN Stack Developer", "Computer Engineer"];

const Main = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  // 2. Wrap tick in useCallback
  const tick = useCallback(() => {
    let fullText = roles[roleIndex % roles.length];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => prev + 1);
      setDelta(150);
    } else {
      setDelta(100);
    }
  }, [isDeleting, roleIndex, text]); // 'roles' is no longer a dependency because it's outside

  // 3. useEffect now runs smoothly without warning
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  // --- TECH ITEMS LIST ---
  const techItems = (
    <>
      <span className="tech_item"><FontAwesomeIcon icon={faCodeBranch} /> React.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faServer} /> Node.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faDatabase} /> MongoDB</span>
      <span className="tech_item"><FontAwesomeIcon icon={faLaptopCode} /> Express.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faCodeBranch} /> Java</span>
      <span className="tech_item"><FontAwesomeIcon icon={faServer} /> Python</span>
      <span className="tech_item"><FontAwesomeIcon icon={faHtml5} /> HTML5</span>
      <span className="tech_item"><FontAwesomeIcon icon={faCss3Alt} /> CSS3</span>
      <span className="tech_item"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</span>
      <span className="tech_item"><FontAwesomeIcon icon={faWind} /> Tailwind CSS</span>
    </>
  );

  return (
    <div className='Main_Wrapper' id="mainy">
      
      {/* Background Glows for ambiance */}
      <div className="bg_glow top_left"></div>
      <div className="bg_glow bottom_right"></div>

      <motion.div 
        className="hero_content_centered"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Badge */}
        <div className="status_badge">
          <span className="status_dot"></span> 
          <span style={{ color: 'white', WebkitTextFillColor: 'white' }}>AVAILABLE FOR WORK</span>
        </div>

        {/* Main Text */}
        <h1 className="hero_name">Prafull Jadhav</h1>
        
        <h2 className="hero_role">
          I am <span className="highlight_text">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero_subtext">
          Clean code | Scalable architecture | Exceptional user experiences. 
        </p>

        {/* Buttons */}
        <div className="hero_btn_group">
          <a href="#contact" className="btn_fill">
            Contact Me
          </a>
          <a href={ResumePDF} target="_blank" rel="noreferrer" className="btn_glass">
            Resume
          </a>
        </div>

        {/* Socials Row */}
        <div className="social_row_center">
          <a href="https://github.com/PrafullJ001" target="_blank" rel="noreferrer" className="social_pill">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/prafulljadhav99" target="_blank" rel="noreferrer" className="social_pill">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="mailto:jprafull40@gmail.com" className="social_pill">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>

      </motion.div>

      {/* --- SCROLLING TECH BAR --- */}
      <div className="tech_ticker_wrapper">
        <div className="tech_ticker">
           {techItems}
           {techItems}
           {techItems}
        </div>
      </div>

    </div>
  )
}

export default Main;