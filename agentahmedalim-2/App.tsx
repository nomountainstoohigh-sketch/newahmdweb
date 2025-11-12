import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="bg-[#DFD8C8] text-[#41444B] min-h-screen font-['Tajawal']">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;