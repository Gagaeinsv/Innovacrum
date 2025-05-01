// src/components/AboutSection.js
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

const AboutSection = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Відстеження ширини екрану для адаптивності
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Перевірка при завантаженні
    checkIsMobile();
    
    // Додаємо слухач події для перевірки при зміні розміру вікна
    window.addEventListener('resize', checkIsMobile);
    
    // Прибираємо слухач при демонтажі компонента
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section id="about" className={`section about-section ${isMobile ? 'mobile-about-section' : ''}`}>
      <div className={`container ${isMobile ? 'mobile-container' : ''}`}>
        <h2 className={isMobile ? 'mobile-section-title' : ''}>ABOUT ME</h2>
        <div className={`about-blocks ${isMobile ? 'mobile-about-blocks' : ''}`}>
          <div className={`about-block ${isMobile ? 'mobile-about-block' : ''}`}>
            <h3 className={isMobile ? 'mobile-block-title' : ''}>
              {translations[lang].aboutSimplifyTitle || 'SIMPLIFY PROCESSES AND CREATE DOCUMENTATION'}
            </h3>
            <p className={isMobile ? 'mobile-block-text' : ''}>
              {translations[lang].aboutSimplifyContent || 'I excel at simplifying business processes by standardizing workflows, defining clear responsibilities, and documenting key procedures. This approach ensures operational excellence and creates a solid foundation for future growth.'}
            </p>
          </div>
          
          <div className={`about-block ${isMobile ? 'mobile-about-block' : ''}`}>
            <h3 className={isMobile ? 'mobile-block-title' : ''}>
              {translations[lang].aboutHelpTitle || 'HOW I HELP BUSINESSES GROW AND SUCCEED'}
            </h3>
            <p className={isMobile ? 'mobile-block-text' : ''}>
              {translations[lang].aboutHelpContent || 'My unique combination of analytical thinking and creative problem-solving allows me to identify improvement opportunities, optimize resource allocation, and drive sustainable growth. I continually seek ways to enhance efficiency and maximize results.'}
            </p>
          </div>
          
          <div className={`about-block ${isMobile ? 'mobile-about-block' : ''}`}>
            <h3 className={isMobile ? 'mobile-block-title' : ''}>
              {translations[lang].aboutTailoredTitle || 'A TAILORED APPROACH FOR YOUR BUSINESS'}
            </h3>
            <p className={isMobile ? 'mobile-block-text' : ''}>
              {translations[lang].aboutTailoredContent || 'Every company has unique challenges and opportunities. I take time to understand your specific goals and constraints before developing customized solutions. My approach is always adaptable and focused on delivering real-world results that align with your vision.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;