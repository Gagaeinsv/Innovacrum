// src/components/InnovationSection.js
import React from 'react';
import { translations } from '../translations';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const InnovationSection = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();

  return (
    <section id="innovation" className={`section innovation-section ${isMobile ? 'mobile-innovation-section' : ''} ${isLandscape ? 'landscape-innovation-section' : ''}`}>
      <div className={`container ${isMobile ? 'mobile-container' : ''} ${isLandscape ? 'landscape-container' : ''}`}>
        <h2 className={`section-title ${isMobile ? 'mobile-section-title' : ''} ${isLandscape ? 'landscape-section-title' : ''}`}>{translations[lang].innovationTitle}</h2>
        <p className={`innovation-intro ${isMobile ? 'mobile-innovation-intro' : ''} ${isLandscape ? 'landscape-innovation-intro' : ''}`}>{translations[lang].innovationIntro}</p>
        
        <div className={`innovation-grid ${isMobile ? 'mobile-innovation-grid' : ''} ${isLandscape ? 'landscape-innovation-grid' : ''}`}>
          {/* Top left block */}
          <div className={`innovation-block block-one ${isMobile ? 'mobile-innovation-block' : ''} ${isLandscape ? 'landscape-innovation-block' : ''}`}>
            <h3 className={`block-title ${isMobile ? 'mobile-block-title' : ''} ${isLandscape ? 'landscape-block-title' : ''}`}>{translations[lang].innovationConsultingTitle}</h3>
            <p className={`${isMobile ? 'mobile-block-text' : ''} ${isLandscape ? 'landscape-block-text' : ''}`}>{translations[lang].innovationConsultingContent}</p>
            <ul className={`innovation-list ${isMobile ? 'mobile-innovation-list' : ''} ${isLandscape ? 'landscape-innovation-list' : ''}`}>
              {translations[lang].innovationConsultingPoints.map((point, index) => (
                <li key={index} className={`${isMobile ? 'mobile-list-item' : ''} ${isLandscape ? 'landscape-list-item' : ''}`}>{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Top right block */}
          <div className={`innovation-block block-two ${isMobile ? 'mobile-innovation-block' : ''} ${isLandscape ? 'landscape-innovation-block' : ''}`}>
            <h3 className={`block-title ${isMobile ? 'mobile-block-title' : ''} ${isLandscape ? 'landscape-block-title' : ''}`}>{translations[lang].innovationAutomationTitle}</h3>
            <p className={`${isMobile ? 'mobile-block-text' : ''} ${isLandscape ? 'landscape-block-text' : ''}`}>{translations[lang].innovationAutomationContent}</p>
            <ul className={`innovation-list ${isMobile ? 'mobile-innovation-list' : ''} ${isLandscape ? 'landscape-innovation-list' : ''}`}>
              {translations[lang].innovationAutomationPoints.map((point, index) => (
                <li key={index} className={`${isMobile ? 'mobile-list-item' : ''} ${isLandscape ? 'landscape-list-item' : ''}`}>{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Bottom left CTA block */}
          <div className={`innovation-block block-cta ${isMobile ? 'mobile-cta-block' : ''} ${isLandscape ? 'landscape-cta-block' : ''}`}>
            <p className={`cta-text ${isMobile ? 'mobile-cta-text' : ''} ${isLandscape ? 'landscape-cta-text' : ''}`}>{translations[lang].innovationCTA}</p>
            <a href="#contact" className={`cta-arrow ${isMobile ? 'mobile-cta-arrow' : ''} ${isLandscape ? 'landscape-cta-arrow' : ''}`}>
              <div className={`arrow-circle ${isMobile ? 'mobile-arrow-circle' : ''} ${isLandscape ? 'landscape-arrow-circle' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
          
          {/* Bottom right block */}
          <div className={`innovation-block block-three ${isMobile ? 'mobile-innovation-block' : ''} ${isLandscape ? 'landscape-innovation-block' : ''}`}>
            <h3 className={`block-title ${isMobile ? 'mobile-block-title' : ''} ${isLandscape ? 'landscape-block-title' : ''}`}>{translations[lang].innovationRespondersTitle}</h3>
            <p className={`${isMobile ? 'mobile-block-text' : ''} ${isLandscape ? 'landscape-block-text' : ''}`}>{translations[lang].innovationRespondersContent}</p>
            <ul className={`innovation-list ${isMobile ? 'mobile-innovation-list' : ''} ${isLandscape ? 'landscape-innovation-list' : ''}`}>
              {translations[lang].innovationRespondersPoints.map((point, index) => (
                <li key={index} className={`${isMobile ? 'mobile-list-item' : ''} ${isLandscape ? 'landscape-list-item' : ''}`}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;