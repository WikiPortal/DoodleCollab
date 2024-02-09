import { Outlet } from "react-router-dom";
import Footer from "../constants/Footer/Footer";
import Navbar from "../constants/Navbar/Navbar";
import { useState } from "react";

const Root = () => {
  const [isBarsClicked, setIsBarsClicked] = useState(false);

  const handleBarsClick = () => {
    setIsBarsClicked(!isBarsClicked);
  };
  const isSketchbookRoute = location.pathname.includes("/sketchbook");
  return (
    <>
      <Navbar isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick} />
      <main>
        <Outlet />
      </main>
      {!isSketchbookRoute && <Footer />}
    </>
  );
};

export default Root;
