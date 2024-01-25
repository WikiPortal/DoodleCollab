import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.jpg";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => fetchUsers(), []);
  const fetchUsers = () => {
    axios
      .get("https://doodlecollab-backend.onrender.com/api/users/register")
      .then((res) => {
        console.log(res.data);
      });
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post(
        "https://doodlecollab-backend.onrender.com/api/users/register",
        {
          name: data.username,
          email: data.email,
          password: data.password,
        }
      );
      alert("Registration Successful!");
      fetchUsers();
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration Failed!");
    }
  });

  return (
    <div
      className="w-full max-h-[89vh] flex justify-between"
      onSubmit={onSubmit}
    >
      <div className="w-2/5">
        <img
          src={registerImg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="w-3/5 bg-gray-50">
        <form className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-4">Create New Account</h1>
          <span className="my-2 font-semibold">
            Please fill out the form below. All fields are required.
          </span>
          <hr className="border-t-2 border-gray-200 my-5 w-1/2" />
          <input
            type="email"
            className="border py-2 px-4 font-normal w-1/2 rounded-lg bg-gray-200 border-none"
            style={{
              fontWeight: "normal",
            }}
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.email.message}
            </span>
          )}
          <input
            type="text"
            className="border py-2 px-4 font-normal w-1/2 rounded-lg bg-gray-200 border-none mt-4"
            style={{
              fontWeight: "normal",
            }}
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.username.message}
            </span>
          )}
          <div className="flex w-1/2 mt-4">
            <input
              type="text"
              className="border py-2 px-4 font-normal w-1/2 rounded-lg bg-gray-200 border-none mr-1"
              style={{
                fontWeight: "normal",
              }}
              placeholder="Firstname"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            <input
              type="text"
              className="border py-2 px-4 font-normal w-1/2  rounded-lg bg-gray-200 border-none ml-1"
              style={{
                fontWeight: "normal",
              }}
              placeholder="Lastname"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
          </div>
          {errors.firstName && errors.lastName ? (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.firstName.message}
            </span>
          ) : errors.lastName ? (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.lastName.message}
            </span>
          ) : null}
          <div className="relative w-1/2">
            <input
              type={showPassword ? "text" : "password"}
              className="border py-2 px-4 font-normal w-full rounded-lg bg-gray-200 border-none mt-4"
              style={{
                fontWeight: "normal",
              }}
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
              type="button"
              className="absolute top-2/3 right-4 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.password.message}
            </span>
          )}
          <div className="relative w-1/2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="border py-2 px-4 font-normal w-full rounded-lg bg-gray-200 border-none mt-4"
              style={{
                fontWeight: "normal",
              }}
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
              type="button"
              className="absolute top-2/3 right-4 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.confirmPassword.message}
            </span>
          )}
          <span className="text-left text-sm w-1/2 font-semibold my-1">
            Minimum 8 characters for secure password.
          </span>
          <div className="flex justify-between w-1/2 my-1 text-md font-semibold text-gray-400">
            <span>Upper Case, Lower Case, One Numbers, 8 Characters</span>
            <span>
              <span className="text-green-500 font-bold">0</span>/4
            </span>
          </div>
          <label className="cursor-pointer mt-4 text-left w-1/2 font-semibold">
            <input
              type="checkbox"
              {...register("agree", {
                required: "Please agree to the Terms and Privacy Policy",
              })}
              className="mr-2"
            />
            <span>
              I agree to{" "}
              <strong className="underline">DoodleCollab Terms</strong> and{" "}
              <strong className="underline">Privacy Policy</strong>
            </span>
          </label>
          {errors.agree && (
            <span className="text-red-500 text-left ml-4 font-semibold w-1/2">
              {errors.agree.message}
            </span>
          )}
          <button
            className="bg-black text-white font-semibold w-1/2 p-2 m-3 rounded-lg"
            type="submit"
          >
            Create Account
          </button>
          <span className="text-sm mx-auto text-left w-1/2 my-1">
            Already a member?{" "}
            <Link
              className="font-semibold underline cursor-pointer"
              to="/login"
            >
              Sign in
            </Link>
          </span>
          <span className="text-sm mx-auto text-left w-1/2">
            Looking to find your link?{" "}
            <Link className="font-semibold cursor-pointer" to="/">
              Click here to find it
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
