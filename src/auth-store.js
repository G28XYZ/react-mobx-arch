import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

class AuthStore {
  notes = [];
  waiting = false;
  email = "";
  password = "";
  token = "";

  constructor(services = {}) {
    this.services = services;
    makeAutoObservable(this);
  }

  init() {
    console.log("init auth");
    return this;
  }

  setForm(name, value) {
    name === "email" && (this.email = value);
    name === "password" && (this.password = value);
    console.log(name, value);
  }

  /**
   * Авторизация
   */
  async auth() {
    this.waiting = true;

    try {
      const response = await this.services.api.request({
        url: "/signin",
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
      });
      console.log(response);
      this.token = response.token;
      this.waiting = false;
    } catch (e) {
      this.waiting = false;
    }
  }

  clearForm() {
    this.password = "";
    this.email = "";
  }
}

export default AuthStore;
