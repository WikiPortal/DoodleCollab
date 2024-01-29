import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isBarsClicked, handleBarsClick }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar ${isBarsClicked ? "bars-clicked" : ""} ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="DoodleCollab logo" className="logo" />
      </Link>

      <div className="navbar-middle">
        <div className="nav-items">
          <button className="nav-item" style={{marginTop:'-10px'}} onClick={() => window.location.href = "https://github.com/WikiPortal/DoodleCollab"}>
            GitHub
          </button>
          <Link to="/features" className="nav-item">
            Features
          </Link>
          <Link to="/blogs" className="nav-item">
            Blogs
          </Link>
        </div>

        <Link to="/register" className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`}>Signup</Link>
      </div>

      <div className="navbar-right">
        <input className="nav-checkbox" type="checkbox" id="switch" onChange={toggleDarkMode} />
        <label className={`nav-toggle ${isDarkMode ? "dark-mode" : "white-mode"}`} htmlFor="switch">Toggle</label>

        <button className={`action-button-bars ${isBarsClicked ? "hidden" : ""}`} onClick={handleBarsClick}>
          <HiMiniBars2 style={{ fontSize: "2rem", fontWeight: 'bold' }} />
        </button>

        <button className={`action-button-close ${!isBarsClicked ? "hidden" : ""}`} onClick={handleBarsClick}>
          <RxCross1 style={{ fontSize: "2rem", fontWeight: 'bold' }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
