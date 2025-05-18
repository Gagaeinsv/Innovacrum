// src/components/MobilePartnershipSection.js
import React from 'react';
import n8nLogo from '../assets/n8n.png';
import tooDigitalLogo from '../assets/toodigital.png';
import gimLogo from '../assets/gim.png';
import ixlLogo from '../assets/ixl.png';

const MobilePartnershipSection = ({ lang }) => {
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "PARTNERSHIP"
    },
    it: {
      title: "PARTNERSHIP"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  // Використовуємо масив партнерів з веб-версії
  const partners = [
    {
      logo: n8nLogo,
      url: 'https://n8n.io/',
      alt: 'n8n'
    },
    {
      logo: tooDigitalLogo,
      url: 'https://www.toodigital.it/',
      alt: 'TOO DIGITAL'
    },
    {
      logo: gimLogo,
      url: 'https://www.giminstitute.org/',
      alt: 'GIM Institute'
    },
    {
      logo: ixlLogo,
      url: 'https://www.ixl-center.com/',
      alt: 'IXL CENTER'
    }
  ];
  
  return (
    <section style={{
      padding: '40px 16px',
      backgroundColor: '#121212'
    }} id="partnership">
      <h2 style={{
        color: '#0f0',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '24px',
        textTransform: 'uppercase'
      }}>
        {t.title}
      </h2>
      
      <div style={{
        backgroundColor: 'rgba(30, 30, 40, 0.7)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {partners.map((partner, index) => (
          <a 
            key={index} 
            href={partner.url}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: 'rgba(40, 40, 50, 0.6)',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            <img 
              src={partner.logo} 
              alt={partner.alt}
              style={{
                maxWidth: '80%',
                maxHeight: '40px',
                objectFit: 'contain'
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MobilePartnershipSection;