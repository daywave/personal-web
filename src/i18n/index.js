import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Idioma por defecto
  fallbackLocale: 'es', // Idioma de respaldo
  messages: { en, es }, // Traducciones
});

export default i18n;