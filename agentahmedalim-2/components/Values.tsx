import React from 'react';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import StarIcon from './icons/StarIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#DFD8C8] rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="bg-[#41444B] text-[#DFD8C8] p-4 rounded-full mb-4">
      {icon}
    </div>
    <h4 className="text-2xl font-bold mb-2">{title}</h4>
    <p className="text-base leading-relaxed">{description}</p>
  </div>
);

const Values: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const valuesData = [
    {
      icon: <ShieldCheckIcon />,
      title: t.value1Title,
      description: t.value1Description,
    },
    {
      icon: <BriefcaseIcon />,
      title: t.value2Title,
      description: t.value2Description,
    },
    {
      icon: <StarIcon />,
      title: t.value3Title,
      description: t.value3Description,
    },
  ];

  return (
    <section id="values" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {valuesData.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;