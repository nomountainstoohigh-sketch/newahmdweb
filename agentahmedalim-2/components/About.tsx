import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 md:py-24 bg-white bg-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.aboutTitle}</h3>
        <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-4">
          <p>
            {t.aboutParagraph1}
          </p>
          <p>
            {t.aboutParagraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;