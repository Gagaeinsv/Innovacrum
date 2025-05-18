// src/pages/Home.js (оновлений)
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import InnovationSection from '../components/InnovationSection';
import PartnershipSection from '../components/PartnershipSection';
import ContactSection from '../components/ContactSection';
// Імпорт мобільних компонентів
import MobileHomeSection from '../components/MobileHomeSection';
import MobileAboutSection from '../components/MobileAboutSection';
import MobilePortfolioSection from '../components/MobilePortfolioSection';
import MobileInnovationSection from '../components/MobileInnovationSection';
import MobilePartnershipSection from '../components/MobilePartnershipSection';
import MobileContactSection from '../components/MobileContactSection';
import MobileNavigation from '../components/MobileNavigation';

const Home = ({ lang, toggleLanguage, isMobile }) => {
  // Для мобільної версії показуємо одну сторінку з усіма секціями
  if (isMobile) {
    return (
      <div className="mobile-home-page">
        {/* Головна секція */}
        <MobileHomeSection lang={lang} />
        
        {/* Секція About Me */}
        <MobileAboutSection lang={lang} />
        
        {/* Секція Portfolio */}
        <MobilePortfolioSection lang={lang} />
        
        {/* Секція Innovation */}
        <MobileInnovationSection lang={lang} />
        
        {/* Секція Partnership */}
        <MobilePartnershipSection lang={lang} />
        
        {/* Секція Contacts */}
        <MobileContactSection lang={lang} />
        
        {/* Мобільна навігація */}
        <MobileNavigation lang={lang} />
      </div>
    );
  }
  
  // Для десктопної версії показуємо звичайний розподіл секцій
  return (
    <div className="home-page">
      <HeroSection lang={lang} />
      <AboutSection lang={lang} id="about" />
      <PortfolioSection lang={lang} />
      <InnovationSection lang={lang} />
      <PartnershipSection lang={lang} />
      <ContactSection lang={lang} id="contact" />
    </div>
  );
};

export default Home;