import React from "react";

//components

import Faq from '../../components/Faq/Faq'
import HomeAbout from "../../components/About/HomeAbout";
import JoinUs from "../../components/JoinUs/JoinUs";
import HomeBanner from "../../components/Banner/HomeBanner";
import FooterMenu from "../../components/NavFooter/FooterMenu";

//styles

import { useTheme } from "../../context/ThemeContext";
import './home.css';

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section className={`home-section ${isDarkMode ? "dark-mode" : "white-mode"}`}>
          <HomeBanner />      
          <JoinUs />
          <section className="about_section">
              <HomeAbout/>
          </section>
          <section className="faq_section">
              <Faq />
              <FooterMenu />
          </section>
    </section>
  );
};

export default Home;
