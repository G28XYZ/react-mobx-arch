import { makeAutoObservable, runInAction } from "mobx";
import { makeLoggable } from "mobx-log";

// Или AuthView
class AuthStore {
  notes = [];
  waiting = false;
  email = "";
  password = "";
  token = "";

  constructor(services = {}) {
    this.services = services;
    makeAutoObservable(this);
    makeLoggable(this);
  }

  init() {
    return this;
  }

  setForm(name, value) {
    name === "email" && (this.email = value);
    name === "password" && (this.password = value);
  }

  /**
   * Авторизация
   */
  async auth() {
    this.waiting = true;
    try {
      const response = await this.services.api.request({
        url: "/api/signin",
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
      });
      runInAction(() => {
        this.token = response.token;
      });
    } catch (e) {
      runInAction(() => {
        this.token = "Error";
      });
    } finally {
      runInAction(() => {
        this.waiting = false;
      });
    }
  }

  clearForm() {
    this.password = "";
    this.email = "";
  }
}

export default AuthStore;
