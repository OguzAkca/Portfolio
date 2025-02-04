import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { ToastContainer, toast } from 'react-toastify';


export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const notify = () => toast("Tema Değiştirildi");

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev); // Tema değişimini tetikle
  };

  return (
    <button className="tema-btn" onClick={toggleTheme} onSubmit={notify}>
      {isDarkMode ? "Açık Tema" : "Koyu Tema"}
    </button>
  );
}
