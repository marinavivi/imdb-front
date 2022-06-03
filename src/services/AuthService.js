import httpService from "./HttpService";
import jwtDecode from "jwt-decode";
import { getItem, setItem } from "./LocalStorageService";
import { TOKEN, REFRESH } from "../constants/constants";

const ROUTES = {
  LOGIN: "login/",
  REGISTER: "register/",
  ME: "users/me/",
  REFRESH: "refresh/",
};

const METODS = {
  GET: "GET",
  POST: "POST",
};

class AuthService {
  constructor(httpService) {
    this.httpService = httpService;
    this.init();
  }

  init = () => {
    this.setAuthToken(this.getAccessToken());
    this.httpService.addRequestInterceptor(this.checkTokenExpiration);
    this.httpService.addResponseInterceptors();
  };

  getAccessToken = () => {
    return {
      token: getItem(TOKEN),
      refresh: getItem(REFRESH),
    };
  };

  setAuthToken = ({ token, refresh }) => {
    if (token) {
      setItem(TOKEN, token);
      setItem(REFRESH, refresh);

      this.httpService.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  refreshToken = async (refresh) => {
    const { data } = await this.httpService.request({
      url: ROUTES.REFRESH,
      method: METODS.POST,
      data: { refresh: refresh },
    });

    this.setAuthToken(data.access);

    return data;
  };

  login = async (loginData) => {
    const { data } = await this.httpService.request({
      url: ROUTES.LOGIN,
      method: METODS.POST,
      data: loginData,
    });

    this.setAuthToken({ token: data.access, refresh: data.refresh });

    return data.access;
  };

  register = async (data) => {
    await this.httpService.request({
      url: ROUTES.REGISTER,
      method: METODS.POST,
      data,
    });
  };

  fetchAuthenticatedUser = async () => {
    const response = await this.httpService.request({
      url: ROUTES.ME,
      method: METODS.GET,
    });

    return response.data;
  };

  checkTokenExpiration = async (request) => {
    if (request.url === ROUTES.REFRESH) {
      return request;
    }

    const { token, refresh } = this.getAccessToken();

    if (token && Date.now() / 1000 >= jwtDecode(token).exp) {
      const { access } = await this.refreshToken(refresh);
      request.headers.Authorization = `Bearer ${access}`;

      return request;
    }

    return request;
  };
}

const authService = new AuthService(httpService);

export default authService;
