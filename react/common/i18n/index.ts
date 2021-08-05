import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {findBestAvailableLanguage} from 'react-native-localize';
import {format as dateFormat} from 'date-fns';
import {supportedLngs, Language, translations} from './locales';

const resources = Object.fromEntries(
  supportedLngs.map((lng: Language) => [lng, {translation: translations[lng]}]),
);

i18n
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    // async: true,
    init: () => {},
    detect: () => {
      const lang = findBestAvailableLanguage(supportedLngs);
      return lang?.languageTag;
    },
    cacheUserLanguage: () => {},
  })
  .init({
    fallbackLng: 'en',
    // lng: 'en',
    supportedLngs,
    resources,
    interpolation: {
      format: function (value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        if (value instanceof Date && format) return dateFormat(value, format);
        return value;
      },
    },
  });

export default i18n;
