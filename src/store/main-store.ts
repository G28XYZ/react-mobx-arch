import config from "../services/config";
import * as m from "./exports";
import services from "../services/services";

const modules: any = m;

class MainStore {
  // Модули
  modules: any = {};
  services: any;
  config: any;
  state: any;
  listeners: any;

  constructor({ services = {}, config = {} }) {
    // Менеджер сервисов
    this.services = services;
    this.config = {
      log: false,
      ...config,
    };
    // Состояние приложения (данные)
    this.state = {};
    // Слушатели изменений state
    this.listeners = [];

    for (const name of Object.keys(modules)) {
      // Экземпляр модуля. Передаём ему ссылку на store и название модуля.
      this.modules[name] = new modules[name](this.services);
      // По названию модуля устанавливается свойство с начальным состоянием от модуля
      this.state[name] = this.modules[name].init();
    }
  }

  get(name: string) {
    return this.modules[name];
  }
}

const mainStore = new MainStore({ config, services });

export default mainStore;
