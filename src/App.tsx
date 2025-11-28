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
import { CompilerExample } from './components/CompilerExample';
import styles from './App.module.scss';

// Component that renders the appropriate example based on current view
const MainContent = () => {
  // React 19: use use() to read context
  const context = use(AppContext);
  if (!context) throw new Error('AppContext not found');

  const { currentView } = context;

  // Render appropriate component
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
      case 'compiler':
        return <CompilerExample />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={styles.content}>
      {renderView()}
    </div>
  );
};

// Main app component
const App = () => {
  console.log('🚀 React 19 Demo App started!');

  return (
    // React 19: Can set meta tags directly here!
    <>
      <title>React 19 - New Features Demo</title>
      <meta name="description" content="Interactive demonstration of new React 19 features" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <AppProvider>
        <div className={styles.app}>
          {/* Navigation */}
          <Navigation />
          
          {/* Main content */}
          <MainContent />
        </div>
      </AppProvider>
    </>
  );
};

export default App;
