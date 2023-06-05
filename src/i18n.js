import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import trTranslation from './locales/tr.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    tr: {
        translation: trTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Varsayılan dilinizi burada belirleyebilirsiniz
        fallbackLng: 'en', // Varsayılan dili belirtmek için
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
