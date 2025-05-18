// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  // Тексти з локалізацією
  const texts = {
    en: {
      copyright: '© 2025 Synergia. All rights reserved',
      adminTitle: 'Admin Panel'
    },
    it: {
      copyright: '© 2025 Synergia. Tutti i diritti riservati',
      adminTitle: 'Pannello di Amministrazione'
    }
  };
  
  // Використовуємо тексти для поточної мови
  const t = texts[lang] || texts.en;
  
  return (
    <footer className={`footer ${isMobile ? 'mobile-footer' : ''}`}>
      <div className={`footer-content ${isMobile ? 'mobile-footer-content' : ''}`}>
        <p className={isMobile ? 'mobile-footer-text' : ''}>
          {t.copyright}
          <Link 
            to={`/admin?lang=${lang}`} 
            className="hidden-admin-link" 
            title={t.adminTitle}
            aria-label={t.adminTitle}
          >.</Link>
        </p>
      </div>
      <style jsx>{`
        .hidden-admin-link {
          display: inline;
          color: inherit;
          text-decoration: none;
          padding: 0 3px;
          cursor: pointer;
        }
        
        .hidden-admin-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
};

export default Footer;