// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../translations';
import homeIcon from '../assets/Generic.svg';

const Header = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Перевіряємо розмір екрану для визначення мобільного режиму
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile(); // Початкова перевірка
    window.addEventListener('resize', checkIsMobile); // Слухач події зміни розміру
    
    return () => {
      window.removeEventListener('resize', checkIsMobile); // Очищення при демонтажі
    };
  }, []);

  // Закриваємо меню при зміні маршруту
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname, menuOpen]);

  // Функція для закриття меню при кліку на навігаційне посилання
  const handleNavClick = () => setMenuOpen(false);

  // Функція для прокрутки до верху сторінки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Функція для перемикання меню
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
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

  // Мобільна версія хедера
  if (isMobile) {
    return (
      <>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#0e0e0e',
          borderBottom: '1px solid #222',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between', // Змінено з center на space-between
          alignItems: 'center',
          height: '50px',
          zIndex: 1000,
        }}>
          <Link to="/" onClick={scrollToTop}>
            <img src={homeIcon} alt="Home" style={{ height: '24px', width: 'auto' }} />
          </Link>
          
          <button 
            onClick={toggleMenu} 
            style={{
              background: 'none',
              border: 'none',
              width: '30px',
              height: '22px',
              position: 'relative',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block',
              position: 'absolute',
              width: '100%',
              height: '3px',
              backgroundColor: '#fff',
              left: 0,
              top: menuOpen ? '10px' : '0',
              transform: menuOpen ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.3s, top 0.3s',
            }}></span>
            <span style={{
              display: 'block',
              position: 'absolute',
              width: '100%',
              height: '3px',
              backgroundColor: '#fff',
              left: 0,
              top: '10px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }}></span>
            <span style={{
              display: 'block',
              position: 'absolute',
              width: '100%',
              height: '3px',
              backgroundColor: '#fff',
              left: 0,
              top: menuOpen ? '10px' : '20px',
              transform: menuOpen ? 'rotate(-45deg)' : 'none',
              transition: 'transform 0.3s, top 0.3s',
            }}></span>
          </button>
        </div>
        
        <div style={{
          display: menuOpen ? 'block' : 'none',
          position: 'fixed',
          top: '50px',
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
  }

  // Десктопна версія хедера
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-icon" onClick={() => {
          if (isHomePage) {
            scrollToTop();
          }
        }}>
          <img src={homeIcon} alt="Home" />
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

export default Header;