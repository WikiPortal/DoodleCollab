import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => fetchUsers(), []);
  const fetchUsers = () => {
    axios.get("https://doodlecollab-backend.onrender.com/api/users/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://doodlecollab-backend.onrender.com/api/users/register", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Registration Successful");
        setName("");
        setEmail("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Registration Error", error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#8E8FFA] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleRegister}
        >
          <label>Name</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-white p-2 text-black"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-white p-2 text-black"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-white p-2 text-black"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            className="w-[200px] h-[50px] border hover:bg-[#362FD9]"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-[#FF7676]">
        <h2 className="text-3xl text-white">Sign Up</h2>
      </div>
    </div>
  );
};

export default Register;
