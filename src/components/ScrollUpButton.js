// src/components/ScrollUpButton.js
import React, { useState, useEffect } from 'react';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const ScrollUpButton = () => {
  const { isMobile, isLandscape } = useResponsiveDetection();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`scroll-to-top ${isVisible ? 'visible' : ''} ${isMobile ? 'mobile-scroll-to-top' : ''} ${isLandscape ? 'landscape-scroll-to-top' : ''}`} 
      onClick={scrollToTop}
    >
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>&#8593;</span>
    </div>
  );
};

export default ScrollUpButton;