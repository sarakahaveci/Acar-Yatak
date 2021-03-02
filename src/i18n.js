import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en'
  });


const resources = {
  en: {
    translations: {
      "To get started, edit <1>src/App.js</1> and save to reload.":
        "To get started, edit <1>src/App.js</1> and save to reload.",
      "Welcome to React": "Welcome to React and react-i18next",
      welcome: "Hello <br/> <strong>World</strong>"
    }
  },
  ar: {
    translation: {
      "header": "اهلا وسهلا بكم في موقع اجار للمفروشات"
    }
  },
  tur : {
    translation: {
      "header": "hoşgeldiniz"
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'tur',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;