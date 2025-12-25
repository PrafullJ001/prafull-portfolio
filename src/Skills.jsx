import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLayerGroup, 
  faServer, 
  faDatabase, 
  faTerminal, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  
  // CDN for high-quality dev icons
  const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  const skillCategories = [
    {
      title: "Languages",
      icon: faCode,
      skills: [
        { name: "Java", img: `${iconBase}/java/java-original.svg` },
        { name: "Python", img: `${iconBase}/python/python-original.svg` },
        { name: "JavaScript", img: `${iconBase}/javascript/javascript-original.svg` }
      ]
    },
    {
      title: "Frontend",
      icon: faLayerGroup,
      skills: [
        { name: "React", img: `${iconBase}/react/react-original.svg` },
        { name: "Tailwind css", img: `https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg` },
        { name: "HTML5", img: `${iconBase}/html5/html5-original.svg` },
        { name: "CSS3", img: `${iconBase}/css3/css3-original.svg` },
        { name: "Bootstrap", img: `${iconBase}/bootstrap/bootstrap-original.svg` }
      ]
    },
    {
      title: "Backend",
      icon: faServer,
      skills: [
        { name: "Node.js", img: `${iconBase}/nodejs/nodejs-original.svg` },
        { name: "Express.js", img: `${iconBase}/express/express-original.svg` },
        { name: "REST API", img: "https://img.icons8.com/fluency/48/api-settings.png" }, 
        { name: "JWT", img: "https://img.icons8.com/color/48/key-security.png" }
      ]
    },
    {
      title: "Database",
      icon: faDatabase,
      skills: [
        { name: "MongoDB", img: `${iconBase}/mongodb/mongodb-original.svg` },
        { name: "MySQL", img: `${iconBase}/mysql/mysql-original.svg` },
        { name: "Firebase", img: `${iconBase}/firebase/firebase-plain.svg` },
      ]
    },
    {
      title: "CS Core",
      icon: faTerminal,
      skills: [
        // FIXED: New reliable URL for DSA
        { name: "DSA", img: "https://img.icons8.com/external-flat-icons-inmotus-design/67/external-Algorithm-puzzles-flat-icons-inmotus-design.png" },
        { name: "OOPs", img: "https://img.icons8.com/fluency/48/class.png" },
        { name: "OS", img: "https://img.icons8.com/color/48/linux--v1.png" },
        { name: "DBMS", img: "https://img.icons8.com/color/48/data-configuration.png" },
        { name: "Networks", img: "https://img.icons8.com/color/48/workstation.png" }
      ]
    }, 
    {
      title: "Tools",
      icon: faTools,
      skills: [
        { name: "Git", img: `${iconBase}/git/git-original.svg` },
        { name: "GitHub", img: "https://img.icons8.com/fluency/48/github.png" },
        { name: "VS Code", img: `${iconBase}/vscode/vscode-original.svg` },
        { name: "Vercel", img: `${iconBase}/vercel/vercel-original.svg` },
        { name: "Render", img: "https://img.icons8.com/fluency/48/cloud.png" },
        { name: "Postman", img: `${iconBase}/postman/postman-original.svg` }
      ]
    }
  ];

  // Animation variants remain the same...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className='skills_section' id="skills">
      <motion.div 
        className="section_header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className='heading1'>Technical Skills</h2>
        <div className="heading_line"></div>
      </motion.div>

      <motion.div 
        className="skills_wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} className="skill_card_modern" variants={cardVariants}>
            <div className="card_header_modern">
              <div className="category_icon">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <h3>{category.title}</h3>
            </div>

            <div className="skill_capsule_container">
              {category.skills.map((skill, idx) => (
                <motion.div 
                    key={idx} 
                    className="skill_capsule"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(3, 176, 253, 0.15)" }}
                >
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="capsule_img" 
                    onError={(e) => { e.target.src = "https://img.icons8.com/ios/50/code.png"; }} // Fallback icon
                  />
                  <span className="capsule_text">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;