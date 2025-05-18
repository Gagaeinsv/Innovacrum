// src/components/admin/editors/AboutEditor.js
import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase/config';

const AboutEditor = ({ lang }) => {
  const [aboutData, setAboutData] = useState({
    title: '',
    description: '',
    skills: []
  });
  const [newSkill, setNewSkill] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'About Me Editor',
      description: 'This component allows you to edit the About Me section of your portfolio.',
      sectionTitle: 'Section Title',
      sectionDescription: 'Section Description',
      skills: 'Skills',
      addSkill: 'Add Skill',
      add: 'Add',
      saveButton: 'Save Changes',
      saving: 'Saving...',
      successMessage: 'Changes saved successfully!',
      testButton: 'Test Supabase Connection',
      testing: 'Testing connection...',
      successConnection: 'Successfully connected to Supabase! This form will be fully functional soon.',
      functionLater: 'This functionality will be available after the editor is fully implemented.'
    },
    it: {
      title: 'Editor Sezione Chi Sono',
      description: 'Questo componente ti permette di modificare la sezione Chi Sono del tuo portfolio.',
      sectionTitle: 'Titolo Sezione',
      sectionDescription: 'Descrizione Sezione',
      skills: 'Competenze',
      addSkill: 'Aggiungi Competenza',
      add: 'Aggiungi',
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
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        
        // Тестове підключення до Supabase
        const { data, error } = await supabase.from('about_section').select('*').limit(1);
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setAboutData(data[0]);
        } else {
          // За замовчуванням, якщо немає даних
          setAboutData({
            title: 'About Me',
            description: 'Add your description here',
            skills: ['Web Design', 'UX/UI', 'Branding']
          });
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError(err.message);
        
        // За замовчуванням, якщо є помилка
        setAboutData({
          title: 'About Me',
          description: 'Add your description here',
          skills: ['Web Design', 'UX/UI', 'Branding']
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Фіктивна функція для тестування відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // Тестове підключення до Supabase
      const { data, error } = await supabase.from('about_section').select('*').limit(1);
      
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

  // Функція для додавання нової навички
  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setAboutData({
        ...aboutData,
        skills: [...aboutData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  // Функція для видалення навички
  const handleRemoveSkill = (skillToRemove) => {
    setAboutData({
      ...aboutData,
      skills: aboutData.skills.filter(skill => skill !== skillToRemove)
    });
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
            <label>{t.sectionTitle}</label>
            <input 
              type="text" 
              value={aboutData.title}
              onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
              placeholder="About Me"
              disabled
            />
            <small>{t.functionLater}</small>
          </div>
          
          <div className="form-control">
            <label>{t.sectionDescription}</label>
            <textarea 
              value={aboutData.description}
              onChange={(e) => setAboutData({...aboutData, description: e.target.value})}
              placeholder="Description"
              rows={6}
              disabled
            ></textarea>
          </div>
          
          <div className="form-control">
            <label>{t.skills}</label>
            <div className="list-items">
              {aboutData.skills.map((skill, index) => (
                <div key={index} className="list-item">
                  <span>{skill}</span>
                  <button 
                    type="button" 
                    className="remove-item-btn"
                    onClick={() => handleRemoveSkill(skill)}
                    disabled
                  >✕</button>
                </div>
              ))}
            </div>
            
            <div className="item-input">
              <input 
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder={t.addSkill}
                disabled
              />
              <button 
                type="button"
                className="add-item-btn"
                onClick={handleAddSkill}
                disabled
              >{t.add}</button>
            </div>
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

export default AboutEditor;