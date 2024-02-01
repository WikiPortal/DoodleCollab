import { useState } from "react";
import "./homebanner.css";
import { useTheme } from "../../context/ThemeContext";
import { FaPlay, FaPlus, FaRegHeart } from "react-icons/fa";
import { LuMessageSquare, LuPen } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import heart from "../../assets/Home/heart.png";
import view from "../../assets/Home/view.png";
import pen from "../../assets/Home/pen.png";
import link from "../../assets/Home/link.png";
import play from "../../assets/Home/play.png";
import download from "../../assets/Home/download.png";
import profile from "../../assets/Home/woman.png";
import homeBannerUI from "../../assets/Home/homeBannerUI.png";
import johnDoe from "../../assets/Home/johnDoe.png";

const HomeBanner = () => {
  const { isDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post(
        "https://doodlecollab-backend.onrender.com/api/users/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      alert("Login Successful!");
      navigate("/sketchbook");
    } catch (error) {
      console.log(error);
      alert("Login Failed!");
    }
  });

  return (
    <section className="homebanner-section">
      <div className="homebanner-container w-screen shrink-0">
        <h1>DoodleCollab</h1>
        <p className="homebanner-head-para">
          Application designed to transform the way we collaborate, offering an
          unparalleled whiteboard and sharing experience.
        </p>
        <div className="homebanner-head-button">
          <a href="/register">
            <button className="homebanner-getStarted">Get Started Now</button>
          </a>

          <button
            className={`watchVideo ${isDarkMode ? "dark-mode" : "white-mode"}`}
          >
            <FaPlay style={{ marginRight: "5px" }} />
            Watch Video
          </button>
        </div>

        <div className="homebanner-cards">
          <div className="homebanner-card-first-column">
            <div className="homebanner-card-icons">
              <ul className="homebanner-card-icons-ul">
                <li>
                  <button>
                    <img src={heart} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={view} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={pen} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={link} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={play} alt="" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={download} alt="" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="homebanner-card-first-column-remaining-rows">
              <div className="homebanner-card-first-column-remaining-row-container">
                <div className="homebanner-card-first-column-second-row">
                  <div className="homebanner-card-second-row-image">
                    <img
                      src={profile}
                      alt="profile"
                      className="homebanner-card-image"
                    />
                  </div>
                </div>
                <div className="homebanner-card-first-column-third-row">
                  <p>John Doe</p>
                  <p>Engineer</p>
                </div>
                <div className="homebanner-card-first-column-fourth-row">
                  <button className="follow">
                    <span className="follow-text">Follow</span>{" "}
                    <i>
                      <FaPlus style={{ marginLeft: "30px" }} />
                    </i>
                  </button>
                  <button className="message">
                    <span className="message-text">Message</span>{" "}
                    <i>
                      <LuMessageSquare style={{ marginLeft: "20px" }} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="homebanner-card-second-column">
            <div className="homebanner-card-second-column-first-row">
              <div className="homebanner-card-second-column-first-row-container">
                <div className="homebanner-card-second-column-first-row-top-image">
                  <img
                    src={homeBannerUI}
                    alt="homeBannerProfile"
                    className="homebanner-card-second-column-first-row-top-image"
                  />
                </div>

                <div className="homebanner-card-second-column-first-row-bottom-card">
                  <div className="homebanner-card-second-column-first-row-bottom-card-container">
                    <p>
                      <i>
                        <img
                          src={profile}
                          alt="profile"
                          className="homebanner-card-second-column-first-row-bottom-card-image"
                        />
                      </i>
                    </p>
                    <p className="homebanner-card-second-column-first-row-bottom-card-name">
                      lorem Ipsum
                    </p>
                    <p>
                      <i>
                        <FaRegHeart
                          style={{ marginLeft: "95px" }}
                          className="homebanner-card-second-column-first-row-bottom-card-icon"
                        />
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="homebanner-card-second-column-second-row">
              <div className="homebanner-card-second-column-second-row-container">
                <div>
                  <img src={johnDoe} alt="johnDoe" />
                </div>
                <div>
                  <p className="name">John Doe</p>
                  <p className="position">UI/UX Designer</p>
                </div>
                <div>
                  <LuPen style={{ marginLeft: "68px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="homebanner-card-third-column">
            <div className="homebanner-card-third-column-container">
              {" "}
              <form onSubmit={onSubmit}>
                <p className="login-text">Login into your account</p>
                <div className="login-para">
                  <p>Don't have an account yet? </p>{" "}
                  <Link to="/register">
                    <p className="login-para-link"> Create Now </p>
                  </Link>
                </div>
                <div className="form-control-mail-icon">
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    id="username"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  <i className="icon-input-icon">
                    {" "}
                    <HiOutlineMail size={24} />
                  </i>
                </div>
                <div className="form-control-password-icon">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="icon-input-icon">
                        {" "}
                        <MdOutlineRemoveRedEye size={24} />
                      </i>
                    ) : (
                      <i className="icon-input-icon">
                        {" "}
                        <VisibilityOffIcon />
                      </i>
                    )}
                  </button>
                </div>
                <button className="login-button" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
