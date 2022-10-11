import APIService from "../api/api";
import { Container } from "typedi";
import Store from "../store/store";

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
  get store(): Store {
    if (!this._store) {
      this._store = new Store(this, this.config.store);
      Container.set("Store", this._store);
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
      Container.set("APIService", this._api);
    }
    return this._api;
  }
}

export default Services;
