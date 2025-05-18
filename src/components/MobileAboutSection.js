// src/components/MobileAboutSection.js
import React from 'react';

const MobileAboutSection = ({ lang }) => {
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "ABOUT ME",
      subtitle: "I SIMPLIFY PROCESSES AND ENHANCE OPERATIONAL EFFICIENCY",
      description: "I work alongside businesses to identify and solve process bottlenecks, enhance communication, and improve operational efficiency. My goal is to make technology a strategically supporting sustainable operations through effective communication, and streamlining digital touchpoints to accelerate business growth.",
      transformTitle: "HOW I HELP BUSINESSES TRANSFORM OPERATIONS?",
      transformPoints: [
        "I help companies plan and implement change using tools like N8n and ISO with IT Automating service experiences.",
        "I optimize business communications, with VoIP Helpdesk, CRM, and IVR systems, enabling smoother and more effective interactions with clients.",
        "I collaborate with businesses to meet, whether it's integrating innovative tools that boost production or enhancing existing solutions."
      ],
      tailoredTitle: "A TAILORED APPROACH FOR EVERY BUSINESS",
      tailoredText: "Every company has unique challenges, and every project is customized to ensure a tangible, long-term improvement. Instead of imposing solutions, my approach is to listen, analyze, and engage in the process. I provide a pragmatic, no-nonsense pathway to make your business more efficient, profitable, and adaptable. Together, we'll find the right solution for you."
    },
    it: {
      title: "CHI SONO",
      subtitle: "SEMPLIFICO I PROCESSI E MIGLIORO L'EFFICIENZA OPERATIVA",
      description: "Lavoro al fianco delle aziende per identificare e risolvere i colli di bottiglia dei processi, migliorare la comunicazione e ottimizzare l'efficienza operativa. Il mio obiettivo è rendere la tecnologia un supporto strategico per operazioni sostenibili attraverso una comunicazione efficace e semplificando i punti di contatto digitali per accelerare la crescita aziendale.",
      transformTitle: "COME AIUTO LE AZIENDE A TRASFORMARE LE OPERAZIONI?",
      transformPoints: [
        "Aiuto le aziende a pianificare e implementare il cambiamento utilizzando strumenti come N8n e ISO con l'automazione IT delle esperienze di servizio.",
        "Ottimizzzo le comunicazioni aziendali, con VoIP Helpdesk, CRM e sistemi IVR, consentendo interazioni più fluide ed efficaci con i clienti.",
        "Collaboro con le aziende per soddisfare le loro esigenze, sia integrando strumenti innovativi che aumentano la produzione, sia migliorando le soluzioni esistenti."
      ],
      tailoredTitle: "UN APPROCCIO PERSONALIZZATO PER OGNI AZIENDA",
      tailoredText: "Ogni azienda ha sfide uniche e ogni progetto è personalizzato per garantire un miglioramento tangibile e a lungo termine. Invece di imporre soluzioni, il mio approccio è ascoltare, analizzare e impegnarmi nel processo. Fornisco un percorso pragmatico e senza fronzoli per rendere la tua azienda più efficiente, redditizia e adattabile. Insieme troveremo la soluzione giusta per te."
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  return (
    <section style={{
      padding: '20px 16px', // Зменшуємо відступи
      backgroundColor: '#121212'
    }} id="about">
      <h2 style={{
        color: '#0f0',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px', // Зменшуємо відступ
        textAlign: 'center',
        textTransform: 'uppercase'
      }}>
        {t.title}
      </h2>
      
      <div style={{
        backgroundColor: 'rgba(40, 40, 50, 0.6)',
        borderRadius: '8px',
        padding: '16px', // Зменшуємо внутрішні відступи
        marginBottom: '16px' // Зменшуємо відступ між блоками
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '12px', // Зменшуємо відступ
          textTransform: 'uppercase'
        }}>
          {t.subtitle}
        </h3>
        
        <p style={{
          color: 'white',
          fontSize: '14px',
          lineHeight: '1.5', // Зменшуємо висоту рядка
          marginBottom: '0'
        }}>
          {t.description}
        </p>
      </div>
      
      <div style={{
        backgroundColor: 'rgba(40, 40, 50, 0.6)',
        borderRadius: '8px',
        padding: '16px', // Зменшуємо внутрішні відступи
        marginBottom: '16px' // Зменшуємо відступ між блоками
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '12px', // Зменшуємо відступ
          textTransform: 'uppercase'
        }}>
          {t.transformTitle}
        </h3>
        
        <ul style={{
          color: 'white',
          fontSize: '14px',
          lineHeight: '1.5', // Зменшуємо висоту рядка
          paddingLeft: '20px',
          margin: '0'
        }}>
          {t.transformPoints.map((point, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{point}</li>
          ))}
        </ul>
      </div>
      
      <div style={{
        backgroundColor: 'rgba(40, 40, 50, 0.6)',
        borderRadius: '8px',
        padding: '16px' // Зменшуємо внутрішні відступи
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '12px', // Зменшуємо відступ
          textTransform: 'uppercase'
        }}>
          {t.tailoredTitle}
        </h3>
        
        <p style={{
          color: 'white',
          fontSize: '14px',
          lineHeight: '1.5', // Зменшуємо висоту рядка
          marginBottom: '0'
        }}>
          {t.tailoredText}
        </p>
      </div>
    </section>
  );
};

export default MobileAboutSection;