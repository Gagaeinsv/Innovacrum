import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// index.js або App.js (додайте цей код для зміни рендерингу на основі орієнтації екрана)

// Додайте цей скрипт у ваш основний файл, щоб забезпечити коректну обробку орієнтації

// Функція для встановлення классу орієнтації на кореневому елементі
function setOrientationClass() {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  
  // Додаємо клас до body або #root
  document.body.classList.remove('portrait', 'landscape');
  document.body.classList.add(isLandscape ? 'landscape' : 'portrait');
  
  // Також можна додати до #root, якщо використовуєте React
  const root = document.getElementById('root');
  if (root) {
    root.classList.remove('portrait', 'landscape');
    root.classList.add(isLandscape ? 'landscape' : 'portrait');
  }
  
  // Логуємо зміну для відлагодження
  console.log('Орієнтація змінилася на: ' + (isLandscape ? 'ландшафтна' : 'портретна'));
}

// Встановлюємо початковий клас
document.addEventListener('DOMContentLoaded', setOrientationClass);

// Додаємо слухачі подій
window.addEventListener('resize', setOrientationClass);
window.addEventListener('orientationchange', setOrientationClass);

// Додаємо додаткові слухачі для надійності виявлення зміни орієнтації 
window.matchMedia("(orientation: portrait)").addEventListener('change', setOrientationClass);
window.matchMedia("(orientation: landscape)").addEventListener('change', setOrientationClass);