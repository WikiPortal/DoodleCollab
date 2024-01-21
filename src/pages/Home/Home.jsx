import React from "react";
import Faq from "../../components/Faq";
import './home.css';

const Home = () => {
  return (
    <div className="home_container">Home
      <footer className="faq_section">
          <Faq/>
      </footer>
    </div>
  )
};

export default Home;
