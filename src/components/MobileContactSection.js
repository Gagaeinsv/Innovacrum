// src/components/MobileContactSection.js
import React, { useState } from 'react';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import emailjs from 'emailjs-com';

const MobileContactSection = ({ lang }) => {
  // Стан для форми
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [validationErrors, setValidationErrors] = useState({});
  
  // EmailJS constants
  const SERVICE_ID = 'service_zdjcajw';  // your service ID
  const TEMPLATE_ID = 'template_fxbcoxi'; // your template ID
  const USER_ID = 'qq9uky3qVxbhWqjsI';    // your public key
  const RECIPIENT_EMAIL = 'matteosher@gmail.com';
  
  // Переклади текстів в залежності від мови
  const texts = {
    en: {
      title: "CONTACTS",
      messageTitle: "Message",
      namePlaceholder: "Name*",
      surnamePlaceholder: "Surname*",
      companyPlaceholder: "Company*",
      messagePlaceholder: "Message",
      send: "Send",
      sending: "Sending...",
      contactsTitle: "Contacts",
      phone: "Phone:",
      email: "Email:",
      followMe: "Follow me:",
      nameError: "Please enter your name",
      surnameError: "Please enter your surname",
      companyError: "Please enter your company",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    },
    it: {
      title: "CONTATTI",
      messageTitle: "Messaggio",
      namePlaceholder: "Nome*",
      surnamePlaceholder: "Cognome*",
      companyPlaceholder: "Azienda*",
      messagePlaceholder: "Messaggio",
      send: "Invia",
      sending: "Invio...",
      contactsTitle: "Contatti",
      phone: "Telefono:",
      email: "Email:",
      followMe: "Seguimi:",
      nameError: "Inserisci il tuo nome",
      surnameError: "Inserisci il tuo cognome",
      companyError: "Inserisci la tua azienda",
      success: "Messaggio inviato con successo!",
      error: "Impossibile inviare il messaggio. Riprova."
    }
  };
  
  // Вибір текстів відповідно до мови
  const t = texts[lang] || texts.en;
  
  // Обробник зміни полів форми
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
  
  const validateForm = () => {
    const errors = {};
    let isValid = true;
    
    // Check required fields
    if (!formData.name.trim()) {
      errors.name = t.nameError;
      isValid = false;
    }
    
    if (!formData.surname.trim()) {
      errors.surname = t.surnameError;
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      errors.company = t.companyError;
      isValid = false;
    }
    
    setValidationErrors(errors);
    return isValid;
  };
  
  // Обробник відправки форми
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
    <section id="contacts" style={{
      padding: '40px 16px',
      backgroundColor: '#121212'
    }}>
      <h2 style={{
        color: '#0f0', 
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
        textAlign: 'center',
        textTransform: 'uppercase'
      }}>
        {t.title}
      </h2>
      
      {/* Форма для відправки повідомлення */}
      <div style={{
        marginBottom: '40px'
      }}>
        {submitStatus === 'success' && (
          <div style={{
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            color: '#0f0',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {t.success}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div style={{
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            color: '#ff5555',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {t.error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: '16px'
          }}>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t.namePlaceholder}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: validationErrors.name 
                  ? '1px solid #ff5555' 
                  : '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '8px 0',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            {validationErrors.name && (
              <div style={{
                color: '#ff5555',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {validationErrors.name}
              </div>
            )}
          </div>
          
          <div style={{
            marginBottom: '16px'
          }}>
            <input 
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder={t.surnamePlaceholder}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: validationErrors.surname 
                  ? '1px solid #ff5555' 
                  : '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '8px 0',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            {validationErrors.surname && (
              <div style={{
                color: '#ff5555',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {validationErrors.surname}
              </div>
            )}
          </div>
          
          <div style={{
            marginBottom: '16px'
          }}>
            <input 
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder={t.companyPlaceholder}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: validationErrors.company 
                  ? '1px solid #ff5555' 
                  : '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '8px 0',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            {validationErrors.company && (
              <div style={{
                color: '#ff5555',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {validationErrors.company}
              </div>
            )}
          </div>
          
          <div style={{
            marginBottom: '24px'
          }}>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.messagePlaceholder}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '8px 0',
                fontSize: '14px',
                minHeight: '80px',
                resize: 'vertical',
                outline: 'none'
              }}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              width: '100%',
              backgroundColor: '#0f0',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 0',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'opacity 0.3s'
            }}
          >
            {isSubmitting ? t.sending : t.send}
          </button>
        </form>
      </div>
      
      {/* Контактна інформація */}
      <div style={{
        marginBottom: '40px'
      }}>
        <div style={{
          marginBottom: '16px'
        }}>
          <h3 style={{
            color: '#0f0',
            fontSize: '14px',
            marginBottom: '4px'
          }}>
            {t.phone}
          </h3>
          <p style={{
            color: 'white',
            fontSize: '14px',
            margin: 0
          }}>
            +393277438698
          </p>
        </div>
        
        <div style={{
          marginBottom: '24px'
        }}>
          <h3 style={{
            color: '#0f0',
            fontSize: '14px',
            marginBottom: '4px'
          }}>
            {t.email}
          </h3>
          <p style={{
            color: 'white',
            fontSize: '14px',
            margin: 0
          }}>
            shermatte@tuta.io
          </p>
        </div>
        
        <div>
          <h3 style={{
            color: '#0f0',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            {t.followMe}
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Instagram Link */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <a 
                href="https://www.instagram.com/shermatte/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(131, 58, 180, 0.3)',
                  borderRadius: '4px',
                  border: '1px solid #e1306c'
                }}
              >
                <img 
                  src={instagramIcon} 
                  alt="Instagram" 
                  style={{
                    width: '24px',
                    height: '24px'
                  }}
                />
              </a>
              <span style={{
                color: 'white',
                fontSize: '14px'
              }}>
                Matteo Shermadhi
              </span>
            </div>
            
            {/* Personal LinkedIn Link */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <a 
                href="https://www.linkedin.com/in/matteo-shermadhi-128752292/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 119, 181, 0.3)',
                  borderRadius: '4px',
                  border: '1px solid #0077b5'
                }}
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  style={{
                    width: '24px',
                    height: '24px'
                  }}
                />
              </a>
              <span style={{
                color: 'white',
                fontSize: '14px'
              }}>
                Matteo Shermadhi
              </span>
            </div>
            
            {/* Company LinkedIn Link */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <a 
                href="https://www.linkedin.com/company/innovacrum/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 119, 181, 0.3)',
                  borderRadius: '4px',
                  border: '1px solid #0077b5'
                }}
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn Innovacrum" 
                  style={{
                    width: '24px',
                    height: '24px'
                  }}
                />
              </a>
              <span style={{
                color: 'white',
                fontSize: '14px'
              }}>
                Innovacrum
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Футер */}
      <div style={{
        textAlign: 'center',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: '40px'
      }}>
      </div>
    </section>
  );
};

export default MobileContactSection;