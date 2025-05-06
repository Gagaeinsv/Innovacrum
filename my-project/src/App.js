import React, { useState } from "react";
import "./styles.css";

const translations = { /* ...ваш об'єкт translations... */ };

// Компонент LanguageToggle
const LanguageToggle = ({ lang, toggleLanguage }) => (
  <div className="lang-toggle" onClick={toggleLanguage}>
    <span className={`lang-label ${lang === "en" ? "active" : ""}`}>ENG</span>
    <div className="lang-switch">
      <div className={`lang-thumb ${lang === "en" ? "thumb-left" : "thumb-right"}`} />
    </div>
    <span className={`lang-label ${lang === "it" ? "active" : ""}`}>IT</span>
  </div>
);

// Компонент Header
const Header = ({ lang, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="home-icon">🏠</a>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#about">{translations[lang].aboutTitle}</a></li>
          <li><a href="#manifesto">{translations[lang].manifestoTitle}</a></li>
          <li><a href="#portfolio">{translations[lang].portfolioTitle}</a></li>
          <li><a href="#contact">{translations[lang].contactTitle}</a></li>
        </ul>
      </nav>

      <div className="header-right">
        <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />
      </div>
    </header>
  );
};

// Решта компонентів (MatteoSection, ManifestoSection, AboutSection, etc.)

export default function App() {
  const [lang, setLang] = useState("en");
  
  return (
    <div className="app">
      <Header lang={lang} toggleLanguage={() => setLang(l => l === "en" ? "it" : "en")} />
      
      <main>
        <MatteoSection lang={lang} />
        <ManifestoSection lang={lang} />
        <AboutSection lang={lang} />
        <PortfolioSection lang={lang} />
        <InnovationSection lang={lang} />
        <PartnershipSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
    </div>
  );
}