import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import customPath from './customLanguageDetector';

const languageDetector = new LanguageDetector();

languageDetector.addDetector(customPath);

const options = {
    order: ['customPath', 'localStorage', 'querystring',  'navigator'],
    // reset of options
};


i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  .use(languageDetector)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false,
    detection: options,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;