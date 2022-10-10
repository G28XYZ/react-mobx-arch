import { makeAutoObservable, runInAction } from "mobx";
import { makeLoggable } from "mobx-log";

class RandomStore {
  catLink = "";
  waiting = false;

  constructor(services = {}) {
    this.services = services;
    makeAutoObservable(this);
    makeLoggable(this);
  }

  init() {
    this.getCat();
    setInterval(() => this.getCat(), 10000);
    return this;
  }

  async getCat() {
    this.waiting = true;
    try {
      const response = await this.services.api.request({ url: "/random/img/cat" });
      runInAction(() => {
        this.catLink = response.link;
      });
    } catch (e) {
      runInAction(() => {
        this.catLink = "Error response";
      });
    } finally {
      runInAction(() => {
        this.waiting = false;
      });
    }
  }
}

export default RandomStore;
