import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImg from "../../assets/register.jpg";
import { PasswordIcon, MailIcon } from "../../assets/RegisterIcons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTheme } from "../../context/ThemeContext";
import "./auth.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode } = useTheme();
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
    <section
      className={`auth-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <div className="auth-img">
        <img src={loginImg} alt="registration image" />
      </div>
      <div className="auth-right">
        <form className="auth-form" onSubmit={onSubmit}>
          <h1 className="md:mt-32">Welcome to DoodleCollab!</h1>
          <p>Enter your Email, and Password!</p>
          <hr/>
          <div className="auth-textbox">
            <MailIcon className="auth-icon" />
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <div className="auth-textbox">
            <PasswordIcon className="auth-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
          <button className="auth-btn" type="submit">
            <p>Login</p>
          </button>
          <div className="auth-textbox-footer">
          <span>
            New to DoodleCollab?{" "}
            <Link className="auth-link" to="/register">
              Click here to create
            </Link>
          </span>
          <span>
            Forget password?{" "}
            <Link className="auth-link" to="/">
              Click here to find it
            </Link>
          </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
