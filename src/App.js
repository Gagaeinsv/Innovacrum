// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import './styles.css';

// Set document language to Italian by default
document.documentElement.lang = "it";

function App() {
  // Set Italian as the default language
  const [lang, setLang] = useState('it');
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'it' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  // Add meta tag for language
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Language');
    meta.setAttribute('content', lang);
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route 
          path="/" 
          element={<Home lang={lang} toggleLanguage={toggleLanguage} />} 
        />
        <Route 
          path="/manifesto" 
          element={<Manifesto lang={lang} toggleLanguage={toggleLanguage} />} 
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio lang={lang} toggleLanguage={toggleLanguage} />} 
        />
        <Route 
          path="/portfolio/:projectId" 
          element={<PortfolioDetail lang={lang} toggleLanguage={toggleLanguage} />} 
        />
      </Routes>
      
      <ScrollUpButton />
    </BrowserRouter>
  );
}

export default App;