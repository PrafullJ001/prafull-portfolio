import React, { useState, useEffect } from 'react';
import './About_me.css';
import { motion } from 'framer-motion';

// Import your photo here
import MyPhoto from './images/My_Image.jpg'; 

const bioSegments = [
  { text: "Hi, I'm ", bold: false },
  { text: "Prafull Jadhav", bold: true },
  { text: " — a Full-Stack Developer graduating with a ", bold: false },
  { text: "B.Tech in Computer Science", bold: true },
  { text: " from ", bold: false },
  { text: "VIIT Pune", bold: true },
  { text: " (CGPA ", bold: false },
  { text: "8.08", bold: true },
  { text: "). I build with the ", bold: false },
  { text: "MERN stack", bold: true },
  { text: " — React, Node.js, Express, MongoDB — and I'm comfortable in ", bold: false },
  { text: "Java, JavaScript, and SQL", bold: true },
  { text: " too. ", bold: false },
  { text: "\n\n", bold: false },
  { text: "I spent 6 months as a ", bold: false },
  { text: "Full-Stack Web Developer Intern at Ultimez Technology", bold: true },
  { text: ", shipping production features end-to-end. My focus: ", bold: false },
  { text: "secure REST APIs, scalable architecture, and clean, maintainable code", bold: true },
  { text: " — with a strong DSA and DBMS foundation underneath it all.", bold: false }
];

const AboutMe = () => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentSegmentIndex >= bioSegments.length) return;

    const timeout = setTimeout(() => {
      const currentSegment = bioSegments[currentSegmentIndex];

      setDisplayedContent((prev) => {
        const newContent = [...prev];
        if (!newContent[currentSegmentIndex]) {
          newContent[currentSegmentIndex] = { ...currentSegment, text: "" };
        }
        newContent[currentSegmentIndex].text = currentSegment.text.slice(0, currentCharIndex + 1);
        return newContent;
      });

      if (currentCharIndex < currentSegment.text.length - 1) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setCurrentSegmentIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }, 20);

    return () => clearTimeout(timeout);
  }, [currentSegmentIndex, currentCharIndex]); 

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='about_me' id="aboutMey"
    >
      <h2 className='heading'>About Me</h2>

      <div className="about_split_container">
        
        {/* --- LEFT SIDE: MODERN PHOTO CARD --- */}
        <div className="profile_card_container">
            <div className="profile_card_frame">
                <img src={MyPhoto} alt="Prafull Jadhav" className="profile_img" />
            </div>
            {/* Social Links Row Removed */}
        </div>

        {/* --- RIGHT SIDE: TERMINAL WINDOW --- */}
        <div className='about_terminal_card'>
          <div className="window_header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="terminal_content">
            <p>
              <span className="command_arrow">{">"}</span>
              {displayedContent.map((segment, index) => (
                <span key={index} className={segment.bold ? "highlight-text" : ""}>
                  {segment.text}
                </span>
              ))}
              <span className="cursor">_</span>
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default AboutMe;
