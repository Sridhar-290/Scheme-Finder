import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LangCode, translations, TranslationKeys } from '@/lib/translations';

type LanguageContextType = {
  language: LangCode;
  setLanguage: (lang: LangCode) => void;
  t: (key: keyof TranslationKeys) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LangCode>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as LangCode;
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: LangCode) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
