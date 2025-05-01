// src/components/ContactSection.js
import React, { useState } from 'react';
import { translations } from '../translations';
import instagramIcon from '../assets/Group.svg';
import linkedinIcon from '../assets/Group-1.svg';
import emailjs from 'emailjs-com';

const ContactSection = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Константи EmailJS - використовуємо ті самі, що і в HeroSection
  const SERVICE_ID = 'YOUR_SERVICE_ID';  // замініть на ваш ID сервісу
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // замініть на ваш ID шаблону
  const USER_ID = 'YOUR_USER_ID';         // замініть на ваш User ID
  const RECIPIENT_EMAIL = 'matteosher@gmail.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
      alert(lang === 'en' ? 'Message sent successfully!' : 'Messaggio inviato con successo!');
      
      // Reset form
      setFormData({ name: '', surname: '', company: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert(lang === 'en' ? 'Failed to send message. Please try again.' : 'Impossibile inviare il messaggio. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Follow me column */}
          <div className="contact-column">
            <h3 className="contact-title">Follow me:</h3>
            <div className="social-icons">
              {/* Instagram Link */}
              <div className="social-icon-wrapper">
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
              <div className="social-icon-wrapper">
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
              <div className="social-icon-wrapper">
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
          <div className="contact-column">
            <h3 className="contact-title">Contacts</h3>
            <div className="contact-info">
              <div className="contact-item">
                <h4 className="contact-label">Phone:</h4>
                <p className="contact-value">{translations[lang].contactInfo.phone}</p>
              </div>
              <div className="contact-item">
                <h4 className="contact-label">Email:</h4>
                <p className="contact-value">{translations[lang].contactInfo.email}</p>
              </div>
            </div>
          </div>
          
          {/* Message column */}
          <div className="contact-column">
            <h3 className="contact-title">Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder={lang === 'en' ? 'Name*' : 'Nome*'} 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="surname" 
                  value={formData.surname} 
                  onChange={handleInputChange} 
                  placeholder={lang === 'en' ? 'Surname*' : 'Cognome*'} 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  placeholder={lang === 'en' ? 'Company*' : 'Azienda*'} 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder={lang === 'en' ? 'Message' : 'Messaggio'} 
                  className="form-textarea"
                ></textarea>
              </div>
              <div className="form-group">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (lang === 'en' ? 'Sending...' : 'Invio...') 
                    : (lang === 'en' ? 'Send' : 'Invia')
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-copyright">
        
        </div>
      </div>
    </section>
  );
};

export default ContactSection;