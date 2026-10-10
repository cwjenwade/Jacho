"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'zh';

type NavMode = 'both' | 'single';

type ContextValue = {
  language: Locale;
  setLanguage: (l: Locale) => void;
  navMode: NavMode;
  setNavMode: (m: NavMode) => void;
};

const LanguageContext = createContext<ContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>('zh');
  const [navMode, setNavMode] = useState<NavMode>('both');

  // load persisted preferences on mount
  useEffect(() => {
    const initializePreferences = () => {
      try {
        const storedLang = localStorage.getItem('wade:language') as Locale | null;
        const storedNav = localStorage.getItem('wade:navMode') as NavMode | null;
        
        if (storedLang !== null) {
          const validLangs: Locale[] = ['en', 'zh'];
          if (validLangs.includes(storedLang)) {
            setLanguage(storedLang);
          }
        }
        
        if (storedNav !== null) {
          const validModes: NavMode[] = ['both', 'single'];
          if (validModes.includes(storedNav)) {
            setNavMode(storedNav);
          }
        }
      } catch {
        // ignore (localStorage may be unavailable)
      }
    };
    
    initializePreferences();
  }, []);

  // persist preferences when they change
  useEffect(() => {
    try {
      localStorage.setItem('wade:language', language);
    } catch {}
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('wade:navMode', navMode);
    } catch {}
  }, [navMode]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, navMode, setNavMode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
