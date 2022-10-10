import { makeObservable } from "mobx";
import { makeLoggable } from "mobx-log";

class ModelStore {
  store: any;
  config: any;
  services: any;
  initialProps: any;

  constructor(store: any, config: any) {
    this.store = store;
    this.config = config;
    this.services = store?.services;
  }

  initStore() {
    makeObservable(this, this.initialProps);
    this.store.config.log && makeLoggable(this);
    return this.getProps();
  }

  getProps() {
    return Object.keys(this.initialProps).reduce((props: any, key: string) => ({ ...props, [key]: this[key as keyof this] }), {});
  }

  getState() {
    return this.store.getState()[this.config.name];
  }

  setState(newState: any, description = "setState") {
    this.store.setState(
      {
        ...this.store.getState(),
        [this.config.name]: newState,
      },
      description
    );
  }
}

export default ModelStore;
