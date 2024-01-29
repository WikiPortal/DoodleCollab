import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import HomeBanner from "../../components/Banner/HomeBanner";
import TrustDevelopers from "../../components/TrustDevelopers/TrustDevelopers";
import HomeAbout from "../../components/About/HomeAbout";
import JoinUs from "../../components/JoinUs/JoinUs";
import Faq from "../../components/Faq/Faq";
import FooterMenu from "../../components/NavFooter/FooterMenu";

const Home = ({ isBarsClicked, handleBarsClick }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`home-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <HomeBanner isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick} />
      <TrustDevelopers />
      <HomeAbout />
      <JoinUs />
      <Faq />
      <FooterMenu />
    </section>
  );
};

export default Home;
