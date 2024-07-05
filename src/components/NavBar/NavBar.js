import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo-black-1.png";
import Instagram from "../../images/Instagram.svg";
import Linkedin from "../../images/LinkedIn.svg";
import Hamburger from "../../images/Menu.svg";
import Multiply from "../../images/Multiply.svg";
import './NavBar.css';

const NavBar = ({ isOpen, toggleMenu }) => {

  return (
    <div className="navbar">
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {!isOpen ? <img src={Hamburger} alt="Hamburger" className="custom-icon" /> : <img src={Multiply} alt="Close" className="custom-icon" />}
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <div className='navbar-tabs'>
          <NavLink to="/speakers" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Speakers</NavLink>
          <NavLink to="/talks" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Talks</NavLink>
          <NavLink to="/blogs" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Blogs</NavLink>
          <NavLink to="/sponsors" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Sponsors</NavLink>
          <NavLink to="/faq" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>FAQ</NavLink>
          <NavLink to="/team" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Team</NavLink>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/tedxuw/" target="_blank" rel="noopener noreferrer" style={{height: 32}}>
            <img src={Instagram} alt="Instagram" className="custom-icon" />
          </a>
          <a href="https://www.linkedin.com/company/tedxuw/" target="_blank" rel="noopener noreferrer" style={{height: 32}}>
            <img src={Linkedin} alt="Linkedin" className="custom-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;