// LanguageContext.js
"use client"
import React from 'react';
const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('Portuguese');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;