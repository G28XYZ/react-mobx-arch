import { makeAutoObservable } from "mobx";
import { makeLoggable } from "mobx-log";

class ModelStore {
  constructor(store = {}, config = {}, services = {}) {
    this.store = store;
    this.config = config;
    this.services = services;
  }

  init(store) {
    makeAutoObservable(store);
    this.config.store.log && makeLoggable(store);
    console.log(store);
    return this;
  }
}

export default ModelStore;
