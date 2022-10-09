import { makeAutoObservable } from "mobx";

/**
 * Состояние товара
 */
class LocaleStore {
  lang = "ru";

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Начальное состояние
   * @return {Object}
   */
  init() {
    console.log("init locale");
    return this;
  }

  async setLang(lang) {
    this.lang = lang;
  }
}

export default LocaleStore;
