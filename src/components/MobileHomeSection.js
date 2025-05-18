// src/components/MobileHomeSection.js
import React from 'react';

const MobileHomeSection = ({ lang }) => {
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title1: "HI I'M",
      title2: "MATTEO",
      subtitle: "PROJECT MANAGER",
      description: "My mission is to unite teams, optimize processes, and ensure the timely implementation of ideas that bring results.",
      sendMessage: "Send Message"
    },
    it: {
      title1: "CIAO SONO",
      title2: "MATTEO",
      subtitle: "PROJECT MANAGER",
      description: "La mia missione è unire i team, ottimizzare i processi e garantire l'implementazione tempestiva di idee che portano risultati.",
      sendMessage: "Invia Messaggio"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  return (
    <section id="home" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', /* Змінюємо з center на flex-start для зменшення відступу */
      alignItems: 'center',
      padding: '0 16px',
      minHeight: 'auto', /* Змінюємо на auto замість 100vh */
      position: 'relative',
      backgroundColor: '#121212',
      paddingTop: '20px' /* Мінімальний відступ від верху */
    }}>
      <div style={{ 
        textAlign: 'center', 
        width: '100%', 
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Двохрядковий заголовок */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginBottom: '5px'
        }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold',
            color: 'white',
            margin: '0',
            letterSpacing: '1px',
            lineHeight: '1.2'
          }}>
            {t.title1}
          </h1>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }}>
            <h1 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold',
              color: 'white',
              margin: '0',
              letterSpacing: '1px',
              lineHeight: '1.2'
            }}>
              {t.title2}
            </h1>
            {/* Зелена крапка внизу справа від MATTEO */}
            <div style={{ 
              backgroundColor: '#0f0', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              position: 'absolute',
              bottom: '0',
              right: '-15px'
            }}></div>
          </div>
        </div>
        
        <h2 style={{ 
          color: '#0f0', 
          fontSize: '18px', 
          fontWeight: 'bold',
          margin: '20px 0 24px',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {t.subtitle}
        </h2>
        
        <p style={{ 
          fontSize: '14px', 
          lineHeight: '1.5',
          color: 'white',
          margin: '0 auto 30px',
          maxWidth: '280px',
          textAlign: 'center'
        }}>
          {t.description}
        </p>
        
        <a href="#contacts" style={{ 
          display: 'block', 
          backgroundColor: '#0f0', 
          color: 'black', 
          padding: '12px 0', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          borderRadius: '4px',
          width: '100%',
          textAlign: 'center'
        }}>
          {t.sendMessage}
        </a>
      </div>
    </section>
  );
};

export default MobileHomeSection;