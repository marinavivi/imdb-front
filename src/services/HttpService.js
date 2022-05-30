import axios from "axios";

class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: "http://127.0.0.1:8000/",
    });
  }

  request = (requestConfig) => {
    return this.client(requestConfig);
  };

  addRequestInterceptor = (callback) => {
    return this.client.interceptors.request.use(callback);
  };

  addResponseInterceptors = (successCallback, errorCallback) => {
    return this.client.interceptors.response.use(
      successCallback,
      errorCallback
    );
  };

  attachHeaders = (headers) => {
    Object.assign(this.client.defaults.headers, headers);
  };
}

class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  request = (requestConfig) => {
    return this.httpClient.request(requestConfig);
  };

  attachHeaders = (headers) => {
    this.httpClient.attachHeaders(headers);
  };

  addRequestInterceptor = (callback) => {
    return this.httpClient.addRequestInterceptor(callback);
  };

  addResponseInterceptors = (successCallback, errorCallback) => {
    return this.httpClient.addResponseInterceptors(
      successCallback,
      errorCallback
    );
  };
}

const httpService = new HttpService(new HttpClient());

export default httpService;
