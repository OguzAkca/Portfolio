import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import { ToastContainer, toast } from 'react-toastify';
import './theme.css';

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  
  const notify = () => toast("Tema Değiştirildi");

  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev); 
    notify(); 
  };

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="toogler-wrap">
      <input
        type="checkbox"
        className="checkbox"
        id="dark-mode-toggler"
        checked={isDarkMode} 
        onChange={toggleTheme} 
      />
      <label htmlFor="dark-mode-toggler" className="label">
        
        <i></i>
        <i></i>
        <div className="ball"></div>
      </label>
      <p>Koyu Tema</p>
      <ToastContainer />
    </div>
  );
}



