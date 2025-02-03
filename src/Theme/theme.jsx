import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem('darkMode') === 'enabled' ||
      (!localStorage.getItem('darkMode') && prefersDarkMode)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [isDarkMode]);

  return (
    <button className="tema-btn" onClick={() => setIsDarkMode((prev) => !prev)}>
      {isDarkMode ? 'Açık Tema' : 'Koyu Tema'}
    </button>
  );
}
