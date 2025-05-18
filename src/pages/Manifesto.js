// src/pages/Manifesto.js
import React from 'react';
import { Link } from 'react-router-dom';

const Manifesto = ({ lang, toggleLanguage }) => {
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "MANIFESTO",
      subtitle: "Toward a New Authentic Meaning of Innovation",
      content: [
        "In an era characterized by rapid technological advancements and the constant quest for innovation, we often lose sight of what innovation truly means. Innovation isn't just about creating something new—it's about creating something meaningful, something that addresses real human needs and brings tangible value.",
        "At its core, innovation should be authentic. It should emerge from a deep understanding of the problem space, a genuine desire to improve the human condition, and a commitment to creating sustainable solutions that stand the test of time.",
        "The new paradigm of innovation that I advocate for centers around three key principles:",
        "1. Human-Centered Design: Innovation must begin and end with the human experience. It should prioritize the needs, behaviors, and contexts of the people it serves, ensuring that technological advancements enhance rather than complicate human life.",
        "2. Sustainable Impact: True innovation considers its long-term impact on society, the economy, and the environment. It aims not just for immediate gains but for enduring positive change that benefits current and future generations.",
        "3. Collaborative Creation: The most powerful innovations emerge from diverse perspectives and collaborative efforts. By bringing together different disciplines, backgrounds, and viewpoints, we can create solutions that are more robust, inclusive, and effective.",
        "This manifesto calls for a return to authenticity in innovation—a movement away from the allure of novelty for its own sake and toward meaningful progress that enriches lives and addresses real-world challenges.",
        "Let us innovate not because we can, but because we should. Let us create not for the sake of creation, but for the betterment of humanity. Let us pursue not just what is new, but what is necessary."
      ],
      backToHome: "Back to Home"
    },
    it: {
      title: "MANIFESTO",
      subtitle: "Verso un Nuovo Significato Autentico dell'Innovazione",
      content: [
        "In un'era caratterizzata da rapidi progressi tecnologici e dalla costante ricerca dell'innovazione, spesso perdiamo di vista ciò che l'innovazione significa veramente. L'innovazione non consiste solo nel creare qualcosa di nuovo, ma nel creare qualcosa di significativo, che risponda ai reali bisogni umani e apporti un valore tangibile.",
        "Nel suo nucleo, l'innovazione dovrebbe essere autentica. Dovrebbe emergere da una profonda comprensione dello spazio problematico, da un genuino desiderio di migliorare la condizione umana e da un impegno a creare soluzioni sostenibili che resistano alla prova del tempo.",
        "Il nuovo paradigma dell'innovazione che sostengo si centra su tre principi chiave:",
        "1. Design Centrato sull'Uomo: L'innovazione deve iniziare e terminare con l'esperienza umana. Dovrebbe dare priorità alle esigenze, ai comportamenti e ai contesti delle persone che serve, garantendo che i progressi tecnologici migliorino anziché complicare la vita umana.",
        "2. Impatto Sostenibile: La vera innovazione considera il suo impatto a lungo termine sulla società, sull'economia e sull'ambiente. Mira non solo a guadagni immediati, ma a un cambiamento positivo duraturo che benefici le generazioni attuali e future.",
        "3. Creazione Collaborativa: Le innovazioni più potenti emergono da prospettive diverse e sforzi collaborativi. Unendo discipline, background e punti di vista diversi, possiamo creare soluzioni più robuste, inclusive ed efficaci.",
        "Questo manifesto chiede un ritorno all'autenticità nell'innovazione—un movimento lontano dal fascino della novità fine a se stessa e verso un progresso significativo che arricchisce le vite e affronta le sfide del mondo reale.",
        "Innoviamo non perché possiamo, ma perché dovremmo. Creiamo non per il gusto della creazione, ma per il miglioramento dell'umanità. Perseguiamo non solo ciò che è nuovo, ma ciò che è necessario."
      ],
      backToHome: "Torna alla Home"
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: 'white',
      padding: '16px'
    }}>
      {/* Заголовок */}
      <h1 style={{
        color: '#0f0',
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        marginTop: '40px',
        textTransform: 'uppercase'
      }}>
        {t.title}
      </h1>
      
      {/* Підзаголовок */}
      <h2 style={{
        color: 'white',
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        {t.subtitle}
      </h2>
      
      {/* Основний контент */}
      <div style={{
        marginBottom: '40px'
      }}>
        {t.content.map((paragraph, index) => (
          <p key={index} style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '16px',
            textAlign: 'justify'
          }}>
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Кнопка повернення на головну */}
      <Link 
        to="/" 
        style={{
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
          marginBottom: '40px'
        }}
      >
        {t.backToHome}
      </Link>
    </div>
  );
};

export default Manifesto;