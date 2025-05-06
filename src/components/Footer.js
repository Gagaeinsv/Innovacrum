// src/components/Footer.js
import React from 'react';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const Footer = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();

  const footerText = lang === 'en' 
    ? '© 2025 Synergia. All rights reserved.'
    : '© 2025 Synergia. Tutti i diritti riservati.';
  
  return (
    <footer className={`footer ${isMobile ? 'mobile-footer' : ''} ${isLandscape ? 'landscape-footer' : ''}`}>
      <div className={`footer-content ${isMobile ? 'mobile-footer-content' : ''} ${isLandscape ? 'landscape-footer-content' : ''}`}>
        <p className={`footer-text ${isMobile ? 'mobile-footer-text' : ''} ${isLandscape ? 'landscape-footer-text' : ''}`}>
          {footerText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;