import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Kullanıcının varsayılan tema tercihini al
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // LocalStorage'dan ya da varsayılan ayardan temayı belirle
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) {
      return storedTheme === "enabled";
    }
    return prefersDarkMode;
  });

  // Tema değiştiğinde body class'ını güncelle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
