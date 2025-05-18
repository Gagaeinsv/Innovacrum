// Оновлений файл - src/hooks/useOrientation.js
import { useState, useEffect } from 'react';

/**
 * Хук для визначення орієнтації екрана з додатковою логікою
 * для більш точного визначення ландшафтного режиму на мобільних пристроях
 */
const useOrientation = () => {
  // Функція для визначення поточної орієнтації з додатковими параметрами
  const getOrientation = () => {
    // Додаємо перевірку на основі співвідношення сторін
    const aspectRatio = window.innerWidth / window.innerHeight;
    
    // Мобільні пристрої часто мають іншу логіку визначення орієнтації
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Використовуємо більш точну логіку для мобільних пристроїв
    if (isMobileDevice) {
      // Для мобільних пристроїв перевіряємо орієнтацію через window.orientation якщо доступно
      if (window.orientation !== undefined) {
        return window.orientation === 90 || window.orientation === -90;
      }
      
      // Інакше використовуємо співвідношення сторін
      return aspectRatio > 1.0;
    }
    
    // Для десктопів використовуємо стандартну логіку
    return window.innerWidth > window.innerHeight;
  };

  // Встановлюємо початковий стан
  const [isLandscape, setIsLandscape] = useState(getOrientation());

  useEffect(() => {
    // Функція для оновлення стану орієнтації з затримкою
    const updateOrientation = () => {
      // Невелика затримка для коректної обробки зміни орієнтації
      setTimeout(() => {
        setIsLandscape(getOrientation());
      }, 100);
    };

    // Слухаємо події зміни розміру вікна
    window.addEventListener('resize', updateOrientation);
    
    // Слухаємо події зміни орієнтації для мобільних пристроїв
    window.addEventListener('orientationchange', updateOrientation);

    // Викликаємо один раз для ініціалізації
    updateOrientation();

    // Прибираємо слухачі при розмонтуванні компонента
    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return { isLandscape };
};

export default useOrientation;