// src/components/Footer.js
import React, { useState, useEffect } from 'react';

const Footer = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Відстеження ширини екрану для адаптивності
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Перевірка при завантаженні
    checkIsMobile();
    
    // Додаємо слухач події для перевірки при зміні розміру вікна
    window.addEventListener('resize', checkIsMobile);
    
    // Прибираємо слухач при демонтажі компонента
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const footerText = lang === 'en' 
    ? '© 2025 Synergia. All rights reserved.'
    : '© 2025 Synergia. Tutti i diritti riservati.';
  
  return (
    <footer className={`footer ${isMobile ? 'mobile-footer' : ''}`}>
      <div className={`footer-content ${isMobile ? 'mobile-footer-content' : ''}`}>
        <p className={isMobile ? 'mobile-footer-text' : ''}>
          {footerText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;