import { observable, runInAction } from "mobx";
import { Inject } from "typedi";
import ModelStore from "../../store/model-store";
import AuthService from "./service";

interface IAuthService {
  auth(form: any): Promise<any>;
}

interface IAuthProps {
  waiting: boolean;
  email: string;
  password: string;
  token: string;
}
interface IAuthView extends IAuthProps {
  auth(): Promise<void>;
  clearForm(): void;
}

export const AuthProps = {
  waiting: observable,
  email: observable,
  password: observable,
  token: observable,
};

class AuthView extends ModelStore implements IAuthView {
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
    console.log(this.authService);
    runInAction(() => (this.waiting = true));
    try {
      const response = await this.authService.auth({ email: this.email, password: this.password });
      runInAction(() => {
        this.token = response.token;
      });
    } catch (e) {
      console.log(e);
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
  @Inject("AuthService") private authService: AuthService;
}

export default AuthView;
