import React, { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();


export const useLanguage = () => {
  return useContext(LanguageContext);
};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
