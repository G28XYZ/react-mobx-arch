import * as view from "./exports";

const modules: any = view;

class Store {
  // Модули
  modules: any = {};
  services: any;
  config: any;
  state: any;

  constructor(services = {}, config = {}) {
    // Менеджер сервисов
    this.services = services;
    this.config = {
      log: false,
      ...config,
    };
    // Состояние приложения (данные)
    this.state = {};
    for (const name of Object.keys(modules)) {
      // Экземпляр модуля. Передаём ему ссылку на store и название модуля.
      this.modules[name] = new modules[name](this, { name, ...(this.config.modules[name] || {}) });
      // По названию модуля устанавливается свойство с начальным состоянием от модуля
      this.state[name] = this.modules[name].initStore();
    }
  }

  get(name: string) {
    return this.modules[name];
  }

  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {Object}
   * @param [description] {String} Описание действия для логирования
   */
  setState(newState: any, description = "setState") {
    if (this.config.log) {
      console.group(
        `%c${"store.setState"} %c${description}`,
        `color: ${"#C733FF"}; font-weight: normal`,
        `color: ${"#3393FF "}; font-weight: bold`
      );
      console.log(`%c${"prev:"}`, `color: ${"#d77332"}`, this.state);
      console.log(`%c${"next:"}`, `color: ${"#2fa827"}`, newState);
      console.groupEnd();
    }
    this.state = newState;
  }
}

export default Store;
