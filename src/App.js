// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import PortfolioDetail from './pages/PortfolioDetail';
import ScrollToTop from './components/ScrollToTop'; // Компонент для скидання прокрутки при навігації
import ScrollUpButton from './components/ScrollUpButton'; // Компонент для кнопки прокрутки вгору
import Header from './components/Header'; // Додаємо імпорт хедера
import './styles.css';

// Компонент для обробки якорів
function ScrollToAnchor() {
  const location = useLocation();
  
  useEffect(() => {
    // Якщо є хеш в URL
    if (location.hash) {
      // Отримуємо елемент за ID (без символу #)
      const element = document.getElementById(location.hash.substring(1));
      
      if (element) {
        // Прокручуємо до елемента
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return null;
}

// Компонент-обгортка, який включає Header для всіх сторінок
function Layout({ children, lang, toggleLanguage }) {
  return (
    <>
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      {children}
    </>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  
  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'en' ? 'it' : 'en');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout lang={lang} toggleLanguage={toggleLanguage}>
              <Home lang={lang} toggleLanguage={toggleLanguage} />
            </Layout>
          } 
        />
        <Route 
          path="/manifesto" 
          element={
            <Layout lang={lang} toggleLanguage={toggleLanguage}>
              <Manifesto lang={lang} toggleLanguage={toggleLanguage} />
            </Layout>
          } 
        />
        <Route path="/portfolio" element={<Navigate to="/portfolio/edilitalia" replace />} />
        <Route 
          path="/portfolio/:projectId" 
          element={
            <Layout lang={lang} toggleLanguage={toggleLanguage}>
              <PortfolioDetail lang={lang} toggleLanguage={toggleLanguage} />
            </Layout>
          } 
        />
      </Routes>
      
      <ScrollUpButton />
    </BrowserRouter>
  );
}

export default App;