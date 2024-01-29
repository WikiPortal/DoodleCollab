import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <p>Designed & Developed by WikiPortal</p>
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaBehance />
          </li>
          <li>
            <FaDribbble />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
