import React from "react";
import Faq from "../../components/Faq";
import HomeAbout from "../../components/about/HomeAbout";

import JoinUs from "../../components/JoinUs/JoinUs";

import { useTheme } from "../../context/ThemeContext";
import './home.css';
import HomeBanner from "../../components/Banner/HomeBanner";
import FooterMenu from "../../components/NavFooter/FooterMenu";

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section className={`home-section ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <HomeBanner />
      
        <JoinUs />
      <section className="about_section"><HomeAbout/></section>

      <section className="faq_section">
        <Faq />
        <FooterMenu />
      </section>
    </section>
  );
};

export default Home;
