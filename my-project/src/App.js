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
const PortfolioSection = ({ lang }) => (
  <section id="portfolio">
    <h2>{translations[lang]?.portfolioTitle || "Portfolio"}</h2>
    <p>{translations[lang]?.portfolioContent || "Portfolio content goes here."}</p>
  </section>
);
const ManifestoSection = ({ lang }) => (
  <section id="manifesto">
    <h2>{translations[lang]?.manifestoTitle || "Manifesto"}</h2>
    <p>{translations[lang]?.manifestoContent || "Manifesto content goes here."}</p>
  </section>
);

const AboutSection = ({ lang }) => (
  <section id="about">
    <h2>{translations[lang]?.aboutTitle || "About"}</h2>
    <p>{translations[lang]?.aboutContent || "About content goes here."}</p>
  </section>
);

const MatteoSection = ({ lang }) => (
  <section id="matteo">
    <h2>{translations[lang]?.matteoTitle || "Matteo Section"}</h2>
    <p>{translations[lang]?.matteoContent || "Matteo content goes here."}</p>
  </section>
);

const InnovationSection = ({ lang }) => (
  <section id="innovation">
    <h2>{translations[lang]?.innovationTitle || "Innovation"}</h2>
    <p>{translations[lang]?.innovationContent || "Innovation content goes here."}</p>
  </section>
);

export default function App() {
  const [lang, setLang] = useState("en");
  
  return (
    <div className="app">
        // Placeholder for InnovationSection
        <InnovationSection lang={lang} />
        <PartnershipSection lang={lang} />
        <ContactSection lang={lang} />
      </div>
      </main>
    </div>
  );
}