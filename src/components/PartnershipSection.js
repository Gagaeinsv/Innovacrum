// src/components/PartnershipSection.js
import React from 'react';
import { translations } from '../translations';
import n8nLogo from '../assets/n8n.png';
import a2comLogo from '../assets/22com.png';
import tooDigitalLogo from '../assets/toodigital.png';
import gimLogo from '../assets/gim.png';
import ixlLogo from '../assets/ixl.png';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const PartnershipSection = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();
  
  // Array of partners with their URL, image, and alt text
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
    <section id="partnership" className={`section partnership-section ${isMobile ? 'mobile-partnership-section' : ''} ${isLandscape ? 'landscape-partnership-section' : ''}`}>
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