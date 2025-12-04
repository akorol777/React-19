import { use } from 'react';
import { AppContext } from '../contexts/AppContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  // React 19: use use() to read context (can even do it conditionally!)
  const appContext = use(AppContext);
  const langContext = use(LanguageContext);
  
  // Null check
  if (!appContext) throw new Error('AppContext not found');
  if (!langContext) throw new Error('LanguageContext not found');
  
  const { currentView, setCurrentView } = appContext;
  const { t } = langContext;

  // List of all examples with translations
  const examples = [
    { id: 'home', title: `🏠 ${t.nav.home}`, icon: '🏠' },
    { id: 'actions', title: `⚡ ${t.nav.actions}`, icon: '⚡' },
    { id: 'optimistic', title: `🚀 ${t.nav.optimistic}`, icon: '🚀' },
    { id: 'use-hook', title: `🎣 ${t.nav.useHook}`, icon: '🎣' },
    { id: 'form-status', title: `📊 ${t.nav.formStatus}`, icon: '📊' },
    { id: 'ref', title: `🎯 ${t.nav.ref}`, icon: '🎯' },
    { id: 'metadata', title: `📄 ${t.nav.metadata}`, icon: '📄' },
    { id: 'compiler', title: `🤖 ${t.nav.compiler}`, icon: '🤖' },
    { id: 'final-form', title: `📋 ${t.nav.finalFormComparison}`, icon: '📋' },
    { id: 'breaking-changes', title: `🔴 ${t.nav.breakingChanges}`, icon: '🔴' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>React 19 🚀</h1>
          <p className={styles.subtitle}>{t.home.subtitle}</p>
        </div>
        <LanguageSwitcher />
      </div>
      
      <div className={styles.menu}>
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setCurrentView(example.id)}
            className={`${styles.button} ${currentView === example.id ? styles.buttonActive : ''}`}
          >
            <div className={styles.buttonTitle}>{example.title}</div>
          </button>
        ))}
      </div>
    </nav>
  );
};

