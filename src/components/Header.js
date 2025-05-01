// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../translations';
import homeIcon from '../assets/Generic.svg';

const Header = ({ lang, toggleLanguage }) => {
  // Додаємо стан меню безпосередньо до компонента Header
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Закриваємо меню при зміні маршруту
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname, menuOpen]);

  // Функція для закриття меню при кліку на навігаційне посилання
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-icon">
          <img src={homeIcon} alt="Home" />
        </Link>
      </div>
      <div className="header-center">
        <nav className="nav-container">
          <button
            className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              {isHomePage ? (
                <a href="#about" onClick={handleNavClick}>{translations[lang].aboutTitle}</a>
              ) : (
                <Link to="/#about" onClick={handleNavClick}>{translations[lang].aboutTitle}</Link>
              )}
            </li>
            <li>
              <Link 
                to="/manifesto" 
                onClick={handleNavClick}
                className={location.pathname === '/manifesto' ? 'active-link' : ''}
              >
                {translations[lang].manifestoTitle}
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio/edilitalia" 
                onClick={handleNavClick}
                className={location.pathname.includes('/portfolio') ? 'active-link' : ''}
              >
                {translations[lang].portfolioTitle}
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a href="#contact" onClick={handleNavClick}>{translations[lang].contactTitle}</a>
              ) : (
                <Link to="/#contact" onClick={handleNavClick}>{translations[lang].contactTitle}</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="lang-toggle" onClick={toggleLanguage}>
          <span className={`lang-label ${lang === "en" ? "active" : ""}`}>ENG</span>
          <div className="lang-switch">
            <div className={`lang-thumb ${lang === "en" ? "thumb-left" : "thumb-right"}`}></div>
          </div>
          <span className={`lang-label ${lang === "it" ? "active" : ""}`}>ITAL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;