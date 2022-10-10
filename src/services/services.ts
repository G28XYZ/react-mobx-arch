import APIService from "../api/api";
import MainStore from "../store/main-store";

class Services {
  private _store: any;
  private _api: any;
  config: any;

  constructor(config: any) {
    this.config = config;
  }

  /**
   * Сервис Store
   * @returns {Store}
   */
  get store(): MainStore {
    if (!this._store) {
      this._store = new MainStore(this, this.config.store);
    }
    return this._store;
  }

  /**
   * Сервис АПИ
   * @returns {APIService}
   */
  get api(): APIService {
    if (!this._api) {
      this._api = new APIService(this.config.api);
    }
    return this._api;
  }
}

export default Services;
