import { observable, runInAction } from "mobx";
import ModelStore from "./model-store";

export const AuthProps = {
  waiting: observable,
  email: observable,
  password: observable,
  token: observable,
};

// Или AuthView
class AuthStore extends ModelStore {
  initialProps = AuthProps;
  waiting = false;
  email = "";
  password = "";
  token = "";

  setForm(name: string, value: string) {
    runInAction(() => {
      name === "email" && (this.email = value);
      name === "password" && (this.password = value);
    });
  }

  /**
   * Авторизация
   */
  async auth() {
    runInAction(() => (this.waiting = true));
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
    runInAction(() => {
      this.password = "";
      this.email = "";
    });
  }
}

export default AuthStore;
