import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sketchbook from "./pages/Sketchbook/Sketchbook";
import Register from "./pages/Authentication/Register";
import Navbar from "./constants/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Footer from "./constants/Footer/Footer"
import Blog from "./pages/Blog/Blog";
import { ThemeProvider } from "./context/ThemeContext";
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
          <Route path="/" element={<Home isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick}  />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
          <Route path="/blogs" element={<Blog isBarsClicked={isBarsClicked} handleBarsClick={handleBarsClick}  />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
