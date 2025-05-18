// src/components/admin/Dashboard.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import supabase from '../../supabase/config';
import AboutEditor from './editors/AboutEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import ContactEditor from './editors/ContactEditor';
import ProfileEditor from './editors/ProfileEditor';
import './Admin.css';

const Dashboard = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  
  // Перевіряємо, чи передано параметр мови
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramLang = queryParams.get('lang') || 'en';
  
  // Використовуємо мову з пропсів або з параметрів URL
  const currentLang = lang || paramLang;
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'Admin Panel',
      profile: 'Profile/Photo',
      about: 'About Me',
      projects: 'Projects',
      contacts: 'Contacts',
      logout: 'Logout',
      tabTitles: {
        profile: 'Edit Profile and Photo',
        about: 'Edit "About Me" Section',
        projects: 'Manage Projects',
        contact: 'Edit Contact Information'
      }
    },
    it: {
      title: 'Pannello di Amministrazione',
      profile: 'Profilo/Foto',
      about: 'Chi Sono',
      projects: 'Progetti',
      contacts: 'Contatti',
      logout: 'Uscire',
      tabTitles: {
        profile: 'Modifica Profilo e Foto',
        about: 'Modifica Sezione "Chi Sono"',
        projects: 'Gestisci Progetti',
        contact: 'Modifica Informazioni di Contatto'
      }
    }
  };
  
  // Використовуємо тексти поточної мови або англійської за замовчуванням
  const t = texts[currentLang] || texts.en;

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/admin');
    } catch (error) {
      console.error('Помилка при виході:', error);
    }
  };

  const getTabTitle = (tab) => {
    return t.tabTitles[tab] || '';
  };

  const renderEditor = (tab) => {
    switch (tab) {
      case 'profile':
        return <ProfileEditor lang={currentLang} />;
      case 'about':
        return <AboutEditor lang={currentLang} />;
      case 'projects':
        return <ProjectsEditor lang={currentLang} />;
      case 'contact':
        return <ContactEditor lang={currentLang} />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>{t.title}</h2>
        </div>
        <nav className="admin-nav">
          <button
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            {t.profile}
          </button>
          <button
            className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            {t.about}
          </button>
          <button
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            {t.projects}
          </button>
          <button
            className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            {t.contacts}
          </button>
        </nav>
        <div className="admin-sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            {t.logout}
          </button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h1>{getTabTitle(activeTab)}</h1>
        </div>
        <div className="admin-content-area">
          {renderEditor(activeTab)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;