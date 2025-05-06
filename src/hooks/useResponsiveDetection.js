// src/hooks/useResponsiveDetection.js
import { useState, useEffect } from 'react';

export const useResponsiveDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkScreenDimensions = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    // Check on initial load
    checkScreenDimensions();
    
    // Add event listener for resize events
    window.addEventListener('resize', checkScreenDimensions);
    
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenDimensions);
    };
  }, []);

  return { isMobile, isLandscape };
};