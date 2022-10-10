import { makeAutoObservable } from "mobx";
import { makeLoggable } from "mobx-log";

/**
 * Состояние locale
 */
class LocaleStore {
  lang = "ru";

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
  }

  /**
   * Начальное состояние
   * @return {Object}
   */
  init() {
    return this;
  }

  async setLang(lang) {
    this.lang = lang;
  }
}

export default LocaleStore;
