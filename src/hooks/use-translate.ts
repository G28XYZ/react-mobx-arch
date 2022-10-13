import { useCallback } from "react";
import { useStore } from "./use-store";
import translate from "../utils/translate";

/**
 * Хук возвращает функция для локализации текстов
 * Связан с кодом языка из внешнего состояния
 */
export default function useTranslate() {
  const storeLocale = useStore().get("LocaleStore");

  // Функция для смены локаль
  const setLanguage = useCallback((lang: string) => storeLocale.setLang(lang), []);
  // Текущий установленный язык
  const language = storeLocale.lang;

  // Функция для локализации текстов
  const lang = useCallback(() => {
    return translate(language);
  }, [language]);

  return { language, setLanguage, lang };
}
