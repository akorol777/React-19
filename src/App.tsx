import { use } from 'react';
import { AppProvider, AppContext } from './contexts/AppContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ActionFormExample } from './components/ActionFormExample';
import { OptimisticExample } from './components/OptimisticExample';
import { UseHookExample } from './components/UseHookExample';
import { FormStatusExample } from './components/FormStatusExample';
import { RefExample } from './components/RefExample';
import { MetadataExample } from './components/MetadataExample';
import { FinalFormComparison } from './components/FinalFormComparison';

// Компонент що рендерить відповідний приклад на основі поточного вигляду
const MainContent = () => {
  // React 19: використовуємо use() для читання контексту
  const context = use(AppContext);
  if (!context) throw new Error('AppContext не знайдено');

  const { currentView } = context;

  // Рендеримо відповідний компонент
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'actions':
        return <ActionFormExample />;
      case 'optimistic':
        return <OptimisticExample />;
      case 'use-hook':
        return <UseHookExample />;
      case 'form-status':
        return <FormStatusExample />;
      case 'ref':
        return <RefExample />;
      case 'metadata':
        return <MetadataExample />;
      case 'final-form':
        return <FinalFormComparison />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={styles.content}>
      {renderView()}
    </div>
  );
};

// Головний компонент додатку
const App = () => {
  console.log('🚀 React 19 Demo App запущено!');

  return (
    // React 19: Можна встановлювати meta tags прямо тут!
    <>
      <title>React 19 - Демо нових фіч</title>
      <meta name="description" content="Інтерактивна демонстрація нових можливостей React 19" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <AppProvider>
        <div style={styles.app}>
          {/* Навігація */}
          <Navigation />
          
          {/* Основний контент */}
          <MainContent />
        </div>
      </AppProvider>
    </>
  );
};

// Стилі
const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  content: {
    paddingBottom: '40px',
  },
} as const;

export default App;
