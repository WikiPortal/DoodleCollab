
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sketchbook from "./pages/Sketchbook/Sketchbook";
import Register from "./pages/Authentication/Register";
import Navbar from "./constants/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Footer from "./constants/Navbar/Footer/Footer"

function App() {
  const isUserLoggedIn = !!localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {isUserLoggedIn && (
          <Route path="/sketchbook" element={<Sketchbook />} />
        )}
         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
