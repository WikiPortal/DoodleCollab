import React from "react";
import "./trustdevelopers.css";
import MongoDB from "../../assets/Home/MongoDB.png";
import firebase from "../../assets/Home/firebase.svg";
import mirror from "../../assets/Home/mirror.png";
import keploy from "../../assets/Home/keploy.png";


const TrustDevelopers = () => {
    return (
      <div className="trust-developers-container">
        <h2>Trusted by developers</h2>
        <div className="logo-container">
          <img src={MongoDB} alt="Logo1" />
          <img src={firebase} alt="Logo2" />
          <img src={mirror} alt="Logo3" />
          <img src={keploy} alt="Logo4" />
        </div>
        <br></br>
      </div>
    );
  };
  
  export default TrustDevelopers;