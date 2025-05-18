// src/components/Navigation/DesktopNavigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../../translations';

const DesktopNavigation = ({ lang, toggleLanguage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Функція для прокрутки до верху сторінки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Визначення активного пункту меню
  const isActive = (path, hash = '') => {
    if (path === '/manifesto' && location.pathname === '/manifesto') {
      return true;
    }
    if (path.includes('/portfolio') && location.pathname.includes('/portfolio')) {
      return true;
    }
    if (hash === '#about' && location.hash === '#about') {
      return true;
    }
    if (hash === '#contact' && location.hash === '#contact') {
      return true;
    }
    return false;
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-icon" onClick={() => {
          if (isHomePage) {
            scrollToTop();
          }
        }}>
          <img src={require('../../assets/Generic.svg').default} alt="Home" />
        </Link>
      </div>
      <div className="header-center">
        <nav className="nav-container">
          <ul className="nav-links">
            <li>
              {isHomePage ? (
                <a 
                  href="#about" 
                  className={isActive('', '#about') ? 'active-link' : ''}
                >
                  {translations[lang].aboutTitle}
                </a>
              ) : (
                <Link 
                  to="/#about" 
                  className={isActive('', '#about') ? 'active-link' : ''}
                >
                  {translations[lang].aboutTitle}
                </Link>
              )}
            </li>
            <li>
              <Link 
                to="/manifesto" 
                className={isActive('/manifesto') ? 'active-link' : ''}
              >
                {translations[lang].manifestoTitle}
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio/edilitalia" 
                className={isActive('/portfolio') ? 'active-link' : ''}
              >
                {translations[lang].portfolioTitle}
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#contact" 
                  className={isActive('', '#contact') ? 'active-link' : ''}
                >
                  {translations[lang].contactTitle}
                </a>
              ) : (
                <Link 
                  to="/#contact" 
                  className={isActive('', '#contact') ? 'active-link' : ''}
                >
                  {translations[lang].contactTitle}
                </Link>
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

export default DesktopNavigation;