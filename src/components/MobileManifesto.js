// src/components/MobileManifesto.js
import React from 'react';
import { Link } from 'react-router-dom';

const MobileManifesto = ({ texts, lang }) => {
  // Стилі для мобільної версії
  const styles = {
    container: {
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: 'white',
      padding: '20px',
      paddingTop: '30px', // Додатковий відступ зверху
      paddingBottom: '40px' // Додатковий відступ знизу
    },
    title: {
      color: '#0f0',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#aaa', // Світліший відтінок для підзаголовка в мобільній версії
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#0f0',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '25px',
      marginBottom: '10px'
    },
    sectionContent: {
      fontSize: '14px',
      lineHeight: '1.5',
      textAlign: 'left', // Вирівнювання по лівому краю для мобільної версії
      marginBottom: '20px',
      opacity: '0.9'
    },
    footer: {
      fontSize: '14px',
      lineHeight: '1.5',
      textAlign: 'left',
      marginTop: '30px',
      marginBottom: '20px',
      fontStyle: 'italic',
      opacity: '0.9'
    },
    // Видалений стиль для копірайту
    backButton: {
      display: 'block',
      width: '100%',
      backgroundColor: '#0f0',
      color: 'black',
      padding: '12px 0',
      textAlign: 'center',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
      marginTop: '30px'
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

export default MobileManifesto;