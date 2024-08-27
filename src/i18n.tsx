import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const languageDetector = new LanguageDetector();
const domainLocaleMap: Record<string, string>  = {
  'localhost': 'en',
  'lunatech.com': 'en',
  'lunatech.fr': 'fr'
};

languageDetector.addDetector({
    name: 'customPath',
    lookup() {
        let locale = "en";
        // In the browser, get the hostname from window.location.
        if (typeof window !== 'undefined' ) {
          locale = domainLocaleMap[window.location.hostname];
        } 
        // On the server, get the hostname from the request headers.
        // We use the host header which is available on IncomingMessage.
        // https://nodejs.org/api/http.html#http_class_http_incomingmessage
        // But the host header may include the port so first we take that off, if it exists.
        else {
          const hostname = req.headers.host?.split(':')[0];
          locale = domainLocaleMap[hostname];
        }
        return locale;
    }
});

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