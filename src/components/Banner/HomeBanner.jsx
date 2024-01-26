// src/components/Banner/HomeBanner.js
import React from "react";
import doodleCollabGif from "../../assets/ReadMe/doodleCollab.gif";
import "./homebanner.css";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <br></br>
      <br></br>
      <img src={doodleCollabGif} alt="DoodleCollab" className="banner-image" />
      <div className="banner-text">
      </div>
      <br></br>
      <br></br>
      <p style={{ fontFamily: 'Indie Flower', fontSize: '1.2rem', lineHeight: '1.5' }}>
      <span style={{ color: 'purple' }}>DoodleCollab</span> is a <span style={{ color: 'red' }}>cutting-edge</span> application designed to <span style={{ color: 'blue' }}>transform</span> the
          way we <span style={{ color: 'green' }}>collaborate</span>, offering an <span style={{ color: 'orange' }}>unparalleled</span> whiteboard and sharing experience.
        </p>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
};

export default HomeBanner;
