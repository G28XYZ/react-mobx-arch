import config from "./config";
import * as m from "./exports";
import services from "./services";

const modules = m;

class MainStore {
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

    // Модули
    this.modules = {};
    for (const name of Object.keys(modules)) {
      // Экземпляр модуля. Передаём ему ссылку на store и название модуля.
      this.modules[name] = new modules[name](this.services);
      // По названию модуля устанавливается свойство с начальным состоянием от модуля
      this.state[name] = this.modules[name].init();
    }
  }

  get(name) {
    return this.modules[name];
  }
}

const mainStore = new MainStore({ config, services });

export default mainStore;
