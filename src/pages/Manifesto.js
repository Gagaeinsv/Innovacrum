// src/pages/Manifesto.js (this should be a page, not just a component)
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const Manifesto = ({ lang, toggleLanguage }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();

  // Data for display
  const manifestoData = {
    en: {
      title: 'INNOVACRUM MANIFESTO',
      subtitle: 'Toward a New Authentic Meaning of Innovation',
      sections: [
        {
          title: 'BEYOND REFLECTION, TOWARD AUTHENTICITY',
          content: 'Our contemporary world is inundated with "mirrors" and representations that often lose their connection to reality. At Innovacrum, we believe that innovation should not be confined to a play of reflections or mere self-referential simulacra. Instead, it must serve to break these mirrors and reconnect with the most profound human needs.'
        },
        {
          title: 'ACKNOWLEDGING THE POWER OF THE SIMULACRUM',
          content: 'We recognize that, today, signs seem to have a life of their own, generating hyperreality in which it becomes difficult to distinguish between what is real and what is not. Innovacrum embraces this awareness not to surrender but to use it as a springboard for (re)discovery: harnessing the power of simulacra to create something truly new, invested with a higher sense of purpose.'
        },
        {
          title: 'INNOVATION AS A CULTURAL ACT',
          content: 'For us, innovation is not merely about technology; it is living culture. It is the ability to unite vision and understanding to drive tangible transformations in our habits, behaviors, and institutions. To innovate means to grasp the present and to imagine the future, without losing sight of human dignity and of the essential needs of those who will follow us.'
        },
        {
          title: 'BREAKING MIRRORS AS A CREATIVE ACT',
          content: 'Breaking mirrors does not mean destroying the world of images but rather redefining it. It means going beyond the simple fascination with hyperreality to bring forth signs that reflect a deep, genuine, and collective need. This is an act of courage that entails responsibility and care for one another.'
        },
        {
          title: 'A NEW ORDER OF SIGNS',
          content: 'Innovacrum aspires to build a new symbolic framework where the pursuit of meaning is paramount. Our aim is to create products, services, experiences, and narratives that are not empty aesthetic exercises but forms of language capable of meeting—and even anticipating—the real needs of individuals and communities.'
        },
        {
          title: 'ETHICS AND SOCIAL RESPONSIBILITY',
          content: 'Innovation must take responsibility for its consequences. We believe that this "new order of signs" can only emerge if we consider collective well-being, environmental protection, and the promotion of an inclusive culture. Every innovative step must be contemplated in terms of impact and shared value.'
        },
        {
          title: 'KNOWLEDGE AS A MEANS TO CREATE',
          content: 'Innovacrum is grounded in active knowledge: studying, observing, and engaging with those who already experiment with new forms of innovation; but also putting bold ideas into practice, prototyping them, and sharing the results. Knowledge is not a sterile accumulation but a tool for generating new worlds, new "thinking rooms" where we can collectively envision solutions.'
        },
        {
          title: 'FROM HYPERREALITY TO THE TRUTH OF HUMANITY',
          content: 'Our objective is not to stage a more captivating or seductive "hyperreality," but to restore depth to what is real by delving into the essential needs of the human being—such as empathy, respect, cultural growth, and communal well-being. In this way, innovation ceases to be a detached dream and becomes a path of human evolution.'
        },
        {
          title: 'COLLABORATION AND CO-CREATION',
          content: 'We invite anyone who shares this quest for meaning to join us. Innovacrum is open, inclusive, and strongly believes in teamwork: together, we can develop practices, languages, tools, and methodologies that bring us closer to this "new authentic," surpassing the barriers of fragmentation and fruitless competition.'
        },
        {
          title: 'TOWARD A FUTURE OF MEANING',
          content: 'The future we envision is not merely a more "comfortable" world in material terms but one in which innovation is synonymous with cultural responsibility, where people feel like protagonists of change rather than mere onlookers. Breaking mirrors also means having the courage to look beyond illusions, recognizing within ourselves the power to make a difference.'
        }
      ],
      footer: 'With Innovacrum, we assert our right (and duty) to shape a reality that does not simply reproduce old models but dares to create new meanings, new languages, and a new shared ethic. For an innovation that, beyond being "new," is both true and human.'
    },
    it: {
      title: 'MANIFESTO INNOVACRUM',
      subtitle: 'Verso un Nuovo Significato Autentico dell\'Innovazione',
      sections: [
        {
          title: 'OLTRE IL RIFLESSO, VERSO L\'AUTENTICITÀ',
          content: 'Il nostro mondo contemporaneo è inondato di "specchi" e rappresentazioni che spesso perdono il loro legame con la realtà. In Innovacrum, crediamo che l\'innovazione non debba limitarsi a un gioco di riflessi o a meri simulacri autoreferenziali. Al contrario, deve servire a rompere questi specchi e riconnettersi con i bisogni umani più profondi.'
        },
        // Add other Italian sections...
      ],
      footer: 'Con Innovacrum, affermiamo il nostro diritto (e dovere) di plasmare una realtà che non si limiti a riprodurre vecchi modelli, ma osi creare nuovi significati, nuovi linguaggi e una nuova etica condivisa. Per un\'innovazione che, oltre ad essere "nuova", sia vera e umana.'
    }
  };

  // Use English as fallback
  const currentLangData = manifestoData[lang] || manifestoData.en;

  return (
    <div className={`App ${isMobile ? 'mobile-app' : ''} ${isLandscape ? 'landscape-app' : ''}`}>
      {/* Add Header component here */}
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage}
      />
      
      <main className={`${isMobile ? 'mobile-main' : ''} ${isLandscape ? 'landscape-main' : ''}`}>
        <div className={`manifesto-page ${isMobile ? 'mobile-manifesto-page' : ''} ${isLandscape ? 'landscape-manifesto-page' : ''}`}>
          <div className={`manifesto-container ${isMobile ? 'mobile-manifesto-container' : ''} ${isLandscape ? 'landscape-manifesto-container' : ''}`}>
            <h1 className={`manifesto-title ${isMobile ? 'mobile-manifesto-title' : ''} ${isLandscape ? 'landscape-manifesto-title' : ''}`}>{currentLangData.title}</h1>
            <h2 className={`manifesto-subtitle ${isMobile ? 'mobile-manifesto-subtitle' : ''} ${isLandscape ? 'landscape-manifesto-subtitle' : ''}`}>{currentLangData.subtitle}</h2>
            
            {currentLangData.sections && currentLangData.sections.map((section, index) => (
              <div key={index} className={`manifesto-section ${isMobile ? 'mobile-manifesto-section' : ''} ${isLandscape ? 'landscape-manifesto-section' : ''}`}>
                <h3 className={`manifesto-section-title ${isMobile ? 'mobile-manifesto-section-title' : ''} ${isLandscape ? 'landscape-manifesto-section-title' : ''}`}>{section.title}</h3>
                <p className={`manifesto-section-content ${isMobile ? 'mobile-manifesto-section-content' : ''} ${isLandscape ? 'landscape-manifesto-section-content' : ''}`}>{section.content}</p>
              </div>
            ))}
            
            <p className={`manifesto-footer ${isMobile ? 'mobile-manifesto-footer' : ''} ${isLandscape ? 'landscape-manifesto-footer' : ''}`}>{currentLangData.footer}</p>
            
            <div className={`manifesto-copyright ${isMobile ? 'mobile-manifesto-copyright' : ''} ${isLandscape ? 'landscape-manifesto-copyright' : ''}`}>
              © {new Date().getFullYear()} Synergia. All rights reserved.
            </div>
          </div>
        </div>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default Manifesto;