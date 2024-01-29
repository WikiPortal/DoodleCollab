import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";

const Navbar = ({ isBarsClicked, handleBarsClick }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar ${isBarsClicked ? "bars-clicked" : ""} ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="DoodleCollab logo" className="logo" />
      </a>
      <div className="navbar-middle">
        <div className="nav-items">
          <a className="nav-item" href="https://github.com/WikiPortal/DoodleCollab">GitHub</a>
          <a className="nav-item" href="/features">Features</a>
          <a className="nav-item" href="/blogs">Blogs</a>
        </div>
        <button className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`} href="/register">Signup</button>
      </div>

      <div className="navbar-right">
        <input className="nav-checkbox" type="checkbox" id="switch" onClick={toggleDarkMode} />
        <label className="nav-toggle" htmlFor="switch">Toggle</label>
        <button
          className={`action-button-bars ${isBarsClicked ? "hidden" : ""}`}
          onClick={handleBarsClick}
        >
          <HiMiniBars2 style={{ fontSize: "2rem", fontWeight: 'bold' }} />
        </button>
        <button
          className={`action-button-close ${!isBarsClicked ? "hidden" : ""}`}
          onClick={handleBarsClick}
        >
          <RxCross1 style={{ fontSize: "2rem", fontWeight: 'bold' }} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
