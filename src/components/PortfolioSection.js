// src/components/PortfolioSection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import arrowRight from '../assets/fluent_ios-arrow-24-regular (1).svg';
import arrowLeft from '../assets/fluent_ios-arrow-24-regular L (1).svg';

const PortfolioSection = ({ lang }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1);

  const projects = [
    { 
      title: 'Project 1', 
      description: 'Description for Project 1',
      isPlaceholder: true
    },
    { 
      title: 'EDILITALIA PROJECT', 
      description: translations[lang].portfolioDescription,
      isPlaceholder: false
    },
    { 
      title: 'Project 3', 
      description: 'Description for Project 3',
      isPlaceholder: true
    }
  ];

  const handlePrevProject = () => {
    setActiveProjectIndex(prev => prev > 0 ? prev - 1 : projects.length - 1);
  };

  const handleNextProject = () => {
    setActiveProjectIndex(prev => prev < projects.length - 1 ? prev + 1 : 0);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="portfolio-title">PORTFOLIO</h2>
        
        {/* Мобільна версія */}
        <div className="portfolio-mobile">
          <div className="mobile-project">
            <div className="project-content">
              <h3>EDILITALIA PROJECT</h3>
              <Link 
                to="/portfolio/edilitalia" 
                className="see-more-link"
              >
                See more »
              </Link>
            </div>
          </div>
        </div>
        
        {/* Десктопна версія з карточками */}
        <div className="portfolio-cards">
          <button 
            className="nav-arrow left-arrow" 
            onClick={handlePrevProject}
            aria-label="Previous project"
          >
            <img src={arrowLeft} alt="Previous" />
          </button>
          
          <div className="portfolio-cards-container">
            {projects.map((project, index) => {
              const isCenter = index === activeProjectIndex;
              
              return (
                <div 
                  key={index} 
                  className={`portfolio-card 
                    ${isCenter ? 'active-card' : 'side-card'} 
                    ${project.isPlaceholder ? 'placeholder-card' : ''}`}
                >
                  <div className="card-content">
                    {!project.isPlaceholder ? (
                      <>
                        <h3>{project.title}</h3>
                        <Link 
                          to="/portfolio/edilitalia" 
                          className="see-more-link"
                        >
                          See more »
                        </Link>
                      </>
                    ) : (
                      <h3>{project.title}</h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <button 
            className="nav-arrow right-arrow" 
            onClick={handleNextProject}
            aria-label="Next project"
          >
            <img src={arrowRight} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;