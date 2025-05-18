// src/components/ContactSection.js
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import emailjs from 'emailjs-com';
import useResponsiveDetect from '../hooks/useResponsiveDetect';

const ContactSection = ({ lang }) => {
  const { isMobile, isLandscape } = useResponsiveDetect();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [validationErrors, setValidationErrors] = useState({});

  // Встановити мову документа та форми при зміні мови
  useEffect(() => {
    // Додаємо атрибут lang до документа
    document.documentElement.setAttribute('lang', lang);
    
    // Знаходимо всі форми
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      // Встановлюємо атрибут lang для форми
      form.setAttribute('lang', lang);
      
      // Знаходимо всі поля вводу
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        // Встановлюємо атрибут lang для кожного поля
        input.setAttribute('lang', lang);
        
        // Відключаємо нативну валідацію з повідомленнями
        if (input.hasAttribute('required')) {
          input.addEventListener('invalid', (e) => {
            e.preventDefault();
          });
        }
      });
    });
  }, [lang]);

  // EmailJS constants
  const SERVICE_ID = 'service_zdjcajw';  // your service ID
  const TEMPLATE_ID = 'template_fxbcoxi'; // your template ID
  const USER_ID = 'qq9uky3qVxbhWqjsI';    // your public key
  const RECIPIENT_EMAIL = 'matteosher@gmail.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for this field if user is typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Тексти для валідаційних повідомлень
  const validationMessages = {
    en: {
      name: 'Please enter your name',
      surname: 'Please enter your surname',
      company: 'Please enter your company',
      message: 'Please enter a message',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.'
    },
    it: {
      name: 'Inserisci il tuo nome',
      surname: 'Inserisci il tuo cognome',
      company: 'Inserisci la tua azienda',
      message: 'Inserisci un messaggio',
      success: 'Messaggio inviato con successo!',
      error: 'Impossibile inviare il messaggio. Riprova.'
    }
  };

  // Плейсхолдери для полів форми
  const placeholders = {
    en: {
      name: 'Name*',
      surname: 'Surname*',
      company: 'Company*',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...'
    },
    it: {
      name: 'Nome*',
      surname: 'Cognome*',
      company: 'Azienda*',
      message: 'Messaggio',
      send: 'Invia',
      sending: 'Invio...'
    }
  };

  // Отримання текстів відповідно до поточної мови
  const getMessage = (key) => {
    const messages = validationMessages[lang] || validationMessages.en;
    return messages[key] || key;
  };

  // Отримання плейсхолдера відповідно до поточної мови
  const getPlaceholder = (key) => {
    const currentPlaceholders = placeholders[lang] || placeholders.en;
    return currentPlaceholders[key] || key;
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    
    // Check required fields using language-specific messages
    if (!formData.name.trim()) {
      errors.name = getMessage('name');
      isValid = false;
    }
    
    if (!formData.surname.trim()) {
      errors.surname = getMessage('surname');
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      errors.company = getMessage('company');
      isValid = false;
    }
    
    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валідація форми перед відправкою
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: `${formData.name} ${formData.surname}`,
        company: formData.company,
        message: formData.message,
      };
      
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      
      console.log('Email sent successfully from contact form:', response);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({ name: '', surname: '', company: '', message: '' });
      
      // Clear validation errors
      setValidationErrors({});
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section contact-section ${isMobile ? 'mobile-contact-section' : ''} ${isLandscape ? 'landscape-contact-section' : ''}`}>
      <div className={`container ${isMobile ? 'mobile-container' : ''} ${isLandscape ? 'landscape-container' : ''}`}>
        <div className={`contact-grid ${isMobile ? 'mobile-contact-grid' : ''} ${isLandscape ? 'landscape-contact-grid' : ''}`}>
          {/* Follow me column */}
          <div className={`contact-column ${isMobile ? 'mobile-contact-column' : ''} ${isLandscape ? 'landscape-contact-column' : ''}`}>
            <h3 className={`contact-title ${isMobile ? 'mobile-contact-title' : ''} ${isLandscape ? 'landscape-contact-title' : ''}`}>
              {lang === 'it' ? 'Seguimi:' : 'Follow me:'}
            </h3>
            <div className={`social-icons ${isMobile ? 'mobile-social-icons' : ''} ${isLandscape ? 'landscape-social-icons' : ''}`}>
              {/* Instagram Link */}
              <div className={`social-icon-wrapper ${isMobile ? 'mobile-social-icon-wrapper' : ''} ${isLandscape ? 'landscape-social-icon-wrapper' : ''}`}>
                <a 
                  href="https://www.instagram.com/shermatte/" 
                  className="social-icon-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="social-icon-container instagram-container">
                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                  </div>
                </a>
                <span className="social-icon-description">Matteo Shermadhi</span>
              </div>
              
              {/* Personal LinkedIn Link */}
              <div className={`social-icon-wrapper ${isMobile ? 'mobile-social-icon-wrapper' : ''} ${isLandscape ? 'landscape-social-icon-wrapper' : ''}`}>
                <a 
                  href="https://www.linkedin.com/in/matteo-shermadhi-128752292/" 
                  className="social-icon-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="social-icon-container linkedin-container">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                  </div>
                </a>
                <span className="social-icon-description">Matteo Shermadhi</span>
              </div>
              
              {/* Company LinkedIn Link */}
              <div className={`social-icon-wrapper ${isMobile ? 'mobile-social-icon-wrapper' : ''} ${isLandscape ? 'landscape-social-icon-wrapper' : ''}`}>
                <a 
                  href="https://www.linkedin.com/company/innovacrum/" 
                  className="social-icon-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="social-icon-container linkedin-container">
                    <img src={linkedinIcon} alt="LinkedIn Innovacrum" className="social-icon" />
                  </div>
                </a>
                <span className="social-icon-description">Innovacrum</span>
              </div>
            </div>
          </div>
          
          {/* Contacts column */}
          <div className={`contact-column ${isMobile ? 'mobile-contact-column' : ''} ${isLandscape ? 'landscape-contact-column' : ''}`}>
            <h3 className={`contact-title ${isMobile ? 'mobile-contact-title' : ''} ${isLandscape ? 'landscape-contact-title' : ''}`}>
              {lang === 'it' ? 'Contatti' : 'Contacts'}
            </h3>
            <div className={`contact-info ${isMobile ? 'mobile-contact-info' : ''} ${isLandscape ? 'landscape-contact-info' : ''}`}>
              <div className={`contact-item ${isMobile ? 'mobile-contact-item' : ''} ${isLandscape ? 'landscape-contact-item' : ''}`}>
                <h4 className={`contact-label ${isMobile ? 'mobile-contact-label' : ''} ${isLandscape ? 'landscape-contact-label' : ''}`}>
                  {lang === 'it' ? 'Telefono:' : 'Phone:'}
                </h4>
                <p className={`contact-value ${isMobile ? 'mobile-contact-value' : ''} ${isLandscape ? 'landscape-contact-value' : ''}`}>
                  {translations[lang].contactInfo.phone}
                </p>
              </div>
              <div className={`contact-item ${isMobile ? 'mobile-contact-item' : ''} ${isLandscape ? 'landscape-contact-item' : ''}`}>
                <h4 className={`contact-label ${isMobile ? 'mobile-contact-label' : ''} ${isLandscape ? 'landscape-contact-label' : ''}`}>
                  Email:
                </h4>
                <p className={`contact-value ${isMobile ? 'mobile-contact-value' : ''} ${isLandscape ? 'landscape-contact-value' : ''}`}>
                  {translations[lang].contactInfo.email}
                </p>
              </div>
            </div>
          </div>
          
          {/* Message column */}
          <div className={`contact-column ${isMobile ? 'mobile-contact-column' : ''} ${isLandscape ? 'landscape-contact-column' : ''}`}>
            <h3 className={`contact-title ${isMobile ? 'mobile-contact-title' : ''} ${isLandscape ? 'landscape-contact-title' : ''}`}>
              {lang === 'it' ? 'Messaggio' : 'Message'}
            </h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                {getMessage('success')}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                {getMessage('error')}
              </div>
            )}
            
            <form 
              onSubmit={handleSubmit} 
              className={`contact-form ${isMobile ? 'mobile-contact-form' : ''} ${isLandscape ? 'landscape-contact-form' : ''}`}
              noValidate
              lang={lang}
            >
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder={getPlaceholder('name')} 
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
                  onChange={handleInputChange} 
                  placeholder={getPlaceholder('surname')} 
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
                  onChange={handleInputChange} 
                  placeholder={getPlaceholder('company')} 
                  className={`form-input ${isMobile ? 'mobile-form-input' : ''} ${isLandscape ? 'landscape-form-input' : ''} ${validationErrors.company ? 'input-error' : ''}`}
                  lang={lang}
                />
                {validationErrors.company && <div className="validation-error">{validationErrors.company}</div>}
              </div>
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder={getPlaceholder('message')} 
                  className={`form-textarea ${isMobile ? 'mobile-form-textarea' : ''} ${isLandscape ? 'landscape-form-textarea' : ''}`}
                  lang={lang}
                ></textarea>
              </div>
              <div className={`form-group ${isMobile ? 'mobile-form-group' : ''} ${isLandscape ? 'landscape-form-group' : ''}`}>
                <button 
                  type="submit" 
                  className={`submit-button ${isMobile ? 'mobile-submit-button' : ''} ${isLandscape ? 'landscape-submit-button' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? getPlaceholder('sending')
                    : getPlaceholder('send')
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className={`footer-copyright ${isMobile ? 'mobile-footer-copyright' : ''} ${isLandscape ? 'landscape-footer-copyright' : ''}`}>
        
        </div>
      </div>
    </section>
  );
};

export default ContactSection;