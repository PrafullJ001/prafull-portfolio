import React from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faLaptopCode, faHospital, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'SmartInterview Preparation Portal with AI feedback',
      content: 'Developed an AI-powered interview platform with real-time feedback using Gemini AI.',
      tech: 'React.js, Bootstrap, Node.js, Express.js, MongoDB, Gemini API.',
      icon: faLaptopCode,
      github: "https://github.com/PrafullJ001/Ai-Powered-SmartInterview-Portal.git"
    },
    {
      title: 'LearnIQ',
      content: 'Developed a centralized Learning Management System to manage scalable coding challenges and assignment.' , 
      tech: 'React.js, Tailwind CSS, Flask, PostgreSQL, Docker ',
      icon: faLayerGroup,
      github: "https://github.com/PrafullJ001/LearnIQ.git"
    },
    {
      title: 'CreatorOS',
      content: 'Built a centralized platform for content creators to post across multiple social platforms in one click. Developed a dashboard for hospital operations, including appointment scheduling and user management.',
      tech: 'React.js, Bootstrap, TypeScript, Spring Boot, MongoDB, Docker. ',
      icon: faHospital,
      github: "https://github.com/PrafullJ001/CreatorOs.git"
    },
  ];

  return (
    <section className="neu_projects_section" id="project">
      {/* Background set to solid black in CSS to match Main.jsx */}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="header_wrapper_centered"
      >
        <h2 className="section_heading">Projects</h2>
        <div className="heading_underline"></div>
      </motion.div>

      <div className="neu_grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="neu_card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="neu_card_header">
              <div className="neu_icon">
                <FontAwesomeIcon icon={project.icon} />
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="neu_git_btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className="neu_card_body">
              <h3>{project.title}</h3>
              <p className="neu_desc">• {project.content}</p>
              
              <div className="neu_tech_stack">
                <span className="tech_tag_title">Technologies</span>
                <p className="tech_tag_content">{project.tech}</p>
              </div>
            </div>

            <a href={project.github} target="_blank" rel="noreferrer" className="neu_footer_btn">
              <span>View Source Code</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
