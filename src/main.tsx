import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// React 19: createRoot вже є стандартом (був в React 18)
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element не знайдено! Перевірте index.html');
}

// Створюємо root та рендеримо додаток
const root = createRoot(rootElement);

// Логування для демонстрації
console.log('🎉 Ласкаво просимо до React 19 Demo!');
console.log('📚 Цей проект демонструє нові фічі React 19');
console.log('💡 Відкрийте DevTools Console для детальних логів');
console.log('---');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
