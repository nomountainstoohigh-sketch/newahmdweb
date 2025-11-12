import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#DFD8C8] border-t-2 border-[#41444B] border-opacity-20 py-6">
      <div className="container mx-auto px-6 text-center text-[#41444B]">
        <p className="text-base">
          &copy; {currentYear} {t.agentName}. {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;