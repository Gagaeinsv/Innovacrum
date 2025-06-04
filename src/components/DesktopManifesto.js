// src/components/DesktopManifesto.js
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopManifesto = ({ texts, lang }) => {
  // Стилі для десктопної версії
  const styles = {
    container: {
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: 'white',
      padding: '40px 80px 60px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      color: '#0f0',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '16px',
      marginTop: '20px'
    },
    subtitle: {
      color: 'white',
      fontSize: '20px',
      textAlign: 'center',
      marginBottom: '50px'
    },
    sectionTitle: {
      color: '#0f0',
      fontSize: '22px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '40px',
      marginBottom: '20px'
    },
    sectionContent: {
      fontSize: '16px',
      lineHeight: '1.8',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 30px',
      opacity: '0.9'
    },
    footer: {
      fontSize: '16px',
      lineHeight: '1.8',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '40px auto 30px',
      fontStyle: 'italic',
      opacity: '0.9'
    },
    // Видалений стиль для копірайту
    backButton: {
      display: 'inline-block',
      backgroundColor: '#0f0',
      color: 'black',
      padding: '12px 30px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
      margin: '40px auto 0',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Заголовок */}
      <h1 style={styles.title}>
        {texts.title}
      </h1>
      
      {/* Підзаголовок */}
      <h2 style={styles.subtitle}>
        {texts.subtitle}
      </h2>
      
      {/* Розділи маніфесту */}
      {texts.sections.map((section, index) => (
        <div key={index}>
          <h3 style={styles.sectionTitle}>
            {section.title}
          </h3>
          <p style={styles.sectionContent}>
            {section.content}
          </p>
        </div>
      ))}
      
      {/* Футер */}
      <p style={styles.footer}>
        {texts.footer}
      </p>
      
      {/* Видалено блок з копірайтом */}
      
      {/* Кнопка повернення на головну */}
      <Link 
        to="/" 
        style={styles.backButton}
      >
        {texts.backToHome}
      </Link>
    </div>
  );
};

export default DesktopManifesto;