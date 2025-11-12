import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      className="relative bg-cover bg-center text-white py-24 md:py-40" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{t.heroTitle}</h2>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          {t.heroSubtitle}
        </p>
        <a 
          href="#contact" 
          className="bg-[#DFD8C8] text-[#41444B] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out text-lg"
        >
          {t.contactButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;
