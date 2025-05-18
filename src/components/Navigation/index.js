// src/components/Navigation/index.js
import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = ({ isMobile, lang, toggleLanguage }) => {
  // Повертаємо відповідний компонент навігації залежно від типу пристрою
  return isMobile ? (
    <MobileNavigation lang={lang} toggleLanguage={toggleLanguage} />
  ) : (
    <DesktopNavigation lang={lang} toggleLanguage={toggleLanguage} />
  );
};

export default Navigation;