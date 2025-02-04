import { createContext, useState } from "react";

export const LanguageContext = createContext()

import React from 'react'

function LanguageProvider({children}) {

    const [language, setLanguage] = useState('tr');
    const changeLanguage = (lan) => {
        setLanguage(lan)
    }

  return (
    <LanguageContext.Provider value={{ language , changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default languageContext