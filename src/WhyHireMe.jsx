import React from 'react';
import './WhyHireMe.css';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
  return (
    <section className="terminal_section" id="why-me">
      <div className="container">
        <div className="terminal_grid">
          
          {/* EXPERIENCE SECTION */}
          <motion.div 
            className="terminal_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card_header">
              <span className="dot"></span>
              <h2 className="small_heading">EXPERIENCE</h2>
            </div>
            
            <div className="card_content">
              <div className="exp_item">
                <h3 className="company">Ultimez Technology <span className="type">Internship</span></h3>
                <p className="duration">JUNE 2025 — NOV 2025</p>
                
                <div className="project_callout">
                  <p className="project_name">AI-Powered Smart Interview Portal</p>
                  <p className="project_desc">
                    Built a scalable interview screening tool,
                    Focused on automated technical assessments and real-time <strong>Gemini AI</strong> feedback
                  </p>
                  <div className="mini_tags flex flex-col">
                    <span>React</span><span>Bootstrap</span><span>Node.js</span>
                    <span>Express.js</span><span>MongoDB Atlas</span><span>AI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border_glow"></div>
          </motion.div>

          {/* EDUCATION SECTION */}
          <motion.div 
            className="terminal_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card_header">
              <span className="dot blue"></span>
              <h2 className="small_heading">EDUCATION</h2>
            </div>

            <div className="card_content">
              <div className="edu_timeline">
                <div className="edu_entry">
                  <span className="year">2022 - 2026</span>
                  <p className="degree">B.Tech Computer Engineering</p>
                  <p className="school">Vishwakarma Institute Of Information Pune</p>
                </div>
                <div className="edu_entry">
                  <span className="year">2021 - 2022</span>
                  <p className="degree">HSC (12th)</p>
                  <p className="school">KTHM College, Nashik</p>
                </div>
                <div className="edu_entry">
                  <span className="year">2019 - 2020</span>
                  <p className="degree">SSC (10th)</p>
                  <p className="school">Vainateya Vidyalaya, Niphad</p>
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