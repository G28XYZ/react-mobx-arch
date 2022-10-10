import APIService from "../api/api";
import config from "./config";

class Services {
  constructor(config) {
    this.config = config;
  }

  /**
   * Сервис АПИ
   * @returns {APIService}
   */
  get api() {
    if (!this._api) {
      this._api = new APIService(this.config.api);
    }
    return this._api;
  }
}

const services = new Services(config);

export default services;
