// src/pages/Manifesto.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const Manifesto = ({ lang, toggleLanguage }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();

  // Data for display
  const manifestoData = {
    en: {
      title: 'INNOVACRUM MANIFESTO',
      subtitle: 'Toward a New Authentic Meaning of Innovation',
      sections: [
        {
          title: 'BEYOND REFLECTION, TOWARD AUTHENTICITY',
          content: 'Our contemporary world is inundated with "mirrors" and representations that often lose their connection to reality. At Innovacrum, we believe that innovation should not be confined to a play of reflections or mere self-referential simulacra. Instead, it must serve to break these mirrors and reconnect with the most profound human needs.'
        },
        // ... other sections ...
      ],
      footer: 'With Innovacrum, we assert our right (and duty) to shape a reality that does not simply reproduce old models but dares to create new meanings, new languages, and a new shared ethic. For an innovation that, beyond being "new," is both true and human.'
    },
    it: {
      // Italian version
      title: 'MANIFESTO INNOVACRUM',
      subtitle: 'Verso un Nuovo Significato Autentico dell\'Innovazione',
      sections: [
        // Italian sections
      ],
      footer: 'Con Innovacrum, affermiamo il nostro diritto (e dovere) di plasmare una realtà che non si limiti a riprodurre vecchi modelli, ma osi creare nuovi significati, nuovi linguaggi e una nuova etica condivisa. Per un\'innovazione che, oltre ad essere "nuova", sia vera e umana.'
    }
  };

  // Use English as fallback
  const currentLangData = manifestoData[lang] || manifestoData.en;

  return (
    <div className={`App ${isMobile ? 'mobile-app' : ''} ${isLandscape ? 'landscape-app' : ''}`}>
      {/* Include Header on all pages */}
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage}
      />
      
      <main className={`${isMobile ? 'mobile-main' : ''} ${isLandscape ? 'landscape-main' : ''}`}>
        <div className={`manifesto-page ${isMobile ? 'mobile-manifesto-page' : ''} ${isLandscape ? 'landscape-manifesto-page' : ''}`}>
          <div className={`manifesto-container ${isMobile ? 'mobile-manifesto-container' : ''} ${isLandscape ? 'landscape-manifesto-container' : ''}`}>
            <h1 className={`manifesto-title ${isMobile ? 'mobile-manifesto-title' : ''} ${isLandscape ? 'landscape-manifesto-title' : ''}`}>{currentLangData.title}</h1>
            <h2 className={`manifesto-subtitle ${isMobile ? 'mobile-manifesto-subtitle' : ''} ${isLandscape ? 'landscape-manifesto-subtitle' : ''}`}>{currentLangData.subtitle}</h2>
            
            {currentLangData.sections && currentLangData.sections.map((section, index) => (
              <div key={index} className={`manifesto-section ${isMobile ? 'mobile-manifesto-section' : ''} ${isLandscape ? 'landscape-manifesto-section' : ''}`}>
                <h3 className={`manifesto-section-title ${isMobile ? 'mobile-manifesto-section-title' : ''} ${isLandscape ? 'landscape-manifesto-section-title' : ''}`}>{section.title}</h3>
                <p className={`manifesto-section-content ${isMobile ? 'mobile-manifesto-section-content' : ''} ${isLandscape ? 'landscape-manifesto-section-content' : ''}`}>{section.content}</p>
              </div>
            ))}
            
            <p className={`manifesto-footer ${isMobile ? 'mobile-manifesto-footer' : ''} ${isLandscape ? 'landscape-manifesto-footer' : ''}`}>{currentLangData.footer}</p>
            
            <div className={`manifesto-copyright ${isMobile ? 'mobile-manifesto-copyright' : ''} ${isLandscape ? 'landscape-manifesto-copyright' : ''}`}>
              © {new Date().getFullYear()} Synergia. All rights reserved.
            </div>
          </div>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default Manifesto;