import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import ThemeLogo from "../../images/themedLogo.svg";

const SideBar = ({ isOpen, toggleMenu }) => {

  return (
    <div className={`sidebar-links ${isOpen ? "open" : ""}`}>
      <NavLink to="/buy-now" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Buy Tickets</NavLink>
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