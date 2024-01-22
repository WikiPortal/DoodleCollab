import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <img src={logo} alt="DoodleCollab logo" className="logo" />
      <div className="nav-items">
        <div className="nav-item">GitHub</div>
        <div className="nav-item">Features</div>
        <div className="nav-item">Blogs</div>
        <div className="nav-item">Signup</div>
      </div>
      <div className="navbar-right">
        <input className="nav-checkbox" type="checkbox" id="switch" onClick={toggleDarkMode} />
        <label className="nav-toggle" htmlFor="switch">Toggle</label>
      </div> 
    </nav>
  );
};

export default Navbar;
