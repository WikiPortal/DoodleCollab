
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const isUserLoggedIn = !!localStorage.getItem("token");

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          {isUserLoggedIn && <Route path="/sketchbook" element={<Sketchbook />} />}
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
