import React, { useState, useEffect } from 'react';
import './About_me.css';
import { motion } from 'framer-motion';

// Import your photo here
import MyPhoto from './images/My_Image.jpg';

const bioSegments = [
  { text: "I'm ", bold: false },
  { text: "Prafull Jadhav", bold: true },
  { text: ", a full-stack developer from Pune. I just finished my ", bold: false },
  { text: "B.Tech in Computer Science at VIIT Pune", bold: true },
  { text: " with a CGPA of ", bold: false },
  { text: "8.08", bold: true },
  { text: ".\n\nI build with the ", bold: false },
  { text: "MERN stack", bold: true },
  { text: " and ship ", bold: false },
  { text: "secure REST APIs", bold: true },
  { text: " that real people use. ", bold: false },
  { text: "EssMitra", bold: true },
  { text: ", my farm-service platform, handles billing and payments for ", bold: false },
  { text: "500+ farmers", bold: true },
  { text: ". I also like adding ", bold: false },
  { text: "AI features", bold: true },
  { text: ", like the AI-powered mock interviews in ", bold: false },
  { text: "SmartInterview", bold: true },
  { text: ".\n\nAt ", bold: false },
  { text: "Ultimez Technology", bold: true },
  { text: " I spent six months as a full-stack intern building MERN apps. Off the keyboard, I led ", bold: false },
  { text: "100+ student volunteers", bold: true },
  { text: " as Computer Department Head of NSS-VIIT.", bold: false },
];

const totalChars = bioSegments.reduce((sum, s) => sum + s.text.length, 0);

const facts = [
  { value: '8.08', label: 'CGPA, B.Tech CSE' },
  { value: '500+', label: 'Manage Farmers on EssMitra' },
  { value: '6 months', label: 'Full-stack internship' },
  { value: '100+', label: 'Student volunteers led' },
];

const iconProps = {
  viewBox: '0 0 24 24',
  width: 20,
  height: 20,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
);

const CodeIcon = () => (
  <svg {...iconProps}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
  </svg>
);

const rows = [
  { icon: <UserIcon />, label: 'Introduction' },
  { icon: <CodeIcon />, label: 'What I build' },
  { icon: <BriefcaseIcon />, label: 'Experience' },
];

// Type the bio up to `count` characters, grouped into paragraphs (split on blank lines)
const renderParagraphs = (count) => {
  let remaining = count;
  const paras = [[]];
  for (let i = 0; i < bioSegments.length && remaining > 0; i++) {
    const seg = bioSegments[i];
    const text = seg.text.slice(0, remaining);
    remaining -= text.length;
    text.split('\n\n').forEach((part, idx) => {
      if (idx > 0) paras.push([]);
      if (part) {
        paras[paras.length - 1].push(
          <span key={`${i}-${idx}`} className={seg.bold ? 'highlight-text' : ''}>
            {part}
          </span>
        );
      }
    });
  }
  return paras.filter((p) => p.length > 0);
};

const AboutMe = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [count, setCount] = useState(prefersReducedMotion ? totalChars : 0);
  const [started, setStarted] = useState(prefersReducedMotion);
  const done = count >= totalChars;

  useEffect(() => {
    if (!started || done) return;
    const id = setInterval(() => {
      setCount((c) => Math.min(c + 2, totalChars));
    }, 16);
    return () => clearInterval(id);
  }, [started, done]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
      onViewportEnter={() => setStarted(true)}
      className="about_me"
      id="aboutMey"
    >
      <h2 className="heading">About Me</h2>

      <div className="about_split_container">
        {/* LEFT: photo */}
        <div className="profile_card_container">
          <div className="profile_card_frame">
            <img src={MyPhoto} alt="Prafull Jadhav" className="profile_img" />
          </div>
          <div className="status_chip">
            <span className="status_dot" />
            Open to full-time roles.
          </div>
        </div>

        {/* RIGHT: story card */}
        <div className="about_content_card">
          <div className="story">
            {renderParagraphs(count).map((para, i) => (
              <div key={i} className="story_row">
                <span className="story_node">{rows[i]?.icon}</span>
                <div className="story_text">
                  <span className="story_label">{rows[i]?.label}</span>
                  <p className="bio">
                    {para}
                    {!done && i === renderParagraphs(count).length - 1 && <span className="cursor" />}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Quick facts */}
      <div className="facts_strip">
        {facts.map((f) => (
          <div key={f.label} className="fact">
            <span className="fact_value">{f.value}</span>
            <span className="fact_label">{f.label}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutMe;