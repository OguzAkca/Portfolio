import React from 'react';
import { useLanguage } from '../context/languageContext';


const Language = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      style={buttonStyle}
    >
      {language === 'en' ? 'Switch to Turkish' : 'Switch to English'}
    </button>
  );
};

const buttonStyle = {
  backgroundColor: '#4731D3',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Language;
