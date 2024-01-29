import React from "react";

import Faq from "../../components/Faq/Faq";
import HomeAbout from "../../components/About/HomeAbout";
import JoinUs from "../../components/JoinUs/JoinUs";
import HomeBanner from "../../components/Banner/HomeBanner";
import FooterMenu from "../../components/NavFooter/FooterMenu";

import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import TrustDevelopers from "../../components/TrustDevelopers/TrustDevelopers";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`home-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <HomeBanner />
      <TrustDevelopers />
      <HomeAbout />
      <JoinUs />
      <Faq />
      <FooterMenu />
    </section>
  );
};

export default Home;
