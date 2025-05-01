// src/components/HeroSection.js
import React, { useState } from 'react';
import { translations } from '../translations';
import matteoPhoto from '../assets/img_0480 1.png';

const HeroSection = ({ lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    message: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending data to an API
    console.log('Form submitted:', formData);
    // Reset form and close modal after submission
    setFormData({ name: '', surname: '', company: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <section className="section matteo-section">
      <div className="matteo-container">
        <div className="matteo-text">
          <h1>
            {lang === 'en' ? (
              <>Hi, I<span className="green-apostrophe">'</span>m Matteo<span className="green-dot"></span></>
            ) : (
              <>Ciao, sono Matteo<span className="green-dot"></span></>
            )}
          </h1>
          <div className="matteo-role">PROJECT MANAGER</div>
          <p className="matteo-mission">
            {translations[lang].matteoDescription}
          </p>
          <button className="cta-button" onClick={handleOpenModal}>
            {lang === 'en' ? 'Send Message' : 'Invia Messaggio'}
          </button>
        </div>
        <div className="matteo-image">
          <img src={matteoPhoto} alt="Matteo" className="profile-photo" />
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            <h2>{lang === 'en' ? 'Message' : 'Messaggio'}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'en' ? 'Name*' : 'Nome*'}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="surname"
                  placeholder={lang === 'en' ? 'Surname*' : 'Cognome*'}
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder={lang === 'en' ? 'Company*' : 'Azienda*'}
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={lang === 'en' ? 'Message' : 'Messaggio'}
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
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