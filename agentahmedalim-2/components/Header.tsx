import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-[#41444B] text-[#DFD8C8] shadow-md relative">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          {t.agentName}
        </h1>
        <button
          onClick={toggleLanguage}
          className="absolute right-4 top-1/2 -translate-y-1/2 md:right-8 bg-[#DFD8C8] text-[#41444B] font-semibold py-1 px-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
        >
          {language === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>
    </header>
  );
};

export default Header;