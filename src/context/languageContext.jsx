import React, { createContext, useState, useContext } from 'react';

// Dil Context'ini oluşturuyoruz
const LanguageContext = createContext();

// useLanguage hook'u
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// LanguageProvider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Varsayılan dil İngilizce

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
