import React from 'react';
import { useLanguage } from '../context/languageContext';

const Language = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <p 
      onClick={toggleLanguage}
      style={textStyle}
    >
      {language === 'en' ? 'Switch to Turkish' : 'Switch to English'}
    </p>
  );
};

const textStyle = {
  color: '#CBF281',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'underline', // Kullanıcıya tıklanabilir olduğunu göstermek için
};

export default Language;
