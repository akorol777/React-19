import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('LanguageSwitcher must be used within LanguageProvider');
  }

  const { language, setLanguage } = context;

  const handleToggle = () => {
    setLanguage(language === 'en' ? 'uk' : 'en');
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={handleToggle}
        className={styles.toggleButton}
        aria-label="Switch language"
      >
        <span className={`${styles.option} ${language === 'en' ? styles.active : ''}`}>
          🇬🇧 EN
        </span>
        <span className={styles.separator}>/</span>
        <span className={`${styles.option} ${language === 'uk' ? styles.active : ''}`}>
          🇺🇦 UA
        </span>
      </button>
    </div>
  );
};

