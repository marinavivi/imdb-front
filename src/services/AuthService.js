import httpService from "./HttpService";

const ROUTES = {
  LOGIN: "login/",
  REGISTER: "register/",
  ME: "users/me/",
};

class AuthService {
  constructor(httpService) {
    this.httpService = httpService;
    this.init();
  }

  init = () => {
    this.setAuthToken(this.getAccessToken());
    this.httpService.addRequestInterceptor();
    this.httpService.addResponseInterceptors();
  };

  getAccessToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };

  setAuthToken = (token) => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));

      this.httpService.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  login = async (data) => {
    const { access: token } = await this.httpService.request({
      url: ROUTES.LOGIN,
      method: "POST",
      data,
    });

    this.setAuthToken(token);

    return token;
  };

  register = async (data) => {
    await this.httpService.request({
      url: ROUTES.REGISTER,
      method: "POST",
      data,
    });
  };

  fetchAuthenticatedUser = () => {
    return this.httpService.request({
      url: ROUTES.ME,
      method: "GET",
    });
  };
}

const authService = new AuthService(httpService);

export default authService;
