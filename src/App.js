// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import PortfolioDetail from './pages/PortfolioDetail';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import Navigation from './components/Navigation'; // Імпортуємо новий компонент навігації
import Footer from './components/Footer';
import useResponsiveDetect from './hooks/useResponsiveDetect';
import './styles.css';
import './MobileStyles.css';

// Імпорт компонентів для адмін-панелі
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import { useAuth } from './hooks/useAuth';

// Компонент для обробки якорів
function ScrollToAnchor() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return null;
}

// Компонент для захисту адмін-маршрутів
function PrivateRoute({ element, ...props }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('lang') || 'en';
  
  if (loading) {
    const loadingText = lang === 'en' ? 'Loading...' : 'Caricamento...';
    return <div className="loading">{loadingText}</div>;
  }
  
  if (!user) {
    return <Navigate to={`/admin?lang=${lang}`} replace />;
  }
  
  if (user.email !== 'shermatte@tuta.io') {
    return <Navigate to={`/admin?lang=${lang}`} replace />;
  }
  
  return React.cloneElement(element, { ...props, lang });
}

function App() {
  const [lang, setLang] = useState('en');
  const { isMobile } = useResponsiveDetect();
  
  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'en' ? 'it' : 'en');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      
      <div className={`app-container ${isMobile ? 'mobile-app' : ''}`}>
        {/* Використовуємо єдиний компонент Navigation для обох версій */}
        <Navigation 
          isMobile={isMobile} 
          lang={lang} 
          toggleLanguage={toggleLanguage} 
        />
        
        <main className={isMobile ? 'mobile-main' : 'desktop-main'}>
          <Routes>
            <Route 
              path="/" 
              element={<Home lang={lang} toggleLanguage={toggleLanguage} isMobile={isMobile} />} 
            />
            
            <Route 
              path="/manifesto" 
              element={<Manifesto lang={lang} toggleLanguage={toggleLanguage} />} 
            />
            
            <Route 
              path="/portfolio/:projectId" 
              element={<PortfolioDetail lang={lang} toggleLanguage={toggleLanguage} />}
            />
            
            <Route path="/about" element={<Navigate to={isMobile ? "/#about" : "/#about"} replace />} />
            <Route path="/portfolio" element={<Navigate to={isMobile ? "/#portfolio" : "/portfolio/edilitalia"} replace />} />
            <Route path="/contacts" element={<Navigate to={isMobile ? "/#contacts" : "/#contact"} replace />} />
            
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          </Routes>
        </main>
        
        <Footer lang={lang} />
      </div>
      
      <ScrollUpButton />
    </BrowserRouter>
  );
}

export default App;