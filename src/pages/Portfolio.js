// src/pages/Portfolio.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../translations';

const Portfolio = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Повна колекція проектів (має бути розширена)
  const projects = [
    {
      id: 'edilitalia',
      title: translations[lang].portfolioProjectTitle,
      description: translations[lang].portfolioDescription,
    },
    // Додайте інші проекти
  ];

  return (
    <div className="App">
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <section id="portfolio" className="section portfolio-page-section">
          <div className="container">
            <h2>{translations[lang].portfolioTitle}</h2>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div key={project.id} className="portfolio-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/portfolio/${project.id}`} className="see-more-link">
                    {translations[lang].seeMoreButton} »
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Portfolio;