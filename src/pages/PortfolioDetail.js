// src/pages/PortfolioDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Removed unused 'translations' import

// Список всіх проектів для навігації
const portfolioProjects = [
  "edilitalia",
  // Додайте тут ID інших проектів, коли вони будуть готові
  "project2",
  "project3"
];

const PortfolioDetail = ({ lang, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Функція для переходу до наступного проекту
  const goToNextProject = () => {
    const currentIndex = portfolioProjects.indexOf(projectId);
    const nextIndex = (currentIndex + 1) % portfolioProjects.length;
    navigate(`/portfolio/${portfolioProjects[nextIndex]}`);
  };

  // Проект Edilitalia
  const edilitaliaCaseStudy = {
    en: {
      title: "EDILITALIA PROJECT",
      subtitle: "Case History: Edilitalia – Innovation and Simplification of Communication Systems",
      sections: [
        {
          title: "Introduction",
          content: "Edilitalia, a leading company in the window and door sector based in Brescia, faced a growth phase that required a complete revision of its communication systems. The opening of a new headquarters in Via Orzinuovi represented the ideal opportunity to update the infrastructure, maximize efficiency and improve the customer experience."
        },
        {
          title: "My Intervention",
          content: "I personally took care of every phase of the project, from defining the offer to implementation, paying particular attention to the specific needs of Edilitalia.",
          bulletPoints: [
            "Analysis of Requirements and Definition of Contracts",
            "I directly managed commercial relations and pricing, ensuring that the proposed solutions perfectly matched the operational needs and Edilitalia's budget.",
            "Implementation of PBX Centrex in VoIP",
            "Elimination of fixed telephones in favor of mobile devices equipped with VoIP apps.",
            "Integration with the Vianova network, which guaranteed connection stability and advanced communication services.",
            "Development of an Automatic Responder (IVR) based on AI",
            "Creation of an intelligent call routing system.",
            "Adoption of an audio editor for quick and personalized updates of welcome messages and IVR paths.",
            "Advanced Network Solutions",
            "FTTH Connection (Fiber to the Home) for an ultra-fast and stable bandwidth, essential to support the flow of calls and data.",
            "Installation of Last Generation Access Points, optimizing coverage and signal quality.",
            "Sale and Configuration of Business Smartphones",
            "Supply of 8 smartphones connected directly to the switchboard via VoIP app, allowing staff to manage calls as if they were cordless phones.",
            "Staff Training",
            "Personalized training sessions to ensure optimal use of new technologies.",
            "Standardization of response protocols to make call routing more efficient and improve internal communication."
          ]
        },
        {
          title: "Main Results",
          content: "",
          bulletPoints: [
            "1. Greater Operational Efficiency",
            "Reduction of waiting times and automatic routing of calls to the departments of competence.",
            "2. Reduction of Conflicts and Overloads",
            "The new communication flow has improved the internal climate, avoiding assignment errors and managing the workload more equitably.",
            "3. Flexibility and Scalability",
            "Thanks to VoIP, the office can easily add new stations without high infrastructure costs.",
            "4. Replicable Model",
            "The experience with Edilitalia demonstrates how an SME can achieve an effective digital transformation, benefiting from advanced technologies and a tailored approach."
          ]
        },
        {
          title: "Conclusions",
          content: "This project represents a clear example of how digital transformation can become a growth engine for companies, even in sectors traditionally tied to physical infrastructures. The implementation of an intelligent VoIP system and an IVR has allowed Edilitalia to optimize call management and improve customer service, contributing to the growth and efficiency of the company.\n\nIn line with my vision of Innovacrum, this case history testifies to how innovation, combined with a well-structured change strategy, can offer tangible and lasting competitive advantages."
        }
      ]
    },
    it: {
      title: "PROGETTO EDILITALIA",
      subtitle: "Case History: Edilitalia – Innovazione e Semplificazione dei Sistemi di Comunicazione",
      sections: [
        {
          title: "Introduzione",
          content: "Edilitalia, azienda leader nel settore dei serramenti con sede a Brescia, ha affrontato una fase di crescita che ha richiesto una revisione completa dei sistemi di comunicazione. L'apertura di una nuova sede in Via Orzinuovi ha rappresentato l'occasione ideale per aggiornare l'infrastruttura, massimizzare l'efficienza e migliorare l'esperienza dei clienti."
        },
        {
          title: "Il Mio Intervento",
          content: "Mi sono occupato personalmente di ogni fase del progetto, dalla definizione dell'offerta fino alla messa in opera, prestando particolare attenzione alle esigenze specifiche di Edilitalia.",
          bulletPoints: [
            "Analisi delle Esigenze e Definizione dei Contratti",
            "Ho gestito direttamente i rapporti commerciali e il pricing, assicurando che le soluzioni proposte rispondessero perfettamente alle necessità operative e di budget di Edilitalia.",
            "Implementazione del Centralino PBX in VoIP",
            "Eliminazione dei telefoni fissi a favore di dispositivi mobili dotati di app VoIP.",
            "Integrazione con la rete Vianova, che ha garantito stabilità di connessione e servizi di comunicazione avanzati.",
            "Sviluppo di un Risponditore Automatico (IVR) basato su AI",
            "Creazione di un sistema di smistamento intelligente delle chiamate.",
            "Adozione di un editor audio per aggiornamenti rapidi e personalizzati del messaggio di benvenuto e dei percorsi IVR.",
            "Soluzioni di Rete Avanzate",
            "Connessione FTTH (Fiber to the Home) per una banda ultralarga e stabile, indispensabile per supportare il flusso di chiamate e dati.",
            "Installazione di Access Point di Ultima Generazione, ottimizzando copertura e qualità del segnale.",
            "Vendita e Configurazione di Smartphone Aziendali",
            "Fornitura di 8 smartphone collegati direttamente al centralino via app VoIP, consentendo al personale di gestire le chiamate come se fossero cordless.",
            "Formazione del Personale",
            "Sessioni di training personalizzate per garantire l'uso ottimale delle nuove tecnologie.",
            "Standardizzazione dei protocolli di risposta per rendere più efficiente lo smistamento delle chiamate e migliorare la comunicazione interna."
          ]
        },
        {
          title: "Risultati Principali",
          content: "",
          bulletPoints: [
            "1. Maggiore Efficienza Operativa",
            "Riduzione dei tempi di attesa e instradamento automatico delle chiamate ai reparti di competenza.",
            "2. Riduzione di Conflitti e Sovraccarichi",
            "Il nuovo flusso di comunicazione ha migliorato il clima interno, evitando errori di assegnazione e gestendo in modo più equo il carico di lavoro.",
            "3. Flessibilità e Scalabilità",
            "Grazie al VoIP, la sede può facilmente aggiungere nuove postazioni senza costi infrastrutturali elevati.",
            "4. Modello Replicabile",
            "L'esperienza con Edilitalia dimostra come una PMI possa realizzare un'efficace trasformazione digitale, beneficiando di tecnologie avanzate e di un approccio mirato."
          ]
        },
        {
          title: "Conclusioni",
          content: "Questo progetto rappresenta un chiaro esempio di come la trasformazione digitale possa diventare un motore di crescita per le aziende, anche in settori tradizionalmente legati a infrastrutture fisiche. L'implementazione di un sistema VoIP intelligente e di un IVR intelligente e di una rete ad alte prestazioni ha permesso a Edilitalia di ottimizzare la gestione delle chiamate e migliorare il servizio clienti, contribuendo alla crescita e all'efficienza dell'impresa.\n\nIn linea con la mia visione di Innovacrum, questo case history testimonia quanto l'innovazione, abbinata a una strategia di cambiamento ben strutturata, possa offrire vantaggi competitivi tangibili e duraturi."
        }
      ]
    }
  };

  // Встановлюємо заголовок документа
  useEffect(() => {
    document.title = lang === 'en' ? 'Edilitalia Project - Matteo' : 'Progetto Edilitalia - Matteo';
  }, [lang]);

  return (
    <div className="App">
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <section className="section portfolio-detail-section">
          <div className="container portfolio-detail-container">
            <h1 className="portfolio-detail-title">
              {edilitaliaCaseStudy[lang].title}
            </h1>
            
            <div className="portfolio-detail-subtitle">
              <h2>{edilitaliaCaseStudy[lang].subtitle}</h2>
            </div>
            
            <div className="portfolio-detail-content">
              {edilitaliaCaseStudy[lang].sections.map((section, index) => (
                <div key={index} className="portfolio-detail-section">
                  <h3 className="portfolio-detail-section-title">{section.title}</h3>
                  
                  {section.content && (
                    <p className="portfolio-detail-section-content">{section.content}</p>
                  )}
                  
                  {section.bulletPoints && (
                    <ul className="portfolio-detail-bullet-list">
                      {section.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="portfolio-detail-bullet-item">{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            {/* Кнопка Next */}
            <div className="portfolio-navigation">
              <button className="portfolio-next-button" onClick={goToNextProject}>
                {lang === 'en' ? 'Next Project' : 'Progetto Successivo'} →
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default PortfolioDetail;