import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  UsernameIcon,
  PasswordIcon,
  MailIcon,
  NameIcon,
} from "../../assets/RegisterIcons";
import { useTheme } from "../../context/ThemeContext";
import "./auth.css";
import { useAppContext } from "../../context/AppContext";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isDarkMode } = useTheme();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: registerUserMutate } = useMutation({
    mutationFn: (user) =>
      axios.post(
        "https://doodlecollab-backend.onrender.com/api/users/register",
        user
      ),
  });

  const onSubmit = handleSubmit(
    ({ email, username, firstName, lastName, password }) => {
      registerUserMutate(
        {
          email,
          username,
          firstName,
          lastName,
          password,
        },
        {
          onSuccess: () => {
            showToast({ message: "Registration Successful!", type: "SUCCESS" });
            navigate("/login");
          },
          onError: () => {
            showToast({ message: "Registration Failed!", type: "ERROR" });
          },
        }
      );
    }
  );

  return (
    <section
      className={`auth-section ${isDarkMode ? "dark-mode" : "white-mode"}`}
    >
      <div className="auth-img">
        <img src={registerImg} alt="registration image" />
      </div>
      <div className="auth-right">
        <form className="auth-form" onSubmit={onSubmit}>
          <h1 style={{ color: isDarkMode ? "white" : "black" }}>
            Create New Account
          </h1>
          <span style={{ color: isDarkMode ? "white" : "black" }}>
            Please fill out the form below. All fields are required.
          </span>
          <hr />

          <div className="auth-textbox">
            <MailIcon className="auth-icon" />
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <div className="auth-textbox">
            <UsernameIcon className="auth-icon" />
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
          </div>

          {errors.username && (
            <span className="error-message">{errors.username.message}</span>
          )}
          <div className="auth-namesec">
            <div className="auth-textbox" style={{ marginLeft: "-1px" }}>
              <NameIcon className="auth-icon" />
              <input
                type="text"
                placeholder="Firstname"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
            </div>
            <div className="auth-textbox">
              <NameIcon className="auth-icon" />
              <input
                type="text"
                placeholder="Lastname"
                {...register("lastName", {
                  required: "Last Name is required",
                })}
              />
            </div>
          </div>
          {errors.firstName && errors.lastName ? (
            <span className="error-message">{errors.firstName.message}</span>
          ) : errors.lastName ? (
            <span className="error-message">{errors.lastName.message}</span>
          ) : null}
          <div className="auth-textbox">
            <PasswordIcon className="auth-icon" />
            <input
              style={{ backgroundColor: "#fff" }}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "Password is not strong enough.",
                },
              })}
            />
            <button
              aria-label="VisibilityIcon btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
          <div className="auth-textbox">
            <PasswordIcon className="auth-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) => {
                  if (!value) {
                    return "Field is required";
                  } else if (watch("password") !== value) {
                    return "Password doesn't match";
                  }
                },
              })}
            />
            <button
              aria-label="VisibilityIcon btn"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          )}
          <div
            className="auth-miscellaneous m-1"
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <span className="m-2">
              Minimum 8 characters for secure password.
            </span>
            <label className="auth-checkbox m-1">
              <input
                className="mr-2 mt-1"
                type="checkbox"
                {...register("agree", {
                  required: "Please agree to the Terms and Privacy Policy",
                })}
              />
              <span>
                I agree to{" "}
                <span
                  className="auth-link"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  DoodleCollab Terms
                </span>{" "}
                and{" "}
                <span
                  className="auth-link"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  Privacy Policy
                </span>
              </span>
            </label>

            {errors.agree && (
              <span className="error-message">{errors.agree.message}</span>
            )}
            <button className="auth-btn" type="submit">
              <p>Create Account</p>
            </button>
            <span>
              Already a member?{" "}
              <Link
                className="auth-link"
                to="/login"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
