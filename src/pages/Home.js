// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import InnovationSection from '../components/InnovationSection';
import PartnershipSection from '../components/PartnershipSection';
import ContactSection from '../components/ContactSection';

const Home = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
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
    </div>
  );
};

export default Home;