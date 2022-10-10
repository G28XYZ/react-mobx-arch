import { makeAutoObservable, makeObservable, observable } from "mobx";
import { makeLoggable } from "mobx-log";

class ModelStore {
  constructor(services = {}) {
    this.services = services;
  }

  init() {
    makeObservable(this, { email: observable });
    makeLoggable(this);
    return this;
  }
}

export default ModelStore;
