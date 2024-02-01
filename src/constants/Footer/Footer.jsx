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
      <div className="footer-content">
        <p>Designed & Developed by WikiPortal</p>
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <Link
              to="https://github.com/WikiPortal/DoodleCollab"
              target="_blank"
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
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
