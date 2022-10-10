import { locales } from "./locales";

/**
 * Перевод фразу по словарю
 * @param lang {String} Код языка
 * @returns {String} Переведенный текст
 */
export default function translate(lang) {
  return locales[lang];
}
