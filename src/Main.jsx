import React, { useState, useEffect, useCallback } from 'react';
import './Main.css'; // Make sure this matches your file name (Main.css or main2.css)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faCodeBranch, faLaptopCode, faDatabase, faServer, faWind,
  faArrowRight, faDownload, faLocationDot, faGraduationCap, faBriefcase, faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ResumePDF from './Prafull_Jadhav_Resume.pdf';

const roles = [
  "Computer Engineer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "React Developer",
  "Backend Developer",
];

// Slides a line of text up out of a mask
const Reveal = ({ children, delay = 0 }) => (
  <span className="mask">
    <motion.span
      className="mask_inner"
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const Main = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(80);

  const tick = useCallback(() => {
    let fullText = roles[roleIndex % roles.length];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => prev + 1);
      setDelta(80);
    } else {
      setDelta(50);
    }
  }, [isDeleting, roleIndex, text]);

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  const techItems = (
    <>
      <span className="tech_item"><FontAwesomeIcon icon={faCodeBranch} className="tech_icon icon_react" /> React.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faServer} className="tech_icon icon_node" /> Node.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faDatabase} className="tech_icon icon_mongo" /> MongoDB</span>
      <span className="tech_item"><FontAwesomeIcon icon={faLaptopCode} className="tech_icon icon_express" /> Express.js</span>
      <span className="tech_item"><FontAwesomeIcon icon={faCodeBranch} className="tech_icon icon_java" /> Java</span>
      <span className="tech_item"><FontAwesomeIcon icon={faHtml5} className="tech_icon icon_html" /> HTML5</span>
      <span className="tech_item"><FontAwesomeIcon icon={faCss3Alt} className="tech_icon icon_css" /> CSS3</span>
      <span className="tech_item"><FontAwesomeIcon icon={faBootstrap} className="tech_icon icon_bootstrap" /> Bootstrap</span>
      <span className="tech_item"><FontAwesomeIcon icon={faWind} className="tech_icon icon_tailwind" /> Tailwind CSS</span>
    </>
  );

  return (
    <div className="Main_Wrapper" id="mainy">
      <div className="bg_grid" />
      <div className="bg_glow top_left" />

      <div className="hero_inner">
        {/* Top row: badge */}
        <motion.div className="status_badge" {...fadeUp(0.1)}>
          <span className="status_dot" />
          Available for work
        </motion.div>

        {/* Giant name + contact card */}
        <div className="name_row">
          <h1 className="hero_name">
            <Reveal delay={0.15}><span className="name_solid">Prafull</span></Reveal>
            <Reveal delay={0.3}><span className="name_outline">Jadhav</span></Reveal>
          </h1>

          <motion.a href="#contact" className="contact_card" aria-label="Contact me" {...fadeUp(0.8)}>
            <span className="contact_text">
              <span className="contact_big">Let's Connect</span>
            </span>
            <span className="contact_arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
          </motion.a>
        </div>

        {/* Role + summary + buttons */}
        <div className="intro_row">
          <motion.div className="intro_left" {...fadeUp(0.6)}>
            <h2 className="hero_role">
              <span className="role_prefix">I am a</span>{' '}
              <span className="highlight_text">{text}</span>
              <span className="cursor" />
            </h2>
            <p className="hero_subtext">
              A <span className="hl">Full Stack Developer</span> specializing in the{' '}
              <span className="hl">MERN stack</span>, dedicated to building{' '}
              <span className="hl">secure</span>, <span className="hl">scalable</span> and{' '}
              <span className="hl">high-performance</span> web applications with clean
              architecture and attention to detail.
            </p>
          </motion.div>

          <motion.div className="hero_btn_group" {...fadeUp(0.7)}>
            <a href="#contact" className="btn_fill">
              Contact me <FontAwesomeIcon icon={faArrowRight} className="btn_icon" />
            </a>
            <a href={ResumePDF} target="_blank" rel="noreferrer" className="btn_glass">
              <FontAwesomeIcon icon={faDownload} className="btn_icon" /> Resume
            </a>
          </motion.div>
        </div>

        {/* Info columns */}
        <motion.div className="info_row" {...fadeUp(0.85)}>
          <div className="info_col card_loc">
            <span className="info_icon"><FontAwesomeIcon icon={faLocationDot} /></span>
            <span className="info_label">Based in</span>
            <span className="info_value">Pune, India</span>
          </div>
          <div className="info_col card_edu">
            <span className="info_icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
            <span className="info_label">Education</span>
            <span className="info_value">B.Tech CSE</span>
            <span className="info_sub">VIIT Pune</span>
          </div>
          <div className="info_col card_exp">
            <span className="info_icon"><FontAwesomeIcon icon={faBriefcase} /></span>
            <span className="info_label">Experience</span>
            <span className="info_value">Full-Stack Intern</span>
            <span className="info_sub">Ultimez</span>
          </div>
          <div className="info_col card_conn">
            <span className="info_icon"><FontAwesomeIcon icon={faPaperPlane} /></span>
            <span className="info_label">Connect</span>
            <div className="social_icons">
              <a href="https://github.com/PrafullJ001" target="_blank" rel="noreferrer" aria-label="GitHub" className="social_btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/prafulljadhav99" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social_btn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:jprafull40@gmail.com" aria-label="Email" className="social_btn">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling tech bar */}
      <div className="tech_ticker_wrapper">
        <div className="tech_ticker">
          {techItems}
          {techItems}
          {techItems}
        </div>
      </div>
    </div>
  );
};

export default Main;