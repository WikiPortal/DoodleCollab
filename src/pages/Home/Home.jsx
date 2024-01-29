import React from "react";
import { useState } from "react";

import App from "../../App";
import Faq from "../../components/Faq/Faq";
import HomeAbout from "../../components/About/HomeAbout";
import JoinUs from "../../components/JoinUs/JoinUs";
import HomeBanner from "../../components/Banner/HomeBanner";
import FooterMenu from "../../components/NavFooter/FooterMenu";

import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import TrustDevelopers from "../../components/TrustDevelopers/TrustDevelopers";

<<<<<<< HEAD
const Home = ({ isBarsClicked, handleBarsClick }) => {

  const { isDarkMode, toggleDarkMode } = useTheme();
=======
const Home = () => {
  const { isDarkMode } = useTheme();
>>>>>>> e5fecd22f791c6da410d4da01a830a01dfd552fb


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
