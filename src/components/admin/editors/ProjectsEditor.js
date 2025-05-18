// src/components/admin/editors/ProjectsEditor.js
import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase/config';

const ProjectsEditor = ({ lang }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'Projects Editor',
      description: 'This component allows you to manage your portfolio projects.',
      projectsLabel: 'Your Projects',
      addProject: 'Add New Project',
      projectTitle: 'Project Title',
      projectDescription: 'Project Description',
      projectImage: 'Project Image',
      projectUrl: 'Project URL',
      technologies: 'Technologies',
      addTechnology: 'Add Technology',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      saveButton: 'Save Changes',
      saving: 'Saving...',
      successMessage: 'Changes saved successfully!',
      testButton: 'Test Supabase Connection',
      testing: 'Testing connection...',
      successConnection: 'Successfully connected to Supabase! This form will be fully functional soon.',
      functionLater: 'This functionality will be available after the editor is fully implemented.'
    },
    it: {
      title: 'Editor dei Progetti',
      description: 'Questo componente ti permette di gestire i progetti del tuo portfolio.',
      projectsLabel: 'I Tuoi Progetti',
      addProject: 'Aggiungi Nuovo Progetto',
      projectTitle: 'Titolo del Progetto',
      projectDescription: 'Descrizione del Progetto',
      projectImage: 'Immagine del Progetto',
      projectUrl: 'URL del Progetto',
      technologies: 'Tecnologie',
      addTechnology: 'Aggiungi Tecnologia',
      add: 'Aggiungi',
      edit: 'Modifica',
      delete: 'Elimina',
      save: 'Salva',
      cancel: 'Annulla',
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
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Тестове підключення до Supabase
        const { data, error } = await supabase.from('projects').select('*');
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          // Демо-дані, якщо немає даних
          setProjects([
            {
              id: 1,
              title: 'Edilitalia',
              description: 'Construction company website redesign with modern UI/UX approaches.',
              image_url: '/images/projects/edilitalia.jpg',
              project_url: '/portfolio/edilitalia',
              technologies: ['React', 'GSAP', 'Responsive Design']
            },
            {
              id: 2,
              title: 'Innovacrum',
              description: 'Digital marketing agency website with focus on visual storytelling.',
              image_url: '/images/projects/innovacrum.jpg',
              project_url: '/portfolio/innovacrum',
              technologies: ['WordPress', 'Custom CSS', 'PHP']
            }
          ]);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        
        // Демо-дані у випадку помилки
        setProjects([
          {
            id: 1,
            title: 'Edilitalia',
            description: 'Construction company website redesign with modern UI/UX approaches.',
            image_url: '/images/projects/edilitalia.jpg',
            project_url: '/portfolio/edilitalia',
            technologies: ['React', 'GSAP', 'Responsive Design']
          },
          {
            id: 2,
            title: 'Innovacrum',
            description: 'Digital marketing agency website with focus on visual storytelling.',
            image_url: '/images/projects/innovacrum.jpg',
            project_url: '/portfolio/innovacrum',
            technologies: ['WordPress', 'Custom CSS', 'PHP']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Фіктивна функція для тестування відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // Тестове підключення до Supabase
      const { data, error } = await supabase.from('projects').select('*').limit(1);
      
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
            <label>{t.projectsLabel}</label>
            <div className="projects-list">
              {projects.map((project) => (
                <div key={project.id} className="project-item">
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-actions">
                      <button type="button" className="edit-btn" disabled>{t.edit}</button>
                      <button type="button" className="delete-btn" disabled>{t.delete}</button>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button type="button" className="add-project-btn" disabled>
              {t.addProject}
            </button>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{t.successConnection}</div>}
          
          <button type="submit" className="save-button" disabled={saving}>
            {saving ? t.testing : t.testButton}
          </button>
        </form>
      </div>
      
      <style jsx>{`
        .projects-list {
          margin-bottom: 20px;
        }
        
        .project-item {
          background-color: #232323;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .project-header h4 {
          margin: 0;
          color: #00FF00;
        }
        
        .project-actions {
          display: flex;
          gap: 10px;
        }
        
        .edit-btn, .delete-btn {
          padding: 5px 10px;
          background-color: #333;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
        }
        
        .delete-btn {
          background-color: #6b1f1f;
        }
        
        .project-description {
          margin-bottom: 10px;
          color: #ccc;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .technology-tag {
          background-color: #333;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        
        .add-project-btn {
          background-color: #00FF00;
          color: #000;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
};

export default ProjectsEditor;