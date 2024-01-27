import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <div className="navbar-top">
        
        <div className="navbar-brand">
            <a  href="/">
              <img src={logo} alt="DoodleCollab logo" className="logo" />
            </a>
        </div>
        

        {/* Hamburger button for mobile view */}
        
            
      </div>
      

      <div className={`navbar-middle ${showMenu ? "show" : ""}`}>
        <div className="nav-items">
          <a className="nav-item" href="https://github.com/WikiPortal/DoodleCollab">
            GitHub
          </a>
          <a className="nav-item" href="/features">
            Features
          </a>
          <a className="nav-item" href="/blogs">
            Blogs
          </a>
        </div>
        <a
          className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`}
          href="/register"
        >
          Signup
        </a>
      </div>

      <div className="navbar-right">
        <input
          className="nav-checkbox"
          type="checkbox"
          id="switch"
          onClick={toggleDarkMode}
        />
        <label className="nav-toggle" htmlFor="switch">
          Toggle
        </label>

        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${showMenu ? "open" : ""}`}></div>
          <div className={`hamburger-line ${showMenu ? "open" : ""}`}></div>
          <div className={`hamburger-line ${showMenu ? "open" : ""}`}></div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
