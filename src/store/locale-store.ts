import { observable, runInAction } from "mobx";
import { Service } from "typedi";
import ModelStore from "./model-store";

const LocalProps = {
  lang: observable,
};

/**
 * Состояние locale
 */
@Service("LocaleStore")
export class LocaleStore extends ModelStore {
  initialProps = LocalProps;
  lang = "ru";

  async setLang(lang: string) {
    runInAction(() => (this.lang = lang));
  }
}
