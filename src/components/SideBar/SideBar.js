import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import ThemeLogo from "../../images/themedLogo.svg";

const SideBar = ({ isOpen, toggleMenu }) => {

  return (
    <div className={`sidebar-links ${isOpen ? "open" : ""}`}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOE8SfN7DiN9H3JzJAxzNXwtb8YrzqDqCXZh4IZ-IkEJMobQ/viewform" target="_blank" rel="noopener noreferrer" className="ticket-form">BUY TICKETS</a>
      <NavLink to="/speakers" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Speakers</NavLink>
      <NavLink to="/talks" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Talks</NavLink>
      <NavLink to="/blogs" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Blogs</NavLink>
      <NavLink to="/sponsors" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Sponsors</NavLink>
      <NavLink to="/faq" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>FAQ</NavLink>
      <NavLink to="/team" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Team</NavLink>
      <div className="sidebar-logo">
        <img src={ThemeLogo} alt="ThemedLogo"/>
      </div>
    </div>
  );
};

export default SideBar;