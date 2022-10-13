import { Inject, Service } from "typedi";
import APIService from "../../../api/api";

interface IAuthService {
  auth(form: any): Promise<any>;
}
@Service("AuthService")
export class AuthService implements IAuthService {
  auth(form: any) {
    return this.apiService.request({
      url: "/api/signin",
      method: "POST",
      body: JSON.stringify(form),
    });
  }

  @Inject("APIService") private apiService: APIService;
}
