import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './locales/it.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  //we tell i18next "here are your two languages"
  resources: {
    it: { translation: it },
    en: { translation: en },
  },
  //Italian is the default language when the app starts
  lng: 'it',
  //if a translation is missing in Italian, use English as backup
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;