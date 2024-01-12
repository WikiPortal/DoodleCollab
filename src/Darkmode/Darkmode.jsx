
import  { useEffect, useState } from 'react';
import './Darkmode.css';

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="darkmode">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        Dark Mode
      </button>
      {/* Your darkmode content */}
    </div>
  );
};

export default Darkmode;
