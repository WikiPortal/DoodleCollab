import img1 from "../../assets/Features/img1.png";
import img2 from "../../assets/Features/img2.png";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import "./features.css";

const Features = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`features-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <div className="features-container">
        <div className="features-left">
          <h1>Worked with quite a number of opensource programs till now!</h1>
          <img src={img1} alt="img1" aria-hidden />
          <img src={img2} alt="img2" aria-hidden />
        </div>

        <div className="features-right">
          <Link
            to="https://kwoc.kossiitkgp.org/"
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            Kharagpur Winter of Code
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />
          </Link>

          <hr className="my-4 border-t border-gray-300" />

          <Link
            to="https://winterofcode.com/ "
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            Netaji Subhash Engineering College Winter of Code{" "}
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />{" "}
          </Link>

          <hr className="my-4 border-t border-gray-300" />

          <Link
            to="https://iwoc.codes/"
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            {" "}
            Innogeeks Winter of Code{" "}
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
