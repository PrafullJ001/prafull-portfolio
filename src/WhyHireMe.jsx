import React from 'react';
import './WhyHireMe.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Moves the blue glow with the mouse inside the card
const handleMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
};

const WhyHireMe = () => {
  return (
    <section className="terminal_section" id="why-me">
      <div className="container">
        <div className="terminal_grid">
          
          {/* EXPERIENCE SECTION */}
          <motion.div 
            className="terminal_card"
            onMouseMove={handleMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card_header">
              <span className="card_icon"><FontAwesomeIcon icon={faBriefcase} /></span>
              <h2 className="small_heading">Experience</h2>
            </div>
            
            <div className="card_content">
              <div className="exp_item">
                <div className="exp_left">
                  <h3 className="company">Ultimez Technology</h3>
                  <div className="exp_meta">
                    <span className="type">Full Stack Development Internship</span>
                    <span className="duration">JUNE 2025 — NOV 2025</span>
                  </div>
                </div>

                <div className="project_callout">
                  <p className="project_name">AI-Powered Smart Interview Portal</p>
                  <p className="project_desc">
                    Built a scalable interview screening tool,
                    Focused on automated technical assessments and real-time <strong>AI</strong> feedback
                  </p>
                  <div className="mini_tags">
                    <span>React</span><span>Bootstrap</span><span>Node.js</span>
                    <span>Express.js</span><span>MongoDB</span><span>AI</span>
                  </div>     
                </div>
              </div>
            </div>
            <div className="border_glow"></div>
          </motion.div>

          {/* EDUCATION SECTION */}
          <motion.div 
            className="terminal_card"
            onMouseMove={handleMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card_header">
              <span className="card_icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
              <h2 className="small_heading">Education</h2>
            </div>

            <div className="card_content">
              <div className="edu_timeline">
                <div className="edu_entry">
                  <span className="edu_marker"></span>
                  <span className="year">2022 - 2026</span>
                  <div className="edu_card">
                    <span className="edu_icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
                    <div className="edu_text">
                      <p className="degree">B.Tech Computer Engineering</p>
                      <p className="school">Vishwakarma Institute Of Information Technology Pune</p>
                    </div>
                  </div>
                </div>
                <div className="edu_entry">
                  <span className="edu_marker"></span>
                  <span className="year">2021 - 2022</span>
                  <div className="edu_card">
                    <span className="edu_icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <div className="edu_text">
                      <p className="degree">HSC (12th)</p>
                      <p className="school">KTHM College, Nashik</p>
                    </div>
                  </div>
                </div>
                <div className="edu_entry">
                  <span className="edu_marker"></span>
                  <span className="year">2019 - 2020</span>
                  <div className="edu_card">
                    <span className="edu_icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <div className="edu_text">
                      <p className="degree">SSC (10th)</p>
                      <p className="school">Vainateya Vidyalaya, Niphad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border_glow"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;