import React from "react";
import MongoDB from "../../assets/Home/MongoDB.png";
import firebase from "../../assets/Home/firebase.svg";
import mirror from "../../assets/Home/mirror.png";
import keploy from "../../assets/Home/keploy.png";

const TrustDevelopers = () => {
    return (
      <section className="text-center m-11">
        <h2 className="text-[#3a91dc]">Trusted & Built by Developers</h2>
        <div className="flex justify-center items-center">
          <img src={MongoDB} alt="Logo1" className="w-[100px] my-[15px] mx-[55px] hover:transition-all hover:duration-[0.6s] hover:ease-[ease-in-out] hover:scale-[1.2] transition-all duration-[0.6s] ease-[ease-in-out] scale-100"/>
          <img src={firebase} alt="Logo2" className="w-[100px] my-[15px] mx-[55px] hover:transition-all hover:duration-[0.6s] hover:ease-[ease-in-out] hover:scale-[1.2] transition-all duration-[0.6s] ease-[ease-in-out] scale-100"/>
          <img src={mirror} alt="Logo3" className="w-[100px] my-[15px] mx-[55px] hover:transition-all hover:duration-[0.6s] hover:ease-[ease-in-out] hover:scale-[1.2] transition-all duration-[0.6s] ease-[ease-in-out] scale-100"/>
          <img src={keploy} alt="Logo4" className="w-[100px] my-[15px] mx-[55px] hover:transition-all hover:duration-[0.6s] hover:ease-[ease-in-out] hover:scale-[1.2] transition-all duration-[0.6s] ease-[ease-in-out] scale-100"/>
        </div>
      </section>
    );
  };
  
  export default TrustDevelopers;