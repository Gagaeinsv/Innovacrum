// src/components/InnovationSection.js
import React from 'react';
import { translations } from '../translations';

const InnovationSection = ({ lang }) => {
  return (
    <section id="innovation" className="section innovation-section">
      <div className="container">
        <h2 className="section-title">{translations[lang].innovationTitle}</h2>
        <p className="innovation-intro">{translations[lang].innovationIntro}</p>
        
        <div className="innovation-grid">
          {/* Верхній лівий блок */}
          <div className="innovation-block block-one">
            <h3 className="block-title">{translations[lang].innovationConsultingTitle}</h3>
            <p>{translations[lang].innovationConsultingContent}</p>
            <ul className="innovation-list">
              {translations[lang].innovationConsultingPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Верхній правий блок */}
          <div className="innovation-block block-two">
            <h3 className="block-title">{translations[lang].innovationAutomationTitle}</h3>
            <p>{translations[lang].innovationAutomationContent}</p>
            <ul className="innovation-list">
              {translations[lang].innovationAutomationPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Нижній лівий CTA блок */}
          <div className="innovation-block block-cta">
            <p className="cta-text">{translations[lang].innovationCTA}</p>
            <a href="#contact" className="cta-arrow">
              <div className="arrow-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
          
          {/* Нижній правий блок */}
          <div className="innovation-block block-three">
            <h3 className="block-title">{translations[lang].innovationRespondersTitle}</h3>
            <p>{translations[lang].innovationRespondersContent}</p>
            <ul className="innovation-list">
              {translations[lang].innovationRespondersPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;