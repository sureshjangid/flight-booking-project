
import axios from 'axios';
import { HOST_URL } from './api'

const requestInterceptor = (config) => {
    return {
        ...config,
        headers: {
            ...config.headers

        },
    }
};

class HttpClient {
    constructor() {
        const options = { baseURL: HOST_URL };
        const instance = axios.create(options);
        instance.interceptors.request.use(requestInterceptor);
        axios.interceptors.response.use(
            function (response) {
                return response;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
        return instance;
    }
}
export default HttpClient;
