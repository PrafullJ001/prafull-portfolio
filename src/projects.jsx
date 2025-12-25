import React from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Placeholder images
const project1Img = "https://placehold.co/800x500/1e1e1e/FFF?text=Smart+Interview";
const project2Img = "https://placehold.co/800x500/1e1e1e/FFF?text=Student+DB";
const project3Img = "https://placehold.co/800x500/1e1e1e/FFF?text=Hospital+App";

const Projects = () => {
  const projects = [
    {
      title: 'AI Powered SmartInterview Portal',
      description: 'An AI-driven interview preparation portal providing real-time feedback using Google Gemini AI. Features include mock interviews, automated scoring, and detailed performance analysis reports.',
      tags: ["React.js", "Node.js", "Gemini API", "MongoDB"],
      image: project1Img,
      github: "https://github.com/PrafullJ001"
    },
    {
      title: 'Student Database System',
      description: 'A full-stack administrative dashboard to manage student records, grades, and attendance. Implements role-based access control (RBAC) for admins, teachers, and students.',
      tags: ["MySQL", "Express.js", "React", "Node.js"],
      image: project2Img,
      github: "https://github.com/PrafullJ001"
    },
    {
      title: 'Hospital Management',
      description: 'A comprehensive system for scheduling appointments, managing patient history, and doctor availability. Streamlines hospital operations and digitizes patient records efficiently.',
      tags: ["MERN Stack", "Bootstrap", "Redux"],
      image: project3Img,
      github: "https://github.com/PrafullJ001"
    },
  ];

  return (
    <div className="projects_section" id="project">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='heading1'
      >
        Featured Projects
      </motion.h2>

      <div className="projects_list">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`project_row ${index % 2 !== 0 ? 'reverse_layout' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            
            {/* Project Image Side */}
            <div className="project_image_container">
                <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} className="project_img" />
                    <div className="img_overlay"></div>
                </a>
            </div>

            {/* Project Details Side */}
            <div className="project_info">
                <h3 className="project_title">{project.title}</h3>
                
                <div className="project_desc_box">
                    <p>{project.description}</p>
                </div>

                <div className="project_tech_list">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="tech_pill">{tag}</span>
                    ))}
                </div>

                <div className="project_links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="github_btn">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View Code</span>
                    </a>
                </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;