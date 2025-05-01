// src/components/MobileNavigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavigation = ({ lang }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Функція для прокрутки до конкретного розділу на головній сторінці
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mobile-bottom-nav">
      {/* Головна */}
      <div className="mobile-nav-item">
        <Link to="/" className="mobile-nav-link">
          <div className="mobile-nav-icon">
            <i className="fas fa-home"></i>
          </div>
          <span>{lang === 'en' ? 'Home' : 'Home'}</span>
        </Link>
      </div>
      
      {/* Про мене */}
      <div className="mobile-nav-item">
        {isHomePage ? (
          <a 
            href="#about" 
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <div className="mobile-nav-icon">
              <i className="fas fa-user"></i>
            </div>
            <span>{lang === 'en' ? 'About' : 'Chi Sono'}</span>
          </a>
        ) : (
          <Link to="/#about" className="mobile-nav-link">
            <div className="mobile-nav-icon">
              <i className="fas fa-user"></i>
            </div>
            <span>{lang === 'en' ? 'About' : 'Chi Sono'}</span>
          </Link>
        )}
      </div>
      
      {/* Портфоліо */}
      <div className="mobile-nav-item">
        <Link to="/portfolio/edilitalia" className="mobile-nav-link">
          <div className="mobile-nav-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <span>{lang === 'en' ? 'Portfolio' : 'Portfolio'}</span>
        </Link>
      </div>
      
      {/* Маніфест */}
      <div className="mobile-nav-item">
        <Link to="/manifesto" className="mobile-nav-link">
          <div className="mobile-nav-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <span>{lang === 'en' ? 'Manifesto' : 'Manifesto'}</span>
        </Link>
      </div>
      
      {/* Контакти */}
      <div className="mobile-nav-item">
        {isHomePage ? (
          <a 
            href="#contact" 
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <div className="mobile-nav-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <span>{lang === 'en' ? 'Contact' : 'Contatti'}</span>
          </a>
        ) : (
          <Link to="/#contact" className="mobile-nav-link">
            <div className="mobile-nav-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <span>{lang === 'en' ? 'Contact' : 'Contatti'}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileNavigation;