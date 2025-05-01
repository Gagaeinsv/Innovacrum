// src/components/ContactModal.jsx
import React, { useState } from 'react';
import { sendEmail } from './emailService';
import '../styles/ContactModal.css'; // Створіть цей файл для стилів

const ContactModal = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Очищаємо форму після успішної відправки
        setFormData({
          name: '',
          surname: '',
          company: '',
          message: ''
        });
        
        // Закриваємо модальне вікно через 3 секунди після успішної відправки
        setTimeout(() => {
          onClose();
          setSubmitStatus(null); // Скидаємо статус для наступного відкриття
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

  // Функція для закриття з перевіркою
  const handleClose = () => {
    // Якщо відправка в процесі, не закриваємо вікно
    if (isSubmitting) return;
    
    onClose();
    // При закритті скидаємо статус
    setSubmitStatus(null);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>×</button>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            {lang === 'ua' ? 'Повідомлення успішно відправлено! Дякуємо за звернення.' :
             lang === 'it' ? 'Messaggio inviato con successo! Grazie per il tuo contatto.' :
             'Message sent successfully! Thank you for contacting us.'}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            {lang === 'ua' ? 'Виникла помилка при відправці. Будь ласка, спробуйте ще раз.' :
             lang === 'it' ? 'Si è verificato un errore durante l'invio. Si prega di riprovare.' :
             'An error occurred while sending. Please try again.'}
          </div>
        )}
        
        {submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>
              {lang === 'ua' ? 'Зв\'яжіться з нами' :
               lang === 'it' ? 'Contattaci' :
               'Contact Us'}
            </h2>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === 'ua' ? "Ім'я" : lang === 'it' ? "Nome" : "Name"}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder={lang === 'ua' ? "Прізвище" : lang === 'it' ? "Cognome" : "Surname"}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={lang === 'ua' ? "Компанія" : lang === 'it' ? "Azienda" : "Company"}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={lang === 'ua' ? "Повідомлення" : lang === 'it' ? "Messaggio" : "Message"}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 
                (lang === 'ua' ? 'Відправка...' : lang === 'it' ? 'Invio...' : 'Sending...') : 
                (lang === 'ua' ? 'Відправити' : lang === 'it' ? 'Invia' : 'Send')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;