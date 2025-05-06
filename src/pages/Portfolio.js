// src/pages/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../translations';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const Portfolio = ({ lang, toggleLanguage }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();

  // Project data
  const projects = [
    {
      id: 'edilitalia',
      title: translations[lang].portfolioProjectTitle,
      description: translations[lang].portfolioDescription,
    },
    // Add other projects
  ];

  return (
    <div className={`App ${isMobile ? 'mobile-app' : ''} ${isLandscape ? 'landscape-app' : ''}`}>
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage}
      />
      
      <main className={`${isMobile ? 'mobile-main' : ''} ${isLandscape ? 'landscape-main' : ''}`}>
        <section id="portfolio" className={`section portfolio-page-section ${isMobile ? 'mobile-portfolio-page-section' : ''} ${isLandscape ? 'landscape-portfolio-page-section' : ''}`}>
          <div className={`container ${isMobile ? 'mobile-container' : ''} ${isLandscape ? 'landscape-container' : ''}`}>
            <h2 className={`${isMobile ? 'mobile-section-title' : ''} ${isLandscape ? 'landscape-section-title' : ''}`}>{translations[lang].portfolioTitle}</h2>
            <div className={`portfolio-grid ${isMobile ? 'mobile-portfolio-grid' : ''} ${isLandscape ? 'landscape-portfolio-grid' : ''}`}>
              {projects.map((project) => (
                <div key={project.id} className={`portfolio-item ${isMobile ? 'mobile-portfolio-item' : ''} ${isLandscape ? 'landscape-portfolio-item' : ''}`}>
                  <h3 className={`${isMobile ? 'mobile-portfolio-title' : ''} ${isLandscape ? 'landscape-portfolio-title' : ''}`}>{project.title}</h3>
                  <p className={`${isMobile ? 'mobile-portfolio-description' : ''} ${isLandscape ? 'landscape-portfolio-description' : ''}`}>{project.description}</p>
                  <Link to={`/portfolio/${project.id}`} className={`see-more-link ${isMobile ? 'mobile-see-more-link' : ''} ${isLandscape ? 'landscape-see-more-link' : ''}`}>
                    {translations[lang].seeMoreButton} »
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer lang={lang} />
      {/* Remove MobileNavigation component if it exists here */}
    </div>
  );
};

export default Portfolio;