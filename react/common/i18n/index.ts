import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';

const resources = {
  en: {translation: en},
  fr: {translation: fr},
  de: {translation: de},
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  supportedLngs: ['en', 'fr', 'de'],
  resources,
});

export default i18n;
