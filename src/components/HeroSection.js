// src/components/HeroSection.js
import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import matteoPhoto from '../assets/img_0480 1.png';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const HeroSection = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const modalRef = useRef(null);
  
  // Reset validation state when modal opens/closes
  useEffect(() => {
    if (!isModalOpen) {
      setValidationErrors({});
      setAttemptedSubmit(false);
    }
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form data when closing
    setFormData({
      name: '',
      surname: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // If user has attempted to submit, validate as they type
    if (attemptedSubmit) {
      validateField(name, value);
    }
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...validationErrors };
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = lang === 'en' ? 'Please enter your name' : 'Inserisci il tuo nome';
        } else {
          delete newErrors.name;
        }
        break;
      case 'surname':
        if (!value.trim()) {
          newErrors.surname = lang === 'en' ? 'Please enter your surname' : 'Inserisci il tuo cognome';
        } else {
          delete newErrors.surname;
        }
        break;
      case 'company':
        if (!value.trim()) {
          newErrors.company = lang === 'en' ? 'Please enter your company' : 'Inserisci la tua azienda';
        } else {
          delete newErrors.company;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = lang === 'en' ? 'Please enter a message' : 'Inserisci un messaggio';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }
    
    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const fields = ['name', 'surname', 'company', 'message'];
    const newErrors = {};
    
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = lang === 'en' 
          ? `Please enter your ${field === 'message' ? 'message' : field}` 
          : `Inserisci ${field === 'name' ? 'il tuo nome' : field === 'surname' ? 'il tuo cognome' : field === 'company' ? 'la tua azienda' : 'un messaggio'}`;
      }
    });
    
    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    
    // Validate the form
    if (validateForm()) {
      // Here you would handle the form submission, like sending data to an API
      console.log('Form submitted:', formData);
      
      // Reset form and close modal after submission
      setFormData({ name: '', surname: '', company: '', message: '' });
      setIsModalOpen(false);
      setAttemptedSubmit(false);
      setValidationErrors({});
    }
  };

  // Click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Mobile layout should hide the image and center the text
  const renderMobileHero = () => (
    <div className="mobile-matteo-container">
      <div className="mobile-matteo-text">
        <h1 className="mobile-heading">
          {lang === 'en' ? (
            <>Hi, I<span className="green-apostrophe">'</span>m Matteo<span className="green-dot"></span></>
          ) : (
            <>Ciao, sono Matteo<span className="green-dot"></span></>
          )}
        </h1>
        <div className="mobile-role">PROJECT MANAGER</div>
        <p className="mobile-mission">
          {translations[lang].matteoDescription}
        </p>
        <button 
          className="mobile-cta-button" 
          onClick={handleOpenModal}
        >
          {lang === 'en' ? 'Send Message' : 'Invia Messaggio'}
        </button>
      </div>
    </div>
  );

  // Desktop layout should show the image and text side by side
  const renderDesktopHero = () => (
    <div className={`matteo-container ${isLandscape ? 'landscape-matteo-container' : ''}`}>
      <div className={`matteo-text ${isLandscape ? 'landscape-matteo-text' : ''}`}>
        <h1 className={isLandscape ? 'landscape-heading' : ''}>
          {lang === 'en' ? (
            <>Hi, I<span className="green-apostrophe">'</span>m Matteo<span className="green-dot"></span></>
          ) : (
            <>Ciao, sono Matteo<span className="green-dot"></span></>
          )}
        </h1>
        <div className={`matteo-role ${isLandscape ? 'landscape-role' : ''}`}>PROJECT MANAGER</div>
        <p className={`matteo-mission ${isLandscape ? 'landscape-mission' : ''}`}>
          {translations[lang].matteoDescription}
        </p>
        <button 
          className={`cta-button ${isLandscape ? 'landscape-cta-button' : ''}`} 
          onClick={handleOpenModal}
        >
          {lang === 'en' ? 'Send Message' : 'Invia Messaggio'}
        </button>
      </div>
      <div className={`matteo-image ${isLandscape ? 'landscape-matteo-image' : ''}`}>
        <img src={matteoPhoto} alt="Matteo" className={`profile-photo ${isLandscape ? 'landscape-profile-photo' : ''}`} />
      </div>
    </div>
  );

  return (
    <section className={`section matteo-section ${isMobile ? 'mobile-matteo-section' : ''} ${isLandscape ? 'landscape-matteo-section' : ''}`}>
      {isMobile ? renderMobileHero() : renderDesktopHero()}

      {/* Contact Modal */}
      {isModalOpen && (
        <div className={`modal-overlay ${isMobile ? 'mobile-modal-overlay' : ''} ${isLandscape ? 'landscape-modal-overlay' : ''}`}>
          <div 
            ref={modalRef}
            className={`modal-content ${isMobile ? 'mobile-modal-content' : ''} ${isLandscape ? 'landscape-modal-content' : ''}`}
          >
            <button 
              className={`close-modal-btn ${isMobile ? 'mobile-close-btn' : ''} ${isLandscape ? 'landscape-close-btn' : ''}`} 
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h2 className={`modal-title ${isMobile ? 'mobile-modal-title' : ''} ${isLandscape ? 'landscape-modal-title' : ''}`}>
              {lang === 'en' ? 'Message' : 'Messaggio'}
            </h2>
            <form 
              onSubmit={handleSubmit} 
              className={`contact-form ${isMobile ? 'mobile-contact-form' : ''} ${isLandscape ? 'landscape-contact-form' : ''}`}
              noValidate
            >
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'en' ? 'Name*' : 'Nome*'}
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.name ? 'input-error' : ''}`}
                />
                {validationErrors.name && (
                  <div className="validation-error">{validationErrors.name}</div>
                )}
              </div>
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <input
                  type="text"
                  name="surname"
                  placeholder={lang === 'en' ? 'Surname*' : 'Cognome*'}
                  value={formData.surname}
                  onChange={handleChange}
                  className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.surname ? 'input-error' : ''}`}
                />
                {validationErrors.surname && (
                  <div className="validation-error">{validationErrors.surname}</div>
                )}
              </div>
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <input
                  type="text"
                  name="company"
                  placeholder={lang === 'en' ? 'Company*' : 'Azienda*'}
                  value={formData.company}
                  onChange={handleChange}
                  className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.company ? 'input-error' : ''}`}
                />
                {validationErrors.company && (
                  <div className="validation-error">{validationErrors.company}</div>
                )}
              </div>
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <textarea
                  name="message"
                  placeholder={lang === 'en' ? 'Message' : 'Messaggio'}
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${isMobile ? 'mobile-form-textarea' : ''} ${isLandscape ? 'landscape-form-textarea' : ''} ${validationErrors.message ? 'input-error' : ''}`}
                ></textarea>
                {validationErrors.message && (
                  <div className="validation-error">{validationErrors.message}</div>
                )}
              </div>
              <button 
                type="submit" 
                className={`submit-button ${isMobile ? 'mobile-submit-button' : ''} ${isLandscape ? 'landscape-submit-button' : ''}`}
              >
                {lang === 'en' ? 'Send' : 'Invia'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;