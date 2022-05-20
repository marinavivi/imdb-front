import axios from 'axios';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

class HttpClient {
    constructor () {
        this.client = axios.create ({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })
    }

    request = (requestConfig) => {
        return this.client(requestConfig)
    }
    
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
        Object.assign(this.client.defaults.headers, headers)
    }
}

class HttpService {
    constructor (httpClient) {
        this.httpClient = httpClient;
        this.init();
    }
    init = () => {
        this.addResponseInterceptors(
            (response) => mapKeys(response.data, (_, key) => camelCase(key)),
            (error) => Promise.reject(error.response)
          );
    }

    request = (requestConfig) => {
        return this.httpClient.request(requestConfig);
    }

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