// src/components/MobileNavigation.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Додаємо useNavigate
import { FaHome, FaTimes } from 'react-icons/fa';

const MobileNavigation = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Отримуємо навігацію
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Функція для переходу до портфоліо
  const goToPortfolio = () => {
    toggleMenu(); // Закриваємо меню
    navigate('/portfolio/edilitalia'); // Перенаправляємо на першу сторінку проекту
  };
  
  // Переклади для пунктів меню
  const menuTexts = {
    en: {
      about: "About Me",
      portfolio: "Portfolio",
      contacts: "Contacts",
      manifesto: "Manifesto",
      en: "EN",
      it: "IT"
    },
    it: {
      about: "Chi Sono",
      portfolio: "Portfolio",
      contacts: "Contatti",
      manifesto: "Manifesto",
      en: "EN",
      it: "IT"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = menuTexts[lang] || menuTexts.en;
  
  return (
    <>
      {/* Навігаційна панель з абсолютним позиціонуванням для елементів */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '56px',
        backgroundColor: '#000',
        zIndex: 1000,
        boxSizing: 'border-box',
        padding: '0 16px',
        // Важливо: прибираємо всі інші властивості display/flex/grid
      }}>
        {/* Будиночок - абсолютне позиціонування зліва */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          transform: 'translateY(-50%)',
        }}>
          <Link 
            to="/" 
            style={{
              color: '#0f0',
              display: 'block',
              textDecoration: 'none'
            }}
          >
            <FaHome size={24} />
          </Link>
        </div>
        
        {/* Бургер-меню - абсолютне позиціонування справа */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '16px',
          transform: 'translateY(-50%)',
        }}>
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              width: 'auto', // Дозволяємо кнопці мати власну ширину
            }}
            aria-label="Toggle menu"
          >
            <div style={{ backgroundColor: '#0f0', height: '3px', width: '20px' }}></div>
            <div style={{ backgroundColor: '#0f0', height: '3px', width: '20px' }}></div>
            <div style={{ backgroundColor: '#0f0', height: '3px', width: '20px' }}></div>
          </button>
        </div>
      </div>
      
      {/* Повноекранне меню */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#121212',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'none',
              border: 'none',
              color: '#0f0',
              cursor: 'pointer'
            }}
          >
            <FaTimes size={24} />
          </button>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <a href="#about" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>{t.about}</a>
            {/* Замінюємо якір на кнопку з обробником кліку */}
            <button 
              onClick={goToPortfolio} 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              {t.portfolio}
            </button>
            <a href="#contacts" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>{t.contacts}</a>
            <Link to="/manifesto" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>{t.manifesto}</Link>
          </div>
          
          {/* Перемикач мови */}
          <div style={{
            position: 'absolute',
            bottom: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ color: lang === 'en' ? '#0f0' : 'white' }}>{t.en}</span>
            <label className="language-switch">
              <input
                type="checkbox"
                checked={lang === 'it'}
                onChange={toggleLanguage}
              />
              <span className="language-slider"></span>
            </label>
            <span style={{ color: lang === 'it' ? '#0f0' : 'white' }}>{t.it}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;