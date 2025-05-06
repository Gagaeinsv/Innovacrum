// src/components/ContactModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { sendEmail } from '../services/emailService';
import '../styles/ContactModal.css';
import { useResponsiveDetection } from '../hooks/useResponsiveDetection';

const ContactModal = ({ isOpen, onClose, lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetection();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [validationErrors, setValidationErrors] = useState({});

  // Set the form language attribute whenever lang changes
  useEffect(() => {
    if (formRef.current) {
      formRef.current.setAttribute('lang', lang);
      
      // Also set lang on all input elements
      const inputs = formRef.current.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.setAttribute('lang', lang);
      });
    }
  }, [lang, isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear validation error when user types
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    
    // Check required fields
    if (!formData.name.trim()) {
      errors.name = lang === 'en' ? 'Please enter your name' : 'Inserisci il tuo nome';
      isValid = false;
    }
    
    if (!formData.surname.trim()) {
      errors.surname = lang === 'en' ? 'Please enter your surname' : 'Inserisci il tuo cognome';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = lang === 'en' ? 'Please enter a message' : 'Inserisci un messaggio';
      isValid = false;
    }
    
    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Run custom validation
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Clear form after successful submission
        setFormData({
          name: '',
          surname: '',
          company: '',
          message: ''
        });
        
        // Close modal 3 seconds after successful submission
        setTimeout(() => {
          onClose();
          setSubmitStatus(null); // Reset status for next opening
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to close with verification
  const handleClose = () => {
    // Don't close if submission is in progress
    if (isSubmitting) return;
    
    onClose();
    // Reset status when closing
    setSubmitStatus(null);
    setValidationErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isLandscape ? 'landscape-modal-overlay' : ''}`} lang={lang}>
      <div className={`modal-content ${isMobile ? 'mobile-modal-content' : ''} ${isLandscape ? 'landscape-modal-content' : ''}`} lang={lang}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            {lang === 'it' ? 'Messaggio inviato con successo! Grazie per il tuo contatto.' :
             'Message sent successfully! Thank you for contacting us.'}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            {lang === 'it' ? 'Si è verificato un errore durante l'invio. Si prega di riprovare.' :
             'An error occurred while sending. Please try again.'}
          </div>
        )}
        
        {submitStatus !== 'success' && (
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className={`contact-form ${isMobile ? 'mobile-contact-form' : ''} ${isLandscape ? 'landscape-contact-form' : ''}`} 
            noValidate 
            lang={lang}
          >
            <h2>
              {lang === 'it' ? 'Messaggio' : 'Message'}
            </h2>
            
            <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === 'it' ? "Nome*" : "Name*"}
                className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.name ? 'input-error' : ''}`}
                lang={lang}
              />
              {validationErrors.name && <div className="validation-error">{validationErrors.name}</div>}
            </div>
            
            <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder={lang === 'it' ? "Cognome*" : "Surname*"}
                className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.surname ? 'input-error' : ''}`}
                lang={lang}
              />
              {validationErrors.surname && <div className="validation-error">{validationErrors.surname}</div>}
            </div>
            
            <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={lang === 'it' ? "Azienda*" : "Company*"}
                className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''}`}
                lang={lang}
              />
            </div>
            
            <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={lang === 'it' ? "Messaggio" : "Message"}
                className={`form-textarea ${isMobile ? 'mobile-form-textarea' : ''} ${isLandscape ? 'landscape-form-textarea' : ''} ${validationErrors.message ? 'input-error' : ''}`}
                lang={lang}
              />
              {validationErrors.message && <div className="validation-error">{validationErrors.message}</div>}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`submit-button ${isMobile ? 'mobile-submit-button' : ''} ${isLandscape ? 'landscape-submit-button' : ''}`}
            >
              {isSubmitting ? 
                (lang === 'it' ? 'Invio...' : 'Sending...') : 
                (lang === 'it' ? 'Invia' : 'Send')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;