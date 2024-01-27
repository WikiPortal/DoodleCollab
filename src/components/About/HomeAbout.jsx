import { useEffect, useState } from "react";

import idea from "../../assets/Home/creative-writing.png";
import component from "../../assets/Home/abstract.png";
import project from "../../assets/Home/blueprint.png";
import collaborate from "../../assets/Home/collaborate.png";
import darkBackground from "../../assets/Home/dark-background.png";

import { useTheme } from "../../context/ThemeContext";
import "./homeabout.css";

const HomeAbout = () => {
  const { isDarkMode } = useTheme();
  const colors = [
    "#00ccff", // Electric Blue
    "#33ff33", // Neon Green
    "#ff3399", // Vibrant Pink
    "#cc33ff", // Electric Purple
    "#ff9933", // Radiant Orange
    "#FFD700", // Gold
    "#ff3333", // Fiery Red
    "#00ffff", // Aqua Blue
    "#33cc33", // Brilliant Green
    "#ff66cc", // Hot Pink
  ];

  // function to generate random color
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // invoking random color function
  const randomColor = getRandomColor();

  // state variable to track hover state for each box
  const [hoveredBox, setHoveredBox] = useState(null);

  // function to handle mouse enter and leave for each box
  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const glowEffectStyles = (index) => ({
    boxShadow:
      hoveredBox === index
        ? `0 0 7px 5px ${randomColor}, 0 0 7px 5px ${randomColor}`
        : "none",
    transform: hoveredBox === index ? "translateY(-20px)" : "none",
    transition: "all 0.3s ease-in-out",
  });

  useEffect(() => {
    const aboutBox = document.querySelectorAll(".about-box");

    aboutBox.forEach((box) => {
      if (isDarkMode) {
        box.style.backgroundImage = `url(${darkBackground})`;
        box.style.backgroundSize = "cover";
      } else {
        box.style.backgroundImage = "none";
      }
    });
  }, [isDarkMode]);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="key-feature">Key Feature</div>
          <div className="about-head">
            <p>Why use DoodleCollab ?</p>
          </div>
          <div className="about-para">
            DoodleCollab revolutionizes collaboration with intuitive whiteboard
            features and seamless real-time sharing.
          </div>
        </div>
        <div className="about-boxes">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="about-box"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={glowEffectStyles(index)}
              >
                <img
                  src={
                    index === 0
                      ? idea
                      : index === 1
                        ? component
                        : index === 2
                          ? project
                          : collaborate
                  }
                  alt={`item-${index}`}
                />
                <div className="box-head">
                  <b>
                    {index === 0
                      ? "Bring Ideas to Live"
                      : index === 1
                        ? "Component Templates"
                        : index === 2
                          ? "Project Management"
                          : "Live Collaboration"}
                  </b>
                </div>
                <div className="box-text">
                  {index === 0
                    ? "DoodleCollab empowers users to bring their ideas to life, fostering creativity and innovation."
                    : index === 1
                      ? "DoodleCollab provides a variety of customizable component templates, streamlining the creation process."
                      : index === 2
                        ? "DoodleCollab offers project management tools, facilitating efficient organization, tracking, and coordination of tasks."
                        : "DoodleCollab enables live collaboration, allowing team members to work together, enhancing productivity."}
                </div>
                <a href="#" className="box-link">
                  <br></br>
                  See How
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
