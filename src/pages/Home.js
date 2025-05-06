// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import InnovationSection from '../components/InnovationSection';
import PartnershipSection from '../components/PartnershipSection';
import ContactSection from '../components/ContactSection';
// Remove this import if you're using the burger menu in Header
// import MobileNavigation from '../components/MobileNavigation';

const Home = ({ lang, toggleLanguage }) => {
  return (
    <div className="App">
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <PortfolioSection lang={lang} />
        <InnovationSection lang={lang} />
        <PartnershipSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      {/* Remove this if you're using the burger menu in Header */}
      {/* <MobileNavigation lang={lang} /> */}
    </div>
  );
};

export default Home;