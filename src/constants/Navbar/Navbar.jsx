import React from "react";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="DoodleCollab logo" className="logo" />
      </a>
      <div className="navbar-middle">
        <div className="nav-items">
          <a className="nav-item" href="https://github.com/WikiPortal/DoodleCollab">GitHub</a>
          <a className="nav-item" href="/features">Features</a>
          <a className="nav-item" href="/blogs">Blogs</a>
        </div>
          <a className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`} href="/register" >Signup</a>
      </div>
      
      <div className="navbar-right">
        <input className="nav-checkbox" type="checkbox" id="switch" onClick={toggleDarkMode} />
        <label className="nav-toggle" htmlFor="switch">Toggle</label>
      </div> 
    </nav>
  );
};

export default Navbar;
