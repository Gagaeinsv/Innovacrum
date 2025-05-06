// src/components/MobileNavigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const MobileNavigation = ({ lang }) => {
  const { isLandscape } = useResponsiveDetection();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Function to scroll to a specific section on the home page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`mobile-bottom-nav ${isLandscape ? 'landscape-bottom-nav' : ''}`}>
      {/* Home */}
      <div className="mobile-nav-item">
        <Link to="/" className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}>
          <div className="mobile-nav-icon">
            <i className="fas fa-home"></i>
          </div>
          <span>{lang === 'en' ? 'Home' : 'Home'}</span>
        </Link>
      </div>
      
      {/* About */}
      <div className="mobile-nav-item">
        {isHomePage ? (
          <a 
            href="#about" 
            className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}
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
          <Link to="/#about" className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}>
            <div className="mobile-nav-icon">
              <i className="fas fa-user"></i>
            </div>
            <span>{lang === 'en' ? 'About' : 'Chi Sono'}</span>
          </Link>
        )}
      </div>
      
      {/* Portfolio */}
      <div className="mobile-nav-item">
        <Link to="/portfolio/edilitalia" className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}>
          <div className="mobile-nav-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <span>{lang === 'en' ? 'Portfolio' : 'Portfolio'}</span>
        </Link>
      </div>
      
      {/* Manifesto */}
      <div className="mobile-nav-item">
        <Link to="/manifesto" className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}>
          <div className="mobile-nav-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <span>{lang === 'en' ? 'Manifesto' : 'Manifesto'}</span>
        </Link>
      </div>
      
      {/* Contact */}
      <div className="mobile-nav-item">
        {isHomePage ? (
          <a 
            href="#contact" 
            className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}
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
          <Link to="/#contact" className={`mobile-nav-link ${isLandscape ? 'landscape-nav-link' : ''}`}>
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