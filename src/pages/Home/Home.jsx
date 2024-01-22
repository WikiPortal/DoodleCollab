import React from "react";
import Faq from "../../components/Faq";
import HomeAbout from "../../components/about/HomeAbout";
import './home.css';

const Home = () => {
  return (
    <div className="home_container">
      <section><div className="about_section"><HomeAbout /></div></section>
      <section>
        <footer className="faq_section">
          <Faq />
        </footer>
      </section>
    </div>
  )
};

export default Home;
