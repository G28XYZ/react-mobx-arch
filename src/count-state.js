import { makeAutoObservable } from "mobx";

class CounterStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    console.log("init counter");
    return this;
  }

  inc = () => {
    console.log(this.value);
    this.value++;
  };

  dec = () => {
    console.log(this.value);
    this.value--;
  };
}

export default CounterStore;
