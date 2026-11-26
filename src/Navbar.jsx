import './Navbar.css';
import React, { useState, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { to: 'mainy', label: 'Home' },
  { to: 'aboutMey', label: 'About Me' },
  { to: 'skills', label: 'Skills' },
  { to: 'project', label: 'Projects' },
  { to: 'contact', label: 'Contact Me' },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState('mainy');
  const locked = useRef(false); // ignore spy while smooth scrolling

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleLinkClick = (to) => {
    setActiveLink(to);
    locked.current = true;
    setTimeout(() => { locked.current = false; }, 350); // a bit longer than duration
    closeMenu();
  };

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
        {links.map(({ to, label }) => (
          <ScrollLink
            key={to}
            to={to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            activeClass="spy-active"
            className={activeLink === to ? 'button active' : 'button'}
            onSetActive={() => { if (!locked.current) setActiveLink(to); }}
            onClick={() => handleLinkClick(to)}
          >
            {label}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;