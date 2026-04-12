// import React from 'react';
// import './projects.css';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// // 1. Import your actual images from the src folder
// import project1Img from './smart-interview.jpg'; 
// import project2Img from './student-db.jpg';
// import project3Img from './hospital.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'AI Powered SmartInterview Portal',
//       description: 'An AI-driven interview preparation portal providing real-time feedback using Google Gemini AI. Features include mock interviews, automated scoring, and detailed performance analysis reports.',
//       tags: ["React.js", "Node.js", "Gemini API", "MongoDB"],
//       image: project1Img, // Uses the imported file
//       github: "https://github.com/PrafullJ001"
//     },
//     {
//       title: 'Student Database System',
//       description: 'A full-stack administrative dashboard to manage student records, grades, and attendance. Implements role-based access control (RBAC) for admins, teachers, and students.',
//       tags: ["MySQL", "Express.js", "React", "Node.js"],
//       image: project2Img,
//       github: "https://github.com/PrafullJ001"
//     },
//     {
//       title: 'Hospital Management',
//       description: 'A comprehensive system for scheduling appointments, managing patient history, and doctor availability. Streamlines hospital operations and digitizes patient records efficiently.',
//       tags: ["MERN Stack", "Bootstrap", "Redux"],
//       image: project3Img,
//       github: "https://github.com/PrafullJ001"
//     },
//   ];

//   return (
//     <div className="projects_section" id="project">
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className='heading1'
//       >
//         Featured Projects
//       </motion.h2>

//       <div className="projects_list">
//         {projects.map((project, index) => (
//           <motion.div 
//             key={index} 
//             className={`project_row ${index % 2 !== 0 ? 'reverse_layout' : ''}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
            
//             {/* Project Image Side */}
//             <div className="project_image_container">
//                 <a href={project.github} target="_blank" rel="noreferrer">
//                     {/* The image will now fill the black box area */}
//                     <img src={project.image} alt={project.title} className="project_img" />
//                     <div className="img_overlay"></div>
//                 </a>
//             </div>

//             {/* Project Details Side */}
//             <div className="project_info">
//                 <h3 className="project_title">{project.title}</h3>
                
//                 <div className="project_desc_box">
//                     <p>{project.description}</p>
//                 </div>

//                 <div className="project_tech_list">
//                     {project.tags.map((tag, i) => (
//                         <span key={i} className="tech_pill">{tag}</span>
//                     ))}
//                 </div>

//                 <div className="project_links">
//                     <a href={project.github} target="_blank" rel="noreferrer" className="github_btn">
//                         <FontAwesomeIcon icon={faGithub} />
//                         <span>View Code</span>
//                     </a>
//                 </div>
//             </div>

//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;







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
      github: "https://github.com/PrafullJ001"
    },
    {
      title: 'ERP System',
      content: 'Developed a centralized ERP system to manage student records, and faculty operations.',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT.',
      icon: faLayerGroup,
      github: "https://github.com/PrafullJ001"
    },
    {
      title: 'Hospital Management System',
      content: 'Developed a dashboard for hospital operations, including appointment scheduling and user management.',
      tech: 'React.js, Bootstrap, Node.js, Express.js, MY SQL.',
      icon: faHospital,
      github: "https://github.com/PrafullJ001"
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
