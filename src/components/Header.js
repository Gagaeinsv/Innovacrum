// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import homeIcon from '../assets/Generic.svg';

const Header = ({ lang, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  // Handle home icon click
  const handleHomeClick = (e) => {
    e.preventDefault();
    
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  
  // Close menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className="header">
      <div className="header-left">
        <a 
          href="/" 
          className="home-icon"
          onClick={handleHomeClick}
        >
          <img src={homeIcon} alt="Home" />
        </a>
      </div>
      
      <div className="header-right">
        <button 
          className={`burger-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu - точно як на скріншоті */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              {isHomePage ? (
                <a href="#about" onClick={handleNavClick}>{lang === 'en' ? 'About me' : 'Chi sono'}</a>
              ) : (
                <Link to="/#about" onClick={handleNavClick}>{lang === 'en' ? 'About me' : 'Chi sono'}</Link>
              )}
            </li>
            <li>
              <Link 
                to="/portfolio/edilitalia" 
                onClick={handleNavClick}
                className={location.pathname.includes('/portfolio') ? 'active-link' : ''}
              >
                {lang === 'en' ? 'Portfolio' : 'Portfolio'}
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a href="#contact" onClick={handleNavClick}>{lang === 'en' ? 'Contacts' : 'Contatti'}</a>
              ) : (
                <Link to="/#contact" onClick={handleNavClick}>{lang === 'en' ? 'Contacts' : 'Contatti'}</Link>
              )}
            </li>
            <li>
              <Link 
                to="/manifesto" 
                onClick={handleNavClick}
                className={location.pathname === '/manifesto' ? 'active-link' : ''}
              >
                {lang === 'en' ? 'Manifesto' : 'Manifesto'}
              </Link>
            </li>
          </ul>
          
          {/* Language Toggle */}
          <div className="menu-lang-toggle">
            <button 
              className={`lang-button ${lang === 'en' ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (lang !== 'en') toggleLanguage();
                handleNavClick();
              }}
            >
              Eng
            </button>
            <span className="lang-separator">   </span>
            <button 
              className={`lang-button ${lang === 'it' ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (lang !== 'it') toggleLanguage();
                handleNavClick();
              }}
            >
              Ital
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;