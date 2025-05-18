// src/components/Navigation/MobileNavigation.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTimes } from 'react-icons/fa';
import { translations } from '../../translations';

const MobileNavigation = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleNavClick = () => {
    setMenuOpen(false);
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
    <>
      {/* Навігаційна панель з flex-box і розташуванням елементів по краях */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '56px',
        backgroundColor: '#0e0e0e',
        borderBottom: '1px solid #222',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
      }}>
        {/* Іконка Home зліва */}
        <Link to="/" style={{ color: '#0f0', display: 'flex', textDecoration: 'none' }}>
          <FaHome size={24} />
        </Link>
        
        {/* Бургер-меню справа */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            width: '30px',
            height: '22px',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: '#fff',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: '#fff',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s',
          }}></span>
          <span style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: '#fff',
            transition: 'transform 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
          }}></span>
        </button>
      </div>
      
      {/* Випадаюче меню */}
      <div style={{
        display: menuOpen ? 'block' : 'none',
        position: 'fixed',
        top: '56px',
        left: 0,
        right: 0,
        backgroundColor: '#0e0e0e',
        borderBottom: '1px solid #222',
        zIndex: 999,
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {isHomePage ? (
              <a 
                href="#about" 
                onClick={handleNavClick}
                style={{ 
                  color: isActive('', '#about') ? '#00ff4c' : '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  padding: '15px',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                {translations[lang].aboutTitle}
              </a>
            ) : (
              <Link 
                to="/#about" 
                onClick={handleNavClick}
                style={{ 
                  color: isActive('', '#about') ? '#00ff4c' : '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  padding: '15px',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                {translations[lang].aboutTitle}
              </Link>
            )}
          </li>
          <li style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Link 
              to="/portfolio/edilitalia" 
              onClick={handleNavClick}
              style={{ 
                color: isActive('/portfolio') ? '#00ff4c' : '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '16px',
                padding: '15px',
                display: 'block',
                textAlign: 'center',
              }}
            >
              {translations[lang].portfolioTitle}
            </Link>
          </li>
          <li style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Link 
              to="/manifesto" 
              onClick={handleNavClick}
              style={{ 
                color: isActive('/manifesto') ? '#00ff4c' : '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '16px',
                padding: '15px',
                display: 'block',
                textAlign: 'center',
              }}
            >
              {translations[lang].manifestoTitle}
            </Link>
          </li>
          <li style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {isHomePage ? (
              <a 
                href="#contact" 
                onClick={handleNavClick}
                style={{ 
                  color: isActive('', '#contact') ? '#00ff4c' : '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  padding: '15px',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                {translations[lang].contactTitle}
              </a>
            ) : (
              <Link 
                to="/#contact" 
                onClick={handleNavClick}
                style={{ 
                  color: isActive('', '#contact') ? '#00ff4c' : '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  padding: '15px',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                {translations[lang].contactTitle}
              </Link>
            )}
          </li>
          
          {/* Перемикач мов */}
          <li style={{ padding: '15px', textAlign: 'center' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }} 
              onClick={toggleLanguage}
            >
              <span style={{
                fontSize: '12px',
                color: lang === "en" ? '#00ff4c' : '#666',
                fontWeight: lang === "en" ? 'bold' : 'normal',
                margin: '0 5px',
              }}>ENG</span>
              <div style={{
                width: '36px',
                height: '18px',
                backgroundColor: '#222',
                borderRadius: '10px',
                position: 'relative',
                margin: '0 5px',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#00ff4c',
                  borderRadius: '50%',
                  top: '1px',
                  left: lang === "en" ? '1px' : 'auto',
                  right: lang === "en" ? 'auto' : '1px',
                  transition: 'all 0.3s',
                }}></div>
              </div>
              <span style={{
                fontSize: '12px',
                color: lang === "it" ? '#00ff4c' : '#666',
                fontWeight: lang === "it" ? 'bold' : 'normal',
                margin: '0 5px',
              }}>ITAL</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;