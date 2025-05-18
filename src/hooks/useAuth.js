// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import supabase from '../supabase/config';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Перевірка поточного сеансу при завантаженні
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Помилка отримання сеансу:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Підписка на зміни статусу аутентифікації
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    // Очищення підписки при демонтажі компонента
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
};

export default useAuth;