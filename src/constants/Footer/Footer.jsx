import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`p-0 flex flex-col items-center py-4 ${isDarkMode ? "bg-[#333] text-white" : ""}`}>
      <div className="flex items-center w-[303px] justify-center">
        <ul className="list-none p-0 m-0 flex cursor-pointer">
          <li className="mx-[10px]">
            <Link
              to="https://github.com/WikiPortal/DoodleCollab"
              target="_blank"
              aria-label="gitHub link"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5"/>
            </Link>
          </li>
          <li className="mx-[10px]">
            <Link
              to="https://discord.com/invite/Ar84xkXkZt"
              target="_blank
              "
              aria-label="discord link"
              rel="noopener noreferrer"
            >
              <FaDiscord className="h-5 w-5"/>
            </Link>
          </li>
          <li className="mx-[10px]">
            <Link
              to="https://doodlecollab.vercel.app/"
              target="_blank
            "
            aria-label="dribble link"  
            rel="noopener noreferrer"
            >
              <FaDribbble className="h-5 w-5"/>
            </Link>
          </li>
          <li className="mx-[10px]">
            <Link
              to="https://twitter.com/itsmeroy69"
              target="_blank
              "
              aria-label="twitter link"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-5 w-5"/>
            </Link>
          </li>
          <li className="mx-[10px]">
            <Link
              to="https://www.linkedin.com/in/jyotirmoyroy69/"
              target="_blank
              "
              aria-label="linkedin link"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-5 w-5"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end font-[600] text-lg">
        <p className="text-xs md:text-sm mt-2">
          Designed & Developed by WikiPortal
        </p>
      </div>
    </section>
  );
};

export default Footer;
