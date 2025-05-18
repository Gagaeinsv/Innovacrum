// src/components/ContactModal.jsx
import React, { useState } from 'react';
// import { sendEmail } from '../services/emailService';

const ContactModal = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const texts = {
    en: {
      title: 'Message',
      name: 'Name*',
      surname: 'Surname*',
      company: 'Company*',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      nameRequired: 'Please enter your name',
      surnameRequired: 'Please enter your surname',
      companyRequired: 'Please enter your company',
      messageRequired: 'Please enter your message',
      successMessage: 'Message sent successfully! Thank you for contacting us.',
      errorMessage: 'An error occurred while sending. Please try again.'
    },
    it: {
      title: 'Messaggio',
      name: 'Nome*',
      surname: 'Cognome*',
      company: 'Azienda*',
      message: 'Messaggio',
      send: 'Invia',
      sending: 'Invio...',
      nameRequired: 'Inserisci il tuo nome',
      surnameRequired: 'Inserisci il tuo cognome',
      companyRequired: 'Inserisci la tua azienda',
      messageRequired: 'Inserisci un messaggio',
      successMessage: 'Messaggio inviato con successo! Grazie per il tuo contatto.',
      errorMessage: 'Si è verificato un errore durante l\'invio. Si prega di riprovare.'
    }
  };

  // Завжди використовуємо англійські тексти для валідаційних повідомлень
  const getValidationText = (key) => {
    return texts.en[key] || key;
  };

  // Для інших текстів використовуємо поточну мову
  const getText = (key) => {
    const currentTexts = texts[lang] || texts.en;
    return currentTexts[key] || key;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Очищаємо помилку при введенні
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = getValidationText('nameRequired');
      isValid = false;
    }
    
    if (!formData.surname.trim()) {
      newErrors.surname = getValidationText('surnameRequired');
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      newErrors.company = getValidationText('companyRequired');
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = getValidationText('messageRequired');
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Тут симулюємо успішну відправку
      // В реальному коді використайте ваш метод sendEmail
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          surname: '',
          company: '',
          message: ''
        });
        
        // Закриття модального вікна через 3 секунди
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 3000);
        
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  // Якщо модальне вікно закрите, не рендеримо нічого
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>×</button>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            {getText('successMessage')}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            {getText('errorMessage')}
          </div>
        )}
        
        {submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} noValidate>
            <h2>{getText('title')}</h2>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={getText('name')}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && (
                <div className="validation-error">
                  {errors.name}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder={getText('surname')}
                className={`form-input ${errors.surname ? 'input-error' : ''}`}
              />
              {errors.surname && (
                <div className="validation-error">
                  {errors.surname}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={getText('company')}
                className={`form-input ${errors.company ? 'input-error' : ''}`}
              />
              {errors.company && (
                <div className="validation-error">
                  {errors.company}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={getText('message')}
                className={`form-textarea ${errors.message ? 'input-error' : ''}`}
              />
              {errors.message && (
                <div className="validation-error">
                  {errors.message}
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? getText('sending') : getText('send')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;