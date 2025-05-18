// src/components/MobileInnovationSection.js
import React from 'react';
import './MobileInnovationSection.css'; // Переконайтеся, що CSS файл підключений

const MobileInnovationSection = ({ lang }) => {
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "MY INNOVATION AND AUTOMATION",
      intro: "I focus on the power of automation and innovation to enhance productivity and service quality. I specialize in optimizing all the critical operational aspects of businesses through data-driven insights and collaborative technology solutions.",
      section1Title: "1. PREMIUM INNOVATION CONSULTING (EUREKA METHOD)",
      section1Text: "Building future-proof strategies that increase business resilience and adaptability:\n• Digital Action Plans: From strategy to implementation, every phase is optimized\n• Personalized Approach: I tailor my solutions to your specific business challenges\n• Research Mindset: I've developed a reproducible cycle to secure timely innovation results",
      section2Title: "2. BUSINESS PROCESS AUTOMATION",
      section2Text: "Smart integration of technology to minimize repetitive tasks and maximize value:\n• Communication Flow: Digitized call processes and AI-driven systems\n• Document Management: Reduced errors and operational inefficiency through strategic document automation\n• Workflow Optimization: Simple, step-by-step processes for all existing operational areas\n• Productivity Boost: High-performing processes that accelerate business outcomes",
      section3Title: "3. PROFESSIONAL AUTO-RESPONDERS",
      section3Text: "Advanced IVR systems that enhance your customer experience:\n• Contact Solution Pack: Processes and tools designed for maximum accessibility\n• Scalable IVR: Auto-responders that learn from and adapt to patterns of customer interaction\n• Benefits: Personalized responses, reduced wait times, optimized resource allocation\n• Implementation: On-premise or cloud-based solutions depending on your business needs",
      contact: "Contact me today to discover how we can drive your business into the future of operational excellence. Let's leverage the potential of the digital transformation while maximizing your time to focus on what's success story begins here!"
    },
    it: {
      title: "LA MIA INNOVAZIONE E AUTOMAZIONE",
      intro: "Mi concentro sul potere dell'automazione e dell'innovazione per migliorare la produttività e la qualità del servizio. Sono specializzato nell'ottimizzazione di tutti gli aspetti operativi critici delle aziende attraverso approfondimenti basati sui dati e soluzioni tecnologiche collaborative.",
      section1Title: "1. CONSULENZA SULL'INNOVAZIONE PREMIUM (METODO EUREKA)",
      section1Text: "Costruire strategie a prova di futuro che aumentino la resilienza e l'adattabilità del business:\n• Piani d'Azione Digitale: Dalla strategia all'implementazione, ogni fase è ottimizzata\n• Approccio Personalizzato: Adatto le mie soluzioni alle specifiche sfide della tua attività\n• Mentalità di Ricerca: Ho sviluppato un ciclo riproducibile per garantire risultati di innovazione tempestivi",
      section2Title: "2. AUTOMAZIONE DEI PROCESSI AZIENDALI",
      section2Text: "Integrazione intelligente della tecnologia per ridurre al minimo le attività ripetitive e massimizzare il valore:\n• Flusso di Comunicazione: Processi di chiamata digitalizzati e sistemi basati sull'AI\n• Gestione Documentale: Riduzione degli errori e dell'inefficienza operativa attraverso l'automazione strategica dei documenti\n• Ottimizzazione del Flusso di Lavoro: Processi semplici, passo dopo passo per tutte le aree operative esistenti\n• Incremento della Produttività: Processi ad alte prestazioni che accelerano i risultati aziendali",
      section3Title: "3. RISPONDITORI AUTOMATICI PROFESSIONALI",
      section3Text: "Sistemi IVR avanzati che migliorano l'esperienza del cliente:\n• Contact Solution Pack: Processi e strumenti progettati per la massima accessibilità\n• IVR Scalabile: Risponditori automatici che apprendono e si adattano ai modelli di interazione con i clienti\n• Vantaggi: Risposte personalizzate, tempi di attesa ridotti, allocazione ottimizzata delle risorse\n• Implementazione: Soluzioni on-premise o basate sul cloud a seconda delle esigenze della tua azienda",
      contact: "Contattami oggi per scoprire come possiamo guidare la tua azienda nel futuro dell'eccellenza operativa. Sfruttiamo il potenziale della trasformazione digitale massimizzando il tuo tempo per concentrarti su ciò che conta davvero. La tua storia di successo inizia qui!"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  return (
    <div className="mobile-innovation-section" id="innovation">
      {/* Заголовок має бути відцентрований */}
      <div className="innovation-header-container">
        <h2 className="innovation-title">{t.title}</h2>
        <p className="innovation-intro">{t.intro}</p>
      </div>
      
      <div className="innovation-card">
        <h3 className="innovation-subtitle">{t.section1Title}</h3>
        <div className="innovation-text" dangerouslySetInnerHTML={{ __html: t.section1Text.replace(/\n• /g, '<br/>• ') }} />
      </div>
      
      <div className="innovation-card">
        <h3 className="innovation-subtitle">{t.section2Title}</h3>
        <div className="innovation-text" dangerouslySetInnerHTML={{ __html: t.section2Text.replace(/\n• /g, '<br/>• ') }} />
      </div>
      
      <div className="innovation-card">
        <h3 className="innovation-subtitle">{t.section3Title}</h3>
        <div className="innovation-text" dangerouslySetInnerHTML={{ __html: t.section3Text.replace(/\n• /g, '<br/>• ') }} />
      </div>
      
      <p className="innovation-contact">{t.contact}</p>
    </div>
  );
};

export default MobileInnovationSection;