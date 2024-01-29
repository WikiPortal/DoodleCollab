import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./constants/Navbar/Navbar";
import Footer from "./constants/Footer/Footer";
import Sketchbook from "./pages/Sketchbook/Sketchbook";
import Register from "./pages/Authentication/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Blog from "./pages/Blog/Blog";
import Features from "./pages/Features/Features";

function App() {
  const [isBarsClicked, setIsBarsClicked] = useState(false);

  const handleBarsClick = () => {
    setIsBarsClicked(!isBarsClicked);
  };

  return (
    <ThemeProvider>
      <Router>
        <Navbar isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
