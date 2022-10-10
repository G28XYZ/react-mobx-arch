import { makeAutoObservable } from "mobx";
import { makeLoggable } from "mobx-log";

class CounterStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
  }

  init = () => this;

  inc = () => this.value++;

  dec = () => this.value--;
}

export default CounterStore;
