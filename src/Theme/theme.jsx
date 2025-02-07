import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";

import './theme.css';

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="toggler-container">
      <div className="toggler-wrap">
        <input
          type="checkbox"
          className="checkbox"
          id="dark-mode-toggler"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="dark-mode-toggler" className="label">
          <div className="ball"></div>
        </label>
        <p className="theme-text">{isDarkMode ? "Açık Tema" : "Koyu Tema"}</p>
      </div>
      
      
    </div>
  );
}



