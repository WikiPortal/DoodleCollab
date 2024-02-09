import { useState } from "react";
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
import { useAppContext } from "../../context/AppContext";
import { useMutation } from "@tanstack/react-query";

const HomeBanner = () => {
  const { isDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { updateLoggedIn, showToast } = useAppContext();

  const { register, handleSubmit } = useForm();

  const { mutate: loginUserMutate } = useMutation({
    mutationFn: (user) =>
      axios.post(
        "https://doodlecollab-backend.onrender.com/api/users/login",
        user
      ),
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    loginUserMutate(
      {
        email,
        password,
      },
      {
        onSuccess: (res) => {
          localStorage.setItem("token", res.data.token);
          updateLoggedIn(true);
          showToast({ message: "Login Successful!", type: "SUCCESS" });
          navigate("/sketchbook");
        },
        onError: () => {
          updateLoggedIn(false);
          showToast({ message: "Login Failed!", type: "ERROR" });
        },
      }
    );
  });

  return (
    <section className="flex justify-center mb-5">
      <div className="font-sans text-center items-center max-w-1/2 m-14 p-4 h-screen">
        <h1 className="text-6xl font-normal leading-[48px]">DoodleCollab</h1>
        <p className="text-[1.2rem] p-4 text-[#677082]">
          Application designed to transform the way we collaborate, offering an
          unparalleled whiteboard and sharing experience.
        </p>
        <div className="flex justify-center pt-5 gap-5">
          <a href="/register">
            <button className="rounded-[8px] px-7 py-[10px] text-white bg-[#2f97ff] hover:bg-[#0856a5]">Get Started Now</button>
          </a>

          <button
            className={`watchVideo ${isDarkMode ? "dark-mode" : "white-mode"}`}
          >
            <FaPlay style={{ marginRight: "5px" }} />
            Watch Video
          </button>
        </div>

        <div className="pt-[100px] flex justify-center">
          <div className="flex flex-col h-[450px] w-[300px] break-words bg-transparent rounded-[20px] m-[10px]">
            <div className="h-[100px] flex justify-center items-center">
              <ul className="list-none p-0 flex self-start">
                <li>
                  <button aria-label="heart">
                    <img src={heart} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
                <li>
                  <button aria-label="view" className="border-none cursor-default p-0 border-2 border-[#f7f8f9] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center m-[1px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <img src={view} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
                <li>
                  <button aria-label="pen" className="border-none cursor-default p-0 border-2 border-[#f7f8f9] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center m-[1px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <img src={pen} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
                <li>
                  <button aria-label="link" className="border-none cursor-default p-0 border-2 border-[#f7f8f9] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center m-[1px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <img src={link} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
                <li>
                  <button aria-label="play" className="border-none cursor-default p-0 border-2 border-[#f7f8f9] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center m-[1px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <img src={play} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
                <li>
                  <button aria-label="download" className="border-none cursor-default p-0 border-2 border-[#f7f8f9] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center m-[1px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <img src={download} alt="" className="w-[20px] h-[20px] m-[10px]"/>
                  </button>
                </li>
              </ul>
            </div>

            <div className="rounded-[20px] mt-[45px] border border-[#f7f8f9]">
              <div className="rounded-[20px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                <div className="h-[110px] flex justify-center">
                  <div className="mt-[30px] w-[70px] h-[70px] rounded-[50%] bg-[#ff90bc]">
                    <img
                      src={profile}
                      alt="profile"
                      className="flex items-center justify-center rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="h-[50px] font-bold text-lg">
                  <p className="m-[10px]">John Doe</p>
                  <p className="m-[10px]">Engineer</p>
                </div>
                <div className="h-[133px] flex items-center px-[5px] rounded-[20px] justify-between">
                  <button className="h-10 flex items-center mt-10 rounded-[19px] py-[10px] px-5 space-x-4 text-left justify-between w-36 text-white bg-[#1976d2]">
                    <span className="text-[1rem]">Follow</span>{" "}
                    <i>
                      <FaPlus style={{ marginLeft: "30px" }} />
                    </i>
                  </button>
                  <button className="bg-[#d1d2d4] text-black h-[40px] flex mt-[40px] rounded-[19px] px-[20px] py-[10px] text-left items-center justify-between w-[140px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                    <span className="message-text">Message</span>{" "}
                    <i>
                      <LuMessageSquare style={{ marginLeft: "20px" }} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[450px] w-[300px] break-words rounded-[20px] m-[10px]">
            <div className="h-[300px] p-0 block rounded-[20px] mb-[40px]">
              <div className="border border-[#f7f8f9] rounded-[20px]">
                <div className="h-[300px] w-[300px] flex justify-center items-center">
                  <img
                    src={homeBannerUI}
                    alt="homeBannerProfile"
                    className="h-[300px] w-[300px] flex justify-center items-center"
                  />
                </div>

                <div className="border border-[#f7f8f9] rounded-bl-[20px] rounded-br-[20px] h-[50px] w-[300px] flex justify-between items-center" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06),0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
                  <div className="flex text-center items-center justify-between relative">
                    <p>
                      <i>
                        <img
                          src={profile}
                          alt="profile"
                          className="ml-[10px] mt-0 h-[30px] w-[30px] bg-[#ff90bc] rounded-[50%]"
                        />
                      </i>
                    </p>
                    <p className="ml-5 mt-[10px] font-bold h-7 w-[100px]">
                      lorem Ipsum
                    </p>
                    <p>
                      <i>
                        <FaRegHeart
                          className="mt-2 h-5 w-5 ml-[95px]"
                        />
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[40px] h-[70px] justify-between items-center rounded-[20px] mb-0 border border-[#f7f8f9]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
              <div className="relative flex items-center">
                <div>
                  <img src={johnDoe} alt="johnDoe" className="mx-[15px] mt-[10px] h-[50px] w-[50px]"/>
                </div>
                <div>
                  <p className="ml-[1px] text-left text-base font-semibold mt-[10px]">John Doe</p>
                  <p className="ml-0 text-left text-base font-thin">UI/UX Designer</p>
                </div>
                <div>
                  <LuPen style={{ marginLeft: "68px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[450px] w-[300px] break-words border border-[#f7f8f9] rounded-[20px] margin-[10px]" style={{boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)"}}>
            <div>
              <form onSubmit={onSubmit}>
                <p className="text-2xl font-semibold leading-4 text-center mt-8 mb-4">Login into your account</p>
                <div className="text-xs text-left ml-12 mt-2 h-5 w-[300px] flex mb-14 gap-1">
                  <p>Don't have an account yet? </p>{" "}
                  <Link to="/register">
                    <p className="text-[#1976d2]"> Create Now </p>
                  </Link>
                </div>
                <div className="flex relative items-center">
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    id="username"
                    className="border border-solid border-[#d1d2d4] rounded-[20px] p-5 w-[90%] h-[15px] mb-5 ml-5"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  <i className="absolute top-1/2 right-[30px] transform -translate-y-[90%] text-[#d1d2d4]">
                    {" "}
                    <HiOutlineMail size={24} />
                  </i>
                </div>
                <div className="flex relative items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    className="border border-solid border-[#d1d2d4] rounded-[20px] p-5 w-[90%] h-[15px] mb-5 ml-5"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <button
                    aria-label="visibility btn"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="absolute top-1/2 right-[30px] transform -translate-y-[90%] text-[#d1d2d4]">
                        <MdOutlineRemoveRedEye size={24} />
                      </i>
                    ) : (
                      <i className="absolute top-1/2 right-[30px] transform -translate-y-[90%] text-[#d1d2d4]">
                        {" "}
                        <VisibilityOffIcon />
                      </i>
                    )}
                  </button>
                </div>
                <button className="text-base font-bold ml-6 mt-16 rounded-[20px] px-7 py-[10px] w-[250px] text-[#1976d2] bg-[#d3e0fd]" type="submit">
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
