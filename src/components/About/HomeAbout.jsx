import { useEffect, useState } from "react";

import idea from "../../assets/Home/creative-writing.png";
import component from "../../assets/Home/abstract.png";
import project from "../../assets/Home/blueprint.png";
import collaborate from "../../assets/Home/collaborate.png";
import darkBackground from "../../assets/Home/dark-background.png";

import { useTheme } from "../../context/ThemeContext";

const HomeAbout = () => {
  const { isDarkMode } = useTheme();

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
        ? `0 0 14px 0px #64BEFF, 0 0 14px 0px #64BEFF`
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
    <section className="flex mb-5 justify-center">
      <div className="flex flex-col">
        <div className="h-[30vh] flex flex-col justify-evenly">
          <div className="text-[15px] font-medium w-[140px] text-center rounded-3xl p-[10px] bg-black text-white">Key Feature</div>
          <div className="font-semibold text-[42px] leading-[48px]">
            <p>Why use DoodleCollab ?</p>
          </div>
          <div className="text-lg font-normal text-[#505256] leading-[30px] max-w-[550px]">
            DoodleCollab revolutionizes collaboration with intuitive whiteboard
            features and seamless real-time sharing.
          </div>
        </div>
        <div className="flex justify-evenly lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:mx-auto">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="about-box flex flex-col h-[360px] w-[300px] break-words p-6 rounded-[20px] bg-white m-[10px] justify-center "
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
                  className="w-[50px] mb-4"
                  alt={`item-${index}`}
                />
                <div className="text-[22px] leading-[32px] font-medium mb-4">
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
                <div className="text-lg mb-6 text-[#505256]">
                  {index === 0
                    ? "DoodleCollab empowers users to bring their ideas to life, fostering creativity and innovation."
                    : index === 1
                      ? "DoodleCollab provides a variety of customizable component templates, streamlining the creation process."
                      : index === 2
                        ? "DoodleCollab offers project management tools, facilitating efficient organization, tracking, and coordination of tasks."
                        : "DoodleCollab enables live collaboration, allowing team members to work together, enhancing productivity."}
                </div>
                <a href="#" className="text-[#4c4cfa] font-semibold">
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
