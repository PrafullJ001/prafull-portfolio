import React, { useState, useEffect } from 'react';
import './About_me.css';
import { motion } from 'framer-motion';

// Import your photo here
import MyPhoto from './images/My_Image.jpg'; 

const bioSegments = [
  { text: "Hello! I'm ", bold: false },
  { text: "Prafull Jadhav", bold: true },
  { text: ", a final-year B.Tech Computer Science student at ", bold: false },
  { text: "VIIT Pune", bold: true },
  { text: ". I have a strong command of Computer Engineering fundamentals like ", bold: false },
  { text: "OS, DBMS, DSA, and Computer Networks", bold: true },
  { text: ". I am a passionate ", bold: false },
  { text: "Full Stack Developer", bold: true },
  { text: " with experience as a Web Development Intern at ", bold: false },
  { text: "Ultimez Technology", bold: true },
  { text: ". My expertise lies in the ", bold: false },
  { text: "MERN Stack (MongoDB, Express, React, Node.js)", bold: true },
  { text: ", and I am also proficient in ", bold: false },
  { text: "Java, Python, and SQL", bold: true },
  { text: ", with a strong focus on building scalable backend services.", bold: false },
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