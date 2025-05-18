// src/components/MobilePortfolioSection.js
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// Прибираємо імпорт CSS-файлу, який викликає помилку
// import './MobilePortfolioSection.css';

const MobilePortfolioSection = ({ lang }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  // ВАЖЛИВО: визначаємо ландшафтний режим напряму через window
  const [isLandscape, setIsLandscape] = useState(false);
  
  // Прослуховуємо зміни орієнтації
  useEffect(() => {
    // Функція для визначення орієнтації
    const checkOrientation = () => {
      const isLandscapeNow = window.matchMedia("(orientation: landscape)").matches;
      console.log('Поточна орієнтація:', isLandscapeNow ? 'Ландшафтна' : 'Портретна');
      setIsLandscape(isLandscapeNow);
    };
    
    // Початкова перевірка
    checkOrientation();
    
    // Слухачі подій
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    // Прибираємо слухачі при розмонтуванні
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "PORTFOLIO",
      edilitalia: "EDILITALIA PROJECT",
      project1: "PROJECT 1",
      project2: "PROJECT 2",
      viewProject: "View Project"
    },
    it: {
      title: "PORTFOLIO",
      edilitalia: "PROGETTO EDILITALIA",
      project1: "PROGETTO 1",
      project2: "PROGETTO 2",
      viewProject: "Vedi Progetto"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  // Масив проектів для відображення
  const projects = [
    {
      id: 'edilitalia',
      title: t.edilitalia,
      path: '/portfolio/edilitalia'
    },
    {
      id: 'project1',
      title: t.project1,
      path: '/portfolio/project1'
    },
    {
      id: 'project2',
      title: t.project2,
      path: '/portfolio/project2'
    }
  ];
  
  // Функція для переходу на сторінку проекту
  const goToProject = (path) => {
    navigate(path);
  };
  
  // Навігація між проектами
  const goToPrevProject = (e) => {
    e.stopPropagation();
    setCurrentProjectIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const goToNextProject = (e) => {
    e.stopPropagation();
    setCurrentProjectIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  // Компонент для портретної орієнтації
  const PortraitLayout = () => {
    const currentProject = projects[currentProjectIndex];
    
    return (
      <div className="portrait-layout">
        <div 
          className="portrait-project"
          onClick={() => goToProject(currentProject.path)}
          onMouseEnter={() => setIsHovered(currentProjectIndex)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <h3 className="project-title">
            {currentProject.title}
          </h3>
          
          {isHovered === currentProjectIndex && (
            <div className="view-project-link">
              {t.viewProject}
            </div>
          )}
        </div>
        
        {/* Стрілки навігації під блоком */}
        <div className="navigation-arrows">
          <button 
            onClick={goToPrevProject}
            className="nav-arrow left"
          >
            <FaArrowLeft color="#0f0" size={28} />
          </button>
          <button 
            onClick={goToNextProject}
            className="nav-arrow right"
          >
            <FaArrowRight color="#0f0" size={28} />
          </button>
        </div>
      </div>
    );
  };
  
  // Компонент для ландшафтної орієнтації
  const LandscapeLayout = () => {
    return (
      <div className="landscape-layout">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="landscape-project"
            onClick={() => goToProject(project.path)}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <h3 className="project-title">
              {project.title}
            </h3>
            
            {isHovered === index && (
              <div className="view-project-link">
                {t.viewProject} &raquo;
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="portfolio-section" id="portfolio">
      {/* Прибираємо індикатор орієнтації */}
      
      <h2 className="portfolio-title">
        {t.title}
      </h2>
      
      {/* Відображаємо відповідний макет залежно від орієнтації */}
      {isLandscape ? <LandscapeLayout /> : <PortraitLayout />}
    </section>
  );
};

export default MobilePortfolioSection;