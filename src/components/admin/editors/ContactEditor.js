// src/components/admin/editors/ContactEditor.js
import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase/config';

const ContactEditor = ({ lang }) => {
  const [contactData, setContactData] = useState({
    phone: '',
    email: '',
    instagram_url: '',
    linkedin_personal_url: '',
    linkedin_company_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'Contact Information Editor',
      description: 'This component allows you to edit your contact information.',
      phone: 'Phone Number',
      email: 'Email Address',
      instagram: 'Instagram URL',
      linkedinPersonal: 'Personal LinkedIn URL',
      linkedinCompany: 'Company LinkedIn URL',
      saveButton: 'Save Changes',
      saving: 'Saving...',
      successMessage: 'Changes saved successfully!',
      testButton: 'Test Supabase Connection',
      testing: 'Testing connection...',
      successConnection: 'Successfully connected to Supabase! This form will be fully functional soon.',
      functionLater: 'This functionality will be available after the editor is fully implemented.'
    },
    it: {
      title: 'Editor Informazioni di Contatto',
      description: 'Questo componente ti permette di modificare le tue informazioni di contatto.',
      phone: 'Numero di Telefono',
      email: 'Indirizzo Email',
      instagram: 'URL Instagram',
      linkedinPersonal: 'URL LinkedIn Personale',
      linkedinCompany: 'URL LinkedIn Aziendale',
      saveButton: 'Salva Modifiche',
      saving: 'Salvataggio...',
      successMessage: 'Modifiche salvate con successo!',
      testButton: 'Testa la Connessione a Supabase',
      testing: 'Test della connessione...',
      successConnection: 'Connessione a Supabase riuscita! Questo modulo sarà presto completamente funzionale.',
      functionLater: 'Questa funzionalità sarà disponibile dopo la completa implementazione dell\'editor.'
    }
  };
  
  // Використовуємо тексти поточної мови або англійської за замовчуванням
  const t = texts[lang] || texts.en;

  // Імітація отримання даних
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        
        // Тестове підключення до Supabase
        const { data, error } = await supabase.from('contact_info').select('*').limit(1);
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setContactData(data[0]);
        } else {
          // За замовчуванням, якщо немає даних
          setContactData({
            phone: '+393277438698',
            email: 'shermatte@tuta.io',
            instagram_url: 'https://www.instagram.com/matteo.shermadhi/',
            linkedin_personal_url: 'https://www.linkedin.com/in/matteo-shermadhi/',
            linkedin_company_url: 'https://www.linkedin.com/company/innovacrum/'
          });
        }
      } catch (err) {
        console.error('Error fetching contact data:', err);
        setError(err.message);
        
        // За замовчуванням, якщо є помилка
        setContactData({
          phone: '+393277438698',
          email: 'shermatte@tuta.io',
          instagram_url: 'https://www.instagram.com/matteo.shermadhi/',
          linkedin_personal_url: 'https://www.linkedin.com/in/matteo-shermadhi/',
          linkedin_company_url: 'https://www.linkedin.com/company/innovacrum/'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  // Фіктивна функція для тестування відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // Тестове підключення до Supabase
      const { data, error } = await supabase.from('contact_info').select('*').limit(1);
      
      if (error) throw error;
      
      setSuccess(true);
      console.log('Отримані дані:', data);
    } catch (err) {
      console.error('Помилка:', err);
      setError(`Error connecting to Supabase: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading">{lang === 'en' ? 'Loading...' : 'Caricamento...'}</div>;
  }

  return (
    <div className="editor-container">
      <div className="editor-section">
        <h3>{t.title}</h3>
        <p>{t.description}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>{t.phone}</label>
            <input 
              type="tel" 
              value={contactData.phone}
              onChange={(e) => setContactData({...contactData, phone: e.target.value})}
              placeholder="+393277438698"
              disabled
            />
            <small>{t.functionLater}</small>
          </div>
          
          <div className="form-control">
            <label>{t.email}</label>
            <input 
              type="email" 
              value={contactData.email}
              onChange={(e) => setContactData({...contactData, email: e.target.value})}
              placeholder="shermatte@tuta.io"
              disabled
            />
          </div>
          
          <div className="form-control">
            <label>{t.instagram}</label>
            <input 
              type="url" 
              value={contactData.instagram_url}
              onChange={(e) => setContactData({...contactData, instagram_url: e.target.value})}
              placeholder="https://www.instagram.com/matteo.shermadhi/"
              disabled
            />
          </div>
          
          <div className="form-control">
            <label>{t.linkedinPersonal}</label>
            <input 
              type="url" 
              value={contactData.linkedin_personal_url}
              onChange={(e) => setContactData({...contactData, linkedin_personal_url: e.target.value})}
              placeholder="https://www.linkedin.com/in/matteo-shermadhi/"
              disabled
            />
          </div>
          
          <div className="form-control">
            <label>{t.linkedinCompany}</label>
            <input 
              type="url" 
              value={contactData.linkedin_company_url}
              onChange={(e) => setContactData({...contactData, linkedin_company_url: e.target.value})}
              placeholder="https://www.linkedin.com/company/innovacrum/"
              disabled
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{t.successConnection}</div>}
          
          <button type="submit" className="save-button" disabled={saving}>
            {saving ? t.testing : t.testButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactEditor;