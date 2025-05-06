// src/components/PartnershipSection.js - Updated version
import React, { useEffect } from 'react';
import { translations } from '../translations';
import n8nLogo from '../assets/n8n.png';
import a2comLogo from '../assets/22com.png';
import tooDigitalLogo from '../assets/toodigital.png';
import gimLogo from '../assets/gim.png';
import ixlLogo from '../assets/ixl.png';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const PartnershipSection = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();
  
  // Add debug logging
  useEffect(() => {
    console.log('PartnershipSection rendered');
    
    // Count how many partnership sections are in the DOM
    const partnershipSections = document.querySelectorAll('.partnership-section');
    console.log(`Number of partnership sections: ${partnershipSections.length}`);
    
    // Add a unique class to this instance
    const currentSection = document.getElementById('partnership');
    if (currentSection) {
      currentSection.classList.add('main-partnership-section');
    }
  }, []);
  
  const partners = [
    {
      logo: n8nLogo,
      url: 'https://n8n.io/',
      alt: 'n8n'
    },
    {
      logo: a2comLogo,
      url: 'https://www.a2-com.it/',
      alt: '22COM'
    },
    {
      logo: tooDigitalLogo,
      url: 'https://www.toodigital.it/',
      alt: 'TOO DIGITAL'
    },
    {
      logo: gimLogo,
      url: 'https://www.giminstitute.org/',
      alt: 'GIM Institute'
    },
    {
      logo: ixlLogo,
      url: 'https://www.ixl-center.com/',
      alt: 'IXL CENTER'
    }
  ];

  return (
    <section id="partnership" className={`section partnership-section unique-partnership-section ${isMobile ? 'mobile-partnership-section' : ''} ${isLandscape ? 'landscape-partnership-section' : ''}`}>
      <div className={`container ${isMobile ? 'mobile-container' : ''} ${isLandscape ? 'landscape-container' : ''}`}>
        <h2 className={`${isMobile ? 'mobile-section-title' : ''} ${isLandscape ? 'landscape-section-title' : ''}`}>{translations[lang].partnershipTitle}</h2>
        <div className={`partners-container ${isMobile ? 'mobile-partners-container' : ''} ${isLandscape ? 'landscape-partners-container' : ''}`}>
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`partner-link ${isMobile ? 'mobile-partner-link' : ''} ${isLandscape ? 'landscape-partner-link' : ''}`}
            >
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className={`partner-logo ${isMobile ? 'mobile-partner-logo' : ''} ${isLandscape ? 'landscape-partner-logo' : ''}`} 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;