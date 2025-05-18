// src/pages/MobilePortfolioDetail.js
import React from 'react';

const MobilePortfolioDetail = ({ projectData, lang, goToNextProject }) => {
  // Стилі для кнопки Next - в кінці контенту по центру
  const nextButtonStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#00ff00',
    color: '#1e1e1e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    margin: '40px auto 20px auto', // Центрування та відступи зверху і знизу
    fontSize: '22px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
  };
  
  // Стилі для заголовків розділів
  const sectionTitleStyle = {
    color: '#00ff00', // Зелений колір як у веб-версії
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    marginTop: '30px'
  };
  
  // Стилі для контейнера сторінки
  const pageContainerStyle = {
    padding: '20px',
    backgroundColor: '#1e1e1e',
    color: 'white',
    minHeight: '100vh'
  };
  
  // Стилі для головного заголовка
  const mainTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px'
  };
  
  // Стилі для підзаголовка
  const subtitleStyle = {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '30px',
    backgroundColor: 'rgba(255,255,255,0.1)', // Легкий фон для виділення
    padding: '10px',
    borderRadius: '5px'
  };
  
  // Стилі для тексту розділів
  const sectionContentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px'
  };
  
  // Стилі для списку
  const bulletListStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    marginBottom: '20px'
  };
  
  // Стилі для елементів списку
  const bulletItemStyle = {
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '10px',
    fontSize: '16px',
    lineHeight: '1.5'
  };
  
  // Стилі для контейнера кнопки
  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '40px'
  };
  
  // Функція для рендерингу елементів списку з зеленими маркерами
  const renderBulletPoint = (point, index) => {
    return (
      <li key={index} style={bulletItemStyle}>
        <span style={{ color: '#00ff00', position: 'absolute', left: '0', top: '0' }}>•</span>
        {point}
      </li>
    );
  };
  
  return (
    <div style={pageContainerStyle}>
      <h1 style={mainTitleStyle}>
        {projectData.title}
      </h1>
      
      <div>
        <h2 style={subtitleStyle}>{projectData.subtitle}</h2>
      </div>
      
      <div>
        {projectData.sections.map((section, index) => (
          <div key={index}>
            <h3 style={sectionTitleStyle}>{section.title}</h3>
            
            {section.content && (
              <p style={sectionContentStyle}>{section.content}</p>
            )}
            
            {section.bulletPoints && (
              <ul style={bulletListStyle}>
                {section.bulletPoints.map((point, pointIndex) => 
                  renderBulletPoint(point, pointIndex)
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
      
      {/* Контейнер для кнопки Next Project - в кінці сторінки по центру */}
      <div style={buttonContainerStyle}>
        <button
          onClick={goToNextProject}
          style={nextButtonStyle}
          aria-label={lang === 'en' ? 'Next Project' : 'Progetto Successivo'}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default MobilePortfolioDetail;