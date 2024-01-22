import React from "react";
import JoinUs from "../../components/JoinUs/JoinUs"
import Faq from "../../components/Faq";
import './home.css';

const Home = () => {
  return (
    <div className="home_container">Home
      <footer className="faq_section">
          <JoinUs/>
          <Faq/>
      </footer>
    </div>
  )
};

export default Home;
