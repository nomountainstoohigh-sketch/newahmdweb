import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactEmail = 'ahmed@ahmed.estate';
  const contactPhone = '+966558851033';
  const whatsappLink = `https://wa.me/966558851033`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#41444B] text-[#DFD8C8]">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.contactTitle}</h3>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          {t.contactSubtitle}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <a href={`tel:${contactPhone}`} className="flex items-center gap-3 text-xl font-semibold hover:text-white transition-colors duration-300">
            <PhoneIcon />
            <span>{contactPhone}</span>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl font-semibold hover:text-white transition-colors duration-300">
            <WhatsappIcon />
            <span>{t.whatsappButton}</span>
          </a>
          <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-xl font-semibold hover:text-white transition-colors duration-300">
            <EmailIcon />
            <span>{contactEmail}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;