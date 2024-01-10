import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Sketchbook from "./pages/Sketchbook/Sketchbook";
import Darkmode from "./Darkmode/Darkmode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/sketchbook" element={<Sketchbook />} />
      </Routes>
      <Darkmode />
    </Router>
  );
}

export default App;
