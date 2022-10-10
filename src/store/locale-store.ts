import { observable, runInAction } from "mobx";
import ModelStore from "./model-store";

const LocalProps = {
  lang: observable,
};

/**
 * Состояние locale
 */
class LocaleStore extends ModelStore {
  initialProps = LocalProps;
  lang = "ru";

  async setLang(lang: string) {
    runInAction(() => (this.lang = lang));
  }
}

export default LocaleStore;
