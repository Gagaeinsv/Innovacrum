// src/components/admin/editors/ProfileEditor.js
import React, { useState } from 'react';
import supabase from '../../../supabase/config';

const ProfileEditor = ({ lang }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'Profile Editor',
      description: 'This component will be used to edit Matteo\'s profile and photo.',
      nameLabel: 'Name and Surname',
      positionLabel: 'Position',
      photoLabel: 'Profile Photo',
      chooseFile: 'Choose file',
      noFileChosen: 'No file chosen',
      uploadButton: 'Upload Photo',
      testButton: 'Test Supabase Connection',
      testing: 'Testing connection...',
      success: 'Successfully connected to Supabase! This form will be fully functional soon.',
      functionLater: 'This functionality will be available after the editor is fully implemented.'
    },
    it: {
      title: 'Editor del Profilo',
      description: 'Questo componente verrà utilizzato per modificare il profilo e la foto di Matteo.',
      nameLabel: 'Nome e Cognome',
      positionLabel: 'Posizione',
      photoLabel: 'Foto del Profilo',
      chooseFile: 'Scegli file',
      noFileChosen: 'Nessun file selezionato',
      uploadButton: 'Carica Foto',
      testButton: 'Testa la Connessione a Supabase',
      testing: 'Test della connessione...',
      success: 'Connessione a Supabase riuscita! Questo modulo sarà presto completamente funzionale.',
      functionLater: 'Questa funzionalità sarà disponibile dopo la completa implementazione dell\'editor.'
    }
  };
  
  // Використовуємо тексти поточної мови або англійської за замовчуванням
  const t = texts[lang] || texts.en;

  // Фіктивна функція для тестування відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      // Тестове підключення до Supabase
      const { data, error } = await supabase.from('profiles').select('*').limit(1);
      
      if (error) throw error;
      
      setMessage(t.success);
      console.log('Отримані дані:', data);
    } catch (err) {
      console.error('Помилка:', err);
      setError(`Error connecting to Supabase: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-section">
        <h3>{t.title}</h3>
        <p>{t.description}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>{t.nameLabel}</label>
            <input type="text" placeholder="Matteo Shermadhi" disabled />
            <small>{t.functionLater}</small>
          </div>
          
          <div className="form-control">
            <label>{t.positionLabel}</label>
            <input type="text" placeholder="Web Designer" disabled />
          </div>
          
          <div className="form-control">
            <label>{t.photoLabel}</label>
            <div className="image-upload">
              <input type="file" disabled />
              <button type="button" className="upload-button" disabled>
                {t.uploadButton}
              </button>
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}
          
          <button type="submit" className="save-button" disabled={loading}>
            {loading ? t.testing : t.testButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditor;