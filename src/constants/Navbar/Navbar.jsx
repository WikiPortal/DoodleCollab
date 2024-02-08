import { useTheme } from "../../context/ThemeContext";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import sunIcon from "../../assets/svg/sun.svg";
import moonIcon from "../../assets/svg/moon.svg";
import "./navbar.css";
import { useAppContext } from "../../context/AppContext";

const Navbar = ({ isBarsClicked, handleBarsClick }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { updateLoggedIn, isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    updateLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className={`navbar ${isBarsClicked ? "bars-clicked" : ""} ${
        isDarkMode ? "dark-mode" : "white-mode"
      }`}
    >
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="DoodleCollab logo" className="logo" />
      </Link>

      <div className="navbar-middle">
        <div className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/sketchbook" className="nav-item">
            Sketchbook
          </Link>

          <Link to="/features" className="nav-item">
            Features
          </Link>
          <Link to="/blogs" className="nav-item">
            Blogs
          </Link>
          <Link
            to="https://github.com/WikiPortal/DoodleCollab"
            className="nav-item"
          >
            GitHub
          </Link>
        </div>
        {isLoggedIn ? (
          <button
            className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`}
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/register"
            className={`nav-signup ${isDarkMode ? "dark-mode" : "white-mode"}`}
          >
            Sign Up
          </Link>
        )}
      </div>

      <div className="navbar-right">
        <input
          className="nav-checkbox"
          type="checkbox"
          id="switch"
          onChange={toggleDarkMode}
        />
        <label
          className={`nav-toggle ${isDarkMode ? "dark-mode" : "white-mode"}`}
          htmlFor="switch"
        >
          <img
            src={isDarkMode ? moonIcon : sunIcon}
            alt="theme icon"
            className="md:translate-y-[.12rem] translate-x-[4rem]"
          />
        </label>

        <button
          className={`action-button-bars ${isBarsClicked ? "hidden" : ""}`}
          onClick={handleBarsClick}
        >
          <HiMiniBars2 style={{ fontSize: "2rem", fontWeight: "bold" }} />
        </button>

        <button
          className={`action-button-close ${!isBarsClicked ? "hidden" : ""}`}
          onClick={handleBarsClick}
        >
          <RxCross1 style={{ fontSize: "2rem", fontWeight: "bold" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
