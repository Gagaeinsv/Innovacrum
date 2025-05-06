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

// Set document language to override browser defaults
document.documentElement.lang = "en";

function App() {
  const [lang, setLang] = useState('en');
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'it' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

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