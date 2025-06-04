// src/components/MobilePortfolioSection.js
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MobilePortfolioSection = ({ lang }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  // Define landscape mode directly through window
  const [isLandscape, setIsLandscape] = useState(false);
  
  // Listen for orientation changes
  useEffect(() => {
    // Function to check orientation
    const checkOrientation = () => {
      const isLandscapeNow = window.matchMedia("(orientation: landscape)").matches;
      setIsLandscape(isLandscapeNow);
    };
    
    // Initial check
    checkOrientation();
    
    // Event listeners
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  
  // Text translations based on language
  const texts = {
    en: {
      title: "PORTFOLIO",
      edilitalia: "EDILITALIA PROJECT",
      project1: "PROJECT 1",
      project2: "PROJECT 2",
      viewProject: "See more »"
    },
    it: {
      title: "PORTFOLIO",
      edilitalia: "PROGETTO EDILITALIA",
      project1: "PROGETTO 1",
      project2: "PROGETTO 2",
      viewProject: "Vedi di più »"
    }
  };
  
  // Choose text based on language
  const t = texts[lang] || texts.en;
  
  // Projects array
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
  
  // Function to navigate to project page
  const goToProject = (path) => {
    navigate(path);
  };
  
  // Navigation between projects
  const goToPrevProject = (e) => {
    if (e) e.stopPropagation();
    setCurrentProjectIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const goToNextProject = (e) => {
    if (e) e.stopPropagation();
    setCurrentProjectIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  // Portrait orientation component
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
        
        {/* Navigation arrows below the block */}
        <div className="navigation-arrows">
          <button 
            onClick={goToPrevProject}
            className="nav-arrow left"
            aria-label="Previous project"
          >
            <FaArrowLeft color="#0f0" size={28} />
          </button>
          <button 
            onClick={goToNextProject}
            className="nav-arrow right"
            aria-label="Next project"
          >
            <FaArrowRight color="#0f0" size={28} />
          </button>
        </div>
      </div>
    );
  };
  
  // Landscape orientation with centered project and arrows on sides
  const LandscapeLayout = () => {
    const currentProject = projects[currentProjectIndex];
    
    // Inline styles for better control in landscape mode
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      width: '100%',
      padding: '0 20px'
    };
    
    const arrowStyle = {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px'
    };
    
    const projectStyle = {
      width: '60%',
      maxWidth: '300px',
      minHeight: '120px',
      backgroundColor: 'rgba(30, 30, 40, 0.7)',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };
    
    const titleStyle = {
      marginBottom: '15px',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'normal'
    };
    
    const linkStyle = {
      color: '#00ff00',
      alignSelf: 'flex-end'
    };
    
    return (
      <div style={containerStyle}>
        {/* Left arrow */}
        <button 
          onClick={goToPrevProject}
          style={arrowStyle}
          aria-label="Previous project"
        >
          <FaArrowLeft color="#0f0" size={28} />
        </button>
        
        {/* Central project */}
        <div 
          style={projectStyle}
          onClick={() => goToProject(currentProject.path)}
        >
          <h3 style={titleStyle}>
            {currentProject.title}
          </h3>
          
          <div style={linkStyle}>
            {t.viewProject}
          </div>
        </div>
        
        {/* Right arrow */}
        <button 
          onClick={goToNextProject}
          style={arrowStyle}
          aria-label="Next project"
        >
          <FaArrowRight color="#0f0" size={28} />
        </button>
      </div>
    );
  };
  
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title" style={{
        color: '#00ff00',
        fontSize: '26px',
        textAlign: 'center',
        marginBottom: '25px',
        fontWeight: 'bold'
      }}>
        {t.title}
      </h2>
      
      {/* Display appropriate layout based on orientation */}
      {isLandscape ? <LandscapeLayout /> : <PortraitLayout />}
    </section>
  );
};

export default MobilePortfolioSection;