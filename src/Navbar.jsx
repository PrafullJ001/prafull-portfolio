import './Navbar.css';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className='navbar'>
      <div className="left">
        <h1 className="logo_text">
          <span>&lt;Prafull</span>
          <span className="last_name">/Jadhav&gt;</span>
        </h1>
      </div>

      <div className={click ? "hamburger active" : "hamburger"} onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={click ? "right active" : "right"}>
        <ScrollLink to="mainy" spy={true} smooth={true} offset={-100} duration={500} className='button' onClick={closeMenu}>Home</ScrollLink>
        <ScrollLink to="aboutMey" spy={true} smooth={true} offset={-100} duration={500} className='button' onClick={closeMenu}>About Me</ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} offset={-100} duration={500} className='button' onClick={closeMenu}>Skills</ScrollLink>
        <ScrollLink to="project" spy={true} smooth={true} offset={-100} duration={500} className='button' onClick={closeMenu}>Projects</ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} className='button' onClick={closeMenu}>Contact Me</ScrollLink>

      
      </div>
    </div>
  );
};

export default Navbar;