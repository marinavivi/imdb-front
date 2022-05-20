import httpService from './HttpService';

const ROUTES = {
    LOGIN: '/auth/login',
    ME: '/auth/me',
    REGISTER: '/auth/register',
}

class AuthService {
    constructor(httpService) {
        this.httpService = httpService;
        this.init();
    }
    init = () => {
        this.setAuthToken(this.getAccessToken());
        this.httpService.addRequestInterceptor(this.checkTokenExpiration);
        this.httpService.addResponseInterceptors (
            this.handleSuccessResponse,
            this.handleErrorResponse
        );
    };
    getAccessToken = () => {
        return localStorage.getItem('token')
    }
    setAuthToken = (token) => {
        if(token) {
            localStorage.setItem('token', token);

            this.httpService.attachHeaders({
                Authorization: `Bearer ${token}`,
            })
        }
    }
    login = async (data) => {
        const { accesToken: token } = await this.httpService.request({
            url: ROUTES.LOGIN,
            method: 'POST',
            data,
        });
        this.setAuthToken(token);

        return token;
    }

    fetchAuthenticatedUser = () => {
        return this.httpService.request({
          url: ROUTES.ME,
          method: 'GET',
        });
      };

    register = async (data) => {
        const { accesToken: token } = await this.httpService.request({
            url: ROUTES.REGISTER,
            method: 'POST',
            data,
        });
        this.setAuthToken(token);

        return token;
    }

    getUserFromUrl = async () => {
        return this.httpService.request({
            url: '/todos/1',
            method: 'GET',
        })
    }
    
    handleSuccessResponse = (response) => {
        return response;
    }

    handleErrorResponse = (error) => {
        try {
          const { status } = error.response;
    
          /* eslint-disable default-case */
          switch (status) {
            case 401:
              this.destroySession();
              break;
          }
    
          return Promise.reject(error);
        } catch (e) {
          return Promise.reject(error);
        }
      };

}

const authService = new AuthService(httpService);

export default authService;

