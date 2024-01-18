import { useEffect, useState } from "react";
import { sun, moon } from "../assets/index.js";
import "./Darkmode.css";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    setActive(() => !active);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="darkmod">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {active ? (
          <img src={sun} alt="sun" width={"40px"} />
        ) : (
          <img src={moon} alt="moon" width={"40px"} />
        )}
      </button>
      {/* Your darkmode content */}
    </div>
  );
};

export default Darkmode;
