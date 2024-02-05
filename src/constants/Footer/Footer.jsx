import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`footer ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <div className="footer-icons">
        <ul>
          <li>
            <Link
              to="https://github.com/WikiPortal/DoodleCollab"
              target="_blank"
              aria-label="gitHub link"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              to="https://discord.com/invite/Ar84xkXkZt"
              target="_blank
              "
              aria-label="discord link"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </Link>
          </li>
          <li>
            <Link
              to="https://doodlecollab.vercel.app/"
              target="_blank
            "
            aria-label="dribble link"  
            rel="noopener noreferrer"
            >
              <FaDribbble />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/itsmeroy69"
              target="_blank
              "
              aria-label="twitter link"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/jyotirmoyroy69/"
              target="_blank
              "
              aria-label="linkedin link"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <p className="text-xs md:text-sm mt-2">
          Designed & Developed by WikiPortal
        </p>
      </div>
    </section>
  );
};

export default Footer;
