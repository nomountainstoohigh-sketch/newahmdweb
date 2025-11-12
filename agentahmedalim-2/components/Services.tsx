import React from 'react';
import HomeIcon from './icons/HomeIcon';
import BuildingIcon from './icons/BuildingIcon';
import LeafIcon from './icons/LeafIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => (
    <div className="bg-white bg-opacity-40 p-8 rounded-xl shadow-md text-center flex flex-col items-center justify-center">
        <div className="text-[#41444B] mb-4">{icon}</div>
        <h4 className="text-2xl font-bold">{title}</h4>
    </div>
);

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-16 md:py-24 bg-white bg-opacity-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.servicesTitle}</h3>
          <p className="max-w-3xl mx-auto text-lg md:text-xl">
            {t.servicesSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard icon={<HomeIcon />} title={t.serviceResidential} />
          <ServiceCard icon={<BuildingIcon />} title={t.serviceCommercial} />
          <ServiceCard icon={<LeafIcon />} title={t.serviceAgricultural} />
        </div>
        <div className="mt-16 text-center max-w-4xl mx-auto p-8 bg-[#41444B] text-[#DFD8C8] rounded-lg shadow-xl">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">{t.marketingTitle}</h4>
          <p className="text-lg md:text-xl">
            {t.marketingDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;