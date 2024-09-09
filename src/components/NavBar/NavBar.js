import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo-black-1.png";
import Instagram from "../../images/Instagram.svg";
import Linkedin from "../../images/LinkedIn.svg";
import Hamburger from "../../images/Menu.svg";
import Multiply from "../../images/Multiply.svg";
import './NavBar.css';
import ReactGA from 'react-ga4';

const NavBar = ({ isOpen, toggleMenu }) => {

  const triggerGAEvent = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'Sign Up Button'
    });
  }
  return (
    <div className="navbar">
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {!isOpen ? <img src={Hamburger} alt="Hamburger" className="custom-icon" /> : <img src={Multiply} alt="Close" className="custom-icon" />}
      </div>
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <div className='navbar-tabs'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOE8SfN7DiN9H3JzJAxzNXwtb8YrzqDqCXZh4IZ-IkEJMobQ/viewform" target="_blank" rel="noopener noreferrer" className="ticket-form">BUY TICKETS</a>
          {/* <NavLink to="/speakers" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Speakers</NavLink> */}
          <NavLink to="/talks" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Talks</NavLink>
          <NavLink to="/blogs" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Blogs</NavLink>
          <NavLink to="/sponsors" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Sponsors</NavLink>
          <NavLink to="/faq" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>FAQ</NavLink>
          <NavLink to="/team" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Team</NavLink>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/tedxuw/" target="_blank" rel="noopener noreferrer" style={{height: 32}}>
            <img src={Instagram} alt="Instagram" className="custom-icon" onClick={(triggerGAEvent('instagram'))}/>
          </a>
          <a href="https://www.linkedin.com/company/tedxuw/" target="_blank" rel="noopener noreferrer" style={{height: 32}}>
            <img src={Linkedin} alt="Linkedin" className="custom-icon" onClick={(triggerGAEvent('linkedin'))}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;