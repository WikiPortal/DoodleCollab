import React from "react";
import JoinUs from "../../components/JoinUs/JoinUs";
import Faq from "../../components/Faq/Faq";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import HomeBanner from "../../components/Banner/HomeBanner";
import FooterMenu from "../../components/NavFooter/FooterMenu";

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section className={`home-section ${isDarkMode ? "dark-mode" : "white-mode"}`}>
      <HomeBanner />
        <JoinUs />
      <footer className="faq_section">
        <Faq />
        <FooterMenu />
      </footer>
    </section>
  );
};

export default Home;
