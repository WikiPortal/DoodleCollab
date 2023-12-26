// Whiteboard.jsx
import React, { useEffect } from 'react';
import './Whiteboard.css'; // Import your styles

const Whiteboard = () => {
  useEffect(() => {
    // Check if dark mode is saved in localStorage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      toggleDarkMode();
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    // Update localStorage to remember dark mode preference
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  };

  return (
    <div className="whiteboard">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>
      {/* Your whiteboard content */}
    </div>
  );
};

export default Whiteboard;
