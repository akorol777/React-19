import { createContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '../locales/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'react19-language';

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Read language from localStorage or use English by default
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    console.log('🌍 Loaded language from localStorage:', saved || 'en (default)');
    return (saved === 'uk' || saved === 'en') ? saved : 'en';
  });

  // Save language to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    console.log('💾 Saved language to localStorage:', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    console.log('🔄 Changing language:', language, '→', lang);
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
