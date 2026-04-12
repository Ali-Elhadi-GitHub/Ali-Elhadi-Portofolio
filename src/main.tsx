import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './hooks/useLanguage';
import App from './App.tsx';
import './index.css';

// Set initial direction to RTL for Arabic default
if (typeof document !== 'undefined') {
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en';
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
