import { Service } from "typedi";
import ModelStore from "../../store/model-store";

@Service("AuthService")
class AuthService extends ModelStore {
  auth(form: any) {
    console.log(form);
    return this.services.api.request({
      url: "/api/signin",
      method: "POST",
      body: JSON.stringify(form),
    });
  }
}

export default AuthService;
