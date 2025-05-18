// src/components/admin/Login.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import supabase from '../../supabase/config';
import './Admin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Отримуємо мову з URL або встановлюємо за замовчуванням
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('lang') || 'en';
  
  // Тексти для локалізації
  const texts = {
    en: {
      title: 'Admin Panel',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      submitButton: 'Log In',
      loading: 'Loading...',
      accessError: 'Access allowed only for administrator.'
    },
    it: {
      title: 'Pannello di Amministrazione',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      submitButton: 'Accedi',
      loading: 'Caricamento...',
      accessError: 'Accesso consentito solo per amministratore.'
    }
  };
  
  // Використовуємо тексти поточної мови або англійської за замовчуванням
  const t = texts[lang] || texts.en;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Перевірка, чи це email Matteo
      if (email !== 'shermatte@tuta.io') {
        throw new Error(t.accessError);
      }
      
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Помилка входу:', error);
      setError(
        error.message || 'Помилка входу. Перевірте ваші дані та спробуйте знову.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>{t.title}</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">{t.emailLabel}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t.passwordLabel}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? t.loading : t.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;