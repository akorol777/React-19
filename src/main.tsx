import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';

// React 19: createRoot is now standard (was in React 18)
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found! Check index.html');
}

// Create root and render the app
const root = createRoot(rootElement);

// Logging for demonstration
console.log('🎉 Welcome to React 19 Demo!');
console.log('📚 This project demonstrates new React 19 features');
console.log('💡 Open DevTools Console for detailed logs');
console.log('---');

root.render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
