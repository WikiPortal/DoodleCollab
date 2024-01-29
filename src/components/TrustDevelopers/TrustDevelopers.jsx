import React from "react";
import "./trustdevelopers.css";
import MongoDB from "../../assets/Home/MongoDB.png";
import firebase from "../../assets/Home/firebase.svg";
import mirror from "../../assets/Home/mirror.png";
import keploy from "../../assets/Home/keploy.png";


const TrustDevelopers = () => {
    return (
      <div className="trust-developers-container">
        <h5>Trusted by developers</h5>
        <div className="logo-container">
          <img className="logo-container1 "src={MongoDB} alt="Logo1" />
          <img className="logo-container2" src={firebase} alt="Logo2" />
          <img className="logo-container3" src={mirror} alt="Logo3" />
          <img className="logo-container4" src={keploy} alt="Logo4" />
        </div>
        <br></br>
      </div>
    );
  };
  
  export default TrustDevelopers;